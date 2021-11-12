import React from 'react';
import {View} from 'react-native';
import styles from './styles';
const DetailContainer = props => {
  return (
    <View
      style={[
        styles.detailContainer,
        {
          backgroundColor: props.backgroundColor,
          paddingHorizontal: props.paddingHorizontal,
          paddingBottom: props.paddingBottom,
        },
      ]}>
      {props.children}
    </View>
  );
};
export {DetailContainer};
