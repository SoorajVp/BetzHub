import addIcon from '../../assets/add.svg'

const WithdrawForm = () => {
  return (
    <div className='p-2'>
      <div className='text-center text-primary font-semibold pb-3'>Withdraw</div>

      <div className='flex gap-2 p-1'>
        <div className='text-sm font-semibold text-gray-800'>KYC Status : </div>
        <div className='text-sm text-primary'>Pending </div>

      </div>

      <div className='grid md:grid-cols-4 gap-2'>
        <div className='col-span-2 space-y-2'>
          <div className="relative">
            <select
              className="peer m-0 block h-[65px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="identityProof"
            >
              <option value="adhar" defaultChecked>Adhar</option>
              <option value="pan">PAN card</option>
            </select>
            <label
              htmlFor="identityProof"
              className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
            >Identity proof</label>
          </div>

          <div className="relative">
            <input
              type="password"
              className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label for="floatingInput"
              className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
            >Enter the Aadhar number</label>
          </div>
        </div>

        <div className='bg-red-50 flex justify-center items-center w-full border border-primary rounded-md'>
          <div className='flex flex-col text-center'>

            <img src={addIcon} alt="File" className='w-6' />
            {/* <p>Click Here To Upload Your ID Document</p> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default WithdrawForm