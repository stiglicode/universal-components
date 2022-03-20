import { css, FlattenSimpleInterpolation } from "styled-components";
import { IPlacement } from "../Drawer.types";

export const drawerPlacement = (
  placement: IPlacement,
  initSize: number,
  afterResize: number
): FlattenSimpleInterpolation => {
  const verticalPlacement = css`
    left: 0;
    right: 0;
    min-height: ${initSize}px;
  `;
  const horizontalPlacement = css`
    top: 0;
    bottom: 0;
    min-width: ${initSize}px;
  `;

  switch (placement) {
  case "top":
    return css`
        top: -${afterResize}px;
        ${verticalPlacement}
      `;
  case "bottom":
    return css`
        bottom: -${afterResize}px;
        ${verticalPlacement}
      `;
  case "left":
    return css`
        left: -${afterResize}px;
        ${horizontalPlacement}
      `;
  case "right":
    return css`
        right: -${afterResize}px;
        ${horizontalPlacement}
      `;
  default:
    return css`
        right: -${afterResize}px;
        ${horizontalPlacement}
      `;
  }
};

export const detectDirection = (
  placement: IPlacement
): "vertical" | "horizontal" => {
  if (placement === "top" || placement === "bottom") {
    return "vertical";
  } else {
    return "horizontal";
  }
};

export const resizerPosition = (
  placement: IPlacement,
  size: number
): FlattenSimpleInterpolation => {
  const verticalPlacement = css`
    width: ${size}px;
    height: 100%;
  `;
  const horizontalPlacement = css`
    width: 100%;
    height: ${size}px;
  `;
  switch (placement) {
  case "top":
    return css`
        bottom: 0;
        ${horizontalPlacement}
      `;
  case "bottom":
    return css`
        top: 0;
        ${horizontalPlacement}
      `;
  case "left":
    return css`
        right: 0;
        ${verticalPlacement}
      `;
  case "right":
    return css`
        left: 0;
        ${verticalPlacement}
      `;
  default:
    return css`
        left: 0;
        ${verticalPlacement}
      `;
  }
};
