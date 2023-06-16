"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { setAuthToken } from "@/utils/auth";
import { api } from "@/utils/api";
interface LoginData {
    username: string;
    password: string;
}
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const info: LoginData = {
                username: email,
                password: password
            }
            const res: any = await api({ path: '/auth/login', method: 'POST', body: info });
            if (res.ok) {
                setAuthToken(res.data?.data?.token, res.data?.data?.user?.role);
                toast.success("Success");
                router.push('/home')
            }
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            required
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Log In
                        </button>
                        <div>
                            <Link href="/signup" className="text-sm text-blue-500 hover:text-blue-700">
                                Create a new account
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}