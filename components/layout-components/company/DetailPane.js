import Instruction from "@/components/layout-components/company/detail-pane/Instruction";
import Notifications from "@/components/layout-components/company/detail-pane/Notifications";
import Messages from "@/components/layout-components/company/detail-pane/Messages";
import Chart from "@/components/layout-components/company/detail-pane/Chart";
import Settings from "@/components/layout-components/company/detail-pane/Settings";

export default function DetailPane(props) {
  const selectedTab = props.selectedTab;

  let detailPaneComponent = <></>;

  switch (selectedTab) {
    case "ALERT":
      detailPaneComponent = <Instruction />;
      break;
    case "BELL":
      detailPaneComponent = <Notifications />;
      break;
    case "MESSAGE":
      detailPaneComponent = <Messages />;
      break;
    case "CHART":
      detailPaneComponent = <Chart />;
      break;
    case "SETTING":
      detailPaneComponent = <Settings />;
  }

  return (
    <>
      <div className="h-full min-w-[300px] w-fit p-[20px_20px_20px_20px] absolute top-0 right-[100%] bg-white border-r-[1px] border-r-[#E5E7EB] z-10">
        {detailPaneComponent}
      </div>
      <div
        className="h-full w-[calc(100vw-52px)] absolute top-0 right-[100%] bg-[rgba(0,0,0,0.5)]"
        onClick={() => props.setSelectedTab("")}
      ></div>
    </>
  );
}
