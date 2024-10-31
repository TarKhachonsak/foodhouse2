import Navbar2 from './Navbar/Navbar2';
import Navbar3 from './Navbar/Navbar3';
import profile from '../assets/Profile/profile.jpg';
import { FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [recipe, setRecipes] = useState([]); //Recipe

  // ดึง userId จาก localStorage
  const userId = localStorage.getItem('userId');

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

  //GetRecipes
  useEffect(() => {
    axios.get('http://localhost:8081/api/get_recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        setError(error.response ? error.response.data.error : 'Error fetching recipes');
      });
  }, []);

  // deleteRecipe
  const handleDelete = (id) => {
    if (window.confirm("คุณต้องการลบสูตรอาหารนี้หรือไม่?")) { // เพิ่มการยืนยันก่อนลบ
      axios.delete('http://localhost:8081/Delete/' + id)
        // eslint-disable-next-line no-unused-vars
        .then(response => {
          // กรองรายการที่ถูกลบออกจาก state
          setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.recipe_id !== id));
          alert('ลบเมนูสำเร็จแล้ว!');
        })
        .catch(error => {
          setError(error.response ? error.response.data.error : 'Error deleting recipe');
        });
    }
  };
  
  
  return (
    <div>
      <Navbar2 />
      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : userData ? (
        <div className='min-h-screen bg-gray-100 p-4 '>
          <div className='max-w-6xl mx-auto bg-white pt-6 w-full h-full rounded-lg shadow-md'>
            <div className='flex items-center'>
              <div className='w-36 h-36 ml-5'>
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
            <div className='bg-[#FFFBC5] rounded-b-lg py-6 px-6 grid gap-8 grid-cols-4'>
              {recipe.map((recipe) => (
                <div key={recipe.recipe_id} className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden ml-1 mr-1">
                  <img src={`http://localhost:8081/images/` + recipe.Image} className="w-full h-[200px] object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{recipe.recipe_name}</h3>
                    <p className="text-gray-400">{userData.name}</p>
                  </div>
                  <div className="mt-4 mx-3 relative">
                    <div className='absolute'>
                      <Link to={`/RecipeDetail/${recipe.recipe_id}`}>
                        <button className="bg-yellow-500 text-white py-2 px-3 rounded-lg shadow hover:bg-yellow-600 transition duration-300">
                          <p className='font-body'>ดูเพิ่มเติม</p>
                        </button>
                      </Link>
                    </div>
                    <div className='absolute left-24 ml-3'>
                      <Link to={`/EditRecipe/${recipe.recipe_id}`}>
                        <button className='bg-slate-300 hover:bg-slate-400 py-2 px-2 rounded-lg transition duration-300'>
                          <p className='font-body'>แก้ไข</p>
                        </button>
                      </Link>
                    </div>
                    <div className='absolute right-1 ml-1'>
                      <Link>
                        <button onClick={ () => handleDelete(recipe.recipe_id) } className='bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded-lg flex transition duration-300'>
                          <FaRegTrashAlt />
                          <p className='font-body ml-1'>ลบ</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )
      }
    </div >
  );
}

export default Recipe