import { Empty, Success } from "./NotificationsCell";
import { standard } from "./NotificationsCell.mock";

export const EmptyNotificationsCell = () => {
  return <Empty />;
};

export const LessNotificationsCell = () => {
  const { notifications } = standard();
  return <Success notifications={notifications} />;
};

export default { title: "cells/NotificationsCell" };
