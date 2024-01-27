import { View, Text, ScrollView, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

export default function FirestoreScreen() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
  
    useEffect(() => {
      fetchData()
    }, [])
  
  
    const fetchData = async () => {
      try {
  
        const data = await firestore().collection('nativeApp').doc('yDXyATwuWvcUbLn48UfL').get();
        console.log('>>>>>>>>>>>firebase data', data.data())
        setName(data.data().name)
        setAge(data.data().age)
  
      }
  
      catch (error) {
        Alert.alert(error)
      }
    }
  
  return (
   
    <View>
    <Text>Data from firebase</Text>
    <Text style={{fontSize:40}} > Name: { name?name:<Text>Loading....</Text>  }  </Text>
    <Text style={{fontSize:40}} > Age: { age?age:<Text>Loading....</Text> }  </Text>
  </View>


  )
}