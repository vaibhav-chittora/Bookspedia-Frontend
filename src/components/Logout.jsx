import React from 'react'
import { useAuth } from '../context/AuthProvider';
import { MdEmail } from 'react-icons/md';
import toast from 'react-hot-toast';
import { set } from 'react-hook-form';

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    console.log(authUser);

    function handleLogout() {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            toast.loading("Logging you out, please wait...");
            setTimeout(() => {
                toast.success("Logged out successfully");
                window.location.reload();
                localStorage.removeItem('user')
            }, 3000);
        } catch (error) {
            toast.error("Error in Logging you out, please try again");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }


    }

    return (
        <>

            <button
                className="bg-yellow-400 text-slate-700 px-3 py-1 rounded-md hover:bg-yellow-500 duration-300 cursor-pointer"
                onClick={() => handleLogout()}
            >
                Logout
            </button>

        </>
    )
}

export default Logout