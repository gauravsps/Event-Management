
"use client"
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    return <div>
        <Sidebar>
           Event organizer page
        </Sidebar>
    </div>
}