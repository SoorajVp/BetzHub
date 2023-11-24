import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/5_1.png'
import LoginImg from '../../assets/5.png'
import paymentList from '../../assets/subpayment.png'
import twitter from '../../assets/twitterIcon.svg'
import whatsapp from '../../assets/whatsappIcon.svg'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const customStyles = {
    content: {
        paddingTop: '0%',
        paddingBottom: '50px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
    },
};

const LoginButton = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const { setAuth } = useContext(AuthContext)

    const navigate = useNavigate()

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const authenication = () => {
        setAuth(true)
        navigate("/sports")
    }

    return (
        <div>
            <button className='bg-red-400 hover:bg-gray-50 hover:text-gray-800 transition duration-300 px-2 md:px-3 py-1.5 font-bold rounded' onClick={openModal}>SIGN IN</button>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-center pb-4'>
                    <img src={logo} alt="Logo" className='w-16' />
                </div>
                <div className='grid md:grid-cols-2 font-montserrat'>
                    <div className='px-10 space-y-2  hidden md:block'>
                        <img src={LoginImg} alt="Login" className='w-52' />
                        <h1 className='font-extrabold text-xl italic text-red-500'>100% <span className='text-primary'> FAST</span> Withdrawal</h1>
                        <img src={paymentList} alt="Login" className='h-[24px]' />
                    </div>
                    <div className=''>

                        <div className="relative mb-2">
                            <input
                                type="text"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Enter your username</label>
                        </div>

                        <div className="relative mb-1">
                            <input
                                type="password"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="name@example.com" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Enter your password</label>
                        </div>

                        <div className="relative mb-2">
                            <input
                                className="relative float-left  mr-[6px] mt-1.5 h-4 w-4 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="checkboxDefault" />
                            <label
                                className="inline-block pl-0.5 mb-2 text-xs text-gray-600 hover:cursor-pointer"
                                htmlFor="checkboxDefault">
                                Keep me signed in
                            </label>
                        </div>

                        <div className="relative mb-3">
                            <button className='py-2 border-white hover:border-primary border rounded-md text-white font-bold bg-gradient-to-r from-red-200 to-primary w-full'
                                onClick={authenication}>SignIn</button>
                        </div>

                        <div className="relative mb-2 text-xs flex justify-center">
                            <p>Don't have an account? <span className='font-semibold text-primary'>Register</span></p>
                        </div>

                        <div className="relative mb-3 text-xs flex justify-center gap-2">
                            <img src={whatsapp} alt="Whatsapp" className='w-7' />
                            <img src={twitter} alt="Whatsapp" className='w-7' />
                        </div>

                    </div>
                </div>
                {/* <button onClick={closeModal}>close</button> */}

            </Modal>
        </div>
    );
}

export default LoginButton;