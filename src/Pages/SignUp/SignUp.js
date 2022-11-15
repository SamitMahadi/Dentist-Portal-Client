import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>

                <div className='w-96 p-8 card shadow-xl rounded-lg'>

                    <h2 className='text-3xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs mb-3">

                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text"{...register("name", {
                                required: "Name Is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}


                        </div>



                        <div className="form-control w-full max-w-xs mb-3">

                            <label className="label"><span className="label-text">Email</span></label>
                            <input {...register("email", {
                                required: "Email Address is required"
                            })} type="email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs mb-5">

                            <label className="label"><span className="label-text">Password</span></label>
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password Must be 6 Characters or long" }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-accent text-white w-full' value="Sign up" type="submit" />
                    </form>
                    <p className='mt-3'>Already Have An Account? <Link className='text-primary' to='/login'>Login Now</Link> </p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full font-uppercase hover:text-primary">continue with google</button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;