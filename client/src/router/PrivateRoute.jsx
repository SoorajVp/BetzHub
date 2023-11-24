import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(localStorage.getItem('betzhubUser'))
    // const { user } = useContext(AuthContext)

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    },[])

    return children;
}

export default PrivateRoute