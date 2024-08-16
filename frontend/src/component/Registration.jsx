import logo from '../assets/foodhouse.png'
import { FaStar } from "react-icons/fa";
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

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log(values);
        // console.log(errors.name);
        // console.log(errors.email);
        // console.log(errors.password);
        // console.log(errors.confirmPassword);
        // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.confirmPassword === "") {
        //     console.log("Something")
            axios.post('http://localhost:8081/Register', values).then(() => {
                console.log("Success!");
                navigate('/')
            }).catch(err => console.log(err))
        // } else {
        //     console.log("ELSE")
        // }
    }


    return (
        <div className="relative flex justify-center items-center min-h-screen bg-[#67AABE] overflow-hidden">
            <div className='w-[800px] h-[800px] bg-[#5985BA] rounded-full absolute z-0 -translate-y-96 translate-x-3/4 overflow-hidden'></div>
            <div className='w-[600px] h-[600px] bg-[#4663A2] rounded-full z-0 absolute -translate-x-full translate-y-2/3 overflow-hidden'></div>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:flex w-full md:max-w-4xl z-20">
                <div className='bg-[#FFF346] flex flex-col justify-between items-center w-full md:w-1/2 h-full p-6'>
                    <div className='w-1/2 m-40 relative bottom-32 flex justify-center'>
                        <img src={logo} alt='Food House Logo' />
                    </div>
                    <div className='relative bottom-60 flex flex-col justify-center items-center flex-grow text-center'>
                        <div>
                            <FaStar className='text-[#FBB9B9] w-96 h-5 relative left-40 bottom-3' />
                        </div>
                        <h2 className="text-6xl font-bold text-shadow">Welcome !</h2>
                        <p className="text-center mb-4 text-sm">Log in to enjoy the new Food house and menu recipes.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-6 py-10 h-auto">
                    <h2 className="text-4xl font-bold text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username</label>
                            <input
                                type="text"
                                name='name'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name='email'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name='password'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                name='confirmPassword'
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword}</span>}
                        </div>

                        <button type='submit' className="w-full bg-[#FFF346] text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition duration-300">Signup</button>

                        <button
                            className='mt-4 p w-full bg-[#5CD9FF] hover:bg-[#4AC4E6] text-black font-bold py-2 rounded-lg transition duration-300'
                            onClick={() => navigate('/')}
                        >
                            Login
                        </button>

                        <div className='text-center mt-3'>
                            <p className='text-xs font-bold'>Have you an account?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;
