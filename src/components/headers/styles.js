import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  mainContainer: {
    width: width,
    backgroundColor: Colors.GRAY_LIGHT,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 60,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  label: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.SkolarSansRegular,
    color: Colors.BLACK_LIGHT,
  },
});
