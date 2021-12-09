import React from "react";
import { ScreenProvider } from "responsive-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Responsive: React.FC = ({ children }) => (
  <SafeAreaProvider>
    <ScreenProvider baseFontSize={16}>{children}</ScreenProvider>
  </SafeAreaProvider>
);

export default Responsive;
