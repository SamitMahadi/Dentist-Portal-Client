import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-8 card shadow-xl rounded-lg'>

                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs mb-3">

                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Addresss is required" })} />
                        {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">

                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {

                                required: "Password is required",
                                minLength: { value: 6, message: 'password must be 6 charecters or longer' }

                            })} />
                        {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">forget password?</span></label>

                    </div>

                    <input className='btn btn-accent text-white w-full' value="Login" type="submit" />
                </form>
                <p className='mt-3'>New to Dentist portal? <Link className='text-primary' to='/signup'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full font-uppercase hover:text-primary">continue with google</button>
            </div>

        </div>
    );
};

export default Login;