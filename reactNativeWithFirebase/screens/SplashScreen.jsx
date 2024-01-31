import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{

        setTimeout(() => {
            Auth().onAuthStateChanged(user=>{
                const gotoScreen = user !== null? 'home' : 'login'
                navigation.dispatch(StackActions.replace(gotoScreen))
                
            })
        }, 2000);
    },[])
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen