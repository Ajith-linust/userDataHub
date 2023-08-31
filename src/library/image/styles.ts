import { styled } from "styled-components";
import { IProps } from "./types";

export const ImageWrapper = styled.div<
  Pick<IProps, "width" | "height" | "margin" | "padding" | "radius" | "styles">
>`
    ${({ width, height, margin, radius, padding, styles }) => 
        `
        overflow: hidden;
        width: ${width};
        height: ${height};
        border-radius: ${radius || width};
        ${margin && `margin: ${margin}`};
        ${padding && `padding: ${padding}`};
        ${styles}
        `
    }

    > img {
      object-fit: cover;
    }
`;

export const Placeholder = styled.div`
  position: static;
  overflow: hidden;
  animation: placeholderShimmer 2s linear;
  animation-iteration-count: infinite;
  background-color: #fff;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.08) 0,
    rgba(0, 0, 0, 0.15) 15%,
    rgba(0, 0, 0, 0.08) 30%
  );
  background-size: 1200px 100%;
  max-width: 30rem;
  width: 100%;
  height: 100%;

  @keyframes placeholderShimmer {
    0% {
      background-position: -1200px 0;
    } 100% {
      background-position: 1200px 0;
    }
  }
`;
