import RegisterIcon from '../../assets/fluentnotepadedit16regular.svg'
import VerifyIcon from '../../assets/charmcircletick.svg'
import WalletIcon from '../../assets/wallet3line.svg'
import TrophyIcon from '../../assets/fetrophy.svg'
import UserModal from '../Modals/Modal'
import { useState } from 'react'
import SignUp from '../Modals/SignUp'

const ButtonList = [
  { value: 'Register', icon: RegisterIcon },
  { value: 'Verify', icon: VerifyIcon },
  { value: 'Deposit', icon: WalletIcon },
  { value: 'Win', icon: TrophyIcon },
]

const ButtonsRaw = () => {
  const [signInModal, setSignInModal] = useState(false);

  const openSignInModal = () => {
    setSignInModal(true);
  };

  const closeSignInModal = () => {
    setSignInModal(false);
  };

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 md:mt-4 text-white'>
      {
        ButtonList?.map((item) =>
          <div onClick={openSignInModal} className='flex justify-center items-center bg-primary m-1 mx-5 xl:mx-20 rounded-md' key={item?.value}>
            <div className='flex text-white my-2 md:mx-10 text-sm'>
              <img src={item?.icon} alt="Icon" className='w-5' />
              <h2 className='pl-2'>{item?.value}</h2>
            </div>
          </div>
        )
      }
      <UserModal isOpen={signInModal} closeModal={closeSignInModal}>
        <SignUp />
      </UserModal>
    </div>
  )
}

export default ButtonsRaw;