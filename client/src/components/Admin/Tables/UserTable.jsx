import React, { useContext, useEffect, useState } from 'react'
import { adminRequest } from '../../../services/adminService'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../../../contexts/AdminContext'
import { ActionContext } from '../../../contexts/ActionContext'
import toast from 'react-hot-toast'
import CreateUser from '../Modals/CreateUser'

const UserTable = () => {
    const [users, setUsers] = useState([])
    const naviagte = useNavigate()
    const { admin } = useContext(AdminContext)
    const { action } = useContext(ActionContext);

    useEffect(() => {
        admin.role == "partner" ? fetchPAUserList() : fetchAllUserList()
    }, [naviagte, action])


    const fetchAllUserList = async () => {
        const response = await adminRequest.GetAllUserData();
        if (response.status) {
            setUsers(response.users.reverse())
        } else {
            toast.error(response?.message)
        }
    }

    const fetchPAUserList = async () => {
        const response = await adminRequest.GetPAUserData();
        if (response.status) {
            setUsers(response.users.reverse())
        } else {
            toast.error(response?.message)
        }
    }

    const blockUserFn = async (id) => {
        const response = await adminRequest.BlockUser(id);
        if (response.status) {
            setUsers(response.users.reverse())
            toast.success("Blocked succesfully")
        } else {
            toast.error(response?.message)
        }
    }

    const unblockUserFn = async (id) => {
        const response = await adminRequest.UnblockUser(id);
        if (response.status) {
            setUsers(response.users.reverse())
            toast.success("Unblocked succesfully")
            naviagte("/admin")
        } else {
            toast.error(response?.message)
        }
    }

    return (
        <div className='pt-3 px-2'>
            {
                admin.role == "partner" ?
                    <div className='flex justify-between py-3'>
                        <div className=' text-gray-800 uppercase text-lg font-semibold pt-2'>Users By Parter-Admin</div>
                        <CreateUser />
                    </div> :
                    <div className='text-center text-gray-800 uppercase font-semibold pb-2'>All Users List</div>
            }
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-red-500 ">
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
                                                <div className='px-4 py-0.5 bg-green-50 w-fit text-green-800 rounded-xl'>True</div> :
                                                <div className='px-4 py-0.5 bg-orange-50  w-fit text-orange-800 rounded-xl'>False</div>
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