import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';


export default function RealtimeDatabase() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
  
    useEffect(() => {
      fetchData()
    }, [])
  
  
    const fetchData = async () => {
      try {
  
        const data = await  database().ref('users/1').once('value')
        console.log('>>>>>>>>>>>firebase data', data.val())
        setName(data.val().name)
        setAge(data.val().age)
  
      }
  
      catch (error) {
        Alert.alert(error)
      }
    }
  return (
    <View>
    <Text>Data from reatime database </Text>
    <Text style={{fontSize:40}} > Name: { name?name:<Text>Loading....</Text>  }  </Text>
    <Text style={{fontSize:40}} > Age: { age?age:<Text>Loading....</Text> }  </Text>
  </View>

  )
}