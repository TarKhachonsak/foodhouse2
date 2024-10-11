import Navbar2 from "./Navbar/Navbar2"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState({
    recipe_name: "",
    description: "",
    ingredient: "",
    how_to_cook: "",
  });
  const [image, setImage] = useState();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  //ดึงสูตรอาหารจากไอดี
  useEffect(() => {
    axios.get('http://localhost:8081/RecipeDetail/' + id)
      .then(res => {
        const data = res.data[0];
        console.log(data)
        setRecipeData({
          recipe_name: data.recipe_name || "",
          description: data.description || "",
          ingredient: data.ingredient || "",
          how_to_cook: data.how_to_cook || "",
        });
        setSelectedCategory(data.category_id);
        setImage(data.Image)
      })
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/categories')
      .then(response => {
        setCategories(response.data);
      }).catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFileName = encodeURIComponent(file.name);
      const newFile = new File([file], newFileName, { type: file.type });
      setImage(newFile);
    }
  }

  const handleCategorySelect = (event) => {
    const category_id = parseInt(event.target.value, 10);
    setSelectedCategory(category_id);
    // console.log("Selected category ID = " + category_id);
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('recipe_name', recipeData.recipe_name);
    formData.append('Image', image);
    formData.append('description', recipeData.description);
    formData.append('ingredient', recipeData.ingredient);
    formData.append('how_to_cook', recipeData.how_to_cook)
    formData.append('category_id', selectedCategory);

    if (image instanceof File) {
      formData.append('Image', image); // ถ้าอัปโหลดรูปใหม่ ให้ใช้ไฟล์ใหม่
    } else {
      formData.append('existingImage', image); // ใช้รูปภาพเดิมที่มาจากฐานข้อมูล
    }

    await axios.put('http://localhost:8081/EditRecipe/' + id, formData)
      .then(res => {
        console.log(res)
        alert('แก้ไขเมนูสำเร็จแล้ว!');
        navigate(`/RecipeDetail/${id}`);
      })
      .catch(err => {
        console.log(err)
        alert('แก้ไขเมนูไม่สำเร็จ!');
      });
  }
  console.log("category_id = " + selectedCategory)
  console.log("Image = " + image)
  console.log("recipe_name = " + recipeData.recipe_name)
  console.log("description = " + recipeData.description)
  console.log("ingredient = " + recipeData.ingredient)
  console.log("how_to_cook = " + recipeData.how_to_cook)
  console.log("recipe_data = " + JSON.stringify(recipeData, null, 2));

  return (
    <div>
      <Navbar2 />
      <div className='min-h-screen bg-gray-100 p-4'>
        <div className='max-w-4xl mx-auto bg-white w-full h-full rounded-lg shadow-md'>
          <div className='bg-[#FFFBC5] rounded-b-lg'>
            <Link to="/Recipe">
              <button className="bg-yellow-300 hover:bg-yellow-500 p-3 rounded-lg ml-5 mt-5">
                <p className="font-body">กลับไปยังหน้าเมนูของฉัน</p>
              </button>
            </Link>
            <p className="font-body text-4xl flex justify-center py-10">แก้ไขเมนู</p>
            <form onSubmit={handleEdit} className='ml-6 mr-6 pb-6'>
              {/* หมวดหมู่ */}
              <div className='mb-4'>
                <label className="block text-gray-700 font-body">เลือกหมวดหมู่</label>
                <select
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategorySelect}
                  className="font-body w-[30%]  border border-gray-300 p-2 rounded"
                >
                  <option className='font-body'>หมวดหมู่</option>
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
                  rows="6"
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
                  แก้ไข
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditRecipe