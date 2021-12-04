import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import { useRem } from "responsive-native";
import Home from "../screens/Home";
import Feed from "../screens/Feed";

import HomeIcon from "../assets/home.svg";
import HomeIconActive from "../assets/home-active.svg";

import FeedIcon from "../assets/play.svg";
import FeedIconActive from "../assets/play-active.svg";

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs: React.FC = () => {
  const { colors } = useTheme();
  const rem = useRem();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopWidth: 0,
          height: rem(4.5),
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? <HomeIcon /> : <HomeIconActive />,
        }}
      />
      <Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? <FeedIcon /> : <FeedIconActive />,
        }}
      />
    </Navigator>
  );
};

export default Tabs;
