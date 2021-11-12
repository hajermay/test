import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {Colors, Typography} from '../../styles';
const UserCard = ({onPress, item}) => {
  return (
    <TouchableOpacity
      style={styles.userCardContainer}
      onPress={onPress}
      activeOpacity={1}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.picture}} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{`${item.firstName} ${item.lastName}`}</Text>
        <View style={styles.iconContainer}>
          <Icon
            style={styles.icon}
            name={'star'}
            color={Colors.ORANGE}
            size={Typography.FONT_SIZE_16}
          />
          <Text>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export {UserCard};
