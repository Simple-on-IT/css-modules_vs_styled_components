export const theme = {
  fontSize: {
    m: '16px',
    l: '20px',
    xl: '24px',
  }
}

export type Theme = typeof theme;
export type FotSize = keyof typeof theme.fontSize;