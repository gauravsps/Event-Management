"use client"
import Sidebar from '@/components/CommanSideBar';
import { getAuthToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from "react-toastify";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();

    useEffect(() => {
        const token = getAuthToken();
        // Redirect to the login page if the token is not available or expired
        if (!token) {
            toast.error("Authentication failed , please login");
            router.push('/login');
        }
    }, []);
    return (
        <Sidebar>
            {children}
        </Sidebar>
    )
}
