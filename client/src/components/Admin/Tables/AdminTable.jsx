import React, { useEffect, useState } from 'react'
import { adminRequest } from '../../../services/adminService'
import { useNavigate } from 'react-router-dom'

const AdminTable = () => {
    const [admins, setAdmins] = useState([])
    const naviagte = useNavigate()

    useEffect(() => {
        fetchAdminsList()
    }, [naviagte])


    const fetchAdminsList = async () => {
        const response = await adminRequest.GetAllAdminData();
        if (response.status) {
            setAdmins(response.admins.reverse())
        } else {
            alert(response?.message)
        }
    }

    const blockAdmin = async (id) => {
        const response = await adminRequest.BlockAdmin(id);
        if (response.status) {
            setAdmins(response.admins.reverse())
            alert("Blocked succesfully")
        } else {
            alert(response?.message)
        }
    }

    const unblockAdmin = async (id) => {
        const response = await adminRequest.UnblockAdmin(id);
        if (response.status) {
            setAdmins(response.admins.reverse())
            alert("Unblocked succesfully")
            naviagte("/admin")
        } else {
            alert(response?.message)
        }
    }

    return (
        <div className='md:px-[10%] pt-10'>
            <div className='text-center text-gray-800 font-semibold pb-2'>All Admins List</div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-red-200 ">
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