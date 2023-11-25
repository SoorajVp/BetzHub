import React, { useContext, useEffect, useState } from 'react'
import { adminRequest } from '../../../services/adminService'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../../../contexts/AdminContext'

const UserTable = () => {
    const [users, setUsers] = useState([])
    const naviagte = useNavigate()
    const { admin } = useContext(AdminContext)

    useEffect(() => {
        admin.role == "partner" ? fetchPAUserList() : fetchAllUserList()
    }, [naviagte])


    const fetchAllUserList = async () => {
        const response = await adminRequest.GetAllUserData();
        console.log(response)
        if (response.status) {
            setUsers(response.users.reverse())
        } else {
            alert(response?.message)
        }
    }

    const fetchPAUserList = async () => {
        const response = await adminRequest.GetPAUserData();
        console.log(response)
        if (response.status) {
            setUsers(response.users.reverse())
        } else {
            alert(response?.message)
        }
    }

    const blockUserFn = async (id) => {
        const response = await adminRequest.BlockUser(id);
        if (response.status) {
            setUsers(response.users.reverse())
            alert("Blocked succesfully")
        } else {
            alert(response?.message)
        }
    }

    const unblockUserFn = async (id) => {
        const response = await adminRequest.UnblockUser(id);
        if (response.status) {
            setUsers(response.users.reverse())
            alert("Unblocked succesfully")
            naviagte("/admin")
        } else {
            alert(response?.message)
        }
    }

    return (
        <div className='md:px-[10%] pt-10'>
            {
                admin.role == "partner" ?
                    <div className='text-center text-gray-800 font-semibold pb-2'>Users From Parter-Admin</div> :
                    <div className='text-center text-gray-800 font-semibold pb-2'>All Users List</div>
            }
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-red-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-3"> User Name</th>
                            <th scope="col" className="px-6 py-3"> Whatsapp Number</th>
                            <th scope="col" className="px-6 py-3"> PA-User</th>
                            {admin.role == "admin" && <th scope="col" className="px-6 py-3"> Status</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item) =>
                                <tr key={item?._id} className="bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {item?.username}
                                    </th>
                                    <td className="px-6 py-2">
                                        {item?.phonenumber}
                                    </td>
                                    <td className="px-6 py-2">
                                        {
                                            item?.FromPA ?
                                                <div className='px-4 py-0.5 bg-green-200 w-fit text-green-800 rounded-xl'>True</div> :
                                                <div className='px-4 py-0.5 bg-orange-200  w-fit text-orange-800 rounded-xl'>False</div>
                                        }

                                    </td>
                                    {admin.role == "admin" &&
                                        <td className="px-6 py-2">
                                            {
                                                item?.isBlocked ?
                                                    <button onClick={() => unblockUserFn(item?._id)} className='py-1 px-3 bg-gray-600 hover:bg-gray-500 text-white rounded-md'>UnBlock</button> :
                                                    <button onClick={() => blockUserFn(item?._id)} className='py-1 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md'>Block</button>
                                            }

                                        </td>}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserTable;