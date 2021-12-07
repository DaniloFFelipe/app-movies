import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack.routes";

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack />
  </NavigationContainer>
);

export default Routes;
