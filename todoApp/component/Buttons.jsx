import React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function Buttons() {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <View style={styles.successBtn}><Text style={styles.btntextcolor}>press me</Text></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.warningBtn}><Text style={styles.btntextcolor}>press me</Text></View>
      </TouchableOpacity>
      <TouchableOpacity>
    <Text onPress={()=>{Alert.alert("pressed")}} style={[styles.btntextcolor, styles.primaryBtn]}>press me</Text>
      </TouchableOpacity>
      <View style={styles.btn}>

      <Button color={"red"} title ="khatra"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  btn:{
    margin:10,
   
    
  },
  successBtn: {
    backgroundColor: "green",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "white",
  },
  warningBtn: {
    backgroundColor: "orange",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "white",
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
  },
  primaryBtn: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "white",
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
  },
  btntextcolor: {
    color: "white",
    textAlign: "center",
  },
});
