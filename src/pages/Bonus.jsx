import BonusList from '../components/Profile/Bonus/BonusList'
import TopRow from '../components/Profile/TopRow'

const Bonus = () => {
    return (
        <div className='m-2 bg-gray-50 rounded-lg'>
            <TopRow />
            <BonusList />
        </div>
    )
}

export default Bonus