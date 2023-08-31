import { CSSProperties } from "react";

interface CloseSvgPropsI {
  width?: string;
  height?: string;
  fill?: string;
  styles?: CSSProperties;
  onClick?: (e?: any) => void;
}

export default function CloseSvg(props: CloseSvgPropsI) {
  const { width, height, fill, onClick, styles } = props;

  return (
    <svg
      version="1.1"
      width={width || "20px"}
      height={height || "20px"}
      viewBox="0 -960 960 960"
      onClick={onClick}
      style={styles}
    >
      <path
        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
        fill={fill || "white"}
      />
    </svg>
  );
}
