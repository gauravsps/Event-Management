import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-white text-xl font-bold text-center">Event Management System</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
} 