import { Link } from 'react-router-dom'
import { useLogoutLG } from '../hooks/useLogoutLG'
import { useAuthContext } from '../hooks/useAuthContext'

const AdminSidebar = () => {
  const { logoutLG } = useLogoutLG()
  const { userLG } = useAuthContext()


  const handleClick = () => {
    logoutLG()
  }

  return (
    <header>
    <div id="mySidenav" class="sidenav">
		{/* <p class="logo"><img src={process.env.PUBLIC_URL + '/chromagen.png'} alt="Chromagen Logo" className="chromagens" /></p> */}
    <Link to="/" className="icon-a"> <i className="fa fa-dashboard icons"></i> Dashboard</Link>

    <Link to="/AdminLeads" className="icon-a"> <i className="fa fa-ticket icons"></i> Leads</Link>
    <Link to="/AdminUsers" className="icon-a"> <i className="fa fa-users icons"></i> Users</Link>
    <Link to="AdminProfile" className="icon-a"> <i className="fa fa-users icons"></i> Profileee</Link>

	  <a href="/AdminDash"class="icon-a"><i class="fa fa-shopping-bag icons"></i>   Orders</a>
	  <a href="/AdminProfile"class="icon-a"><i class="fa fa-tasks icons"></i>   Profileee</a>
    <Link to={`/viewuser/${userLG._id}`} className="icon-a">
      <i className="fa fa-user icons"></i> Profile
    </Link> 
    <a href="#" className="icon-a" onClick={handleClick}><i className="fa fa-sign-out"></i> Sign Out</a>

   <div className="bottom">
   <span style={{color: userLG.isActive ? 'red' : 'green'}}> &#9679; </span>

    <p style={{display: 'inline-block', verticalAlign: 'middle'}}>Gianelle Esguerra</p>
    {/* <p>{userlg.name}</p> */}
  </div>   

	</div>
  
    
    </header>
  )
}

export default AdminSidebar