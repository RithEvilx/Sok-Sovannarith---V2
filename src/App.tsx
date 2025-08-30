import React from "react";
import "./i18next";
import { changeLanguage } from "i18next";
// Component
import { Provider } from "./components/ui/provider";
// Router
import Router from "./router";
import { Flex } from "@chakra-ui/react";

function App() {
  React.useEffect(() => {
    const lng = localStorage.getItem("language");
    if (lng) {
      changeLanguage(lng);
    } else {
      localStorage.setItem("language", "en");
      changeLanguage("en");
    }
  }, []); // run once on mount

  return (
    <Provider defaultTheme="light" themes={["light", "dark"]}>
      <Flex justifyContent="center" pt="7rem">
        <Flex bg="red" width="35%">
          <Router />
        </Flex>
      </Flex>
    </Provider>
  );
}

export default App;
