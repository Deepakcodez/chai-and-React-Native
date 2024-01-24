import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Learning from "./component/Learning";
import { SectionListTopic } from "./component/SectionListTopic";
import { ResponsiveDesign } from "./component/ResponsiveDesign";
import  Buttons  from "./component/Buttons";
import { Loader } from "./component/Loader";
import { ModalComp } from "./component/ModalComp";
import { PressAble } from "./component/PressAble";

const App = () => {
  // const[messageFromApp, setMessageFromApp] = useState("hello world")
  return (
    // <View>
    //   <Text style={{fontSize:30}}>First program</Text>
      
    //   {/* <Learning message={messageFromApp} /> */}
    //   {/* <SectionListTopic/> */}
    // </View>

    // <ResponsiveDesign />
    // <Buttons/>
    // <Loader/>
    // <ModalComp/>
    <PressAble/>

  );
};

export default App;
