import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const HeartButton = ({onPress, height, width, iconSize}) => {
  return (
    <TouchableOpacity
      style={[styles.heartIcon, {height, width}]}
      onPress={onPress}>
      <Icon name={'heart-o'} size={iconSize} />
    </TouchableOpacity>
  );
};
export {HeartButton};
