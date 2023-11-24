import { UserDetails } from "../../../constants/userData";
import mobileIcon from '../../../assets/uilphone.svg'
import mailIcon from '../../../assets/fluentmail20regular.svg'
import securityIcon from '../../../assets/solarlockpasswordlinear.svg'

const Details = () => {
    return (
        <div className='md:col-span-1 w-full py-4 bg-gray-200 rounded-md'>
            <div className='flex justify-center'>
                <div className='flex flex-col py-3'>
                    <img src={UserDetails?.profilePic} alt="Profile" className="w-16" />
                    <h2 className="text-base text-gray-800 font-semibold">{UserDetails?.name}</h2>
                </div>
            </div>
            <div>

                <div className="flex w-full justify-center pt-1">
                    <div className="flex gap-2 text-xs font-medium">
                        <img src={mobileIcon} alt="Mobile" className="w-4" /> {UserDetails?.mobile}
                    </div>
                </div>
                <div className="flex w-full justify-center pt-1">
                    <div className="flex gap-2 text-xs font-medium">
                        <img src={mailIcon} alt="Mobile" className="w-4" />{UserDetails?.email}
                    </div>
                </div>
                <div className="flex w-full justify-center pt-1">
                    <div className="flex gap-2 text-xs font-medium">
                        <img src={securityIcon} alt="Mobile" className="w-4" /> Change Password
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details