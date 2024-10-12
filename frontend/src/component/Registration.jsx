import logo from '../assets/Logo/foodhouse.png'
import { FaStar, FaEye, FaEyeSlash } from "react-icons/fa";
import Validation from './RegisterValidation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Registration = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))

        const updatedErrors = Validation({ ...values, [event.target.name]: event.target.value });
        setErrors(updatedErrors); // อัปเดตข้อผิดพลาดตามค่าใหม่
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     console.log(values);
    //     axios.post('http://localhost:8081/Register', values)
    //         .then(() => {
    //             console.log("Success!");
    //             navigate('/')
    //         }).catch(err => console.log(err))
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        // ตรวจสอบข้อมูลก่อนที่จะส่งไปยังเซิร์ฟเวอร์
        const validationErrors = Validation(values);
        setErrors(validationErrors); // กำหนดข้อผิดพลาดให้ state

        // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
        if (Object.keys(validationErrors).length === 0) {
            // หากไม่มีข้อผิดพลาด ส่งข้อมูลไปยังเซิร์ฟเวอร์
            axios.post('http://localhost:8081/Register', values)
                .then(() => {
                    console.log("Success!");
                    navigate('/'); // นำไปยังหน้าอื่นเมื่อสำเร็จ
                })
                .catch(err => console.log(err));
        } else {
            console.log("Validation errors:", validationErrors);
            // ข้อผิดพลาดจะถูกแสดงบนฟอร์ม ไม่ทำการส่งข้อมูล
        }
    };


    return (
        <div className="relative flex justify-center items-center min-h-screen bg-[#67AABE] overflow-hidden">
            <div className='w-[800px] h-[800px] bg-[#5985BA] rounded-full absolute z-0 -translate-y-96 translate-x-3/4 overflow-hidden'></div>
            <div className='w-[600px] h-[600px] bg-[#4663A2] rounded-full z-0 absolute -translate-x-full translate-y-2/3 overflow-hidden'></div>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:flex w-full md:max-w-4xl z-20">
                <div className='bg-[#FFF346] flex flex-col justify-between items-center w-full md:w-1/2 h-full py-6'>
                    <div className='w-1/2 m-40 relative bottom-32 flex justify-center'>
                        <img src={logo} alt='Food House Logo' />
                    </div>
                    <div className='relative bottom-60 flex flex-col justify-center items-center flex-grow text-center'>
                        <div>
                            <FaStar className='text-[#FBB9B9] w-96 h-5 relative left-40 bottom-3' />
                        </div>
                        <h2 className="text-6xl font-bold text-shadow font-secular">Welcome !</h2>
                        <p className="text-center mb-4 text-sm font-secular">Log in to enjoy the new Food house and menu recipes.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-6 py-10 h-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 font-body">สมัครสมาชิก</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-body">ชื่อ</label>
                            <input
                                type="text"
                                name='name'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.name && <span className='text-red-500 text-sm font-body'>{errors.name}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-body">อีเมล</label>
                            <input
                                type="email"
                                name='email'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.email && <span className='text-red-500 text-sm font-body'>{errors.email}</span>}
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-gray-700 font-body">รหัสผ่าน</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <span
                                className="absolute right-3 top-9 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            {errors.password && <span className='text-red-500 text-sm font-body'>{errors.password}</span>}
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-gray-700 font-body">ยืนยันรหัสผ่าน</label>
                            <input
                                 type={showConfirmPassword ? "text" : "password"}
                                name='confirmPassword'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <span
                                className="absolute right-3 top-9 cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            {errors.confirmPassword && <span className='text-red-500 text-sm font-body'>{errors.confirmPassword}</span>}
                        </div>

                        <button type='submit' className="w-full font-body bg-[#FFF346] text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition duration-300">
                            สมัครสมาชิก
                        </button>

                        <button
                            type='submit'
                            className='font-body mt-4 p w-full bg-[#5CD9FF] hover:bg-[#4AC4E6] text-black font-bold py-2 rounded-lg transition duration-300'
                            onClick={() => navigate('/')}
                        >
                            เข้าสู่ระบบ
                        </button>

                        <div className='text-center mt-3'>
                            <p className='text-xs font-bold font-body'>มีบัญขีอยู่แล้วหรือไม่ ?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;
