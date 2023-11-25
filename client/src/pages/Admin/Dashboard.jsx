import React from 'react'
import Header from '../../components/Admin/Dasboard/Header'
import AdminTable from '../../components/Admin/Tables/AdminTable'
import Modal from '../../components/Admin/Dasboard/Body'
import CreateAdmin from '../../components/Admin/Modals/CreateAdmin'

const Dashboard = () => {
  return ( 
    <>
      <Header />
      {/* <AdminTable /> */}
      <CreateAdmin />
    </>
  )
}

export default Dashboard