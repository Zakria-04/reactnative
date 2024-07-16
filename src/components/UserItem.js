import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DeleteUser from './DeleteUser';

const UserItem = props => {
  const {userName, userID, _id} = props;
  

  return (
    <View>
      <Text>{`name ${userName}`}</Text>
      <Text>{`userID ${userID}`}</Text>
      <Text>{`userID ${_id}`}</Text>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({});
