import { IMaskComponent, IPlacement, These, UCN } from "./global";

export interface DrawerProps
  extends These<Partial<StyledDrawerProps> & IMaskComponent> {
  resizeable?: boolean;
}

export interface StyledDrawerProps extends UCN {
  size: number;
  placement: IPlacement;
  disableSmoothness: boolean;
}
