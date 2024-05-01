import React from 'react'

import AdminSidebar from '../admin components/AdminSidebar';
import ViewUserInfo from '../user components/ViewUserInfo';
const AdminProfile = () => {

    return (
        <div className="EditForm">
            <div><AdminSidebar /></div>
            <div><ViewUserInfo/>  </div>
            
            <p>Profile Page</p>
        </div>
    );
}

export default AdminProfile