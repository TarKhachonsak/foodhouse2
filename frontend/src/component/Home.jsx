import { MdNoFood } from "react-icons/md";
import { FaGreaterThan } from 'react-icons/fa';
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Card1 from './Card/Card1';
import Card2 from './Card/Card2';
import Card3 from './Card/Card3';
import RecipeCard from "./Card/RecipeCard";

//หมวดหมู่
import main from '../assets/main.png'
import snack from '../assets/หมวดหมู่/Ellipse 29.png'
import morning from '../assets/หมวดหมู่/Ellipse 20.png'
import egg from '../assets/หมวดหมู่/egg.png'
import noodle from '../assets/หมวดหมู่/noodle.png'
import thaifood from '../assets/หมวดหมู่/thaifood.png'
import beef from '../assets/หมวดหมู่/beef.png'
import healthyfood from '../assets/หมวดหมู่/healtyfood.png'
import bergery from '../assets/หมวดหมู่/bergery.png'
import sweetfood from '../assets/หมวดหมู่/sweetfood.png'
import waterfood from '../assets/หมวดหมู่/waterfood.png'

// ยอดนิยม
import หมี่แห้งหมูแดง from '../assets/pexels-minan1398-698549.jpg'
import แพนเค้ก from '../assets/pexels-ash-craig-122861-376464.jpg'
import ซี่โครงลมควัน from '../assets/หลัก1/ซี่โครง.jpg'
import ของทอดสมัยเด็ก from '../assets/หลัก1/ของทอดสมัยเด็ก.jpg'
import เค้กครีมขนม from '../assets/หลัก1/เค้กซอสเบอร์รี่.jpg'
import ข้าวเหนียวมะม่วง from '../assets/หลัก1/ข้าวเหนียวมะม่วง.jpg'
import กะเพราหมูสับ from '../assets/หลัก1/กระเพราหมูสับ.jpg'

// อาหารเช้า
import ขนมปังพร้อมไข่ดาว from '../assets/หลัก2/ขนมปังพร้อมไข่ดาว.jpg'
import ขนมปังอะโว from '../assets/หลัก2/ขนมปังอะโว.jpg'
import แพนเค้กชีส from '../assets/หลัก2/แพนเค้กชีส.jpg'
import ไข่ดาวเบคอน from '../assets//หลัก2/ไข่ดาวเบคอน.jpg'
import อาหารเช้าสไตล์ยุโรป from '../assets/หลัก2/อาหารเช้าสไตล์ยุโรป.jpg'
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
  { src: waterfood, label: "เครื่องดื่ม" },
];

// รายการอาหารยอดนิยมตอนนี้
const items = [
  { src: หมี่แห้งหมูแดง, alt: "หมี่แห้งหมูแดง", title: "หมี่แห้งหมูแดง" },
  { src: แพนเค้ก, alt: "แพนเค้กราดซอสคาราเมล", title: "แพนเค้กราดซอสคาราเมล" },
  { src: ซี่โครงลมควัน, alt: "ซี่โครงลมควันความสุขตามใจ", title: "ซี่โครงลมควัน ความสุขตามใจ" },
  { src: ของทอดสมัยเด็ก, alt: "ของทอดสมัยเด็ก", title: "ของทอดสมัยเด็ก" },
  { src: เค้กครีมขนม, alt: "เค้กครีมซอสเบอร์รี่", title: "เค้กครีมซอสเบอร์รี่" },
  { src: ข้าวเหนียวมะม่วง, alt: "ข้าวเหนียวมะม่วง หวานฉ่ำ", title: "ข้าวเหนียวมะม่วง หวานฉ่ำ" },
  { src: กะเพราหมูสับ, alt: "กะเพราหมูสับสูตรคุณแม่", title: "กะเพราหมูสับสูตรคุณแม่" },
];

// รายการสูตรอาหารเช้า  
const items2 = [
  { src: ขนมปังพร้อมไข่ดาว, alt: "ขนมปังพร้อมไข่ดาว", title: "ขนมปังไข่ดาว" },
  { src: ขนมปังอะโว, alt: "ขนมปังอะโว", title: "อะโวคาโด คีโต" },
  { src: แพนเค้กชีส, alt: "แพนเค้กชีส", title: "แพนเค้กชีสหอมหวาน" },
  { src: ไข่ดาวเบคอน, alt: "ไข่ดาวเบคอน", title: "อาหารเช้าทำง่าย ๆ ที่บ้าน" },
  { src: อาหารเช้าสไตล์ยุโรป, alt: "อาหารเช้าสไตล์ยุโรป", title: "อาหารเช้าสไตล์ยุโรป" },
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
            <Card1 key={index} {...item} />
          ))}
        </div>
      </div>

      {/* แนะนำสูตรอาหารทำง่าย ๆ */}
      <div className='flex justify-start items-center mt-24 pb-4 ml-24 w-[26%]'>
        <div className='flex items-center w-full group'>
          <p className="text-3xl font-body group-hover:cursor-pointer ml-5">แนะนำสูตรอาหารเช้า</p>
          <FaGreaterThan className='ml-2 text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:cursor-pointer' />
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
      <div className="grid grid-cols-3 mx-[80px] gap-4 mb-24">
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