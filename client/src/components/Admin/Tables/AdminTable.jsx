import React, { useContext, useEffect, useState } from 'react'
import { adminRequest } from '../../../services/adminService'
import { useNavigate } from 'react-router-dom'
import { ActionContext } from '../../../contexts/ActionContext'
import toast from 'react-hot-toast'
import CreateAdmin from '../Modals/CreateAdmin'

const AdminTable = () => {
    const [admins, setAdmins] = useState([])
    const { action } = useContext(ActionContext);
    const naviagte = useNavigate()

    useEffect(() => {
        fetchAdminsList()
    }, [naviagte, action])


    const fetchAdminsList = async () => {
        const response = await adminRequest.GetAllAdminData();
        if (response.status) {
            setAdmins(response.admins.reverse())
        } else {
            toast.error(response?.message)
        }
    }

    const blockAdmin = async (id) => {
        const response = await adminRequest.BlockAdmin(id);
        if (response.status) {
            setAdmins(response.admins.reverse())
            toast.success("Blocked succesfully")
        } else {
            toast.error(response?.message)
        }
    }

    const unblockAdmin = async (id) => {
        const response = await adminRequest.UnblockAdmin(id);
        if (response.status) {
            setAdmins(response.admins.reverse())
            toast.success("Unlocked succesfully")
            naviagte("/admin")
        } else {
            toast.error(response?.message)
        }
    }

    return (
        <div className='px-2'>
            <div className='flex justify-between py-3'>
                <div className=' text-gray-800 uppercase text-lg font-semibold pt-2'>Admins List</div>
                <CreateAdmin />
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-red-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Admin Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins?.map((item) =>
                                <tr key={item?._id} className="bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {item?.adminName}
                                    </th>
                                    <td className="px-6 py-2">
                                        {item?.phonenumber}
                                    </td>
                                    <td className="px-6 py-2">
                                        {item?.role}
                                    </td>
                                    <td className="px-6 py-2">
                                        {
                                            item?.isBlocked ?
                                                <button onClick={() => unblockAdmin(item?._id)} className='py-1 px-3 bg-gray-600 hover:bg-gray-500 text-white rounded-md'>UnBlock</button> :
                                                <button onClick={() => blockAdmin(item?._id)} className='py-1 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md'>Block</button>
                                        }

                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AdminTable