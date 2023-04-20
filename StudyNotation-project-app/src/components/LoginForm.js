import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}
    className="flex flex-col  ">

        <label className='w-full'>
            <p className=''>
                Email Address<sup className=''>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className=''
            />
        </label>

        <label className='w-full relative'>
            <p className=''>
                Password<sup className=''>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className=''
            />

            <span 
            className=''
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className=''>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className=''>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
