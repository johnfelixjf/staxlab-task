import Link from "next/link";
import { usePathname } from "next/navigation";

import ChevronIcon from "@/components/icons/ChevronIcon";

const navbarLinks = [
  {
    id: 1,
    name: "Company Details",
    path: "/company/details",
  },
  {
    id: 2,
    name: "Carbon Footprint",
    path: "/company/carbon-footprint",
  },
  {
    id: 3,
    name: "GAP Analysis",
    path: "/company/gap-analysis",
  },
  {
    id: 4,
    name: "Benchmarking",
    path: "/company/benchmarking",
  },
  {
    id: 5,
    name: "Strategy & Policies",
    path: "/company/strategy-policy",
  },
  {
    id: 6,
    name: "KPI & Targets",
    path: "/company/kpi-targets",
  },
  {
    id: 7,
    name: "Targets & Actions",
    path: "/company/target-actions",
  },
  {
    id: 8,
    name: "Report",
    path: "/company/report",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-[50px] w-full bg-[#EBEDEB] flex items-center text-[13px]">
      <div className="flex gap-x-[10px] items-center pl-[16px] pr-[100px]">
        <ChevronIcon />
        <h3 className="text-[#1F2A37] font-bold whitespace-nowrap">
          Project Alpha
        </h3>
      </div>

      <ul className="flex h-full w-full">
        {navbarLinks.map((item) => {
          const active = item.path === pathname;

          return (
            <Link
              className={`h-full w-[140px] flex items-center justify-center ${
                active
                  ? "bg-[#00B050] text-white hover:bg-[#00B050] hover:text-white"
                  : "hover:bg-[#c6ffe0] hover:text-black"
              }`}
              href={item.path}
              key={item.id}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
