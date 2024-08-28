import { FaSearch, FaBell, FaClipboard, FaUser } from "react-icons/fa";
import logo from '../assets/foodhouse.png'

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
                <div className="flex-grow mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="ชื่อเมนู / ส่วนประกอบ / หมวดหมู่"
                            className="w-[50%] pl-10 pr-4 py-2 rounded-md shadow text-gray-700 focus:outline-none font-body"
                        />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaSearch className="" />
                        </span>
                    </div>
                </div>

                {/* Icons Section */}
                <div className="flex items-center space-x-10 mr-20">
                    <button className="focus:outline-none ">
                        <FaBell className="text-black h-6 w-6" />
                    </button>
                    <button className="focus:outline-none ">
                        <FaClipboard className="text-black h-6 w-6" />
                    </button>
                    <button className="focus:outline-none ">
                        <FaUser className="text-black h-6 w-6" />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar