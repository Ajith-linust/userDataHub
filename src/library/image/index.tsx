import { useEffect, useState } from "react";
import Avatar from '@assets/avatar.webp';
import { IProps } from "./types";
import * as Styles from './styles';

function ImageWithFallback(props: IProps) {
  const {
    src,
    width,
    height,
    alt,
    fallbackSrc,
    styles,
    radius,
    margin,
    padding,
    className,
    onClick,
  } = props;

  const [imageInfo, setImageInfo] = useState({
    url: src,
    isLoading: false,
  });

  useEffect(() => {
    setImageInfo((p) => ({
      ...p,
      isLoading: true,
    }));

    /**
     * Check whether image is loaded or not
     */

    const img = new Image();
    img.src = src;

    img.onload = function () {
      setImageInfo({
        url: src,
        isLoading: false,
      });
    };

    img.onerror = function () {
      setImageInfo({
        url: fallbackSrc || Avatar,
        isLoading: false,
      });
    };
  }, [src]);

  return (
    <Styles.ImageWrapper
      width={width || "32px"}
      height={height || "32px"}
      radius={radius}
      margin={margin}
      padding={padding}
      styles={styles}
      className={className}
    >
      {imageInfo.isLoading ? (
        <Styles.Placeholder />
      ) : (
        <img
          onClick={onClick}
          src={imageInfo.url}
          alt={alt || "image"}
          width={"100%"}
          height={"100%"}
        />
      )}
    </Styles.ImageWrapper>
  );
}

export default ImageWithFallback;
