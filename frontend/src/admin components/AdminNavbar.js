import { Link } from 'react-router-dom'
import { useLogoutLG } from '../hooks/useLogoutLG'
import { useAuthContext } from '../hooks/useAuthContext'
import ViewUserInfo from '../user components/ViewUserInfo'

const AdminNavbar = () => {
  const { logoutLG } = useLogoutLG()
  const { userLG } = useAuthContext()


  const handleClick = () => {
    logoutLG()
  }

  return (
    <header>
      <div className="containerr">
        <Link to="/">
        <img src={process.env.PUBLIC_URL + '/chromagen.png'} alt="Chromagen Logo" className="chromagen" />
        </Link>
        <nav>
          {userLG && (
            <div>
              {/* <span>{userlg.name}</span> */}
              
              {/* <span>{userLG.isActive ? 'Inactive' : 'Active'}</span> */}
              <span style={{color: userLG.isActive ? 'red' : 'green'}}> &#9679; </span>

              
              <button onClick={handleClick}><i className="fa-solid fa-right-from-bracket"></i>Signout</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default AdminNavbar