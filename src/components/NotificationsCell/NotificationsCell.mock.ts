import { Notification } from "../../types/Notifications.interface";

export const standard: () => {
  notifications: Notification[];
} = () => ({
  notifications: [
    {
      id: "1",
      feature: "account",
      level: "info",
      messages: [
        {
          label: "入力を依頼していた ",
        },
        {
          label: "jiang jifa の入社手続き",
          important: true,
        },
        {
          label: " が提出されました",
        },
      ],
      createdAt: "2020-01-01T00:00:00.000Z",
    },
  ],
});
