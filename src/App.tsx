import React from "react";
import { changeLanguage } from "i18next";
import "./i18next";
import { Flex } from "@chakra-ui/react";
// Components
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
// Router
import Router from "./router";

function App() {
  
  React.useEffect(() => {
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
        <Flex justifyContent="center" pt="7rem">
          <Flex bg="red" width="35%">
            <Router />
          </Flex>
        </Flex>
      </Provider>
    </ColorModeProvider>
  );
}

export default App;
