import { CSSProperties } from "react";

interface SendPropsI {
  width?: string;
  height?: string;
  fill?: string;
  styles?: CSSProperties;
  onClick?: (e?: any) => void;
}

export default function SendSvg(props: SendPropsI) {
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
        d="M176-183q-20 8-38-3.5T120-220v-180l320-80-320-80v-180q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37L176-183Z"
        fill={fill || "white"}
      />
    </svg>
  );
}
