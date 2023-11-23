import { useContext, useLayoutEffect } from 'react'
import TopRow from '../components/Profile/TopRow'
import About from '../components/Profile/About'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    return (
        <div className='m-2 bg-gray-50 rounded-lg'>
            <TopRow />
            <About />
        </div>
    )

}

export default Profile