import axios from "axios";

import { Notification } from "../../types/Notifications.interface";

export const getNotifications: () => Promise<Notification[]> = async () => {
  const res = await axios.get("/notifications");
  return res?.data;
};
