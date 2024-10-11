import Navbar2 from './Navbar/Navbar2';
import Navbar3 from './Navbar/Navbar3';
import profile from '../assets/Profile/profile.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [recipeData, setRecipeData] = useState({
    recipe_name: "",
    description: "",
    ingredient: "",
    how_to_cook: "",
  });
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState();
  const [selectedCategory, setSelectedCategory] = useState('');

  // ดึง userId จาก localStorage
  const userId = localStorage.getItem('userId');

  // Categorries
  useEffect(() => {
    axios.get('http://localhost:8081/api/categories')
      .then(response => {
        setCategories(response.data);
      }).catch(error => console.error('Error fetching categories:', error));
  }, []);

  //User
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8081/api/get_user_info?user_id=${userId}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          setError(error.response ? error.response.data.error : 'Error fetching data');
        });
    }
  }, [userId]);

  // const handleCategoryChange = (event) => {
  //   setCategories(prevData => ({
  //     ...prevData,
  //     category: event.target.value // เก็บค่า category ที่ถูกเลือก
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  //ส่ง data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('recipe_name', recipeData.recipe_name);
    formData.append('Image', image);
    formData.append('description', recipeData.description);
    formData.append('ingredient', recipeData.ingredient);
    formData.append('how_to_cook', recipeData.how_to_cook)
    formData.append('category_id', selectedCategory);
    await axios.post('http://localhost:8081/api/add_recipe', formData)
      .then(res => {
        console.log(res)
        alert('เพิ่มเมนูสำเร็จแล้ว!');
      })
      .catch(err => {
        console.log(err)
        alert('เพิ่มเมนูไม่สำเร็จ!');
      });
  }

  // Categories
  const handleCategorySelect = (event) => {
    const category_id = parseInt(event.target.value, 10);
    setSelectedCategory(category_id);
    // console.log("Selected category ID = " + category_id);
  }

  //Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFileName = encodeURIComponent(file.name);
      const newFile = new File([file], newFileName, { type: file.type });
      setImage(newFile);
    }
  }

  // console.log("category_id = " + selectedCategory)
  // console.log("Image = " + image)
  // console.log("recipe_name = " + recipeData.recipe_name)
  // console.log("description = " + recipeData.description)
  // console.log("ingredient = " + recipeData.ingredient)
  // console.log("how_to_cook = " + recipeData.how_to_cook)
  // console.log("recipe_data = " + JSON.stringify(recipeData, null, 2));


  return (
    <div>
      <Navbar2 />
      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : userData ? (
        <div className='min-h-screen bg-gray-100 p-4'>
          <div className='max-w-4xl mx-auto bg-white pt-6 w-full h-full rounded-lg shadow-md'>
            <div className='flex items-center'>
              <div className='w-36 h-36  ml-5'>
                <img
                  src={profile}
                  alt="Profile"
                  className='w-full h-full rounded-full object-cover'
                />
              </div>
              <div className='ml-1'>
                <p className='text-xl'>{userData.name}</p>
                <p className="text-gray-600 font-body">เข้าร่วมเมื่อ 23/05/2014</p>
              </div>
              <div>
                <button className='bg-[#999999] p-2 rounded-[6px] font-body '>
                  แก้ไขโปรไฟล์
                </button>
              </div>
            </div>

            <Navbar3 />

            <div className='bg-[#FFFBC5] rounded-b-lg'>
              <form onSubmit={handleSubmit} className='ml-6 mr-6 pt-6 pb-6'>
                {/* หมวดหมู่ */}
                <div className='mb-4'>
                  <label className="block text-gray-700 font-body">เลือกหมวดหมู่</label>
                  <select
                    name="category"
                    value={selectedCategory}
                    onChange={handleCategorySelect}
                    className="font-body w-[30%]  border border-gray-300 p-2 rounded"
                  >
                    <option value="" className='font-body'>หมวดหมู่</option>
                    {categories.map((category, index) => (
                      <option key={category.category_id || index} value={category.category_id} className='font-body'>
                        {category.category_type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* รูปภาพ*/}
                <div className="mb-4 ">
                  <label className="block  text-gray-700 font-body">รูปภาพ</label>
                  <input
                    type="file"
                    name="picture"
                    onChange={handleImageChange}
                    className="bg-white w-[50%] border border-gray-300 p-2 rounded"
                  />
                </div>

                {/* ชื่อสูตรอาหาร */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-body">ชื่อสูตรอาหาร</label>
                  <textarea
                    type="text"
                    name="recipe_name"
                    value={recipeData.recipe_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded resize-none font-body"
                  ></textarea>
                </div>

                {/* คำอธิบาย */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-body">คำอธิบาย</label>
                  <textarea
                    name="description"
                    value={recipeData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded resize-none font-body"
                    rows="10"
                  ></textarea>
                </div>

                {/* วัตถุดิบ */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-body">วัตถุดิบ</label>
                  <textarea
                    name="ingredient"
                    value={recipeData.ingredient}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded resize-none font-body"
                    rows="10"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-body">ขั้นตอนการทำอาหาร</label>
                  <textarea
                    name="how_to_cook"
                    value={recipeData.how_to_cook}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded resize-none font-body"
                    rows="10"
                  ></textarea>
                </div>

                
                  <div className='flex justify-center'>
                    <button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-600  text-white font-bold font-body py-2 px-4 mt-4 rounded w-1/2"
                    >
                      ยืนยัน
                    </button>
                  </div>
              
              </form>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProfilePage;