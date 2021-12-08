import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./tab.routes";
import Details from "../screens/Details";
import DetailsTv from "../screens/DetailsTv";

const { Screen, Navigator } = createNativeStackNavigator();

const Stack: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Tabs" component={Tabs} />
    <Screen name="Details" component={Details} />
    <Screen name="DetailsTv" component={DetailsTv} />
  </Navigator>
);

export default Stack;
