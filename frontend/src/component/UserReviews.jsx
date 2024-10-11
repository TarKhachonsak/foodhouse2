import Navbar2 from './Navbar/Navbar2';
import Navbar3 from './Navbar/Navbar3';
import profile from '../assets/Profile/profile.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserReviews = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

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
  
  return (
    <div>
      <Navbar2 />
      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : userData ? (
        <div className='min-h-screen bg-gray-100 p-4 '>
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
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UserReviews