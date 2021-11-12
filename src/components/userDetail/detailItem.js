import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const DetailItem = ({icon, label}) => {
  return (
    <View style={styles.detailItemContainer}>
      <View style={styles.iconsContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.detailLabel}>{label}</Text>
    </View>
  );
};
export {DetailItem};
