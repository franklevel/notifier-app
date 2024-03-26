import { useQuery } from "react-query";

export const useFetchNotifications = () => {
  return useQuery<Notification[]>("notifications", async () => {
    const response = await fetch("http://localhost:8000/notifications");
    const data = await response.json();
    return data.notifications;
  });
};
