import logo from '../assets/Logo/foodhouse.png'
import { FaFacebookF} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';

const Footer = () => {
    return (
        <>
            <footer className='bg-[#93B0F1] shadow-drop-top flex justify-between items-center p-6'>
                <div className='flex flex-col ml-10 mt-10'>
                    <img
                        src={logo}
                        alt="Food House Logo"
                        className='h-20 w-20 mb-4 transform scale-350'
                    />
                    <ul className='text-black space-y-2 ml-10'>
                        <li className='font-bold font-body list-disc'>ร่วมงานกับเรา</li>
                        <li className='font-bold font-body list-disc'>แจ้งปัญหา</li>
                        <li className='font-bold font-body list-disc'>ข้อกำหนดและการใช้งาน</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center mr-14'>
                    <span className='text-black font-bold mb-4'>Follow us</span>
                    <div className='flex space-x-7'>
                        <a
                            href="https://facebook.com"
                            className='text-black h-10 w-10 flex items-center justify-center'
                        >
                            <FaFacebookF size={32} />
                        </a>
                        <a
                            href="https://twitter.com"
                            className='text-black h-10 w-10 flex items-center justify-center'
                        >
                            <FaTwitter size={32} />
                        </a>
                        <a
                            href="https://line.me"
                            className='text-black h-10 w-10 flex items-center justify-center'
                        >
                            <SiLine size={32} />
                        </a>
                    </div>
                        <hr className='w-40 mt-4 border-t border-black' />
                </div>
            </footer>
        </>
    )
}

export default Footer