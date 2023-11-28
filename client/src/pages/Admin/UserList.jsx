import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../contexts/AdminContext'
import { useNavigate } from 'react-router-dom'
import UserTable from '../../components/Admin/Tables/UserTable'

const UserList = () => {
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
        <div>
            <UserTable />
        </div>
    )
}

export default UserList