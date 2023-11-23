import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext)

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    },[])

    return children;
}

export default PrivateRoute