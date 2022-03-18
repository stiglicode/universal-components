import { StyledModal } from "./StyledModal";
import { FC, useRef } from "react";
import { ModalProps } from "../../types/modal";
import { usePortal } from "../../hooks/usePortal";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { defaultSettings } from "../../settings";

export const ModalComponent: FC<ModalProps> = ({
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
        <StyledModal
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
        </StyledModal>
      </CSSTransition>,
      portal
    )
    : null;
};
