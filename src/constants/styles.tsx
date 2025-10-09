import { useColorModeValue } from "@/components/ui/color-mode";

export const usePanelColors = () => {
  const panelBg = useColorModeValue("white", "gray.800");
  const panelBorder = useColorModeValue("gray.200", "gray.700");
  const activeBg = useColorModeValue("gray.300", "whiteAlpha.200");
  const hoverBg = useColorModeValue("gray.300", "whiteAlpha.200");
  const activeBorder = useColorModeValue("gray.300", "gray.600");

  return { panelBg, panelBorder, activeBg, hoverBg, activeBorder };
};

export const lightText = "#9b999b";
