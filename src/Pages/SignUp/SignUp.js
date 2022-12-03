import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import useToken from '../../Hooks/useToken';


const SignUp = () => {
    useTitle('signup')
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { createUser, updateUser,providerLogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if(token){
        navigate('/')
    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }


    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            })
    }


    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('https://dentist-portal-server-nine.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
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
                        {signUpError && <p className="text-red-700">{signUpError}</p>}
                    </form>
                    <p className='mt-3'>Already Have An Account? <Link className='text-primary' to='/login'>Login Now</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn}  className="btn btn-outline w-full font-uppercase hover:text-primary">continue with google</button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;