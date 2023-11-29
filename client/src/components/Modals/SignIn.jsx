import { useContext, useState } from 'react';
import logo from '../../assets/5_1.png'
import LoginImg from '../../assets/5.png'
import paymentList from '../../assets/subpayment.png'
import twitter from '../../assets/twitterIcon.svg'
import whatsapp from '../../assets/whatsappIcon.svg'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../../services/userService';
import toast from 'react-hot-toast';
import { AdminContext } from '../../contexts/AdminContext';

const SignIn = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(AuthContext)
    const { setAdmin } = useContext(AdminContext)
 
    const navigate = useNavigate()

    const authentication = async () => {

        if (!username || !password ) {
            toast.error("All fields are required")
        } else {
            const response = await userRequest.login({ username, password });
            console.log('Response data - ', response);
            setUserName('')
            setPassword('')
            if (response.status == 'admin') {
                setAdmin(response?.admin)
                localStorage.setItem('betzhubAdminToken', response?.adminToken)
                localStorage.setItem('betzhubAdmin', JSON.stringify(response?.admin))
                toast.success("Admin logged in successfully")
                navigate('/admin/')
            } else if (response.status == 'user') {
                setUser(response?.user)
                localStorage.setItem('betzhubToken', response?.token)
                localStorage.setItem('betzhubUser', JSON.stringify(response?.user))
                toast.success("Successfully logged in")
                navigate('/sports')
            } else {
                toast.error(response?.message)
            }
        }
    };

    return (
        <div className='px-4 pb-5'>
            <div className='flex justify-center pb-4'>
                <img src={logo} alt="Logo" className='w-16' />
            </div>
            <div className='grid md:grid-cols-2 font-montserrat'>
                <div className='px-10  hidden md:block'>
                    <img src={LoginImg} alt="Login" className='w-52' />
                    <h1 className='font-extrabold text-xl italic text-red-500'>100% <span className='text-primary'> FAST</span> Withdrawal</h1>
                    <img src={paymentList} alt="Login" className='h-[24px]' />
                </div>
                <div>

                    <div className="relative mb-2">
                        <input onChange={(e) => setUserName(e.target.value)}
                            type="text" value={username}
                            className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder="" />
                        <label htmlFor="floatingInput"
                            className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                        >Enter your username</label>
                    </div>

                    <div className="relative mb-1">
                        <input onChange={(e) => setPassword(e.target.value)}
                            type="password" value={password}
                            className="peer m-0 block h-[58px] w-full rounded-md border border-solid border-red-400 bg-red-50 bg-clip-padding p-3 text-sm leading-tight text-gray-800 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput"
                            className="pointer-events-none text-xs absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-red-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                        >Enter your password</label>
                    </div>

                    <div className="relative mb-2">
                        <input
                            className="relative float-left  mr-[6px] mt-1.5 h-4 w-4 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="checkboxDefault" />
                        <label
                            className="inline-block pl-0.5 mb-2 text-xs text-gray-600 hover:cursor-pointer"
                            htmlFor="checkboxDefault">
                            Keep me signed in
                        </label>
                    </div>

                    <div className="relative mb-3">
                        <button className='py-2 border-white hover:border-primary border rounded-md text-white font-bold bg-gradient-to-r from-red-200 to-primary w-full'
                            onClick={authentication}>SignIn</button>
                    </div>

                    <div className="relative mb-2 text-xs flex justify-center">
                        <p>Don't have an account? <span className='font-semibold text-primary'>Register</span></p>
                    </div>

                    <div className="relative mb-3 text-xs flex justify-center gap-2">
                        <img src={whatsapp} alt="Whatsapp" className='w-7' />
                        <img src={twitter} alt="Whatsapp" className='w-7' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn