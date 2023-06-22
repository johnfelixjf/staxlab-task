import Avatar from "@/components/layout-components/company/detail-pane/Avatar.js";

const messages = [
  {
    date: "12-05-2023",
    messages: [
      {
        id: 1,
        time: "23:12",
        user: "Clenergize",
        image: <Avatar src="/clenergize.png" />,
        message:
          "Hi there, I'm having trouble with my account. Can you help me?",
        isCurrentUser: true,
      },
      {
        id: 2,
        time: "23:13",
        user: "Nestle",
        image: <Avatar src="/nestle.png" />,
        message: "Hi! Sure, what seems to be the problem with your account?",
        isCurrentUser: false,
      },
      {
        id: 3,
        time: "23:12",
        user: "Clenergize",
        image: <Avatar src="/clenergize.png" />,
        message:
          "I can't seem to access my account. It says my password is incorrect.",
        isCurrentUser: true,
      },
      {
        id: 4,
        time: "23:13",
        user: "Nestle",
        image: <Avatar src="/nestle.png" />,
        message: "Okay, let me take a look. Can you please provide me with your username or email address?",
        isCurrentUser: false,
      },
      {
        id: 5,
        time: "23:12",
        user: "Clenergize",
        image: <Avatar src="/clenergize.png" />,
        message:
          "My username is yoyoboy2000.",
        isCurrentUser: true,
      },
      {
        id: 6,
        time: "23:13",
        user: "Nestle",
        image: <Avatar src="/nestle.png" />,
        message: "Thanks. I have located your account. Have you tried resetting your password?",
        isCurrentUser: false,
      },
    ],
  },
];

export default function Messages() {
  return (
    <div className="w-full h-full flex flex-col gap-y-[10px]">
      <h3 className="text-[#1F2A37] text-[14px] font-bold">Messages</h3>

      <div className="flex-1 overflow-y-auto">
        {messages.map((item) => (
          <div key={item.date}>
            <p className="text-[#6C737F] text-[12px] text-center mb-[8px]">
              {item.date}
            </p>

            <div className="flex flex-col gap-y-[12px]">
              {item.messages.map((message) => (
                <div className="flex gap-x-[6px]" key={message.message}>
                  {message.image}

                  <div
                    className={`rounded-[4px] p-[8px] border-[1px] ${
                      message.isCurrentUser
                        ? "bg-[#ECFDF3] border-[#D1FADF]"
                        : "bg-[#FAFAFA] border-[#F5F5F5]"
                    }`}
                  >
                    <div>
                      <p className="text-[12px] text-[#1F2A37]">
                        {message.message}
                      </p>
                    </div>

                    <div className="flex justify-end text-[#4D5761] text-[10px]">
                      <span>{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[50px] absolute bottom-0 left-0 p-[12px] flex items-center shadow-[0px_-4px_4px_-2px_#1018280f] bg-white">
        <input
          className="text-[13px] w-full h-full focus:outline-none"
          placeholder="Message"
        />
      </div>
    </div>
  );
}
