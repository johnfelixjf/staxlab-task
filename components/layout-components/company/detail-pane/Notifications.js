import Image from "next/image";

const notifications = [
  {
    id: 1,
    date: "14-05-2023",
    time: "23:14",
    notification: "Congratulations! Your application has been approved.",
    notificationImg: "/clenergize.png",
    isViewed: true,
  },
  {
    id: 2,
    date: "13-05-2023",
    time: "23:14",
    notification: "Your document did not meet our requirements and has been rejected.",
    notificationImg: "/clenergize.png",
    isViewed: false,
  },
  {
    id: 3,
    date: "12-05-2023",
    time: "23:14",
    notification: "We are reviewing your application and will provide an update soon.",
    notificationImg: "/clenergize.png",
    isViewed: false,
  },
  {
    id: 4,
    date: "11-05-2023",
    time: "23:14",
    notification: "Your document did not meet our requirements and has been rejected.",
    notificationImg: "/clenergize.png",
    isViewed: false,
  },
];

export default function Notifications() {
  return (
    <div className="w-full h-full flex flex-col gap-y-[10px]">
      <h3 className="text-[#1F2A37] text-[14px] font-bold">Notifications</h3>

      <div className="flex-1 overflow-y-auto flex flex-col gap-y-[12px]">
        {notifications.map((notification, idx) => {
          return (
            <div
              className={`p-[8px] rounded-[4px] border-[1px] border-[#F5F5F5] flex flex-col gap-y-[8px] ${
                notification.isViewed ? "bg-[#FFFFFF]" : "bg-[#FAFAFA]"
              }`}
              key={notification.id}
            >
              <div className="text-[10px] text-[#4D5761] flex">
                <div className="pr-[8px] border-r-[1px] border-r-black">
                  <p>{notification.date}</p>
                </div>
                <div className="pl-[8px]">
                  <p>{notification.time}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-x-[10px]">
                <div className="min-w-[38px] min-h-[38px] p-[4px] border-[1px] border-[#E5E5E5] rounded-full">
                  <Image
                    width={30}
                    height={30}
                    src={notification.notificationImg}
                    alt={`Notification ${notification.id}`}
                  />
                </div>

                <div>
                  <p className="text-[12px]">{notification.notification}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
