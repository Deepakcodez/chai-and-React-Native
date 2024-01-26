import React from 'react'
import { Button, Text, View } from 'react-native'

export const Login = (props) => { 
    //navigator automaticaly give props about all screens
    // console.log('>>>>>>>>>>>', props)
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
    <Text>Login page</Text>
    <Button title='go to Home page' onPress={()=> props.navigation.navigate("Home")} />
</View>
  )
}
