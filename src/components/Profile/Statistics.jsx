import statIcon from '../../assets/group-191.svg'

const Statistics = () => {
  return (
      <div className='col-span-2 w-full p-4 bg-gray-200 rounded-md'>
        <div className='flex gap-2'>
              <img src={statIcon} alt="Statistics" className='w-5' />
              <h2 className='text-lg font-semibold'>Statistics</h2>
        </div>

    </div>
  )
}

export default Statistics