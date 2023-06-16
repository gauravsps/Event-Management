'use client';
import EventLists from '@/components/EventLists';
import useEventsData from '@/hooks/useEventsData';

export default function EventList() {
    const { data } = useEventsData({ tokenRequired: false });
    return <div>
        {data.length === 0 ? <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Currently There is no event available</h1>
                <p className="text-gray-500">Please check back later for upcoming events.</p>
            </div>
        </div> :
            <div className="bg-gray-100 min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-8 text-center">Events List</h1>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data?.map((item: any, index) => (
                            <EventLists item={item} index={index} from="user" key={index} />
                        ))}
                    </ul>
                </div>
            </div>
        }
    </div>
}