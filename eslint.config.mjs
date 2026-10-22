import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [{ ignores: ["backend/**"] }, ...nextVitals, ...nextTypescript];

export default eslintConfig;
