import "./i18next";
import { useEffect, useState } from "react";
import { changeLanguage } from "i18next";
import { Box, ChakraProvider, createSystem, defaultConfig, Flex, Span } from "@chakra-ui/react";
// Components
import { ColorModeProvider } from "./components/ui/color-mode";
// Router
import Router from "./router";
import FloatSetting from "./components/FloatSetting";
import ContactButton from "./components/ContactButton";
import { config } from "./theme";
// Theme
const system = createSystem(defaultConfig, config);

function App() {
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    // helper: set default only if the key doesn't exist
    const setDefault = (key: string, value: string) => {
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, value);
      }
    };

    // defaults
    setDefault("language", "en");
    setDefault("createdAt", "false");

    // apply language
    const lng = localStorage.getItem("language") || "en";
    changeLanguage(lng);

    // read created at to decide whether to show the badge
    setIsCreated(localStorage.getItem("createdAt") === "true");
  }, []);

  return (
    <ColorModeProvider attribute="class" defaultTheme="light">
      <ChakraProvider value={system}>
        <FloatSetting />
        <ContactButton />
        <Flex justifyContent="center" paddingBlock={{ base: "2.5rem 6rem", lg: "2rem 7rem" }}>
          <Flex width={{ lg: "50%" }}>
            <Router />
            {isCreated && (
              <Box position="fixed" top="20px" right="20px" zIndex={9999}>
                <Span color="lightcoral">Created at: 30 Aug 2025 </Span>
              </Box>
            )}
          </Flex>
        </Flex>
      </ChakraProvider>
    </ColorModeProvider>
  );
}

export default App;
