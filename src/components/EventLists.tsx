import { useRouter } from 'next/navigation'


interface EventListsProps {
    item: any;
    index: any;
    from: string;
}
export default function EventLists({ item, index, from }: EventListsProps) {
    const handleClick = (e: any, id: any) => {
        e.preventDefault()
        router.push(`/eventlist/${item.id}`)
    }
    const router = useRouter();
    return (

        <li
            className="bg-white shadow-md rounded-lg px-6 py-4 flex flex-col justify-between"
            key={index}
        >
            <div className="mb-4">
                <label className="text-gray-500 font-semibold">
                    Event Name:
                </label>
                <span className="text-lg font-bold">{item.eventName}</span>
            </div>
            <div className="mb-4">
                <label className="text-gray-500 font-semibold">
                    Event Start Date:
                </label>
                <span className="text-lg font-bold">{item.eventDate}</span>
            </div>
            <div className="mb-4">
                <label className="text-gray-500 font-semibold">Venue:</label>
                <span className="text-lg font-bold">
                    {item.eventLocation}
                </span>
            </div>
            <div className="mb-4">
                <label className="text-gray-500 font-semibold">
                    Organizer:
                </label>
                <span className="text-lg font-bold">
                    {item.eventOrganizer.fullName}
                </span>
            </div>
            <div className="mb-4">
                <label className="text-gray-500 font-semibold">
                    Description:
                </label>
                <span className="text-lg font-bold">
                    {item.eventDescription}
                </span>
            </div>
            {
                from === 'user' ? null : <div className="mb-4 flex items-center">
                    <label className="text-gray-500 font-semibold mr-2">
                        Joined By:
                    </label>
                    <div className="relative">
                        <select className="block w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-lg shadow-md focus:outline-none focus:border-blue-500">
                            <option value="">Joined Candidate</option>
                            {
                                item.joinee?.map((user: any) =>
                                    <option value="user1" disabled>
                                        {user.username}
                                    </option>)
                            }


                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
            }
            {
                from === 'user' ? <button
                    onClick={(e) => handleClick(e, index)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Join Event
                </button> : <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => router.push(`/home/events/${item.id}`)}
                >
                    View
                </button>
            }


        </li>

    )
}
