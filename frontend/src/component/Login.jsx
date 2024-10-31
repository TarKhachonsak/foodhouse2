import { useState } from 'react';
import logo from '../assets/Logo/foodhouse.png';
import { FaStar, FaEye, FaEyeSlash } from "react-icons/fa";

import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));

        const updatedErrors = Validation({ ...values, [event.target.name]: event.target.value });
        setErrors(updatedErrors); // อัปเดตข้อผิดพลาดตามค่าใหม่
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));

    //     axios.post('http://localhost:8081/login', values)
    //         .then(res => {
    //             if (res.data.message === "Success") { // ตรวจสอบว่าเป็น res.data.message แทน res.data
    //                 navigate('/Home');
    //                 localStorage.setItem('userId', res.data.userId); // ส่ง userId ไปยังหน้า ProfilePage
    //             } else {
    //                 alert("No record existed");
    //             }
    //         }).catch(err => console.log(err));
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // เรียกใช้ Validation เพื่อดึงข้อผิดพลาด
        const validationErrors = Validation(values);
        setErrors(validationErrors);
    
        // ถ้าไม่มีข้อผิดพลาด ให้ส่งข้อมูลไปที่เซิร์ฟเวอร์
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    // console.log("res data = " + res.data);
                    if (res.data.message === "Success") {
                        // นำผู้ใช้ไปที่หน้า Home
                        navigate('/Home');
                        // เก็บ userId ใน localStorage
                        localStorage.setItem('userId', res.data.userId);
                        alert("เข้าสู่ระบบสำเร็จ!")
                    } else {
                        alert("No record existed");
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log("Validation failed:", validationErrors);
            alert("เข้าสู่ระบบไม่สำเร็จ!")
        }
    };
    console.log(values)
    

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-[#67AABE] overflow-hidden">
            <div className='w-[800px] h-[800px] bg-[#5985BA] rounded-full absolute z-0 -translate-y-96 translate-x-3/4 overflow-hidden'></div>
            <div className='w-[600px] h-[600px] bg-[#4663A2] rounded-full z-0 absolute -translate-x-full translate-y-2/3 overflow-hidden'></div>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:flex w-full md:max-w-4xl z-20">
                <div className="bg-[#FFF346] flex flex-col justify-between items-center w-full md:w-1/2 h-full p-6">
                    <div className='w-1/2 m-20 relative bottom-24 flex justify-center'>
                        <img src={logo} alt='Food House Logo' />
                    </div>
                    <div className='relative bottom-44 flex flex-col justify-center items-center flex-grow text-center'>
                        <div>
                            <FaStar className='text-[#FBB9B9] w-96 h-5 relative left-40 bottom-3' />
                        </div>
                        <h2 className="text-6xl font-bold text-shadow font-secular">Welcome !</h2>
                        <p className="text-center mb-4 text-sm font-secular">Log in to enjoy the new Food house and menu recipes.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-6 py-10">
                    <h2 className="text-4xl font-bold text-center mb-4 font-body">เข้าสู่ระบบ</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-body">อีเมล</label>
                            <input
                                type="email"
                                name='email'
                                value={values.email} // เพิ่ม value เพื่อควบคุม state
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.email && <span className='text-red-500 font-body'>{errors.email}</span>}
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-gray-700 font-body">รหัสผ่าน</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                value={values.password} // เพิ่ม value เพื่อควบคุม state
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <span
                                className="absolute right-3 top-9 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                            {errors.password && <span className='text-red-500 font-body'>{errors.password}</span>}
                        </div>

                        <div className='mb-4 text-right'>
                            <p className='text-xs font-bold hover:underline cursor-pointer font-body'>ลืมรหัสผ่าน ?</p>
                        </div>

                        <button
                            type='submit'
                            className="w-full font-body bg-[#FFF346] text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
                        >
                            เข้าสู่ระบบ
                        </button>

                        <button
                            className='font-body mt-4 w-full bg-[#5CD9FF] hover:bg-[#4AC4E6] text-black font-bold py-2 rounded-lg transition duration-300'
                            onClick={() => navigate('/Register')}
                            type="button"
                        >
                            สมัครสมาชิก
                        </button>

                        <div className='text-center mt-3'>
                            <p className='text-xs font-bold font-body'>คุณยังไม่มีบัญชี ?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
