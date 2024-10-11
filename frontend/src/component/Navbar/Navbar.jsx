import {  FaBell, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import logo from '../../assets/Logo/foodhouse.png'
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
    return (
        <>
            <nav className="bg-[#FFF346] drop-shadow-md p-5 mb-12 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex flex-col items-center ml-20">
                    <img
                        src={logo}
                        alt="Food House Logo"
                        className="h-16 w-14 mr-20 pt-1 transform scale-350"
                    />
                </div>

                {/* Search Bar */}
                
                <Searchbar />

                {/* Icons Section */}
                <div className="flex items-center space-x-10 mr-20">
                    <button className="relative focus:outline-none duration-500 hover:bg-[#999999] transition-colors p-2 rounded-[12%] drop-shadow-lg">
                        <FaBell className="text-black text-2xl" />
                        <div className="w-5 h-5 text-white bg-red-500 rounded-[100%] flex items-center justify-center absolute top-[-2px] right-[-2px]">2</div>
                    </button>
                    <button className="relative focus:outline-none duration-500 hover:bg-[#999999] transition-colors p-2 rounded-[12%] drop-shadow-lg">
                        <IoIosMail className="text-black text-2xl" />
                        <div className="w-5 h-5 text-white bg-red-500 rounded-[100%] flex items-center justify-center absolute top-[-2px] right-[-2px]">2</div>
                    </button>
                    <button className="relative focus:outline-none duration-500 hover:bg-[#999999] transition-colors p-2 rounded-[12%] drop-shadow-lg">
                        <Link to="/Profile">
                            <FaUser className="text-black text-2xl" />
                            <div className="w-5 h-5 text-white bg-red-500 rounded-[100%] flex items-center justify-center absolute top-[-2px] right-[-2px]">2</div>
                        </Link>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar