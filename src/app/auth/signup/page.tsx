'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    
    const handleSignup = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username }),
        });

        if (res.ok) {
            router.push('/');
        } else {
            const data = await res.json();
            alert(data.error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="">
                <form className="" onSubmit={handleSignup}>
                    <div className="flex space-x-2 items-center justify-center">
                        <img src="/logo.png" className="w-10" alt="" />
                        <h1 className="text-lg font-semibold font-montserrat text-[#A22E4F]">Fairground</h1>
                    </div>
                    <div className="mt-8 flex flex-col space-y-3">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" name="username" id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-[#A22E4F] text-white py-2 rounded-md text-sm hover:bg-[#d75c77]">Proceed</button>
                        </div>
                    </div>
                </form>

                {/* Google Auth */}
                <div className="mt-4">
                    <button className="flex items-center justify-center border border-gray-400 px-5 py-2 rounded-lg space-x-3" onClick={() => signIn('google', { callbackUrl: '/' })}>
                        <p className="text-lg text-gray-600">Or sign up with</p>
                        <img src="/google-icon.png" className="w-6" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default page;