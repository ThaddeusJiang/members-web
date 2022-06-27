import { FC } from "react";

import { BellIcon, UsersIcon } from "@heroicons/react/outline";

import { t } from "i18next";

const featureIconMap = {
  "account": UsersIcon,
};

export const FeatureIcon: FC<{ feature: string }> = ({ feature }) => {
  const Component = featureIconMap[feature];
  return <Component className="w-4 h-4 inline" />;
};

const NotificationList = ({ notifications }) => {
  return (
    <table className="table w-full rounded-md">
      <thead>
        <tr>
          <th className="flex items-center">
            <BellIcon className=" w-5 h-5 inline" /> {t("notifications")}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {notifications.length > 0 ? (
          <>
            {notifications.map((notification) => {
              const { messages } = notification;
              return (
                <tr key={notification.id}>
                  <td className="flex items-center">
                    <FeatureIcon feature={notification.feature} />
                    &nbsp;
                    {messages.map((message) => {
                      if (message.important) {
                        return <strong>{message.label}</strong>;
                      } else {
                        return message.label;
                      }
                    })}
                  </td>

                  <td className="text-gray-500">{notification.createdAt}</td>
                </tr>
              );
            })}
          </>
        ) : (
          <tr>
            <td>
              <div>{t("no notifications")}</div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default NotificationList;
