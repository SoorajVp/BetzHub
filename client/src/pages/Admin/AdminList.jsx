import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../contexts/AdminContext'
import { useNavigate } from 'react-router-dom'
import AdminTable from '../../components/Admin/Tables/AdminTable'

const AdminList = () => {
    const { admin, setAdmin } = useContext(AdminContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("betzhubAdminToken")) {
            const adminData = localStorage.getItem('betzhubAdmin');
            setAdmin(JSON.parse(adminData))
            if (admin?.role !== 'super') {
                navigate('/admin/')
            }
        } else {
            navigate('/admin/login')
        }
    }, [])
  return (
    <AdminTable />
  )
}

export default AdminList