import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FA8534" /*  "#1D1746", */,
  primary1: "#1D1746",
  buttonHover: "#145DA0",
  iconHover: "#FA8534",
  iconDarkHover: "#000000",
  primaryBright: "#FA8534" /*"#aa8929", */,
  primaryDark: "#FA8534" /*  "#aa8929", */,
  secondary: "#FA8534" /* "#7645D9", */,
  success: "#FA8534",
  warning: "#FFB237" /* #8f80ba */,
};

export const brandColors = {
  binance: "#0000FF",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f1f1",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#B0B0B0", //  "#AFEEEE",
  tertiary: "rgb(12, 12, 78)" /* "#EFF4F5",*/,
  text: "#1D1746" /*   "#FF0000" "#452A7A" */,
  textDisabled: "#BDC2C4",
  textSubtle: "#000034" /* "#8f80ba" */,
  borderColor: "#E9EAEB",
  card: "#f2f8fb",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#EAE2FC" /* "#9A6AFF", */,
  background: "#f1f1f1" /* "#343135", */,
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#B0B0B0", // "#AFEEEE",
  primaryDark: "#0098A1",
  tertiary: "rgb(12, 12, 78)" /* "#EFF4F5",*/,
  text: "#ffffff" /*   "#FF0000" "#452A7A" */,
  textDisabled: "#BDC2C4",
  textSubtle: "#f1f1f1" /* "#8f80ba" */,
  borderColor: "#E9EAEB",
  card: "#000034", //   "#000034",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
