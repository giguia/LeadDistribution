import { Link } from 'react-router-dom'
import { useLogoutLG } from '../hooks/useLogoutLG'
import { useAuthContext } from '../hooks/useAuthContext'

const LeadSidebar = () => {
  const { logoutLG } = useLogoutLG()
  const { userLG } = useAuthContext()


  const handleClick = () => {
    logoutLG()
  }

  return (
    <header>
    <div id="mySidenav" class="sidenav">
		<p class="logo"><span>M</span>-SoftTech</p>
    <Link to="/add" className="icon-a"> <i className="fa fa-plus-square"></i> Add New Lead</Link>

    <Link to="/LeadsList" className="icon-a"> <i className="fa fa-ticket icons"></i> Leads List</Link>
    <Link to="#" className="icon-a"> <i className="fa fa-users icons"></i> Users</Link>
	  <a href="#"class="icon-a"><i class="fa fa-shopping-bag icons"></i>   Orders</a>
	  <a href="#"class="icon-a"><i class="fa fa-tasks icons"></i>   Inventory</a>
	  <a href="#"class="icon-a"><i class="fa fa-user icons"></i>   Accounts</a>
      <Link to={`/viewuser/${userLG._id}`} className="icon-a">
      <i className="fa fa-user icons"></i> Profile
    </Link> 


    {/* <Link to={`/viewuser/${userLG._id}`} className="icon-a">
      <i className="fa fa-user icons"></i> Profile
    </Link> 


	  <a href="#"class="icon-a"><i class="fa fa-list-alt icons"></i>   Signout</a>
      <button onClick={handleClick}><i className="fa-solid fa-right-from-bracket"></i>Log Out</button> */}

	</div>
    
      
    </header>
  )
}

export default LeadSidebar