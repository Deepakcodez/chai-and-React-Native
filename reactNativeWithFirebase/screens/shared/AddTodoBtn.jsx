import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const AddTodoBtn = () => {
  const navigation = useNavigation()
  const btnPress=()=>{
        navigation.navigate("addTaskScreen")
  }
  return (
    <Animatable.View animation="bounceInRight" duration={2000} delay={500}>
    <TouchableOpacity style={{position:"absolute", backgroundColor:"#5786ff", padding:15, borderRadius:50, bottom:30, right:30,}} 
    onPress={btnPress}
    >
      <Icon name="plus" size={40} color="white"/>
    </TouchableOpacity>
    </Animatable.View>
  )
}

export default AddTodoBtn