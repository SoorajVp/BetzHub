import TopRow from '../components/Profile/TopRow'
import BetList from '../components/Profile/BetList'

const OpenBets = () => {
    return (
        <div className='m-2 bg-gray-50 rounded-lg'>
            <TopRow />
            <BetList />
        </div>
    )
}

export default OpenBets;