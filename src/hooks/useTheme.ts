import { useContext } from "react";
import { ThemeProviderContext } from "../context/ThemeProviderContext";
import type { Theme } from "../context/ThemeProviderContext";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export type { Theme };
