"use client"
import Sidebar from '@/components/CommanSideBar';
import { socket } from '@/hooks/useSockets';
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


    useEffect(() => {
        socket.on('connect', () => console.log("connected"));
        socket.on('disconnect', () => console.log("disconneted"));
        socket.on('update_event', (data) => {
            toast.success(`Socket Response - ${data} `)
        })
        socket.on('create_event', (data) => {
            toast.success(`Socket Response - ${data} `)
        })
        socket.on('delete_event', (data) => {
            toast.success(`Socket Response - ${data} `)
        })
        socket.on('join_event', (data) => {
            toast.success(`Socket Response - ${data} `)
        })

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('update_event');
            socket.off('create_event');
            socket.off('delete_event');
            socket.off('join_event');
        };

    }, [socket]);
    return (
        <Sidebar>
            {children}
        </Sidebar>
    )
}
