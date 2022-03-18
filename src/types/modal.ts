import { UCNP } from "./global";

export interface ModalProps extends Partial<StyledModalProps> {
  visible: boolean;
  onClose?: () => void;
  closeableMask?: boolean;
  maskClass?: string;
  wrapperClass?: string;
}

export interface StyledModalProps extends UCNP {
  width: string;
  disableSmoothness: boolean;
}
