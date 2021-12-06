import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { rem } from "responsive-native";

export default {
  colors: {
    bg: `#15141F`,
    orange: `#FF8F71`,
    white: `#FFFFFF`,
    gray: `#BCBCBC`,
    lightBlue: `#211F30`,
  },
  fonts: {
    regular: `regular`,
  },
  screen: {
    rem: (size: number, shouldScale = false) =>
      rem({ size, shouldScale, baseFontSize: 16 }),
    statusBarHeight: getStatusBarHeight(),
    bottomSpace: getBottomSpace(),
  },
};
