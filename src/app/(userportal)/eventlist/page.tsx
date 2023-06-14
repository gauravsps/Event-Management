'use client';

import { useRouter } from 'next/navigation';


export default function EventList() {
    const router = useRouter()

    const handleClick = (e: any, id: any) => {
        e.preventDefault()
        router.push(`/eventlist/${id}`)
    }
    return <div>
        {/* <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Currently There is no event available</h1>
                <p className="text-gray-500">Please check back later for upcoming events.</p>
            </div>
        </div> */}

        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Events List</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array(10).fill(0).map((_, index) => (
                        <li className="bg-white shadow-md rounded-lg px-6 py-4 flex flex-col justify-between">
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
                            <button
                                onClick={(e) => handleClick(e, index)}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Join Event
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}