import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end h-16"> {/* Change justify-between to justify-start */}
                        <div className="flex items-center">
                            <h1 className="text-white text-xl font-bold">Event Management System</h1> {/* Remove text-center */}
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
} 