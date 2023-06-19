"use client"
import Sidebar from '@/components/CommanSideBar';
import useSocket from '@/hooks/useSockets';
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
    const socket = useSocket('https://typeorm.softprodigyphp.in');

    useEffect(() => {
        const token = getAuthToken();
        // Redirect to the login page if the token is not available or expired
        if (!token) {
            toast.error("Authentication failed , please login");
            router.push('/login');
        }
    }, []);


    useEffect(() => {
        if (socket) {
            socket.on('message', (data) => {
                // toast.success(data);
                console.log('connected', data);
                // Handle the received message data here
            });
            socket.on('disconnect', () => {
                console.log('Socket disconnected');
              
                // Perform any additional logic upon socket disconnection
            });

            return () => {
                socket.disconnect(); // Disconnect on component unmount
            };
        }
    }, [socket]);
    return (
        <Sidebar>
            {children}
        </Sidebar>
    )
}
