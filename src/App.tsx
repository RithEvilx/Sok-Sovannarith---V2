import "./i18next";
import { useEffect } from "react";
import { changeLanguage } from "i18next";
import { Flex } from "@chakra-ui/react";
// Components
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
// Router
import Router from "./router";
import FloatSetting from "./components/FloatSetting";
import ContactButton from "./components/ContactButton";

function App() {
  useEffect(() => {
    const lng = localStorage.getItem("language");
    if (lng) {
      changeLanguage(lng);
    } else {
      localStorage.setItem("language", "en");
      changeLanguage("en");
    }
  }, []);

  return (
    <ColorModeProvider attribute="class" defaultTheme="light">
      <Provider>
        <>
          <FloatSetting />
          <ContactButton />
          <Flex justifyContent="center" paddingBlock="2rem 7rem">
            <Flex width="40%">
              <Router />
            </Flex>
          </Flex>
        </>
      </Provider>
    </ColorModeProvider>
  );
}

export default App;
