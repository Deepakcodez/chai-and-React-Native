import React from 'react'
import { Text, View } from 'react-native'

export const Home = (props) => {
    const { userData } = props.route.params;

  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
        <Text>Home page</Text>
        <Text>{userData.name}</Text>
        <Text>{userData.email}</Text>
    </View>
  )
}
