import React from 'react'

const Navbar = () => {

    const navList = [
        { name: "Sports", href: '/sports' },
        { name: "Casino", href: '/casino' },
        { name: "Inplay", href: '/inplay' }
    ]
    return (
        <>
            <div className='flex justify-between bg-purple-900 p-3 text-white'>
                <div className=''>
                    <img src="" alt="" />
                </div>
                <div>
                    <ul className='flex space-x-6 text-sm'>
                        { navList?.map((item) =>
                            <li className='hover:bg-purple-600 px-3 py-1.5 rounded-md'>{item?.name}</li>
                        )}
                    </ul>

                </div>
                <div className='space-x-3 text-xs'>
                    <button className='bg-purple-600 px-3 py-1.5 rounded-md'>SIGN IN</button>
                    <button className='bg-purple-600 px-3 py-1.5 rounded-md'>REGISTER</button>

                </div>
            </div>
        </>
    )
}

export default Navbar