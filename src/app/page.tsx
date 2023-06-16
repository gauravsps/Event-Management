
import Link from "next/link";

export default async function Home() {

  return (
    <main className="">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm">
          <div className="bg-white shadow-lg rounded-lg px-6 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome</h2>
            <div className="mb-6">
              <Link
                href="/login"
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              >
                Login to admin portal
              </Link>
              <Link
                href="/eventlist"
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Continue as User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
