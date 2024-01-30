import { primary } from "../components/theme/Themes";

export const logCredits = () => {
  const logStyle = [
    `color: ${primary}`,
    "font-size: 1em",
    "font-weight: 300",
  ].join(";");

  return console.log(`%cBased on a template by github.com/johoop`, logStyle);
};
