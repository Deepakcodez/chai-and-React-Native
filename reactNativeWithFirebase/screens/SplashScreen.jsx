import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{

        setTimeout(() => {
            Auth().onAuthStateChanged(user=>{
                const gotoScreen = user !== null? 'home' : 'login'
                navigation.dispatch(StackActions.replace(gotoScreen))
                
            })
        }, 3000);
    },[])
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
       <Animatable.Image
       source={require('../Assets/logo.png')}
       style={{height:responsiveHeight(15),
      width:responsiveWidth(25)}}
      animation={"zoomIn"}
       />
       <Animatable.View
       style={{height:responsiveHeight(35),
      width:responsiveHeight(35),
      borderRadius:responsiveHeight(50),
      backgroundColor:"#5687ff",
      position:"absolute",
      top:-54,
      left:-100,

    }}
    animation={"zoomIn"}
       >

       </Animatable.View>
       <Animatable.View
       style={{height:responsiveHeight(35),
      width:responsiveHeight(35),
      borderRadius:responsiveHeight(50),
      backgroundColor:"#5687ff",
      opacity:.5,
      position:"absolute",
      bottom:-94,
      right:-150,

    }}
    animation={"slideInUp"}
       >

       </Animatable.View>
    </View>
  )
}

export default SplashScreen