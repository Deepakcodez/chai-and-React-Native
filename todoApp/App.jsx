import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Learning from "./component/Learning";
import { SectionListTopic } from "./component/SectionListTopic";
import { ResponsiveDesign } from "./component/ResponsiveDesign";
import  Buttons  from "./component/Buttons";

const App = () => {
  // const[messageFromApp, setMessageFromApp] = useState("hello world")
  return (
    // <View>
    //   <Text style={{fontSize:30}}>First program</Text>
      
    //   {/* <Learning message={messageFromApp} /> */}
    //   {/* <SectionListTopic/> */}
    // </View>

    // <ResponsiveDesign />
    <Buttons/>

  );
};

export default App;
