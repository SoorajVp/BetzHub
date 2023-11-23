import Table from './Table'

const BetsList = () => {
    const tableHeads = [
        "Date", "Event", "Market", "Selection", "Type", "Rate", "Stake", "P/L"
    ]

    return (
        <div className="overflow-x-auto shadow p-2 ">
            <div className='text-center text-primary font-semibold pb-3'>Open Bets</div>
            <Table heads={tableHeads} />
        </div>
    )
}

export default BetsList