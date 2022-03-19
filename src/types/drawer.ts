import { IComponentWithMask, IPlacement, These, UCN } from "./global";

export interface DrawerProps
  extends These<Partial<StyledDrawerProps> & IComponentWithMask> {
  resizeable?: boolean;
}

export interface StyledDrawerProps extends UCN {
  size: number;
  placement: IPlacement;
  disableSmoothness: boolean;
}
