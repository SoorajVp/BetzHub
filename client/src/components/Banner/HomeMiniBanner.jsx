import basketBallImg from '../../assets/basketball-wallpapers-for-phone-1@2x.png'

const HomeMiniBanner = () => {

    const bannerDatas = [
        { name: "Kabin", amount: 58888 },
        { name: "Gawri", amount: 23456 },
        { name: "Aakash", amount: 4000 },
        { name: "Giri", amount: 100200 },
        { name: "Dinesh", amount: 89900 },
        { name: "Sheeba", amount: 20000 },
        { name: "Hari", amount: 30000 },
        { name: "Lavanya", amount: 12000 },
        { name: "Gokul", amount: 25000 },
        { name: "Sooraj", amount: 34000 },
        { name: "Gawri", amount: 23456 },
        { name: "Sheeba", amount: 20000 },
        { name: "Sooraj", amount: 34000 },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mb-3 lg:mx-10'>

            <div className='flex justify-center'>
                <img src={basketBallImg} alt="BannerImage" className='w-[75%]' />
            </div>

            <div className='flex flex-col col-span-2 gap-4 text-white px-5 md:px-14 md:pt-20'>
                <div className='font-extrabold text-4xl'>Play Anytime, Anywhere!</div>
                    <div className='flex space-x-5 text-sm  overflow-x-scroll w-full'>
                        {bannerDatas?.map((item, index) =>
                            <div className='flex flex-col' key={index}>
                                <h2>{item?.name}</h2>
                                <h2>₹{item?.amount}</h2>
                            </div>
                        )}
                    </div>
            </div>

        </div>
    )
}

export default HomeMiniBanner