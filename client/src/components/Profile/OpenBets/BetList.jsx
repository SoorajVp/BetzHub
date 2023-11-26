import BetForm from './BetForm'
import Table from '../Table'

const BetList = () => {
    const tableHeads = [
        "Date", "Event", "Market", "Selection", "Type", "Rate", "Stake", "P/L"
    ]

    return (
        <div className="overflow-x-auto shadow p-2 ">
            <div className='text-center text-primary font-semibold pb-3'>Open Bets</div>
            <div className='py-10'>
                <BetForm />
                <Table heads={tableHeads} />
            </div>
        </div>
    )
}

export default BetList