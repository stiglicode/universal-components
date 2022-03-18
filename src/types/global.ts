interface INormalizeRequired {
  test?: boolean;
}

interface INormalizePartial {
  disableUnmount: boolean;
  transitionDuration: number;
}

export type UCN<P extends object = {}> = P &
  Partial<INormalizePartial> &
  INormalizeRequired;
export type UCNP<P extends object = {}> = Partial<P> &
  Partial<INormalizePartial> &
  INormalizeRequired;
