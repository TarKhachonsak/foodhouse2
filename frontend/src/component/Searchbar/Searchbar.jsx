import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
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
  )
}

export default Searchbar