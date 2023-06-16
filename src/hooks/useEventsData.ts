import { api } from "@/utils/api";
import { getAuthToken, getRole } from "@/utils/auth";
import { useState, useEffect } from "react";

interface EventData {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventOrganizer: {
    fullName: string;
  };
  eventDescription: string;
  // Add more properties as needed
}

interface UseEventsDataResult {
  data: EventData[];
  fetchEvents: (token: any) => Promise<void>;
  tokenRequired?: boolean;
}
interface UseEventsDataProps {
  tokenRequired?: boolean;
}

const useEventsData = ({
  tokenRequired,
}: UseEventsDataProps): UseEventsDataResult => {
  const [data, setData] = useState<EventData[]>([]);

  const fetchEvents = async (token: any): Promise<void> => {
    const role = getRole();
    const path = role === "admin" ? "/event" : "/event/organizer/events";
    try {
      let apiFuntion;
      if (tokenRequired === false) {
        apiFuntion = api({ path: "/event", method: "GET" });
      } else {
        apiFuntion = apiFuntion = api({ path: path, method: "GET", token });
      }
      const result: any = await apiFuntion;

      if (result.ok) {
        const eventData = result.data.data;
        setData(eventData);
      }
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    const token: any = getAuthToken();
    fetchEvents(token);
  }, []);

  return {
    data,
    fetchEvents,
  };
};

export default useEventsData;
