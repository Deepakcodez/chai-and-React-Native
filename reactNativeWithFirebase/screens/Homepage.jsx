import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';


const HomePage = () => {

  const [userEmail, setUserEmail] = useState("")
  const [uid, setUid] = useState("")
  const navigation = useNavigation()


  useEffect(() => {
    const userdata = async () => {
      const email = await AsyncStorage.getItem("email")
      const uid = await AsyncStorage.getItem("uid")
      await console.log(Auth());
      setUserEmail(email)
      setUid(uid)
    }
    userdata()
  }
    , [])
  return (
    <View>
      <Text>Home</Text>
      <Text>{userEmail}</Text>
      <Text>{uid}</Text>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            margin: 10,
            padding: 10,
            borderRadius: 10,



          }}
          onPress={async () => {
            await Auth().signOut()
            navigation.dispatch(StackActions.popToTop())
          }} >
          <Text
            style={{ color: "white", textAlign: "center" }}
          >Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomePage