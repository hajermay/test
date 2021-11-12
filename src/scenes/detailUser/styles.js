import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  userImageContainer: {
    alignSelf: 'stretch',
    height: width - 10,
    borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  detailContainer: {
    marginHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: Typography.FONT_SIZE_24,
    color: Colors.BLACK_LIGHT,
    marginVertical: 10,
    fontFamily: Typography.SkolarSansBold,
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLACK_LIGHT,
  },
  userNameContainer: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: Typography.FONT_SIZE_30,
    color: Colors.BLACK_LIGHT,
    fontWeight: '400',
    marginBottom: 5,
  },
  descriptionDetail: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.GRAY_DARK,
    fontWeight: '400',
    fontFamily: Typography.SkolarSansRegular,
  },
  tagsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  flatListTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
