"use client";

import Navbar from "@/components/layout-components/company/Navbar";
import RightPane from "@/components/layout-components/company/RightPane";

export default function CompanyLayout({ children }) {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-[calc(100%-50px)] w-full bg-[#9a9a9a] flex items-center">
        <main className="h-full w-[calc(100%-52px)]">{children}</main>
        <RightPane />
      </div>
    </div>
  );
}
