import React, { useContext, useState } from 'react'
import CustomModal from './Modal';
import { useNavigate } from 'react-router-dom';
import { adminRequest } from '../../../services/adminService';
import { ActionContext } from '../../../contexts/ActionContext';

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
            alert('All fields are required');
        } else if (phonenumber.length !== 10) {
            alert('Invalid Mobile Number')
        } else {
            const response = await adminRequest.CreateNewAdmin({ adminName, phonenumber, password, role });
            setAdminName('')
            setPhoneNumber('')
            setPassword('')
            if (response.status) {
                setAction(action + 1)
                alert("Admin created succesfully")
                setModalIsOpen(false);
                navigate('/admin')
            } else {
                alert(response?.message)
            }
        }
    };


    return (
        <div>

            <div>
                <button
                    className="py-2 px-3 text-gray-100 hover:text-primary hover:bg-gray-100 lg:border-0 lg:hover:text-primary-700 lg:px-3 lg:py-1 rounded-md"
                    onClick={openModal}
                >
                    Create Admin
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