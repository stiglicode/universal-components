import { IComponentWithMask, These, UCN } from "./global";

export type ModalProps = These<Partial<StyledModalProps> & IComponentWithMask>;

export interface StyledModalProps extends UCN {
  width: string;
  disableSmoothness: boolean;
}
