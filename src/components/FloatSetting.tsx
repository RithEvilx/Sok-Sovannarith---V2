import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Box, Flex, HStack, IconButton, Menu, Portal, Text } from "@chakra-ui/react";
// Components
import { Tooltip } from "./ui/tooltip";
import { useColorMode } from "./ui/color-mode";
// Icons
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
// Import Image
import KH from "@/assets/imgs/icons/kh.png";
import EN from "@/assets/imgs/icons/en.png";
// Style
import { usePanelColors } from "@/constants/styles";
// Icon
import { LuSettings } from "react-icons/lu";

const LANG_KEY = "language";

const FloatSetting = () => {
  const { i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  const { panelBg, panelBorder, activeBg, hoverBg, activeBorder } = usePanelColors();

  // derive current language (i18next may return 'en-US' etc.)
  const currentLang = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);

  const setLanguage = (lng: "en" | "kh") => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem(LANG_KEY, lng);
    } catch {
      console.log("");
    }
  };

  // on mount: read persisted language (fallback to en)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY) as "en" | "kh" | null;
      setLanguage(stored ?? "en");
    } catch {
      setLanguage("en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex justifyContent="flex-end" position="sticky" top="19px" paddingRight="19px">
      <Box>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex align="center" gap="3" bg={panelBg} borderWidth="1px" borderColor={panelBorder} rounded="full" shadow="sm" padding="0.5rem">
              <Tooltip content="Setting">
                <Box
                  as="button"
                  p="0.5rem"
                  rounded="full"
                  transition="transform 0.15s ease, background 0.15s ease"
                  _hover={{ transform: "scale(1.06)", bg: hoverBg }}
                >
                  <LuSettings size="1.5rem" />
                </Box>
              </Tooltip>
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content display="flex" flexDirection="column">
                {/* KH */}
                <Menu.Item value="kh" onClick={() => setLanguage("kh")} padding="0.25rem" bg={currentLang === "kh" ? activeBg : "transparent"}>
                  <Flex alignItems="center" gap="0.5rem">
                    <Box as="button" aria-label="Switch to Khmer" p="0.25rem" rounded="full" transition="transform 0.15s ease, background 0.15s ease">
                      <Avatar.Root boxSize="8">
                        <Avatar.Fallback name="KH" />
                        <Avatar.Image src={KH} alt="Khmer" />
                      </Avatar.Root>
                    </Box>
                    <Text>Khmer</Text>
                  </Flex>
                </Menu.Item>
                {/* EN */}
                <Menu.Item value="en" onClick={() => setLanguage("en")} padding="0.25rem" bg={currentLang === "en" ? activeBg : "transparent"}>
                  <Flex alignItems="center" gap="0.5rem">
                    <Box
                      as="button"
                      aria-label="Switch to English"
                      p="0.25rem"
                      rounded="full"
                      transition="transform 0.15s ease, background 0.15s ease"
                    >
                      <Avatar.Root boxSize="8">
                        <Avatar.Fallback name="EN" />
                        <Avatar.Image src={EN} alt="English" />
                      </Avatar.Root>
                    </Box>
                    <Text>English</Text>
                  </Flex>
                </Menu.Item>
                {/* Toggle Mode */}
                <Menu.Item value="dark-mode" onClick={toggleColorMode} padding="0.25rem">
                  <Flex alignItems="center" gap="0.5rem">
                    <IconButton aria-label="Toggle color mode" variant="ghost" rounded="full" border="2px solid #eee">
                      {colorMode === "dark" ? <MdOutlineLightMode size="2rem" /> : <MdOutlineDarkMode size="2rem" />}
                    </IconButton>
                    <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
                  </Flex>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        <Flex align="center" gap="3" bg={panelBg} borderWidth="1px" borderColor={panelBorder} rounded="full" shadow="sm" px="3" py="2" display="none">
          {/* Language selector */}
          <HStack gap="0.5rem">
            {/* KH */}
            <Box
              as="button"
              onClick={() => setLanguage("kh")}
              aria-label="Switch to Khmer"
              p="0.25rem"
              rounded="full"
              borderWidth="1px"
              borderColor={currentLang === "kh" ? activeBorder : "transparent"}
              bg={currentLang === "kh" ? activeBg : "transparent"}
              transition="transform 0.15s ease, background 0.15s ease"
              _hover={{ transform: "scale(1.06)", bg: hoverBg }}
            >
              <Avatar.Root boxSize="8">
                <Avatar.Fallback name="KH" />
                <Avatar.Image src={KH} alt="Khmer" />
              </Avatar.Root>
            </Box>

            {/* EN */}
            <Box
              as="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              p="0.25rem"
              rounded="full"
              borderWidth="1px"
              borderColor={currentLang === "en" ? activeBorder : "transparent"}
              bg={currentLang === "en" ? activeBg : "transparent"}
              transition="transform 0.15s ease, background 0.15s ease"
              _hover={{ transform: "scale(1.06)", bg: hoverBg }}
            >
              <Avatar.Root boxSize="8">
                <Avatar.Fallback name="EN" />
                <Avatar.Image src={EN} alt="English" />
              </Avatar.Root>
            </Box>
          </HStack>
          <HStack>
            <IconButton aria-label="Toggle color mode" variant="ghost" onClick={toggleColorMode} rounded="full" border="2px solid #eee">
              {colorMode === "dark" ? <MdOutlineLightMode size="2rem" /> : <MdOutlineDarkMode size="2rem" />}
            </IconButton>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FloatSetting;
