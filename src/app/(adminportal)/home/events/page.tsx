
"use client"
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";

export default function Events() {
    const router = useRouter();
    return <div>
        <Sidebar>
            <div className="bg-gray-100 min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold text-center">Events List</h1>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition duration-300"
                            onClick={() => router.push("/home/events/new")}
                        >
                            Create Event
                        </button>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array(10).fill(0).map((_, index) => (
                            <li className="bg-white shadow-md rounded-lg px-6 py-4 flex flex-col justify-between" key={index}>
                                <div className="mb-4">
                                    <label className="text-gray-500 font-semibold">Event Name:</label>
                                    <span className="text-lg font-bold">Event Name {index}</span>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-500 font-semibold">Event Start Date:</label>
                                    <span className="text-lg font-bold">10 Feb 2023</span>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-500 font-semibold">Venue:</label>
                                    <span className="text-lg font-bold">Nainital</span>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-500 font-semibold">Organizer:</label>
                                    <span className="text-lg font-bold">Gaurav Pant</span>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-500 font-semibold">Joined By:</label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-lg shadow-md focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Joined Candidate</option>
                                            <option value="user1" disabled>User 1</option>
                                            <option value="user2" disabled>User 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                            <svg
                                                className="w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.293 13.707a1 1 0 010-1.414L13.586 8 9.293 3.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Sidebar>
    </div>
}