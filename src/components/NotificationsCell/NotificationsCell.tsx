import { FC } from "react";
import { useQuery } from "react-query";

import { BellIcon, UsersIcon } from "@heroicons/react/outline";

import classNames from "classnames";
import { t } from "i18next";

import { getNotifications } from "../../apis/notifications/notifications";
import { Notification } from "../../types/Notifications.interface";
import NotificationList from "../NotificationList/NotificationList";

export const Loading = () => <div>Loading...</div>;
export const Empty = () => <NotificationList notifications={[]} />;
export const Failure = ({ error }) => (
  <div>An error has occurred: {error.message}</div>
);

const featureIconMap = {
  "account": UsersIcon,
};

export const FeatureIcon: FC<{ feature: string }> = ({ feature }) => {
  const Component = featureIconMap[feature];
  return <Component className="w-4 h-4 inline" />;
};

type Props = {
  notifications: Notification[];
};

export const Success = ({ notifications }: Props) => {
  return <NotificationList notifications={notifications} />;
};

export const useNotifications = () => {
  return useQuery("notifications", getNotifications);
};

const NotificationsCell = () => {
  const { isLoading, error, data: notifications } = useNotifications();

  if (isLoading) return <Loading />;
  if (error) return <Failure error={error} />;
  if (!notifications) return <Empty />;

  return <Success notifications={notifications} />;
};

export default NotificationsCell;
