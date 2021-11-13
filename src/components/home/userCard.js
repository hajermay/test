import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
const UserCard = ({onPress, item}) => {
  return (
    <TouchableOpacity
      style={styles.userCardContainer}
      onPress={onPress}
      activeOpacity={1}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.avatar}} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text
          style={styles.title}>{`${item.first_name} ${item.last_name}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
export {UserCard};
