import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLeadsContext } from "../hooks/useLeadsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import LeadDetails from "../leadgen components/LeadDetails"
import LeadAnswers from "../leadgen components/LeadAnswers"
import Navbar from "../leadgen components/Navbar"
import LeadSidebar from "../leadgen components/LeadSidebar"
const Home = () => {
  const { leads, dispatch } = useLeadsContext()
  const { userLG } = useAuthContext()
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOption, setFilterOption] = useState("all")
  const [sortCriteria, setSortCriteria] = useState("createdAt")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch('/api/leads', {
        headers: {'Authorization': `Bearer ${userLG.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_LEADS', payload: json})
      }
    };

    fetchLeads()
  }, [dispatch, userLG])

  // Filter and sort the leads based on search query, filter option, and sort criteria
  const filteredAndSortedLeads = leads ? leads.filter((lead) => {
      // Apply search query filter
      if (searchQuery && !lead.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }
      // Apply filter option
      if (filterOption !== 'all' && lead.type !== filterOption) {
        return false
      }
      return true
    }).sort((lead1, lead2) => {
      // Sort leads based on sort criteria
      if (sortCriteria === 'createdAt') {
        return new Date(lead2.createdAt) - new Date(lead1.createdAt)
      } else {
        return lead1[sortCriteria].localeCompare(lead2[sortCriteria])
      }
    }) : []

  // Pagination
  const leadsPerPage = 10
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(filteredAndSortedLeads.length / leadsPerPage); i++) {
    pageNumbers.push(i)
  }

  const indexOfLastLead = currentPage * leadsPerPage
  const indexOfFirstLead = indexOfLastLead - leadsPerPage
  const currentLeads = filteredAndSortedLeads.slice(indexOfFirstLead, indexOfLastLead)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value)
  }

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value)
  }

  // Calculate total counts for each lead type
  const totalCounts = {}
  filteredAndSortedLeads.forEach(lead => {
    if (!totalCounts[lead.type]) {
      totalCounts[lead.type] = 1
    } else {
      totalCounts[lead.type]++
    }
  })

  return (
    <div className="home">
      <div><Navbar/></div>
      <div><LeadSidebar/></div>
      <div className="home-title">List of Leads</div>
      <div className="filter">
      {/* <Link to={"/add"} className="add-button">Add Lead</Link> */}
      <select value={filterOption} onChange={handleFilterChange} className="filter-sort">
          <option value="all">All Types</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Boutiques">Boutiques</option>
          <option value="Salon">Salon</option>
          <option value="Spa">Spa</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Hotel">Hotel</option>
          <option value="Gym">Gym</option>
          <option value="Automotive">Automotive</option>
          <option value="cafe">Cafe</option>
          <option value="Brewery">Brewery</option>
          <option value="Pet Shops">Pet Shops</option>
          <option value="Laundry">Laundry</option>
          <option value="Clinic">Clinic</option>
        </select>

        <select value={sortCriteria} onChange={handleSortChange} className="filter-sort2">
          <option value="createdAt">Newest First</option>
          <option value="name">Name A-Z</option>
          <option value="type">Type A-Z</option>
          </select></div>

      <div className="search">
      <table border={0} cellSpacing={0}>
      <thead>
        <tr>
        <th><input
          type="text"
          placeholder="Search by name.."
          value={searchQuery}
          onChange={handleSearchChange}
        /></th>

        {/* Show current page and total pages */}
        <th><p>Page {currentPage} of {pageNumbers.length}</p></th>
        </tr>
        </thead>
        </table>
        </div>
          
        <div className="leads">
        <LeadDetails />
          {currentLeads.map((lead) =>(
            <LeadAnswers key={lead._id} lead={lead} />
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="pagination">
          <button
            className="prev"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          ))}

          <button
            className="next"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentLeads.length < leadsPerPage}
          >
            Next
          </button>
        </div>

         {/* Total number of leads */}
         <div className="totalform">
         <form className="total-leads-container">
          <div className="total">Total Leads:</div>
          <div className="total-leads-number">{filteredAndSortedLeads.length}</div>
        </form></div>

        {/* Total counts for each lead type */}
        <div>
          <p>Total Counts for Each Type:</p>
          {Object.keys(totalCounts).map(type => (
            <p key={type}>{type}: {totalCounts[type]}</p>
          ))}
        </div>
      </div>
    )
  }

export default Home