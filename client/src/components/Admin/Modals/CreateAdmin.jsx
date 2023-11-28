import React, { useContext, useState } from 'react'
import CustomModal from './Modal';
import { useNavigate } from 'react-router-dom';
import { adminRequest } from '../../../services/adminService';
import { ActionContext } from '../../../contexts/ActionContext';
import toast from 'react-hot-toast';

const CreateAdmin = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [adminName, setAdminName] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin');

    const { action, setAction } = useContext(ActionContext);

    const navigate = useNavigate()

    const handleRadioChange = (event) => {
        setRole(event.target.value);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const submitAdmin = async () => {
        if (!adminName || !phonenumber || !password) {
            toast.error("All fields are required")
        } else if (phonenumber.length !== 10) {
            toast.error("Invalid mobile number")
        } else {
            const response = await adminRequest.CreateNewAdmin({ adminName, phonenumber, password, role });
            setAdminName('')
            setPhoneNumber('')
            setPassword('')
            if (response.status) {
                setAction(action + 1)
                toast.success("Admin created succesfully")
                setModalIsOpen(false);
                navigate('/admin/lists')
            } else {
                toast.error(response?.message)
            }
        }
    };


    return (
        <div>

            <div>
                <button onClick={openModal} className='flex gap-1 py-1.5 px-4 border border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-md text-sm group'>
                    <svg className="flex-shrink-0 w-4 h-4 text-primary transition duration-75 group-hover:text-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  >
                        <path d="M496 304m-208 0a208 208 0 1 0 416 0 208 208 0 1 0-416 0Z" />
                        <path d="M600.64 576a421.44 421.44 0 0 0-111.36-14.4c-358.4 0-369.28 384-369.28 384H582.4A256 256 0 0 1 600.64 576z" />
                        <path d="M768 576a192 192 0 1 0 192 192 192 192 0 0 0-192-192z m42.56 228.48v96h-64v-96h-96v-64h96v-96h64v96h96v64z" />
                    </svg>
                    CREATE ADMIN
                </button>

                <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>

                    <div className='p-4'>
                        <div className='text-center text-lg text-primary w-full font-medium pb-3'>Create New Admin</div>

                        <div className="relative mb-2">
                            <input onChange={(e) => setAdminName(e.target.value)} value={adminName}
                                type="text"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Enter the admin name</label>
                        </div>

                        <div className="relative mb-2">
                            <input onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber}
                                type="number"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="name@example.com" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Enter the Whatsapp number</label>
                        </div>

                        <div className="relative mb-1">
                            <input onChange={(e) => setPassword(e.target.value)} value={password}
                                type="password"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="name@example.com" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Enter the password</label>
                        </div>

                        <div className="flex items-center gap-2 p-2 text-sm">
                            <input
                                type="radio"
                                id="radioOption1"
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                name="radioGroup"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="radioOption1" className="text-gray-700">
                                Admin
                            </label>
                            <input
                                type="radio"
                                id="radioOption2"
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                name="radioGroup"
                                value="partner"
                                checked={role === 'partner'}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="radioOption2" className="text-gray-700">
                                Partner
                            </label>

                        </div>

                        <div className="relative mt-2">
                            <button className='py-1 border-white hover:border-primary border rounded-md text-white bg-gradient-to-r from-red-200 to-primary w-full'
                                onClick={submitAdmin} >Create</button>
                        </div>

                    </div>
                </CustomModal>
            </div>
        </div>
    )
}

export default CreateAdmin