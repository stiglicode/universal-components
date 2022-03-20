import styled, { css } from "styled-components";
import { ModalStyleProps } from "./Modal.types";
import { defaultSettings } from "../../settings";

export const ModalStyle = styled.div<Partial<ModalStyleProps>>(
  ({ width, disableSmoothness }) => {
    return css`
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      ${!disableSmoothness &&
      css`
        &.enter-done {
          .UC__modal {
            &-mask {
              opacity: 1;
            }

            &-wrapper {
              transform: scale(1);
              opacity: 1;
            }
          }
        }

        &.exit {
          .UC__modal {
            &-wrapper {
              transform: scale(2);
              opacity: 0;
            }
          }
        }
      `}
      .UC__modal {
        &-mask {
          width: 100%;
          height: 100%;
          background-color: ${defaultSettings.maskBackground};
          ${!disableSmoothness &&
          css`
            transition: ${defaultSettings.duration}ms;
            opacity: 0;
          `}
        }

        &-wrapper {
          position: absolute;
          width: ${width};
          ${!disableSmoothness &&
          css`
            transition: ${defaultSettings.duration}ms;
            opacity: 0;
            transform: scale(0.5);
          `}
        }
      }
    `;
  }
);
