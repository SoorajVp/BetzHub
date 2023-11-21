import MenuRow from './MenuRow.jsx'
import StreamTable from './StreamTable.jsx'

const ContentList = () => {
  return (
    <div className='bg-gray-50 lg:mx-2 p-2 rounded-xl w-full'>
      <MenuRow />
      <div className='bg-red-50 border rounded-lg my-2 p-2'>
        <StreamTable />
      </div>
    </div>
  )
}

export default ContentList