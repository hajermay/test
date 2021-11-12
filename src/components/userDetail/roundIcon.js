import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors, Typography} from '../../styles';

const RoundIcon = () => {
  return (
    <View style={styles.greenIcon}>
      <View style={styles.firstView} />
      <View style={styles.secondView} />
      <View style={styles.thirdSTyle}>
        <Icon
          name="check"
          size={Typography.FONT_SIZE_16}
          color={Colors.WHITE}
          style={styles.checkIconStyle}
        />
      </View>
    </View>
  );
};
export {RoundIcon};
