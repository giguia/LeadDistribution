import React from 'react'

import AdminSidebar from '../admin components/AdminSidebar';
import ViewUserInfo from '../user components/ViewUserInfo';
const AdminProfile = () => {

    return (
        <div className="EditForm">
            <AdminSidebar />
            <ViewUserInfo/>  
            <p>Leads Page</p>
        </div>
    );
}

export default AdminProfile