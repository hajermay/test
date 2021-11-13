import React from 'react';
import {View, Image, Text, FlatList, ScrollView} from 'react-native';
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
          <Image source={{uri: user.avatar}} style={styles.image} />
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
              }>{`${user.first_name} ${user.last_name}`}</Text>
            <RoundIcon />
          </View>
          {/**** Because the api  just return some data of the user.
           I used the email and id as shown data  just to show the component****/}
          {user.email && (
            <DetailItem
              icon={require('../../assets/icons/home.png')}
              label={user.email}
            />
          )}
          {user.id && (
            <DetailItem
              icon={require('../../assets/icons/location.png')}
              label={user.id}
            />
          )}
        </DetailContainer>
        {/*** User dose not have description on his data so,
         I create 2 cases if the use has a description and if not to show the component
         ***/}
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

        {/*** Same here User dose not have about me on his data,
         so I create 2 cases if the use has a about me section
         and if not I created a static list to be used as data
         ***/}

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
export {DetailUser};
