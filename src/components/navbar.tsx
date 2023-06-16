import Link from "next/link";

export default function Navbar() {
    
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-white text-xl font-bold">Event Management System</h1>
                    </div>
                    <div className="flex items-center">
                        <Link href="/" className="text-white font-semibold py-2 px-4 border border-white rounded hover:bg-gray-700">
                            Go to Main
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
