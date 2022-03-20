import { FC, useRef } from "react";
import { ModalProps } from "./Modal.types";
import { usePortal } from "../../hooks/usePortal";
import { CSSTransition } from "react-transition-group";
import { defaultSettings } from "../../settings";
import { ModalStyle } from "./Modal.style";
import ReactDOM from "react-dom";

export const Modal: FC<ModalProps> = ({
  visible,
  disableUnmount = defaultSettings.disableUnmount,
  transitionDuration = defaultSettings.duration,
  disableSmoothness = false,
  width = "300px",
  wrapperClass,
  maskClass,
  children,
  onClose,
  closeableMask = false,
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
        <ModalStyle
          disableSmoothness={disableSmoothness}
          width={width}
          ref={ref}
        >
          <div
            className={`UC__modal-mask ${maskClass || ""}`}
            onClick={() => !closeableMask && onClose && onClose()}
          />
          <div className={`UC__modal-wrapper ${wrapperClass || ""}`}>
            {children}
          </div>
        </ModalStyle>
      </CSSTransition>,
      portal
    )
    : null;
};
