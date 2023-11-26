
import Table from '../Table'

const TransactionList = () => {
    const tableHeads = [
        "Date", "Transaction ID", "Status", "Deposit/Withdraw", "Amount", "Remark"
    ]

    return (
        <div className="shadow p-2 ">
            <div className='text-center text-primary font-semibold pb-3'>Transaction History</div>

            <div className='py-10'>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='grid md:grid-cols-2 gap-2'>
                        <div className="relative">
                            <input
                                type="date"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingDate"
                                placeholder="Select a date"
                            />
                            <label
                                htmlFor="floatingDate"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >
                                From Date
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="date"
                                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingDate"
                                placeholder="Select a date"
                            />
                            <label
                                htmlFor="floatingDate"
                                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                            >
                                To Date
                            </label>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button className='px-6 py-2 bg-primary text-white text-sm rounded'>Search</button>
                    </div>
                </div>

                <Table heads={tableHeads} />
            </div>

        </div>
    )
}

export default TransactionList