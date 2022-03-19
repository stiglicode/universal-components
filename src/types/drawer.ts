import { IComponentWithMask, These, UCN } from "./global";

export interface DrawerProps
  extends These<Partial<StyledDrawerProps> & IComponentWithMask> {
  resizerClass?: string;
  onResize?: (position: number) => void;
  onResizeStart?: (position: number) => void;
  onResizeEnd?: (position: number) => void;
  cachedResizeSize?: boolean;
}

export interface StyledDrawerProps extends UCN {
  size: number;
  readonly afterResize?: number;
  placement: IPlacement;
  disableSmoothness: boolean;
  resizeable?: boolean;
  resizerSize: number;
}

export type IPlacement = "left" | "right" | "top" | "bottom";
