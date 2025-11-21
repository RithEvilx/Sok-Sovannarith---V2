import { defineConfig, defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  colors: {
    primary: { value: "#3182ce" },
    secondary: { value: "#2c5282" },
  },
  breakpoints: {
    sm: { value: "375px" },
    md: { value: "768px" },
    lg: { value: "1024px" },
  },
});

export const config = defineConfig({
  theme: {
    tokens,
  },
});
