interface INormalizePartial {
  disableUnmount: boolean;
  transitionDuration: number;
}

export type UCN<P extends object = {}> = Partial<P> &
  Partial<INormalizePartial>;

export interface IComponentWithMask {
  visible: boolean;
  onClose?: () => void;
  closeableMask?: boolean;
  maskClass?: string;
  wrapperClass?: string;
}

export type These<T> = {
  [P in keyof T]: T[P];
};
