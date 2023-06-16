"use client"

import { api } from "@/utils/api";
import { useState } from "react";
import { toast } from "react-toastify";

export default function EventForm({ params }: any) {
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setUser((p) => {
            return {
                ...p,
                [name]: value
            }
        })
    }
    const joinEventHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const formInfo = {
            ...user,
            event:params.id
        }
        const joinedEvent: any = await api({ path: '/joinee', method: 'POST', body: formInfo });

        if (joinedEvent.ok) {
            toast.success("Event Joined");

        }
    }
    return <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Please Fill Details to Join the Event {params.id}</h1>
            <form onSubmit={joinEventHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">User Name:</label>
                    <input
                        type="text"
                        name="username"
                        required
                        value={user.username}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="User Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">User Email:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="User Email"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
                    Join Event
                </button>
            </form>
        </div>
    </div>

}
