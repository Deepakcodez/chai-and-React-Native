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
const HomePage = () => {

  const [userEmail, setUserEmail] = useState("")
  const [uid, setUid] = useState("")
  const navigation = useNavigation()
  const category = [
    { title: "All", icon: "note", desc: "abc", iconColor: "#ff8969" },
    { title: "Work", icon: "suitcase", desc: "abc", iconColor: "#69ff99" },
    { title: "Music", icon: "music", desc: "abc", iconColor: "#69a5ff" },
    { title: "School", icon: "school", desc: "abc", iconColor: "#ff69d2" },
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
    <View style={{ padding: 10, flex: 1 }}>

      <View style={styles.listbox}>
        <Text style={styles.listboxText}>Lists</Text>
      </View>

      <SafeAreaView style={styles.listCont}>
        <FlatList
          data={category}
          numColumns={2}
          renderItem={({ item }) => {

            return (
              <View style={styles.contBox}>
                <View>

                  {item.icon === 'note' ? (
                    <IconOcticons name={item.icon} size={30} color={item.iconColor} />
                  ) :  item.icon === 'suitcase' ? (
                    <IconEntypo name={item.icon} size={30} color={item.iconColor} />
                  ) : item.icon === 'school' ? (
                    <IconIonicons name={item.icon} size={30} color={item.iconColor} />
                  ): (
                    <IconFontAwesome name={item.icon} size={30} color={item.iconColor} />
                  )}
                </View>
                <View>
                  <Text style={{ fontSize: 30, }}>{item.title}</Text>
                </View>
                <View>
                  <Text>{item.desc}</Text>
                </View>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

export default HomePage