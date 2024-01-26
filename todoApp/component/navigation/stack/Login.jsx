import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export const Login = (props) => { 
    //navigator automaticaly give props about all screens
    // console.log('>>>>>>>>>>>', props)
  
    const [userData,setUserData] = useState({name:"",email : "email@gmail.com"})
   const inputhandler=(text)=>{
    setUserData({name:text,email:"email@gmail.com"})
   }
    return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
    <Text>Login page</Text>
    <TextInput placeholder='enter name'
    onChangeText={(text)=>inputhandler(text)}
    />

    <Button title='go to Home page' 
    onPress={()=> props.navigation.navigate("Home", {userData})} />
</View>
  )
}
