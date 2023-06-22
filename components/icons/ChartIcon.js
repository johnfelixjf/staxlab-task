export default function ChartIcon(props) {
  const stroke = props.active ? "#00B050" : "#737373";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.66675 3.66667L3.66675 20.3333"
        stroke={stroke}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6666 10.125L3.66659 10.125L3.66659 13.875L18.6666 13.875C19.5833 13.875 20.3333 13.5 20.3333 12.375L20.3333 11.625C20.3333 10.5 19.5833 10.125 18.6666 10.125Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.6666 4.5L3.66658 4.5L3.66658 7.83333L13.6666 7.83333C14.5833 7.83333 15.3333 7.5 15.3333 6.5L15.3333 5.83333C15.3333 4.83333 14.5833 4.5 13.6666 4.5Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.50008 16.1667L3.66675 16.1667L3.66675 19.5L9.50008 19.5C10.4167 19.5 11.1667 19.1667 11.1667 18.1667L11.1667 17.5C11.1667 16.5 10.4167 16.1667 9.50008 16.1667Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
