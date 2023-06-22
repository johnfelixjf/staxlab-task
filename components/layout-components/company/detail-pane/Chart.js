export default function Chart() {
  return (
    <div className="w-[800px] h-full flex flex-col gap-y-[10px]">
      <h3 className="text-[#1F2A37] text-[14px] font-bold">Gantt chart</h3>

      <div className="flex-1 overflow-y-auto">
        <object
          className="pdf-container h-full w-full rounded-[4px]"
          data="/gantt-chart.pdf"
        ></object>
      </div>
    </div>
  );
}
