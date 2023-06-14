"use client"
export default function EventForm({ params }: any) {
    return <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Please Fill Details to Join the Event {params.id}</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">User Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="User Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">User Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="User Email"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
                    Join Event
                </button>
            </form>
        </div>
    </div>

}
