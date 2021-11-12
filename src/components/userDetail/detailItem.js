import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Typography} from '../../styles';
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
