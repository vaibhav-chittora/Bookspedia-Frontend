import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        try {
            const response = await axios.post('http://localhost:3000/user/signin', userInfo)
            console.log(response.data);
            if (response.data) {
                // alert("Logged In Successfully")
                toast.loading("Hold on, we are logging you in...");
                setTimeout(() => {
                    toast.success('Logged in successfully!');
                    document.getElementById('my_modal_3').close()
                    window.location.reload();
                }, 2000);

            }
            localStorage.setItem("user", JSON.stringify(response.data.user))

        } catch (error) {
            if (error.response.status === 404) {
                // alert("User not found");
                toast.error('User not found!');
            }
            if (error.response.status === 401) {
                // alert("Error : Invalid Password");
                toast.error('Invalid Password!');

            }
            console.log("Login Error ", error.response);
        }
    }

    const navigate = useNavigate();

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-3xl text-center">Login</h3>
                    <form
                        className="max-w-sm mx-auto p-6 rounded-lg"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <div className="mb-4">
                            <label className="block text-md font-medium  mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <div className="flex mt-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Required
                            </div>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-md font-medium mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <div className="flex mt-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Required
                            </div>}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-secondary w-full mb-4"
                        >
                            Login
                        </button>
                        <p className="text-sm text-center">
                            Don’t have an account?{" "}
                            <span
                                className="text-blue-500 hover:underline cursor-pointer"
                                onClick={() => navigate('/signup')}
                            >
                                Sign up here
                            </span>

                        </p>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login