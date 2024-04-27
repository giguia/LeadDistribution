import { useEffect } from "react"
import { useUsersContext } from "../hooks/useUsersContext"

// components
import AllUserInfo from "../user components/AllUserInfo"
import AdminTableHeader from "../admin components/AdminTableHeader"
const UserHome = () => {
  const { userlgs, dispatch } = useUsersContext()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/userLG')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_USERS', payload: json})
      }
    }

    fetchUsers()
  }, [dispatch])

    return (
      <div className="home">
      <div className="home-title">Welcome!</div>
        <AdminTableHeader/>
        <div className="leads">
          {userlgs && userlgs.map((userlg) =>(
            <AllUserInfo key={userlg._id} userlg={userlg} />
            
          ))}
        </div>
      </div>
    )
  }
  
  export default UserHome