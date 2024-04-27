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
		<p class="logo"><span>M</span>-SoftTech</p>
    <Link to="/" className="icon-a"> <i className="fa fa-dashboard icons"></i> Dashboard</Link>

    <Link to="/AdminLeads" className="icon-a"> <i className="fa fa-ticket icons"></i> Leads</Link>
    <Link to="/userhome" className="icon-a"> <i className="fa fa-users icons"></i> Users</Link>
	  <a href="#"class="icon-a"><i class="fa fa-shopping-bag icons"></i>   Orders</a>
	  <a href="#"class="icon-a"><i class="fa fa-tasks icons"></i>   Inventory</a>
	  <a href="#"class="icon-a"><i class="fa fa-user icons"></i>   Accounts</a>


    <Link to={`/viewuser/${userLG._id}`} className="icon-a">
      <i className="fa fa-user icons"></i> Profile
    </Link> 


	  <a href="#"class="icon-a"><i class="fa fa-list-alt icons"></i>   Signout</a>
      <button onClick={handleClick}><i className="fa-solid fa-right-from-bracket"></i>Log Out</button>

	</div>
    
      {/* <div className="container">
        <Link to="/">
        <img src={process.env.PUBLIC_URL + '/chromagen.png'} alt="Chromagen Logo" className="chromagen" />
        </Link>
        <nav>
          {userLG && (
            <div>
              <Link to={`/viewuser/${userLG._id}`}>Profile</Link>
              <span>{userLG.isActive ? 'Inactive' : 'Active'}</span>
              <button onClick={handleClick}><i className="fa-solid fa-right-from-bracket"></i>Log Out</button>
            </div>
          )}
        </nav>
      </div> */}
    </header>
  )
}

export default AdminSidebar