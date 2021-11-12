import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  userCardContainer: {
    width: width / 2.4,
    height: width / 1.8,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GRAY_LIGHT,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    margin: 10,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descriptionContainer: {
    flex: 1,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLACK_LIGHT,
    padding: 10,
    fontWeight: '500',
    fontFamily: Typography.SkolarSansRegular,
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginRight: 6,
  },
});
