import ratingIcon from '../../assets/notostar.svg'

const HomeMiniCards = () => {

    const reviewList = [
        {
            name: 'Lavanya',
            rating: 5,
            text: 'Discover the perfect blend of fun and fortune in our gaming and betting web app. Engage in thrilling games, place real money bets, and watch as the excitement unfolds. Your entertainment journey just got a whole lot more rewarding.'
        }, {
            name: 'Kawsik',
            rating: 4,
            text: 'Dive into a world where gaming meets betting. Experience the thrill of your favorite games and the excitement of real money bets. Unleash your luck and skills in a seamless web application designed for maximum entertainment.'
        }, {
            name: 'Sheeba',
            rating: 3,
            text: 'Bet big, win bigger on our user-friendly web platform. Explore a diverse selection of games and seamlessly transition between gaming and betting. Your journey to massive wins begins with a click.'
        }, {
            name: 'Hari',
            rating: 5,
            text: 'Elevate your gaming experience and amplify the stakes with our web application. From classic casino games to cutting-edge betting features, immerse yourself in a world of excitement where every click is a chance to win'
        }, {
            name: 'Gokul',
            rating: 4,
            text: 'Discover the perfect blend of fun and fortune in our gaming and betting web app. Engage in thrilling games, place real money bets, and watch as the excitement unfolds. Your entertainment journey just got a whole lot more rewarding.'
        }, {
            name: 'Kabin',
            rating: 5,
            text: 'Experience next-level gaming with real-time wins. Our web application brings you a curated selection of games and the opportunity to turn your gaming skills into tangible rewards. Its time to level up and claim your victories.'
        }, {
            name: 'Zain',
            rating: 2,
            text: 'Discover the perfect blend of fun and fortune in our gaming and betting web app. Engage in thrilling games, place real money bets, and watch as the excitement unfolds. Your entertainment journey just got a whole lot more rewarding.'
        }, {
            name: 'Rahul',
            rating: 3,
            text: 'Discover the perfect blend of fun and fortune in our gaming and betting web app. Engage in thrilling games, place real money bets, and watch as the excitement unfolds. Your entertainment journey just got a whole lot more rewarding.'
        }, {
            name: 'Sooraj',
            rating: 4,
            text: 'Elevate the stakes with our real money betting feature. Experience the adrenaline rush as you place bets and compete for exciting payouts. Our secure and transparent payment system ensures a safe and fair betting environment.'
        }, {
            name: 'Maya',
            rating: 5,
            text: 'Bet big, win bigger on our user-friendly web platform. Explore a diverse selection of games and seamlessly transition between gaming and betting. Your journey to massive wins begins with a click.'
        }
    ]


    return (
        <div>
            <div className='flex justify-center w-full text-white font-bold text-xl uppercase mb-4'>Reviews</div>
            <div className='bg-gray-800'>
                <div className='flex gap-6 p-10 overflow-x-auto'>

                    {reviewList?.map((item) => (
                        <div className='flex flex-col gap-1 bg-gray-200 p-5 rounded-lg' style={{ minWidth: '250px', maxWidth: '250px' }} key={item?.id}>
                            <h3 className='text-xs'>{item?.text}</h3>
                            <h2 className='text-xs font-bold pt-2'>{item?.name}</h2>
                            <div className="flex gap-2">
                                { Array.from({ length: item.rating }, (_, index) => (
                                    <img src={ratingIcon} alt="rating" className='w-5' />
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default HomeMiniCards