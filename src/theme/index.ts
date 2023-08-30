export const colors = {
  brand_color: "#00DF5E",
  dark_10: "#171717",
  dark_20: "#212121",
  dark_30: "#333333",
  dark_40: "#828282",
  dark_50: "#F9F9F9",
  message: "#2962FF",
  success: "#0BB07B",
  warning: "#FFCE52",
  error: "#F03D3D",
  information: "#E0E0E0",
  transparent: "transparent",
};

export const fonts = {
  font_normal: "'DM Sans', sans-serif",
};

export const borders = {
  light: `1px solid ${colors.dark_30}`,
  green: `3px solid ${colors.brand_color}`,
  none: "none",
};

const device = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const breakpoints = {
  mobileS: `@media (min-width: ${device.mobileS})`,
  mobileM: `(min-width: ${device.mobileM})`,
  mobileL: `(max-width: ${device.mobileL})`,
  tablet: `(min-width: ${device.tablet})`,
  laptop: `(min-width: ${device.laptop})`,
  laptopL: `(min-width: ${device.laptopL})`,
  desktop: `(min-width: ${device.desktop})`,
  desktopL: `(min-width: ${device.desktop})`,
};

export const sizes = {
  icons: {
    sm: {
      width: "14px",
      height: "14px",
    },
    lg: {
      width: "20px",
      height: "20px",
    },
    xl: {
      width: "24px",
      height: "24px",
    },
    xxl: {
      width: "32px",
      height: "32px",
    },
    huge: {
      width: "48px",
      height: "48px",
    },
    giant: {
      width: "64px",
      height: "64px",
    },
  },
};
