const AdminTableHeader = ({ userlg }) => {

    return (
      <div className="table-wrapper">
        <table class="fl-table">
        <thead>
          <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>ID</th>
              <th>Birthday</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Home Address</th>
          </tr>
          </thead>
        </table>
      </div>
    )
  }
  
  export default AdminTableHeader
