import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {AboutMe} from '../../utils/aboutMe';
import {
  RoundIcon,
  DetailContainer,
  DetailItem,
  DetailTag,
  Container,
  AppHeader,
  HeartButton,
} from '../../components';
import {Colors, Typography} from '../../styles';
import styles from './styles';
import {deleteUser} from '../../redux/actions/users';

const DetailUser = ({route, navigation}) => {
  const user = route.params.item;
  const dispatch = useDispatch();
  return (
    <Container>
      <AppHeader
        withBackIcon
        withMenuIcon
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.userImageContainer}>
          <Image source={{uri: user.picture}} style={styles.image} />
          <HeartButton
            height={60}
            width={60}
            iconSize={Typography.FONT_SIZE_30}
            onPress={() => {
              dispatch(deleteUser(user.id));
              navigation.goBack();
            }}
          />
        </View>
        <DetailContainer>
          <View style={styles.userNameContainer}>
            <Text
              style={
                styles.userName
              }>{`${user.firstName} ${user.lastName}`}</Text>
            <RoundIcon />
          </View>
          {user.id && (
            <DetailItem
              icon={require('../../assets/icons/home.png')}
              label={user.id}
            />
          )}
          {user.title && (
            <DetailItem
              icon={require('../../assets/icons/location.png')}
              label={user.title}
            />
          )}
        </DetailContainer>
        {!user.description && (
          <DetailContainer
            withHeartIcon
            paddingBottom={60}
            backgroundColor={Colors.WHITE}
            paddingHorizontal={20}>
            <Text style={styles.descriptionDetail}>
              Pellentesque bibendum lorem leo, ac consectetur enim pellentesque
              et. Praesent ex metus, venenatis nec mollis vel, venenatis non
              nulla.
            </Text>
            <HeartButton
              height={50}
              width={50}
              iconSize={Typography.FONT_SIZE_24}
              onPress={() => {
                dispatch(deleteUser(user.id));
                navigation.goBack();
              }}
            />
          </DetailContainer>
        )}
        {user.description && (
          <DetailContainer
            backgroundColor={Colors.WHITE}
            paddingHorizontal={20}>
            <Text style={styles.descriptionDetail}>{user.description}</Text>
          </DetailContainer>
        )}
        {user.aboutMe && user.aboutMe.length > 0 && (
          <DetailContainer backgroundColor={Colors.WHITE}>
            <View style={styles.tagsContainer}>
              <Text style={styles.title}> About me </Text>
              <FlatList
                contentContainerStyle={styles.flatListTags}
                data={user.aboutMe}
                renderItem={({item}) => <DetailTag item={item} />}
                keyExtractor={({item, index}) => index}
              />
            </View>
            <HeartButton
              height={50}
              width={50}
              iconSize={Typography.FONT_SIZE_24}
              onPress={() => {
                dispatch(deleteUser(user.id));
                navigation.goBack();
              }}
            />
          </DetailContainer>
        )}
        {!user.aboutMe && (
          <DetailContainer backgroundColor={Colors.WHITE} paddingBottom={50}>
            <View style={styles.tagsContainer}>
              <Text style={styles.title}> About me </Text>
              <FlatList
                contentContainerStyle={styles.flatListTags}
                data={AboutMe}
                renderItem={({item}) => <DetailTag item={item} />}
                keyExtractor={item => item.key}
              />
            </View>
            <HeartButton
              height={50}
              width={50}
              iconSize={Typography.FONT_SIZE_24}
              onPress={() => {
                dispatch(deleteUser(user.id));
                navigation.goBack();
              }}
            />
          </DetailContainer>
        )}
      </ScrollView>
    </Container>
  );
};
export default DetailUser;
