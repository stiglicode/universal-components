import { StyledDrawer } from "./StyledDrawer";
import { FC, useRef } from "react";
import { DrawerProps } from "../../types/drawer";
import { defaultSettings } from "../../settings";
import { usePortal } from "../../hooks/usePortal";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export const DrawerComponent: FC<DrawerProps> = ({
  visible,
  disableUnmount = defaultSettings.disableUnmount,
  transitionDuration = defaultSettings.duration,
  children,
  onClose,
  closeableMask = false,
  size = 300,
  placement = "right",
  disableSmoothness = false,
  wrapperClass,
  maskClass,
}) => {
  const [mounted, portal] = usePortal();
  const ref = useRef<HTMLDivElement>(null);

  return mounted && portal
    ? ReactDOM.createPortal(
      <CSSTransition
        nodeRef={ref}
        in={visible}
        unmountOnExit={!disableUnmount}
        timeout={transitionDuration}
      >
        <StyledDrawer
          size={size}
          placement={placement}
          ref={ref}
          disableSmoothness={disableSmoothness}
        >
          <div
            className={`${defaultSettings.maskClassPrefix(
              "drawer"
            )} ${maskClass}`}
            onClick={() => !closeableMask && onClose && onClose()}
          />
          <div
            className={`${defaultSettings.wrapperClassPrefix(
              "drawer"
            )} ${wrapperClass}`}
          >
            {children}
          </div>
        </StyledDrawer>
      </CSSTransition>,
      portal
    )
    : null;
};
