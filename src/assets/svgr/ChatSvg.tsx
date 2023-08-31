import { CSSProperties } from "react";

interface ChatPropsI {
  width?: string;
  height?: string;
  fill?: string;
  styles?: CSSProperties;
  onClick?: (e?: any) => void;
}

export default function ChatSvg(props: ChatPropsI) {
  const { width, height, fill, onClick, styles } = props;

  return (
    <svg
      version="1.1"
      width={width || "25px"}
      height={height || "25px"}
      viewBox="0 -960 960 960"
      onClick={onClick}
      style={styles}
    >
      <path
        d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320v-480 480Zm594 0 46 45v-525H160v480h594Z"
        fill={fill || "white"}
      />
    </svg>
  );
}
