import React from "react";

const NotificationTimeline = () => {
  const notifications = [
    {
      time: "2 hrs",
      color: "bg-blue-500",
      text: "admin_branch has updated",
      detail: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      color: "bg-gray-500",
      text: "admin_branch has updated",
      detail: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      color: "bg-blue-500",
      text: "admin_branch has updated",
      detail: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      color: "bg-gray-500",
      text: "admin_branch has updated",
      detail: "Harry Handoko - Contact | MYCRM",
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-sm h-fit   mx-auto">
      <h2 className="text-xl font-bold mb-4">NOTIFICATION</h2>
      <div>
        <div className="flex flex-col space-y-6">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start space-x-4 relative">
              {/* Time */}
              <div className="text-sm text-gray-500">{notification.time}</div>
              {/* Circle and Line */}
              <div className="relative">
                <div
                  className={`w-4 h-4 rounded-full ${notification.color} z-10`}></div>
                {/* Line, hide for the last element */}
                {index !== notifications.length - 1 && (
                  <div className="absolute w-0.5 bg-gray-300 h-20 top-4 left-[0.4rem]"></div>
                )}
              </div>
              {/* Content */}
              <div className="">
                <p className="w-[97%] font-bold text-gray-700">
                  {notification.text}
                </p>
                <p className="w-[95%] text-sm text-gray-500">
                  {notification.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationTimeline;
