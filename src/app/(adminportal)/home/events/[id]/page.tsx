"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/utils/api";
import { getAuthToken } from "@/utils/auth";
import { toast } from "react-toastify";
interface FormData {
  eventName: string;
  eventStartDate: Date | string;
  eventTime: string;
  venue: string;
  organizer: string;
  description: string;
  joinee?: []
}

interface EventData {
  eventName: string;
  eventDate: Date | string;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
  eventOrganizer?: any;
  joinee?: []
}

export default function EventDetails() {
  const params = useParams();
  const token = getAuthToken();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    eventStartDate: "",
    eventTime: "",
    venue: "",
    organizer: "",
    description: "",
    joinee: []
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    setLoading(true);
    const values = {
      eventName: formData.eventName,
      eventDate: formData.eventStartDate,
      eventTime: formData.eventTime,
      eventLocation: formData.venue,
      eventDescription: formData.description,
    };
    try {
      const result: any = await api({
        path: `/event/${params.id}`,
        method: "PATCH",
        token,
        body: values,
      });
      console.log(result, "check result");
      if (result.ok) {
        setLoading(false);
        toast.success(result?.data?.message);
      }
      setLoading(false);
    } catch (err: any) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const id = params.id
    try {
      const result: any = await api({
        path: `/event/${params.id}`,
        method: "DELETE",
        token,
      });
      if (result.ok) {
        toast.success("Event Deleted");
        router.push('/home/events')
      }
      setLoading(false);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const fetchEventDetails = async (token: any, id: string) => {
    try {

      const result: any = await api({
        path: `/event/${id}`,
        method: "GET",
        token,
      });

      if (result.ok) {
        const data: EventData = result.data.data;
        setFormData({
          eventName: data.eventName,
          eventStartDate: data.eventDate,
          eventTime: data.eventTime,
          venue: data.eventLocation,
          description: data.eventDescription,
          organizer: data.eventOrganizer.fullName ?? "",
          joinee: data.joinee
        });
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchEventDetails(token, params.id);
    }
  }, []);

  console.log(formData, "fData");

  return (
    <div className="mt-5 px-16">
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <div>
        <div className="mb-4">
          <label className="text-gray-500 font-semibold">Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-500 font-semibold">
            Event Start Date:
          </label>
          <input
            type="date"
            name="eventStartDate"
            value={formData.eventStartDate.toString().split("T")[0]}
            onChange={handleChange}
            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-500 font-semibold">Event Time:</label>
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-500 font-semibold">Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-500 font-semibold">Organizer:</label>
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            disabled
            onChange={handleChange}
            className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-500 font-semibold">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="text-gray-500 font-semibold">Joined By:</label>
          <select className="form-select w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500">
            {formData?.joinee?.map((item: any) => <option>
              <span className="font-semibold">User Name - {item.username}</span>
              &nbsp; &nbsp;
              <span className="text-gray-500">Email - {item.email}</span>
            </option>)}

          </select>
        </div>

        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => handleSubmit()}
        >
          {loading ? "Updating" : "Update Details"}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
          onClick={() => handleDelete()}>
          Delete Event
        </button>
      </div>
    </div>
  );
}
