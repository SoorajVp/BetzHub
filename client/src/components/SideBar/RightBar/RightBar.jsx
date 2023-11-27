import promoImg from '../../../assets/screenshot-4-1@2x.png'
import AdsList from './AdsList'

const RightBar = () => {
  return (
    <div className='col-span-1 overflow-auto max-h-screen hidden lg:block py-2 pb-10 overflow-y-scroll'>
      <div className='w-full text-gray-800 bg-gray-100 rounded-xl'>
        <div className='flex justify-center bg-red-300 rounded-t-xl p-2 text-xs font-semibold'>
          Promotion
        </div>
        <div>
          <img src={promoImg} alt="Promo" className='w-full p-1' />
        </div>
      </div>

      <AdsList />

    </div>
  )
}

export default RightBar