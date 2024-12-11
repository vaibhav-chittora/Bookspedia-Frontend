import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        try {
            const response = await axios.post('http://localhost:3000/user/signup', userInfo)
            console.log(response.data.data);
            if (response.data) {
                toast.success('User Registered Successfully!');

            }
            localStorage.setItem("user", JSON.stringify(response.data.data))

        } catch (error) {
            console.log("error in fetching Books", error);
            toast.error(`Error :  ${error.response.data.message}`);
        }

    }
    const navigate = useNavigate();
    return (
        <div className="min-h-screen items-center justify-center shadow-lg ">

            <form
                className="max-w-sm mx-auto mt-10 p-6  rounded-lg shadow-md "
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="font-bold text-3xl text-center">Sign Up</h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium  mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <div className="flex mt-2 text-red-500">
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

                <div className="mb-4">
                    <label className="block text-sm font-medium  mb-2">Email</label>
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
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password</label>
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
                    Sign Up
                </button>
                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <span
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Login
                    </span>


                </p>

            </form>

        </div>
    );
};

export default SignUpForm;
