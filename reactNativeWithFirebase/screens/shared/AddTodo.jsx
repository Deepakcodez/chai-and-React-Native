import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const AddTodo = () => {
  return (
    <TouchableOpacity style={{position:"absolute", backgroundColor:"#5786ff", padding:15, borderRadius:50, bottom:30, right:30,}}>
      <Icon name="plus" size={40} color="white"/>
    </TouchableOpacity>
  )
}

export default AddTodo