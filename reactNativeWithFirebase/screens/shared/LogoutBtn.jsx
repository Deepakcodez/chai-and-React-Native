import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import Auth from '@react-native-firebase/auth';

const LogoutBtn = () => {
  return (
    <View>
      <Icon name="log-out" size={30} color="#282d30" onPress={async () => {
            await Auth().signOut()
            navigation.dispatch(StackActions.popToTop())
          }}/>
    </View>
  )
}

export default LogoutBtn