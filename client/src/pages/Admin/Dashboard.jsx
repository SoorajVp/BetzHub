import React, { useContext, useEffect } from 'react'
import Header from '../../components/Admin/Dasboard/Header'
import AdminTable from '../../components/Admin/Tables/AdminTable'
import CreateAdmin from '../../components/Admin/Modals/CreateAdmin'
import { AdminContext } from '../../contexts/AdminContext'
import { useNavigate } from 'react-router-dom'
import CreateUser from '../../components/Admin/Modals/CreateUser'
import UserTable from '../../components/Admin/Tables/UserTable'
import StatsData from '../../components/Admin/Dasboard/StatsData' 
import SideBar from '../../components/Admin/SideBar/AdminSideBar'
import AdminSideBar from '../../components/Admin/SideBar/AdminSideBar'
import BarGraph from '../../components/Admin/Dasboard/BarGraph'
import PieChart from '../../components/Admin/Dasboard/PieChart'
import LineChart from '../../components/Admin/Dasboard/LineChart'

const Dashboard = () => {
  const { admin, setAdmin } = useContext(AdminContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("betzhubAdminToken")) {
      const adminData = localStorage.getItem('betzhubAdmin');
      setAdmin(JSON.parse(adminData))
    } else {
      navigate('/admin/login')
    }
  }, [])

  return (
    <>

      {/* <AdminSideBar /> */}
      {/* <Header /> */}


      <StatsData />
      <div className='grid lg:grid-cols-2 gap-2 px-2'>
        <div className='bg-slate-100'>
          <PieChart />
        </div>
        <div className='bg-slate-100'>
          <BarGraph />
        </div>
      </div>
      <LineChart />

      
      {/* {
        admin.role == 'super' ?
          <AdminTable /> :
          <UserTable />
      } */}

    </>
  )
}

export default Dashboard  