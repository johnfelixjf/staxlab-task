import { useState } from "react";

import DetailPane from "@/components/layout-components/company/DetailPane";

import AlertIcon from "@/components/icons/AlertIcon";
import BellIcon from "@/components/icons/BellIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import ChartIcon from "@/components/icons/ChartIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";

export default function RightPane() {
  const [selectedTab, setSelectedTab] = useState("");

  const tabLinks = [
    { name: "ALERT", icon: <AlertIcon active={selectedTab === "ALERT"} /> },
    { name: "BELL", icon: <BellIcon active={selectedTab === "BELL"} /> },
    {
      name: "MESSAGE",
      icon: <MessageIcon active={selectedTab === "MESSAGE"} />,
    },
    { name: "CHART", icon: <ChartIcon active={selectedTab === "CHART"} /> },
    {
      name: "SETTING",
      icon: <SettingsIcon active={selectedTab === "SETTING"} />,
    },
  ];

  return (
    <div className="h-full w-[52px] bg-[#FAFAFA] relative">
      <ul className="w-full">
        {tabLinks.map((item) => {
          const activeTab = item.name === selectedTab;

          return (
            <li
              onClick={() => setSelectedTab(item.name)}
              className={`w-full h-[52px] flex items-center justify-center hover:pointer ${
                activeTab && "bg-[#D1FADF]"
              }`}
              key={item.name}
            >
              {item.icon}
            </li>
          );
        })}
      </ul>

      {selectedTab && (
        <DetailPane selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      )}
    </div>
  );
}
