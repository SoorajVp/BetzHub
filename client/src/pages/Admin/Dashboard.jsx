import React, { useContext, useEffect } from 'react'
import Header from '../../components/Admin/Dasboard/Header'
import AdminTable from '../../components/Admin/Tables/AdminTable'
import Modal from '../../components/Admin/Dasboard/Body'
import CreateAdmin from '../../components/Admin/Modals/CreateAdmin'
import { AdminContext } from '../../contexts/AdminContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { admin, setAdmin } = useContext(AdminContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("betzhubAdminToken")) {
      const adminData = localStorage.getItem('betzhubAdmin');
      setAdmin(JSON.parse(adminData))
    } else {
      navigate('/super-admin/login')
    }
  }, [])

  return (
    <>
      <Header />
      {admin.role == 'super' && <AdminTable />}

    </>
  )
}

export default Dashboard