'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';


export default function Sidebar({ children }: any) {
    const router = useRouter()


    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-white text-gray-800 w-64 ">
                <div className="p-4">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </div>
                <ul className="p-2 flex-grow">
                    <li className="py-2 px-4">
                        <Link
                            href="/home"
                            className="text-gray-800 hover:text-white hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-300"
                        >
                            Event Organizer
                        </Link>
                    </li>
                    <li className="py-2 px-4">
                        <Link
                            href="/home/events"
                            className="text-gray-800 hover:text-white hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-300"
                        >
                            Event
                        </Link>
                    </li>
                </ul>
                <div className="p-4">
                    <p className="text-gray-500 text-xs mb-2">Logged in as admin</p>
                    <button
                        className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2 transition duration-300"
                        onClick={() => router.push(`/`)}
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
                {children}
            </div>
        </div>
    )
} 