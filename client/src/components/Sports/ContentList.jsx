import MenuRow from './MenuRow.jsx'
import StreamTable from './StreamTable.jsx'

const ContentList = () => {

  // useEffect(() => {
  //   fetchSportsData()
  // }, [])

  // const fetchSportsData = async() => {
  //   const response = await userRequest.getSportsData();
  //   console.log("Last console - ",response)
  // }


  return (
    <div className=' lg:px-2 pt-2 lg:pt-0'>
      <div className='bg-gray-50 p-2 rounded-xl w-full'>
        <MenuRow />
        <div className='bg-gray-200 border rounded-lg my-2 p-2'>
          <StreamTable />
        </div>
      </div>
    </div>
  )
}

export default ContentList