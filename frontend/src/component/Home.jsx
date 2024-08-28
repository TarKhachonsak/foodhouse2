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
import cupcake from '../assets/pexels-minan1398-698549.jpg'
import yogurt from '../assets/pexels-ash-craig-122861-376464.jpg'
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
import อื่นๆ1 from '../assets/pexels-pixabay-162993.jpg'
import อื่นๆ2 from '../assets/pexels-valeriya-842571.jpg'
import อื่นๆ3 from '../assets/pexels-xmtnguyen-699953.jpg'
import อื่นๆ4 from '../assets/pexels-dacapture-18765531.jpg'
import อื่นๆ5 from '../assets/pexels-markus-winkler-1430818-12481161.jpg'
import อื่นๆ6 from '../assets/pexels-markus-winkler-1430818-17760129.jpg'
import likeIcon from '../assets/iconfinder-hotfingerlikeawesometrendfire-3993858_112646 1.png'
import { MdNoFood } from "react-icons/md";
import { FaGreaterThan } from 'react-icons/fa';
import Navbar from './Navbar'
import Footer from './Footer'


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
  { src: แพนเค้กบลูเบอรี่, alt: "คัพเค้กครีมท็อปปิ้งผลไม้", title: "แพนเค้กบลูเบอรี่ 12 ชั้น" },
];

// รายการสูตรอาหารเมนูทำง่าย ๆ   
const items2 = [
  { src: สุกี้โรล, alt: "สุกี้โรล", title: "สุกี้โรลง่าย ๆ" },
  { src: หมูสามชั้น, alt: "หมูสามชั้น", title: "หมูสามชั้นทอดกระเทียม" },
  { src: ต้มจืดเกี๊ยวกุ้ง, alt: "ต้มจืดเกี๊ยวกุ้ง", title: "ต้มจืดเกี๊ยวกุ้งหมูสับ" },
  { src: ไข่ลูกเขย, alt: "ไข่ลูกเขย", title: "ไข่ลูกเขยง่าย ๆ ที่บ้าน" },
  { src: ไข่ยัดไส้, alt: "ไข่ยัดไส้", title: "ไข่ยัดไส้ ไม่ใช้น้ำมัน" },
  { src: ไข่ยัดไส้, alt: "ไข่ยัดไส้", title: "ไข่ยัดไส้ ไม่ใช้น้ำมัน" },
  { src: ไข่ยัดไส้, alt: "ไข่ยัดไส้", title: "ไข่ยัดไส้ ไม่ใช้น้ำมัน" },
]

const items3 = [
  { src: ไก่ผัดพริกเสฉวน, alt: "ไก่ผัดพริกเสฉวน", title: "ไก่ผัดพริกเสฉวน" },
  { src: น้ำพริกยำกุ้งสด, alt: "น้ำพริกยำกุ้งสด", title: "น้ำพริกยำกุ้งสด" },
  { src: เห็ดเข็มทองทอดเกลือ, alt: "เห็ดเข็มทองทอดเกลือ", title: "เห็ดเข็มทองทอดเกลือ" },
  { src: ห่อหมกปลาช่อน, alt: "ห่อหมกปลาช่อน", title: "ห่อหมกปลาช่อน" },
  { src: ปลาแซลม่อนทอดมะขาม, alt: "ปลาช่อนทอดมะขาม", title: "ปลาแซลม่อนทอดมะขาม" },
  { src: ปลาแซลม่อนทอดมะขาม, alt: "ปลาช่อนทอดมะขาม", title: "ปลาแซลม่อนทอดมะขาม" },
  { src: ปลาแซลม่อนทอดมะขาม, alt: "ปลาช่อนทอดมะขาม", title: "ปลาแซลม่อนทอดมะขาม" },
]

