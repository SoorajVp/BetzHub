import qrCode from '../../assets/QR-code.png'
import paymentIcon from '../../assets/payment-icon-group.svg'

const Wallet = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <h2 className='text-center font-semibold text-lg pb-3'>Scan this QR-Code</h2>
                <div className='flex justify-center'>
                    <img src={qrCode} alt="QR-Code" className='w-[60%]' />
                </div>
                <div className='flex justify-center'>
                    <img src={paymentIcon} alt="Payment" className='w-[50%] pb-3' />
                </div>
            </div>
        </div>
    )
}

export default Wallet