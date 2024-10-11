import logo from '../../assets/Logo/foodhouse.png'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
    return (
        <nav className='bg-[#FFF346] drop-shadow-md p-5 flex justify-between items-center'>
            <div className='ml-20'>
                <Link to="/Home">
                    <img
                        src={logo}
                        alt="Logo"
                        className='h-16 w-14 pt-1 transform scale-350'
                    />
                </Link>
            </div>
            <div className='mr-14'>
                <button className='duration-500 hover:bg-[#999999] transition-colors p-2 rounded-[4px] drop-shadow-lg'>
                    Sign out
                </button>
            </div>
        </nav>
    )
}

export default Navbar2