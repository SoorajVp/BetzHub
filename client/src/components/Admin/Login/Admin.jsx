import React, { useContext, useEffect, useState } from 'react'
import { adminRequest } from '../../../services/adminService';
import { AdminContext } from '../../../contexts/AdminContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const { setAdmin } = useContext(AdminContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("betzhubAdminToken")) {
            const adminData = localStorage.getItem('betzhubAdmin');
            setAdmin(JSON.parse(adminData))
            navigate('/admin')
        } 
    }, [])

    const authentication = async () => {
        if (!adminName || !password) {
            toast.error('All fields are required')
        } else {
            const response = await adminRequest.adminLogin({ adminName, password });
            setAdminName('')
            setPassword('')
            if (response.status) {
                setAdmin(response?.admin)
                localStorage.setItem('betzhubAdminToken', response?.token)
                localStorage.setItem('betzhubAdmin', JSON.stringify(response?.admin))
                toast.success("Success! You've been logged in successfully")
                navigate('/admin')
            } else {
                toast.error(response?.message)
            }
        }
    };

    
    return (
        <div className='flex items-center min-h-screen'>

            <div
                className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Admin</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-5">
                        <div className="relative mt-6">
                            <input type="text" onChange={(e) => setAdminName(e.target.value)} value={adminName} name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Username</label>
                        </div>
                        <div className="relative mt-6">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                        </div>
                        <div className="my-6">
                            <button type="submit" onClick={authentication} className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Admin