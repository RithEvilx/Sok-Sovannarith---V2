import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Box, Flex, IconButton, Menu, Portal, Text } from "@chakra-ui/react";
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
import { AnimatePresence, motion } from "framer-motion";

const LANG_KEY = "language";

const MotionBox = motion(Box);

const FloatSetting = () => {
  const { i18n, t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  const show = scrolled; // show after user scrolls; set to true to always show

  const { panelBg, panelBorder, activeBg, hoverBg } = usePanelColors();

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          as="div"
          position="fixed"
          right="20px"
          zIndex={3000}
          initial={{ opacity: 0, scale: 0.9, bottom: 0 }}
          animate={{ opacity: 1, scale: 1, bottom: 20 }}
          exit={{ opacity: 0, scale: 0.9, bottom: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Menu.Root>
            <Menu.Trigger asChild>
              <Box cursor="pointer">
                <Tooltip showArrow content={t("Setting")} positioning={{ placement: "left" }} openDelay={0} closeDelay={100}>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    boxSize="3.5rem"
                    rounded="full"
                    shadow="md"
                    bg={panelBg}
                    borderColor={panelBorder}
                    _hover={{ bg: hoverBg }}
                    color={colorMode === "dark" ? "white" : "black"}
                    aria-label={t("setting")}
                    transition="all 0.5s"
                    cursor="pointer"
                  >
                    <LuSettings size="1.5rem" />
                  </Flex>
                </Tooltip>
              </Box>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content display="flex" flexDirection="column" zIndex={3000}>
                  {/* KH */}
                  <Menu.Item
                    value="kh"
                    onClick={() => setLanguage("kh")}
                    padding="0.25rem"
                    mr="10px"
                    bg={currentLang === "kh" ? activeBg : "transparent"}
                    _hover={{ bg: `${colorMode === "dark" ? "#888" : "#eee"}` }}
                    transition="all 0.5s"
                    cursor="pointer"
                    _active={{ opacity: 0.75 }}
                  >
                    <Flex alignItems="center" gap="0.5rem">
                      <Box
                        as="button"
                        aria-label="Switch to Khmer"
                        p="0.25rem"
                        rounded="full"
                        transition="transform 0.15s ease, background 0.15s ease"
                      >
                        <Avatar.Root boxSize="8">
                          <Avatar.Fallback name="KH" />
                          <Avatar.Image src={KH} alt="Khmer" />
                        </Avatar.Root>
                      </Box>
                      <Text>Khmer</Text>
                    </Flex>
                  </Menu.Item>
                  {/* EN */}
                  <Menu.Item
                    value="en"
                    onClick={() => setLanguage("en")}
                    padding="0.25rem"
                    mr="10px"
                    bg={currentLang === "en" ? activeBg : "transparent"}
                    _hover={{ bg: `${colorMode === "dark" ? "#888" : "#eee"}` }}
                    transition="all 0.5s"
                    cursor="pointer"
                    _active={{ opacity: 0.75 }}
                  >
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
                  <Menu.Item
                    value="dark-mode"
                    onClick={toggleColorMode}
                    padding="0.25rem"
                    mr="10px"
                    _hover={{ bg: `${colorMode === "dark" ? "#888" : "#eee"}` }}
                    transition="all 0.5s"
                    cursor="pointer"
                    _active={{ opacity: 0.75 }}
                  >
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
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default FloatSetting;
