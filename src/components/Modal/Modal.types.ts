import { IComponentWithMask, These, UCN } from "../../types";

export type ModalProps = These<Partial<ModalStyleProps> & IComponentWithMask>;

export interface ModalStyleProps extends UCN {
  width: string;
  disableSmoothness: boolean;
}
