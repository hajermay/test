import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {Colors, Typography} from '../../styles';

const AppHeader = ({
  label,
  withMenuIcon,
  withBackIcon,
  onPressBack,
  withLabel,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        {withBackIcon && (
          <TouchableOpacity onPress={onPressBack}>
            <Icon
              name={'arrow-left'}
              color={Colors.BLACK_LIGHT}
              size={Typography.FONT_SIZE_30}
            />
          </TouchableOpacity>
        )}
        {withLabel && <Text style={styles.label}>{label}</Text>}
      </View>
      <View style={styles.rightContainer}>
        {withMenuIcon && (
          <Icon
            style={styles.icon}
            name={'dots-horizontal'}
            size={Typography.FONT_SIZE_24}
            color={Colors.BLACK_LIGHT}
          />
        )}
      </View>
    </View>
  );
};
export {AppHeader};
