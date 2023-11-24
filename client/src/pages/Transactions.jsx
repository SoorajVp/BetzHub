import TopRow from '../components/Profile/TopRow'
import TransactionList from '../components/Profile/Transactions/TransactionList'

const Transactions = () => {
  return (
      <div className='m-2 bg-gray-50 rounded-lg'>
          <TopRow />
          <TransactionList />
      </div>
  )
}

export default Transactions