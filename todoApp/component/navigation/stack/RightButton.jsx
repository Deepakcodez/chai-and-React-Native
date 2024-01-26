import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View } from 'react-native'

export const RightButton = (props) => {
    const navigation = useNavigation();

    const pressHandler=()=>{
        navigation.navigate("Home")
    }

  return (
    <Button title='Next' onPress={pressHandler} />
  )
}
