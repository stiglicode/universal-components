import { IComponentWithMask, These, UCN } from "../../types";

export interface DrawerProps
  extends These<Partial<DrawerStyleProps> & IComponentWithMask> {
  resizerClass?: string;
  onResize?: (position: number) => void;
  onResizeStart?: (position: number) => void;
  onResizeEnd?: (position: number) => void;
  cachedResizeSize?: boolean;
}

export interface DrawerStyleProps extends UCN {
  size: number;
  readonly afterResize?: number;
  placement: IPlacement;
  disableSmoothness: boolean;
  resizeable?: boolean;
  resizerSize: number;
}

export type IPlacement = "left" | "right" | "top" | "bottom";
