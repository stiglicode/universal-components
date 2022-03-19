import { css, FlattenSimpleInterpolation } from "styled-components";
import { IPlacement } from "../../types/global";

export const drawerPlacement = (
  placement: IPlacement,
  size: number
): FlattenSimpleInterpolation => {
  const verticalPlacement = css`
    left: 0;
    right: 0;
    height: ${size}px;
  `;
  const horizontalPlacement = css`
    top: 0;
    bottom: 0;
    width: ${size}px;
  `;

  switch (placement) {
  case "top":
    return css`
        top: -${size}px;
        ${verticalPlacement}
      `;
  case "bottom":
    return css`
        bottom: -${size}px;
        ${verticalPlacement}
      `;
  case "left":
    return css`
        left: -${size}px;
        ${horizontalPlacement}
      `;
  case "right":
    return css`
        right: -${size}px;
        ${horizontalPlacement}
      `;
  default:
    return css`
        right: -${size}px;
        ${horizontalPlacement}
      `;
  }
};
