import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import { styles } from './Styles';


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
    <View style={{padding:10}}>
      
      <View style={styles.listbox}>
        <Text style={styles.listboxText}>Lists</Text>
      </View>
    </View>
  )
}

export default HomePage