import Image from "next/image";

export default function Avatar(props) {
  return (
    <div className="min-w-[38px] min-h-[38px] max-w-[38px] max-h-[38px] p-[4px] border-[1px] border-[#E5E5E5] rounded-full flex items-center justify-center">
      <Image width={30} height={30} src={props.src} alt={props.alt} />
    </div>
  );
}
