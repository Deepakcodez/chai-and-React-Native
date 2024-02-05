import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import { styles } from './Styles';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import AddTodoBtn from './shared/AddTodoBtn';
import * as Animatable from 'react-native-animatable';

const HomePage = () => {

  const [userEmail, setUserEmail] = useState("")
  const [uid, setUid] = useState("")
  const navigation = useNavigation()
  const category = [
    { title: "All", icon: "note", desc: "Contains all Tasks", iconColor: "#ff8969", navigateTo: "task" ,category:"all"},
    { title: "Work", icon: "suitcase", desc: "Contains work related Tasks", iconColor: "#69ff99", navigateTo: "task",category:"work" },
    { title: "Music", icon: "music", desc: "contains music related Tasks", iconColor: "#69a5ff", navigateTo: "task",category:"music" },
    { title: "Study", icon: "school", desc: "Contains study related Tasks", iconColor: "#ff69d2", navigateTo: "task",category:"study" },
  ]

  useEffect(() => {
    const userdata = async () => {
      const email = await AsyncStorage.getItem("email")
      const uid = await AsyncStorage.getItem("uid")
      await console.log(Auth());
      setUserEmail(email)
      setUid(uid)
    }
    userdata()
  }
    , [])
  return (
    <View style={{ position: "relative", padding: 10, flex: 1 }}>

      <View style={styles.listbox}>
        <Text style={styles.listboxText}>Lists</Text>
      </View>

      <SafeAreaView style={styles.listCont}>
        <FlatList
          data={category}
          numColumns={2}
          renderItem={({ item }) => {

            return (

              <TouchableOpacity
              onPress={() => {
                navigation.navigate('task', { categoryData: item});
              }}
               style={styles.contBox}>
                <Animatable.View animation={"fadeIn"}>

                  {item.icon === 'note' ? (
                    <IconOcticons name={item.icon} size={40} color={item.iconColor} />
                  ) : item.icon === 'suitcase' ? (
                    <IconEntypo name={item.icon} size={40} color={item.iconColor} />
                  ) : item.icon === 'school' ? (
                    <IconIonicons name={item.icon} size={40} color={item.iconColor} />
                  ) : (
                    <IconFontAwesome name={item.icon} size={40} color={item.iconColor} />
                  )}
                </Animatable.View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 500, }}>{item.title}</Text>
                </View>
                <View>
                  <Text style={{color:"#bfbfbf"}}>{item.desc}</Text>
                </View>
              </TouchableOpacity>

            )
          }}
        />
      </SafeAreaView>
      <AddTodoBtn />
    </View>
  )
}

export default HomePage