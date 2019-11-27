import { Platform } from 'react-native';

export default {
  padding: 18,
  ...Platform.select({
    ios: { headerHeight: 76, headerPadding:26, },
    android: { headerHeight: 76, headerPadding:0, },
  }), 
  tabBarHeight: 50, 
};
