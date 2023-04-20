import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

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
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing Final account data ");
        console.log(finalData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div
        className=''>

            <button
            className={`${accountType === "student" 
            ?
              ""
            :""} `}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              ""
            :""} `}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} >
        {/* first name and lastName */}
            <div className=''>
                    <label className='w-full'>
                        <p className=''>First Name<sup className=''>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className=''
                        />
                    </label>

                    <label className='w-full'>
                        <p className=''>Last Name<sup className=''>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className=''
                        />
                    </label>
            </div>
            {/* email Add */}
            <div className=''>
            <label className=''>
                    <p className=''>Email Address<sup className=''>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className=''
                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password */}
            <div className=''>
                <label className='w-full relative'>
                    <p className=''>Create Password<sup className=''>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className=''
                    />
                    <span
                     className='' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill=''/>) : 

                        (<AiOutlineEye fontSize={24} fill=''/>)}
                    </span>
                </label>

                <label className=''>
                    <p className=''>Confirm Password<sup className=''>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className=''
                    />
                    <span 
                     className=''
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill=''/>) : 

                         (<AiOutlineEye fontSize={24} fill=''/>)}
                    </span>
                </label>
            </div>
        <button className=' '>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
