import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    // console.log("ye rha mera form type");
    // console.log(formtype)
  return (
    <div className=''>

        <div className='' >
            <h1
            className='' 
            >
                {title}
            </h1>

            <p className='' >
                <span className=''>{desc1}</span>
                <br/>
                <span className=''>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className=''>
                <div className=''></div>
                <p className=''>
                    OR
                </p>
                <div className=''></div>
            </div>

            <button className=''>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className=' '>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className=''
                />    
        </div>

    </div>
  )
}

export default Template
