import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { useUsersContext } from "../hooks/useUsersContext"
import AdminSidebar from '../admin components/AdminSidebar'

// Function to shorten ObjectId
const objectIdToShortId = (objectId) => {
  const hexString = objectId.toString()
  return hexString.substring(16, 26)
}

const ViewUserInfo = () => {
  const { id } = useParams()
  const { userlgs, dispatch } = useUsersContext()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/userLG/')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_USERS', payload: json})
      }
    }

    fetchUsers()
  }, [dispatch])
  
  // Find the userlg with the specified ID
  const userlg = userlgs.find(userlg => userlg._id === id)

  if (!userlg) {
    return <div>Loading...</div>
  }
  
    return (
        <div className="ViewForm">
        <form className="view">
        <AdminSidebar/>
        <Link to={"/"} className="back"><i className="fa-solid fa-arrow-left"></i></Link>
        <div className="view-details">
          <h4>{userlg.name}</h4>
          <p><strong>Role: </strong>{userlg.role}</p>
          <p><strong>Employee ID: </strong>{objectIdToShortId(userlg._id)}</p>
          <p><strong>Birthday: </strong>{userlg.birthday}</p>
          <p><strong>Phone Number: </strong>{userlg.number}</p>
          <p><strong>Email: </strong>{userlg.email}</p>
          <p><strong>Address: </strong>{userlg.homeaddress}</p>
          <p><strong>Gender: </strong>{userlg.gender}</p>
          <Link to={`/useredit/${userlg._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
          </div>
        </form>
        </div>
    )
  }
  
  export default ViewUserInfo