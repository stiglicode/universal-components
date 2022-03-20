import { FC, useEffect, useRef, useState } from "react";
import { DrawerProps } from "./Drawer.types";
import { defaultSettings } from "../../settings";
import { usePortal } from "../../hooks/usePortal";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { detectDirection } from "./utilities/placement";
import { DrawerStyle } from "./Drawer.style";

export const Drawer: FC<DrawerProps> = ({
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
  resizeable,
  resizerClass,
  resizerSize = 2,
  onResizeStart,
  onResizeEnd,
  onResize,
  cachedResizeSize = false,
}) => {
  const [mounted, portal] = usePortal();
  const [isDragging, setDragging] = useState(false);
  const [wrapperSize, setWrapperSize] = useState(size);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resizeable) {
      if (isDragging) {
        onResizeStart && onResizeStart(wrapperSize);
      } else {
        onResizeEnd && onResizeEnd(wrapperSize);
      }
    }
  }, [isDragging]);

  const handleResize = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!resizeable) return;

    const screenDirection =
      detectDirection(placement) === "horizontal"
        ? event.clientX
        : event.clientY;
    const oppositeAxis = detectOppositeDirection()
      ? oppositeOffset() - screenDirection
      : 0;

    const result =
      isDragging && detectOppositeDirection()
        ? oppositeAxis >= size
          ? oppositeAxis
          : size
        : screenDirection >= size
          ? screenDirection
          : size;

    if (isDragging && result !== size) {
      setWrapperSize(result);
      onResize && onResize(result);
    }
  };

  const drawerDirection = () => {
    const direction = detectDirection(placement);
    if (direction === "vertical") {
      return "height";
    } else {
      return "width";
    }
  };

  const detectOppositeDirection = (): boolean => {
    return placement === "right" || placement === "bottom";
  };

  const oppositeOffset = () => {
    if (ref.current) {
      if (placement === "right") {
        return ref.current.clientWidth;
      } else if (placement === "bottom") {
        return ref.current.clientHeight;
      }
    }
    return 0;
  };

  return mounted && portal
    ? ReactDOM.createPortal(
      <CSSTransition
        nodeRef={ref}
        in={visible}
        unmountOnExit={!disableUnmount}
        timeout={transitionDuration}
        onExited={() =>
          resizeable && !cachedResizeSize && setWrapperSize(size)
        }
      >
        <DrawerStyle
          afterResize={!visible ? wrapperSize : size}
          size={size}
          placement={placement}
          ref={ref}
          disableSmoothness={disableSmoothness}
          resizeable={resizeable}
          resizerSize={resizerSize}
          onMouseUp={() => setDragging(false)}
          onMouseMove={handleResize}
          style={{
            cursor: isDragging
              ? detectDirection(placement) === "horizontal"
                ? "ew-resize"
                : "ns-resize"
              : "unset",
            userSelect: isDragging ? "none" : "all",
          }}
        >
          <div
            className={`${defaultSettings.maskClassPrefix("drawer")} ${
              maskClass || ""
            }`}
            onClick={() => !closeableMask && onClose && onClose()}
          />
          <div
            className={`${defaultSettings.wrapperClassPrefix("drawer")} ${
              wrapperClass || ""
            }`}
            style={{
              [drawerDirection()]: `${wrapperSize}px`,
            }}
          >
            {resizeable && (
              <div
                className={`${defaultSettings.wrapperClassPrefix(
                  "drawer"
                )}_resizer ${resizerClass || ""}`}
                onMouseDown={() => setDragging(true)}
              />
            )}
            {children}
          </div>
        </DrawerStyle>
      </CSSTransition>,
      portal
    )
    : null;
};
