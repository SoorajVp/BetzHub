import React, { useState } from 'react';
import bankIcon from '../../assets/download-1@2x.png'
import copyIcon from '../../assets/fluentcopyadd20filled.svg'
import addIcon from '../../assets/add.svg'
import paymentIcon from '../../assets/payment-icon-group.svg'

const Deposit = () => {
    const [recharge, setRecharge] = useState(true)


    return (
        <div className='px-4 font-montserrat'>
            <div className="flex justify-center m-5">
                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        className="relative float-left -ml-[1.5rem] mr-1 mt-1 h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultChecked
                        onClick={() => setRecharge(true)}
                    />
                    <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="inlineRadio1"
                    >
                        Recharge
                    </label>
                </div>
                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        className="relative float-left -ml-[1.5rem] mr-1 mt-1 h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        onClick={() => setRecharge(false)}
                    />
                    <label
                        className=" inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="inlineRadio2"
                    >
                        Manual
                    </label>
                </div>

            </div>

            {
                recharge ?
                    <RechargeDeposit /> :
                    <ManualDeposit />
            }

        </div>
    );
}

export default Deposit;


export const ManualDeposit = () => {
    return (
        <div className=''>
            <div className='flex justify-center pb-4'>
                <img src={bankIcon} alt="Logo" className='w-auto h-16 border border-primary rounded-md' />
            </div>
            <p className='text-xs p-2 text-gray-700'>Make your payment on the detail below</p>
            <div className='bg-red-100 rounded-md p-3 space-y-1'>
                <div className='flex justify-between w-full'>
                    <p className='text-xs font-medium text-gray-700'>Bank Name</p>
                    <img src={copyIcon} alt="Copy" className='w-4' />
                </div>
                <div className='flex justify-between w-full'>
                    <p className='text-xs font-medium text-gray-700'>Account Holder Name</p>
                    <img src={copyIcon} alt="Copy" className='w-4' />
                </div>
                <div className='flex justify-between w-full'>
                    <p className='text-xs font-medium text-gray-700'>Account Number</p>
                    <img src={copyIcon} alt="Copy" className='w-4' />
                </div>
                <div className='flex justify-between w-full'>
                    <p className='text-xs font-medium text-gray-700'>IFSC</p>
                    <img src={copyIcon} alt="Copy" className='w-4' />
                </div>
            </div>
            <div className='grid grid-cols-2 py-1 gap-2'>
                <div className='space-y-1'>

                    <div className='p-2 bg-red-100 rounded-md'>
                        <div className="relative mb-1">
                            <input
                                type="text" defaultValue="100"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Amount</label>
                        </div>
                        <p className='text-2xs text-gray-600'>You can add upto <span className='text-primary'>500000</span>, Minimum <span className='text-primary'>100</span> required </p>
                    </div>

                    <div className='p-2 bg-red-100 rounded-md'>
                        <div className="relative mb-1">
                            <input
                                type="text"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="" />
                            <label htmlFor="floatingInput"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >Enter your Transaction ID</label>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='bg-red-50 border border-primary rounded-md py-9 h-full text-center'>
                        <label htmlFor="fileInput" className='cursor-pointer'>
                            <img src={addIcon} alt="File" className='w-6 mx-auto' />
                            <p className='text-xs'>Click Here To Upload <br /> Payment Screenshot</p>
                        </label>
                        <input type="file" id="fileInput" className='hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const RechargeDeposit = () => {
    return (

        <div className=''>
            <div className='p-2 bg-red-100 rounded-md'>
                <div className="relative mb-1">
                    <input
                        type="text" defaultValue="100"
                        className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                        id="floatingInput"
                        placeholder="" />
                    <label htmlFor="floatingInput"
                        className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                    >Amount</label>
                </div>
                <p className='text-2xs text-gray-600'>You can add upto <span className='text-primary'>500000</span>, Minimum <span className='text-primary'>100</span> required </p>
            </div>
            <div className='flex justify-end py-2 w-full'>
                <button className='px-6 py-2 font-medium  text-xs bg-primary text-white rounded'> Submit</button>
            </div>
            <div className='px-14'>

                <div className='text-center text-xs text-gray-600 py-2'>
                    Accept, process & disbure digital payments for your <br />
                    business. Fast & Secure Payment
                </div>
                <div className='flex justify-center'>
                    <img src={paymentIcon} alt="Payment" className='h-14' />
                </div>
            </div>
        </div>
    )
}