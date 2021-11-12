import {Platform, StatusBar, StyleSheet} from 'react-native';
export default StyleSheet.create({
  statusBarContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : null,
  },
});
