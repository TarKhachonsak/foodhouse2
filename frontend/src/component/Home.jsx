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
import cupcake from '../assets/cupcake.png'
import yogurt from '../assets/yogurt.png'
import ซี่โครงลมควัน from '../assets/ซี่โครงลมควัน.png'
import ของทอดสมัยเด็ก from '../assets/ของทอดสมัยเด็ก.png'
import เค้กครีมขนม from '../assets/เค้กครีมขนมปัง.png'
import แพนเค้กบลูเบอรี่ from '../assets/แพนเค้กบลูเบอรี่.png'
import สุกี้โรล from '../assets/ชาบู.png'
import หมูสามชั้น from '../assets/สามชั้นทอดกระเทียม.png'
import ต้มจืดเกี๊ยวกุ้ง from '../assets/ต้มจืดเกี๊ยวกุ้ง.png'
import ไข่ลูกเขย from '../assets/ไข่ลูกเขย.png'
import ไข่ยัดไส้ from '../assets/ไข่ยัดไส้.png'
import ไก่ผัดพริกเสฉวน from '../assets/ไก่ผัดพริกเสฉวน.png'
import น้ำพริกยำกุ้งสด from '../assets/น้ำพริกยำกุ้งสด.png'
import เห็ดเข็มทองทอดเกลือ from '../assets/เห็ดเข็มทองทอดกรอบ.png'
import ห่อหมกปลาช่อน from '../assets/ห่อหมกปลาช่อน.png'
import ปลาแซลม่อนทอดมะขาม from '../assets/ปลาแซลมอนทอดมะขาม.png'
import ดูเพิ่มติม from '../assets/ดูเพิ่มเติม.jpeg'
import ดูเพิ่มติม2 from '../assets/ดูเพิ่มเติม2.jpeg'
import { MdNoFood } from "react-icons/md";

// หมวดหมู่
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

// รายการอาหารยอดนิยมตอนนี้
const items = [
  { src: cupcake, alt: "คัพเค้กครีมท็อปปิ้งผลไม้", title: "คัพเค้กครีมท็อปปิ้งผลไม้" },
  { src: yogurt, alt: "โยเกิร์ตผลไม้โฮมเมด", title: "โยเกิร์ตผลไม้โฮมเมด" },
  { src: ซี่โครงลมควัน, alt: "ซี่โครงลมควันความสุขตามใจ", title: "ซี่โครงลมควัน ความสุขตามใจ" },
  { src: ของทอดสมัยเด็ก, alt: "ของทอดสมัยเด็ก", title: "ของทอดสมัยเด็ก" },
  { src: เค้กครีมขนม, alt: "เค้กครีมขนมปังอย่างกับปุยเมฆ", title: "เค้กครีมขนมปังอย่างกับปุยเมฆ" },
  { src: แพนเค้กบลูเบอรี่, alt: "คัพเค้กครีมท็อปปิ้งผลไม้", title: "แพนเค้กบลูเบอรี่ 12 ชั้น" },
];

// รายการสูตรอาหารเมนูทำง่าย ๆ   
const items2 = [
  { src: สุกี้โรล, alt: "สุกี้โรล", title: "สุกี้โรลง่าย ๆ" },
  { src: หมูสามชั้น, alt: "หมูสามชั้น", title: "หมูสามชั้นทอดกระเทียม" },
  { src: ต้มจืดเกี๊ยวกุ้ง, alt: "ต้มจืดเกี๊ยวกุ้ง", title: "ต้มจืดเกี๊ยวกุ้งหมูสับ" },
  { src: ไข่ลูกเขย, alt: "ไข่ลูกเขย", title: "ไข่ลูกเขยง่าย ๆ ที่บ้าน" },
  { src: ไข่ยัดไส้, alt: "ไข่ยัดไส้", title: "ไข่ยัดไส้ ไม่ใช้น้ำมัน" },

]

const items3 = [
  { src: ไก่ผัดพริกเสฉวน, alt: "ไก่ผัดพริกเสฉวน", title: "ไก่ผัดพริกเสฉวน" },
  { src: น้ำพริกยำกุ้งสด, alt: "น้ำพริกยำกุ้งสด", title: "น้ำพริกยำกุ้งสด" },
  { src: เห็ดเข็มทองทอดเกลือ, alt: "เห็ดเข็มทองทอดเกลือ", title: "เห็ดเข็มทองทอดเกลือ" },
  { src: ห่อหมกปลาช่อน, alt: "ห่อหมกปลาช่อน", title: "ห่อหมกปลาช่อน" },
  { src: ปลาแซลม่อนทอดมะขาม, alt: "ปลาช่อนทอดมะขาม" , title: "ปลาแซลม่อนทอดมะขาม"}
]

// eslint-disable-next-line react/prop-types
const Card = ({ src, alt, title }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
    <div className="relative">
      <img src={src} alt={alt} className="w-full h-[200px] object-cover" />
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent w-full h-full opacity-75"></div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[170px] font-body">
        {title}
      </h3>
      <p className='text-gray-400'>Nongtra ict</p>
      <div className="mt-4">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-body">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const Card2 = ({ src, alt, title }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
    <div className="relative">
      <img src={src} alt={alt} className="w-full h-[200px] object-cover" />
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent w-full h-full opacity-75"></div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[170px] font-body">
        {title}
      </h3>
      <p className='text-gray-400'>Nongtra ict</p>
      <div className="mt-4">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-body">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const Card3 = ({ src, alt, title }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
    <div className="relative">
      <img src={src} alt={alt} className="w-full h-[200px] object-cover" />
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent w-full h-full opacity-75"></div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[170px] font-body">
        {title}
      </h3>
      <p className='text-gray-400'>Nongtra ict</p>
      <div className="mt-4">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-body">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className='my-36'>
      <div className="flex justify-center items-center">
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

      {/* ยอดนิยมตอนนี้ */}
      <p className="text-3xl ml-28 mt-10 font-body">ยอดนิยมตอนนี้</p>
      <div className="grid grid-cols-6 mx-28 gap-4">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {/* แนะนำสูตรอาหารทำง่าย ๆ */}
      <p className='text-3xl ml-28 mt-10 font-body'>แนะนำสูตรอาหารทำง่าย ๆ</p>
      <div className='grid grid-cols-6 mx-28 gap-4'>
        {items2.map((item, index) => (
          <Card2 key={index} {...item} />
        ))}
        <div className='relative group w-full h-[340px] rounded-lg overflow-hidden cursor-pointer'>
          <img src={ดูเพิ่มติม} className='w-full h-[340px] object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-gradient-radial from-transparent to-gray-800 group-hover:opacity-70' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-white text-2xl font-semibold duration-300 group-hover:scale-110 group-hover:text-shadow-lg'>
              ดูเพิ่มเติม
            </span>
          </div>
        </div>
      </div>

      {/* สูตรอาหารยอดนิยมจากทางบ้าน */} 
      <p className='text-3xl ml-28 mt-10 font-body'>สูตรอาหารยอดนิยมจากทางบ้าน</p>
      <div className='grid grid-cols-6 mx-28 gap-4'>
        {items3.map((item, index) => (
          <Card3 key={index} {...item} />
        ))}
        <div className='relative group w-full h-[340px] rounded-lg overflow-hidden cursor-pointer'>
          <img src={ดูเพิ่มติม2} className='w-full h-[340px] object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-gradient-radial from-transparent to-gray-800 group-hover:opacity-70' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-white text-2xl font-semibold duration-300 group-hover:scale-110 group-hover:text-shadow-lg'>
              ดูเพิ่มเติม
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home