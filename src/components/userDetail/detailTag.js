import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const DetailTag = ({item}) => {
  return (
    <View style={styles.detailTagContainer}>
      <View style={styles.iconsContainer}>
        <Image source={item.icon} style={styles.icon} />
      </View>
      <Text style={styles.detailLabel}>{item.key}</Text>
    </View>
  );
};
export {DetailTag};
