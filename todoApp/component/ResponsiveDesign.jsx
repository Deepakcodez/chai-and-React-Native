import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ResponsiveDesign = () => {
  return (
    <View style={styles.main}>
     <View style={styles.box1}>
        <View style={styles.innerBox}></View>
        <View style={styles.innerBox}></View>
        <View style={styles.innerBox}></View>
     </View>
     <View style={styles.box2}>
     </View>
     <View style={styles.box3}>
        <Text>upperbox</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: "green",
  },
  box1:{
    flex: 2,
    flexDirection:"row",
    backgroundColor:"pink",

  },
  box2:{
    flex: 1,
    backgroundColor:"red",

  },
  box3:{
    flex: 1,
    backgroundColor:"blue",

  },
  innerBox:{
    flex: 1,
  
    backgroundColor:"blue",
    margin : 20,

  },
});
