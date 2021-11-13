import {Colors, Typography} from '../../styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailContainer: {
    alignSelf: 'stretch',
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  greenIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
  firstView: {
    width: 18,
    height: 18,
    backgroundColor: Colors.GREEN,
  },
  secondView: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{rotate: '30deg'}],
    backgroundColor: Colors.GREEN,
  },
  thirdSTyle: {
    width: 18,
    height: 18,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    transform: [{rotate: '60deg'}],
    backgroundColor: Colors.GREEN,
  },
  checkIconStyle: {
    transform: [{rotate: '310deg'}],
  },
  detailItemContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailTagContainer: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: Colors.GRAY_MEDIUM,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 4,
  },
  detailLabel: {
    marginLeft: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLACK_LIGHT,
    fontWeight: '400',
    fontFamily: Typography.SkolarSansRegular,
  },
  iconsContainer: {
    width: 20,
    height: 20,
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GRAY_JUMBO,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
