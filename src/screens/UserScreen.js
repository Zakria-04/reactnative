import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserItem from '../components/UserItem';
import {deleteUsers, getAllUsers} from '../res/api';
import DeleteUser from '../components/DeleteUser';

const UserScreen = props => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [inputTxt, setInputTxt] = useState('6694f3ae45d1d719bf635c7a');
    const renderUsers = () => {
      return users?.map(user => (
        <View key={user.toString()}>
          <UserItem {...user} />
        </View>
      ));
    };

  //   const deleteAllUsersFromAPI = () => {
  //     setLoading(true);
  //     deleteUsers().then(res => {
  //       setLoading(false);
  //       setUsers(res);
  //     });
  //   };

  //   useEffect(() => {
  //     deleteAllUsersFromAPI();
  //   }, []);

  const getAllUsersFromAPI = () => {
    setLoading(true);
    getAllUsers().then(res => {
      setLoading(false);
      setUsers(res);
    });
  };

  useEffect(() => {
    getAllUsersFromAPI();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  const deleteUser = () => {
    return (
      <View>
        <TextInput
          placeholder={'enter your pass'}
          onChangeText={val => setInputTxt(val)}
        />
        <TouchableOpacity
          onPress={() => {
            // console.log(users.map(getID => getID._id));
            if (users?.map(getID => getID._id) == '6694f3ae45d1d719bf635c7a') {
              console.log('user found');
              deleteUsers().then(res => {
                console.log(res);
              });
            } else {
              console.log('user not found');
            }
          }}>
          <Text>delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text>UserScreen</Text>
      <ScrollView>
        {renderUsers()}
        {/* {deleteUser()} */}
        {deleteUser()}
      </ScrollView>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
