import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from '../../styles';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={Colors.GRAY_MEDIUM} size={'large'} />
    </View>
  );
};
export {Loader};
