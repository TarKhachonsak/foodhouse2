import main from '../assets/main.png'
import snack from '../assets/Ellipse 29.png'
import morning from '../assets/Ellipse 20.png'
import egg from '../assets/egg.png'
import noodle from '../assets/noodle.png'
import thaifood from '../assets/thaifood.png'
import beef from '../assets/beef.png'
import healthyfood from '../assets/healtyfood.png'
import bergery from '../assets/bergery.png'
import sweetfood from '../assets/sweetfood.png'
import waterfood from '../assets/waterfood.png'
import { MdNoFood } from "react-icons/md";


const categories = [
  { src: snack, label: "ของกินเล่น" },
  { src: morning, label: "อาหารเช้า" },
  { src: egg, label: "เมนูไข่" },
  { src: noodle, label: "เมนูเส้น" },
  { src: thaifood, label: "อาหารไทย" },
  { src: beef, label: "เมนูเนื้อ" },
  { src: healthyfood, label: "อาหารสุขภาพ" },
  { src: bergery, label: "เบเกอรี่" },
  { src: sweetfood, label: "ของหวาน" },
  { src: waterfood, label: "เมนูน้ำ" },
];

const Home = () => {
  return (
    <div>
      <div>
        <div className="mt-36 flex justify-center items-center">
          <img src={main} className=""></img>
        </div>
        <div className='flex justify-start mt-10 ml-28'>
          <MdNoFood className='ml-2 w-10 h-10 ' />
          <p className="text-3xl w-[95%] pt-4">หมวดหมู่</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className="bg-gradient-to-t from-[#FFB834] to-[#FFF346] w-[1300px] h-[97px] mt-4 rounded-[20px]">
            <div className="flex justify-between items-center py-3">
              {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <img
                    src={category.src}
                    alt={category.label}
                    className="transition ease-in-out duration-200 group-hover:scale-110 hover:scale-110 group-hover:shadow-md hover:shadow-md w-[55px] h-[55px] rounded-full cursor-pointer"
                  />
                  <p className="pt-1 transition ease-in-out duration-500 group-hover:text-shadow-md hover:text-shadow-md cursor-pointer">
                    {category.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hot now */}
        <p className="text-3xl ml-10 mt-10">hot now</p>
        <div className="grid grid-cols-6 ">
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[300px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
        </div>
        <p className="text-3xl ml-10 mt-10">แนะนำสูตรอาหารเมนูทำง่าย ๆ</p>
        <div className="grid grid-cols-6 ">
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[300px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
          <div className="bg-[#7E7E7E] flex mx-4 max-w-xs rounded-lg shadow-lg overflow-hidden">
            <div className=" w-[220px] h-[200px]">
              {/* img */}
              <div ></div>
              <div className="p-8">
                <h3 className="text-center text-lg font-semibold text-gray-800"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home