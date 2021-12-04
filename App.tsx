/* eslint-disable react/style-prop-object */
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";

import Routes from "./src/routes";
import theme from "./src/styles/theme";
import Responsive from "./src/styles/Responsive";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Responsive>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style="light" />
      </ThemeProvider>
    </Responsive>
  );
}
