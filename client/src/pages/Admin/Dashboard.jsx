import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../contexts/AdminContext'
import { useNavigate } from 'react-router-dom'
import StatsData from '../../components/Admin/Dasboard/StatsData' 
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

      
    </>
  )
}

export default Dashboard  