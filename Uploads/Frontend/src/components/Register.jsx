import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:10000/user/signup", userInfo)
        .then(res => {
            console.log(res.data);
            if (res.data) {
                alert("User created successfully")
            }
        }).catch(err => {
            console.log(err)
            alert("Signup Error :",err);
        })
    }
    
  return (
    <>
        <div style={{position: 'relative', minHeight: '100vh'}}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('../public/banner2.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.25,
          zIndex: -1
        }} />
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
        <div className="modal-box">
                    <h3 className="font-bold text-lg">Register</h3>
                    <form onSubmit={handleSubmit(onSubmit) } method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <div className='mt-4 space-y-2'>

                                <br />
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor"/>
                                        <path d="M12 14c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" fill="currentColor"/>
                                    </svg>
                                    <input type="text" className="grow" placeholder="Name" {...register("name", { required: true })}/>
                                    <br />
                                </label>
                                {errors.name && <span className='text-red-500 text-sm'>Name field is required</span>}
                                

                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
                                    <br />
                                </label>
                                {errors.email && <span className='text-red-500 text-sm'>Email field is required</span>}
                                
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                    </svg>
                                    <input type="password" className="grow" placeholder="Password" {...register("password", { required: true })}/>
                                    <br />
                                </label>
                                {errors.password && <span className='text-red-500 text-sm'>Password field is required</span>}
                                
                                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                                
                                <div className='flex justify-start mt-4'>
                        {/*Buttons ans text*/}
                        <div >
                        <button type="submit" className="btn bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">Register</button>
                        </div>
                        <div className='mt-4'>
                            <p1>Already have an account? <button className=' underline text-blue-700 cursor-pointer'
                                onClick={() =>
                                    document.getElementById("my_modal_1").showModal()
                                }
                                >Login</button>{" "}
                                <Login />     
                            </p1>         
                        </div>
                        </div>
                            </div>
                        </form>

                        
                    
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Register;