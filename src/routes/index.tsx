import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./tab.routes";

const Routes: React.FC = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
);

export default Routes;
