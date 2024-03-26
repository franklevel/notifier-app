import { useQuery } from "react-query";
import { API_URL } from "../constants";

export const useFetchNotifications = () => {
  return useQuery<Notification[]>("notifications", async () => {
    const response = await fetch(`${API_URL}/notifications`);
    const data = await response.json();
    return data.notifications;
  });
};
