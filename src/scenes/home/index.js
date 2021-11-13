import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader, Loader, UserCard, Container} from '../../components';
import {getUsersList} from '../../redux/actions/users';
import styles from './styles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector(state => state.users);
  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  return (
    <Container>
      <AppHeader withLabel withMenuIcon label={'Home'} />
      <View style={styles.flatListContainer}>
        {loading && <Loader />}

        {!loading && users.length > 0 && (
          <FlatList
            numColumns={2}
            data={users}
            renderItem={({item}) => (
              <UserCard
                item={item}
                onPress={() => {
                  navigation.navigate('detailUser', {item});
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </Container>
  );
};
export {Home};
