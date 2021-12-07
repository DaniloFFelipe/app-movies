import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./tab.routes";
import Details from "../screens/Details";

const { Screen, Navigator } = createNativeStackNavigator();

const Stack: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Tabs" component={Tabs} />
    <Screen name="Details" component={Details} />
  </Navigator>
);

export default Stack;
