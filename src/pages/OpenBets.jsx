import TopRow from '../components/Profile/TopRow'
import BetsList from '../components/Profile/BetsList'

const OpenBets = () => {
    return (
        <div className='m-2 bg-gray-50 rounded-lg'>
            <TopRow />
            <BetsList />
        </div>
    )
}

export default OpenBets