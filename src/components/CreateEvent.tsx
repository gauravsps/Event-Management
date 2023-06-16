"use client"
import { api } from "@/utils/api";
import { getAuthToken } from "@/utils/auth";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateEvent() {
    const token = getAuthToken();
    const inputs = {
        name: '',
        date: '',
        time: '',
        location: '',
        description: '',
        organizer: '',
    }
    const [formData, setFormData] = useState(inputs);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Here you can access the form data in the `formData` state and perform any necessary actions (e.g., API call)
        try {
            const { name, date, time, location, description, organizer } = formData;
            const formInfo = {
                "eventName": name,
                "eventDate": date,
                "eventTime": time,
                "eventLocation": location,
                "eventDescription": description,
                // "eventOrganizer": "121223sdasd"
            }
            const createdEvent: any = await api({path:'/event', method:'POST', body:formInfo, token});

            if (createdEvent.ok) {
                toast.success(createdEvent.data.message);
                setFormData(inputs)
            }
        } catch (err: any) {
            toast.error(err.message);
        }

    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Create a new event</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Event Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleChange}
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
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Time:</label>
                            <input
                                type="time"
                                name="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Location:</label>
                        <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Location"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            required
                            onChange={handleChange}
                            className="form-textarea w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Description"
                        ></textarea>
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Organizer:</label>
                        <select
                            className="form-select w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            name="organizer"
                            value={formData.organizer}
                            onChange={handleChange}
                        >
                            <option value="">Select an organizer</option>
                            <option value="organizer1">Organizer 1</option>
                            <option value="organizer2">Organizer 2</option>
                            
                        </select>
                    </div> */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                    >
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    );



}
