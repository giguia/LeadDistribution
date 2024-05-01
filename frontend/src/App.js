import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './leadgen pages/Home'
import AgentHome from './agent pages/AgentHome'
// import Navbar from './leadgen components/Navbar'
import AddForm from './leadgen pages/AddForm'
import EditForm from './leadgen pages/EditForm'
import AGEditForm from './agent pages/AGEditForm'
import ReadForm from './leadgen pages/ReadForm'
import AGReadForm from './agent pages/AGReadForm'
import LoginLG from './leadgen pages/LoginLG'
import SignupLG from './leadgen pages/SignupLG'
import EditUserInfo from './user pages/EditUserInfo'
import UserHome from './user pages/UserHome'
import ReadUserInfo from './user pages/ReadUserInfo'
import AdminHome from './admin pages/AdminHome'
import AdminLeads from './admin pages/AdminLeads'
import AdminUsers from './admin pages/AdminUsers'
import AdminProfile from './admin pages/AdminProfile'
import LeadsList from './leadgen pages/LeadsList'
import AdminDash from './admin pages/AdminDash'
import AllUserInfo from './user components/AllUserInfo'
function App() {
  const { userLG } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={userLG ? (
                userLG.role === "Lead Generation" ? <Home /> : (
                userLG.role === "Telemarketer" ? <AgentHome /> : 
                userLG.role === "Team Leader" ? <AdminHome /> : <Navigate to="/loginLG" />
              )
            ) : <Navigate to="/loginLG" />} />

            <Route path="/add" element={userLG ? <AddForm /> : <Navigate to="/loginLG" />} />
            <Route path="/edit/:id" element={userLG ? <EditForm /> : <Navigate to="/loginLG" />} />
            <Route path="/agentedit/:id" element={userLG ? <AGEditForm /> : <Navigate to="/loginLG" />} />
            <Route path="/view/:id" element={userLG ? <ReadForm /> : <Navigate to="/loginLG" />} />
            <Route path="/agentview/:id" element={userLG ? <AGReadForm /> : <Navigate to="/loginLG" />} />
            <Route path="/useredit/:id" element={userLG ? <EditUserInfo /> : <Navigate to="/loginLG" />} />
            <Route path="/userhome" element={userLG ? <UserHome /> : <Navigate to="/loginLG" />} />
            <Route path="/viewuser/:id" element={userLG ? <ReadUserInfo /> : <Navigate to="/loginLG" />} />
            <Route path="/AdminHome" element={<AdminHome />} />
            <Route path="/AdminLeads" element={<AdminLeads />} />
            <Route path="/AdminUsers" element={<AdminUsers />} />
            <Route path="/AdminProfile" element={<AdminProfile />} />
            <Route path="/LeadsList" element={<LeadsList />} />
            <Route path="/AdminDash" element={<AdminDash />} />
            <Route path="/AllUserInfo" element={<AllUserInfo />} />


            {/* Login Route */}
            <Route path="/loginLG" element={!userLG ? <LoginLG /> : <Navigate to="/" />} />

            {/* Signup Route */}
            <Route path="/signupLG" element={!userLG ? <SignupLG /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App