const recipes = [
  {
    title: "ตำปูม้า แซ่บ ๆ",
    description: "สัมผัสรสชาติสุดแซ่บของตำปูม้าสด ๆ ราดด้วยน้ำปลาร้าหอม ๆ พริกขี้หนูสดรสเผ็ดถึงใจ",
    imgSrc: อื่นๆ1,
  },
  {
    title: "อกไก่นึ่งซอสมายองเนส",
    description: "อกไก่นุ่ม ๆ นึ่งจนสุกหอม ราดด้วยซอสมายองเนสเข้มข้น พร้อมเสิร์ฟความอร่อยแบบเฮลท์ตี้",
    imgSrc: อื่นๆ2,
  },
  {
    title: "ก๋วยเตี๋ยวต้มยำจุ้ง",
    description: "เส้นก๋วยเตี๋ยวเหนียวนุ่ม น้ำซุปต้มยำรสชาติจัดจ้านกับกุ้งสดตัวใหญ่ เคล้ารสชาติแบบไทยแท้",
    imgSrc: อื่นๆ3,
  },
  {
    title: "ต้มยำกุ้งสูตรคุณยาย",
    description: "ต้มยำกุ้งสูตรต้นตำรับของคุณยาย น้ำซุปเข้มข้น หอมกลิ่นสมุนไพร รสชาติเปรี้ยว เผ็ด",
    imgSrc: อื่นๆ4,
  },
  {
    title: "ผัดไททะเล กลมกล่อม",
    description: "ผัดไทเส้นจันท์เหนียวนุ่ม ผัดเข้ากับซีฟู้ดสดใหม่ รสชาติเข้มข้นกลมกล่อม",
    imgSrc: อื่นๆ5,
  },
  {
    title: "ไก่ทอดสมุนไพร",
    description: "ไก่ทอดกรอบนอกนุ่มใน คลุกเคล้ากับสมุนไพรสดใหม่หอมกรุ่น ทานกับข้าวสวยร้อน ๆ",
    imgSrc: อื่นๆ6,
  },
];

// eslint-disable-next-line react/prop-types
const Card = ({ src, alt, title }) => (
  <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden ml-1 mr-1">
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
  <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden ml-1 mr-1">
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
  <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden ml-1 mr-1">
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
const RecipeCard = ({ imgSrc, title, description }) => (
  <div className="max-w-sm rounded-lg overflow-hidden mb-12">
    <img
      src={imgSrc}
      alt={title}
      className="w-[380px] h-[250px] object-cover rounded-b-lg"
    />
    <div className="pt-4">
      <h3 className="text-xl font-bold mb-2 font-body">{title}</h3>
      <p className="text-gray-400 mb-4 font-body">{description}</p>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-body">
        ดูเพิ่มเติม
      </button>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className='bg-custom-gradient'>
      <Navbar />
      <div className="flex justify-center items-center">
        <img src={main} className=""></img>
      </div>
      <div className='flex justify-start mt-24 ml-28'>
        <MdNoFood className='ml-2 w-10 h-10' />
        <p className="text-3xl w-[95%] pt-4 font-body">หมวดหมู่</p>
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
                <p className="pt-1 transition ease-in-out duration-500 group-hover:text-shadow-md hover:text-shadow-md cursor-pointer font-body">
                  {category.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ยอดนิยมตอนนี้ */}
      <div className='flex justify-start items-center mt-24 pb-4  ml-24 w-[21%]'>
        <div className='flex items-center w-full group'>
          <img src={likeIcon} alt="" className='ml-2 mr-3' />
          <p className="text-3xl font-body group-hover:cursor-pointer">ยอดนิยมตอนนี้</p>
          <FaGreaterThan className='text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:cursor-pointer' />
        </div>
      </div>
      <div className="snap-x overflow-x-auto flex mx-28 gap-4">
        <div className='snap-start flex gap-6 pb-5'>
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>

      {/* แนะนำสูตรอาหารทำง่าย ๆ */}
      <div className='flex justify-start items-center mt-24 pb-4 ml-24 w-[26%]'>
        <div className='flex items-center w-full group'>
          <p className="text-3xl font-body group-hover:cursor-pointer ml-5">แนะนำสูตรอาหารทำง่าย ๆ</p>
          <FaGreaterThan className='text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:cursor-pointer' />
        </div>
      </div>
      <div className="snap-x overflow-x-auto flex mx-28 gap-4">
        <div className='snap-start flex gap-6 pb-5'>
          {items2.map((item, index) => (
            <Card2 key={index} {...item} />
          ))}
        </div>
      </div>
      
      {/* สูตรยอดนิยมจากทางบ้าน */}
      <div className='flex justify-start items-center mt-24 pb-4 ml-24 w-[26%]'>
        <div className='flex items-center w-full group'>
          <p className="text-3xl font-body group-hover:cursor-pointer ml-5">สูตรยอดนิยมจากทางบ้าน</p>
          <FaGreaterThan className='text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:cursor-pointer' />
        </div>
      </div>
      <div className="snap-x overflow-x-auto flex mx-28 gap-4">
        <div className='snap-start flex gap-6 pb-5'>
          {items3.map((item, index) => (
            <Card3 key={index} {...item} />
          ))}
        </div>
      </div>

      {/* แนะนำสูตรอาหารอื่น ๆ */}
      <p className='text-3xl ml-28 mt-24 font-body pb-4'>สูตรอาหารอื่น ๆ</p>
      <div className="grid grid-cols-3 mx-[80px] gap-4">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            imgSrc={recipe.imgSrc}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home