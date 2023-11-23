import Table from "./Table"

const StatementList = () => {
  const tableHeads = [
    "Date", "Type", "Description", "Dr", "Cr", "Balance" 
  ]
  
  return (
    <div className="overflow-x-auto shadow p-2 ">
      <div className='text-center text-primary font-semibold pb-3'>Account Statement</div>
      <Table heads={tableHeads} />
    </div>
  )
}

export default StatementList