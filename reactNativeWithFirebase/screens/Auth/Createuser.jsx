import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';



const Createuser = () => {
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)
  const [msg,setMsg] = useState("")

  
  const handleCreate = async()=>{
    try {
      const isuserCreated = await auth().createUserWithEmailAndPassword(email, pass)
      setEmail("")
      setPass("")

      
    } catch (error) {
      console.log(error);
      setMsg(error.message)
      
    }
  }



  return (
    <View style={styles.cont}>
      <Text style={{textAlign : "center" , fontSize : 30}}>Register</Text>
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
            create
          </Text>
        </View>
      </TouchableOpacity>

      <Text>{msg}</Text>

    </View>
  )
}

export default Createuser

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,

  },
  btn:{
    backgroundColor:"green",
    padding : 12,
    borderRadius : 40,
    margin : 20



  },
  btnText:{
    color: "white",
    fontSize : 20,
    textAlign : "center"
,

  },

})