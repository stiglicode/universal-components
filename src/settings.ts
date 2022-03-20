export const defaultSettings = {
  duration: 300,
  disableUnmount: false,
  maskBackground: "rgba(0,0,0, 0.5)",
  rem: 16,
  maskClassPrefix: (name: string) => `UCN__${name}-mask`,
  wrapperClassPrefix: (name: string) => `UCN__${name}-wrapper`,
};
