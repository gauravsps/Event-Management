"use client"

import Sidebar from "@/components/sidebar"

export default function NewEvent() {

    return <Sidebar>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Create a new event</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Event Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Event Name"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Date:</label>
                            <input
                                type="date"
                                name="date"
                                className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Time:</label>
                            <input
                                type="time"
                                name="time"
                                className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Location:</label>
                        <input
                            type="text"
                            name="location"
                            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Location"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Description:</label>
                        <textarea
                            name="description"
                            className="form-textarea w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Description"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Organizer:</label>
                        <select
                            className="form-select w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            name="organizer"
                        >
                            <option value="">Select an organizer</option>
                            <option value="organizer1">Organizer 1</option>
                            <option value="organizer2">Organizer 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    </Sidebar>


}
