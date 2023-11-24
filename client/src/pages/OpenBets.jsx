import BetList from '../components/Profile/OpenBets/BetList';
import TopRow from '../components/Profile/TopRow'

const OpenBets = () => {
    return (
        <div className='m-2 bg-gray-50 rounded-lg'>
            <TopRow />
            <BetList />
        </div>
    )
}

export default OpenBets;