import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomePage = () => {

  const [userEmail, setUserEmail] = useState("")
  const [uid, setUid] = useState("")

  useEffect(()=>{
    const userdata =async ()=>{
         const email =  await AsyncStorage.getItem("email")
         const uid =  await AsyncStorage.getItem("uid")
  
        setUserEmail(email)
        setUid(uid)
    }
    userdata()
  }
  ,[])
  return (
    <View>
      <Text>Home</Text>
      <Text>{userEmail}</Text>
      <Text>{uid}</Text>
    </View>
  )
}

export default HomePage