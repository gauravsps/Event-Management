"use client";

import EventLists from "@/components/EventLists";
import EventList from "@/components/EventLists";
import useEventsData from "@/hooks/useEventsData";
import { api } from "@/utils/api";
import { getAuthToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Events() {
  const router = useRouter();
  const { data } = useEventsData({ tokenRequired: true });

  return (
    <div>
      {
        data.length === 0 ? <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Currently There is no event available</h1>
            <p className="text-gray-500">Please Create Events from Event from Event Organizer page</p>
          </div>
        </div> : <div className="bg-gray-100 min-h-screen py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-center">Events List</h1>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition duration-300"
                onClick={() => router.push("/home")}
              >
                Create Event
              </button>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.map((item: any, index) => (
                <EventLists {...{item,index}} from="admin"/>
              ))}
            </ul>
          </div>
        </div>
      }


    </div>
  );
}
