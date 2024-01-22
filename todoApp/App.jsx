import React, { useState } from "react";
import { Text, View } from "react-native";
import Learning from "./component/Learning";
import {  SectionListTopic } from "./component/SectionListTopic";

const App = () => {
  const[messageFromApp, setMessageFromApp] = useState("hello world")
  return (
    <View>
      <Text style={{fontSize:30}}>First program</Text>
      
      {/* <Learning message={messageFromApp} /> */}
      <SectionListTopic/>
    </View>
  );
};

export default App;
