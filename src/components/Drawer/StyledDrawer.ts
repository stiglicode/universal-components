import styled, { css } from "styled-components";
import { defaultSettings } from "../../settings";
import { detectDirection, drawerPlacement, resizerPosition } from "./placement";
import { StyledDrawerProps } from "../../types/drawer";

export const StyledDrawer = styled.div<StyledDrawerProps>(
  ({ size, placement, disableSmoothness, afterResize, resizerSize }) => {
    return css`
      position: absolute;
      inset: 0;
      display: flex;
      pointer-events: none;

      ${!disableSmoothness &&
      css`
        &.enter-done,
        &.enter-active {
          pointer-events: all;

          .${defaultSettings.maskClassPrefix("drawer")} {
            opacity: 1;
          }

          .${defaultSettings.wrapperClassPrefix("drawer")} {
            ${placement}: 0;
          }
        }

        &.exit-done {
          pointer-events: none;
        }
      `}
      .${defaultSettings.maskClassPrefix("drawer")} {
        background-color: ${defaultSettings.maskBackground};
        width: 100%;
        height: 100%;
        opacity: 0;
        ${!disableSmoothness &&
        css`
          transition: ${defaultSettings.duration}ms;
        `}
      }

      .${defaultSettings.wrapperClassPrefix("drawer")} {
        position: absolute;

        ${drawerPlacement(placement, size, afterResize || size)}
        ${!disableSmoothness &&
        css`
          transition: ${defaultSettings.duration}ms, width 0s, height 0s;
        `}
        &_resizer {
          position: absolute;
          cursor: ${detectDirection(placement) === "horizontal"
    ? "ew-resize"
    : "ns-resize"};
          ${resizerPosition(placement, resizerSize)}
        }
      }
    `;
  }
);
