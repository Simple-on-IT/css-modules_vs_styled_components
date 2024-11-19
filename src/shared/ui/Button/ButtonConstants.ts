export enum ButtonSize {
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export const ButtonFontSize: Record<ButtonSize, string> = {
  [ButtonSize.M]: 'size_m',
  [ButtonSize.L]: 'size_l',
  [ButtonSize.XL]: 'size_xl',
}