import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Login = () => {
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)
  const [msg, setMsg] = useState("")
  const navigation = useNavigation()

  const handleCreate = async () => {
    try {
      if (!email || !pass) {
        Alert.alert("enter both email and password")
      }
      else {

        const loginData = await auth().signInWithEmailAndPassword(email, pass)
        setEmail("")
        setPass("")
        await AsyncStorage.setItem('uid', loginData.user.uid);
        await AsyncStorage.setItem('email', loginData.user.email);
        navigation.navigate("home")
      }


    } catch (error) {
      console.log(error);
      setMsg(error.message)

    }
  }

  const signinPress = () => {
    navigation.navigate("register")
  }



  return (
    <View style={styles.cont}>
      <Text style={{ textAlign: "center", fontSize: 30 }}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='enter email'
        value={email}
        onChangeText={(text) => { setEmail(text) }}
      />

      <TextInput
        style={styles.input}
        placeholder='enter password'
        value={pass}
        onChangeText={(text) => { setPass(text) }}
      />

      <TouchableOpacity style={styles.btn} onPress={handleCreate}>
        <View>
          <Text style={styles.btnText}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: "center" }}>haven't an account <Text onPress={signinPress} style={{ color: "blue" }}>Sign-In</Text></Text>
      </View>

      <Text>{msg}</Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,

  },
  btn: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 40,
    margin: 20



  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
    ,

  },

})