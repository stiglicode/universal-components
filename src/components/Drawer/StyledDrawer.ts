import styled, { css } from "styled-components";
import { defaultSettings } from "../../settings";
import { drawerPlacement } from "./placement";
import { StyledDrawerProps } from "../../types/drawer";

export const StyledDrawer = styled.div<StyledDrawerProps>(
  ({ size, placement, disableSmoothness }) => {
    return css`
      position: absolute;
      inset: 0;
      display: flex;

      ${!disableSmoothness &&
      css`
        &.enter-done,
        &.enter-active {
          .${defaultSettings.maskClassPrefix("drawer")} {
            opacity: 1;
          }

          .${defaultSettings.wrapperClassPrefix("drawer")} {
            ${placement}: 0;
          }
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
        ${drawerPlacement(placement, size)}
        ${!disableSmoothness &&
        css`
          transition: ${defaultSettings.duration}ms, width 0s;
        `}
      }
    `;
  }
);
