import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loader = () => {
    return (
        <View
        style={{flex:1,backgroundColor:"green", justifyContent:"center", alignItems:"center"}}
        >
          <ActivityIndicator
          size={300}
          color={"yellow"}
          animating = {false}
          />
        </View>
    )
}
