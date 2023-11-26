import addIcon from '../../../assets/add.svg'

const WithdrawForm = () => {
  return (
    <div className='p-2'>
      <div className='text-center text-primary font-semibold pb-3'>Withdraw</div>
      <div className='py-10'>

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
                type="tel"
                className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com" />
              <label htmlFor="floatingInput"
                className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
              >Enter the Aadhar number</label>
            </div>
          </div>

          <div className='bg-red-50 border border-primary rounded-md p-4 text-center'>
            <label htmlFor="fileInput" className='cursor-pointer'>
              <img src={addIcon} alt="File" className='w-6 mx-auto' />
              <p className='text-2xs'>Click Here To Upload Your <br /> ID Document</p>
            </label>
            <input type="file" id="fileInput" className='hidden' />
          </div>

          <div className='bg-red-50 border border-primary rounded-md p-4 text-center'>
            <label htmlFor="fileInput" className='cursor-pointer'>
              <img src={addIcon} alt="File" className='w-6 mx-auto' />
              <p className='text-2xs'>Click Here To Upload Your <br /> ID Document</p>
            </label>
            <input type="file" id="fileInput" className='hidden' />
          </div>

        </div>

        <div className='flex justify-end p-2 w-full'>
          <button className='px-6 py-2   text-xs bg-primary text-white rounded'> Submit</button>
        </div>
      </div>


    </div>
  )
}

export default WithdrawForm