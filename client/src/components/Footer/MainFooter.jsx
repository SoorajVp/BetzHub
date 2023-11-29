import PaymentIcons from '../../assets/payment-icon-group.svg'
import logo from '../../assets/5_1.png'

const MainFooter = () => {
  return (
      <div className='md:grid md:grid-cols-3 gap-4 py-8 px-5 md:mx-10 flex flex-col text-white'>
          <div className='flex flex-col text-xs gap-3'>
             
              <h3>run567.co is Asia’s one of the biggest gaming platforms with over 350 games and sports available.</h3>
              <h3>Popular sports such as Cricket, Tennis, Football, Basketball, Volleyball and many more including Indian card games like Teen Patti and Andar Bahar are also available from various worldwide gaming providers.</h3>
              <h3>With unlimited markets and odds, run567.co gives players the best gaming experience in the market.</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-center'>
              <img src={logo} alt="Logo" className='w-14' />
            </div>
            <div className='text-center'>

              <h2 className='text-sm font-bold'>100% Safe & Instant Payments</h2>
              <h3 className='text-xs'>You can make payments and receive earnings instantly via your UPI ID - so you can be sure that your money is safe and secure. All UPI platforms are accepted.</h3>
            </div>
          </div>
          <div className='flex flex-col gap-3 text-center text-xs'>
              <h2 className='text-sm font-bold'>Accepted Modes Of Payments</h2>
              <img src={PaymentIcons} alt="Payment" className='h-20' />
              <div className='flex flex-col justify-center text-center gap-2 w-full'>
                  <h2 className='font-bold text-sm'>Contact Us</h2>
                  <h3 className='text-gray-500'>Whatsapp :918618521090</h3>
                  <h3 className='text-gray-500'>Calling  :918037244677</h3>

              </div>
          </div>
      </div>
  )
}

export default MainFooter