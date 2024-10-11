import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Navbar2 from "./Navbar/Navbar2"
import Footer from "./Footer"

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState([])
  const [categories, setCategories] = useState([]);
  const [userData, setUserData] = useState(null);

  const userId = localStorage.getItem('userId');


  useEffect(() => {
    axios.get('http://localhost:8081/RecipeDetail/' + id)
      .then(res => {
        // console.log(res)
        setRecipeDetail(res.data[0])
      })
      .catch(err => console.log(err))
  })

  useEffect(() => {
    axios.get('http://localhost:8081/api/categories')
      .then(response => {
        // console.log(response)
        setCategories(response.data);  // เก็บข้อมูล category
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8081/api/get_user_info?user_id=${userId}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          return error
        });
    }
  }, [userId]);

  const getCategoryType = (category_id) => {
    const category = categories.find(cat => cat.category_id === category_id);
    // console.log(category)
    return category ? category.category_type : 'ไม่ทราบประเภท'
  };

  return (
    <div>
      <Navbar2 />
      <div className="min-h-screen bg-custom-gradient2 p-4">
        <div className="max-w-6xl mx-auto mb-24 bg-white w-full h-full rounded-lg shadow-md">
          <div className="mx-24 py-12">
            {/* <h2>{recipeDetail.recipe_id}</h2> */}
            <div className="flex justify-between relative mb-12">
              <Link to="/Recipe">
                <button className="bg-yellow-300 hover:bg-yellow-500 p-3 rounded-lg absolute top-0 left-0">
                  <p className="font-body">กลับไปยังหน้าเมนูของฉัน</p>
                </button>
              </Link>
              <Link to={`/EditRecipe/${recipeDetail.recipe_id}`}>
                <button className="bg-slate-300 hover:bg-slate-400 p-3 rounded-lg absolute top-0 right-0">
                  <p className="font-body">แก้ไข</p>
                </button>
              </Link>
            </div>
            <h2 className="flex justify-center font-body text-3xl pb-3">{recipeDetail.recipe_name}</h2>
            <img className="w-[360px] h-[280px]" src={`http://localhost:8081/images/` + recipeDetail.Image}></img>
            <div className="my-8">
              <p className="font-bold text-xl font-body">คำอธิบาย</p>
              <h2 className="text-balance whitespace-pre-line font-body text-black/75 py-1">{recipeDetail.description}</h2>
            </div>

            <div className="my-8">
              <p className="font-bold text-xl font-body">หมวดหมู่</p>
              <h2 className="bg-slate-200 w-52 flex justify-center rounded-full p-1 my-1 font-body text-black/75 ">{getCategoryType(recipeDetail.category_id)}</h2>
            </div>

            <div className="my-8">
              <p className="font-bold text-xl font-body">วัตถุดิบ</p>
              <h2 className="text-balance whitespace-pre-line font-body text-black/75 list-outside py-1">{recipeDetail.ingredient}</h2>
            </div>

            <div className="my-8">
              <p className="font-bold text-xl font-body">ขั้นตอนการทำอาหาร</p>
              <h2 className="text-balance whitespace-pre-line font-body text-black/75 list-outside py-1">{recipeDetail.how_to_cook}</h2>
            </div>

            <div className="mt-24 flex justify-center">
              <p className="bg-white border-black border-2 w-52 flex justify-center rounded-full p-1 font-body">ผู้สร้างสูตรอาหาร</p>
            </div>

            <div className="my-2">
              <p className="text-black flex justify-center text-2xl font-body">
                {userData && userData.name}
              </p>
            </div>

            {/* button */}
            <div className="flex justify-center">



            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipeDetail