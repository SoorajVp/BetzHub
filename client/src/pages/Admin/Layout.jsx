import React from 'react'
import AdminSideBar from '../../components/Admin/SideBar/AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <AdminSideBar />
      <div className="sm:ml-64">
        <div>

          <Outlet />

        </div>
      </div>

    </div>
  )
}

export default AdminLayout