import React from 'react'
import TopRow from '../components/Profile/TopRow'
import About from '../components/Profile/About'

const Profile = () => {
    return (
        <div className='m-2 bg-gray-50 rounded-lg'>
            <TopRow />
            <About />
        </div>
    )
}

export default Profile