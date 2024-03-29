/* eslint-disable react/style-prop-object */
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "./src/routes";
import theme from "./src/styles/theme";
import Responsive from "./src/styles/Responsive";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Responsive>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes />
          <StatusBar style="light" />
        </ThemeProvider>
      </QueryClientProvider>
    </Responsive>
  );
}
