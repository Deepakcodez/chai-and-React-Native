import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalenderIcon from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTaskScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState("")
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("")
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const fetchuid = async () => {
      let id = await AsyncStorage.getItem("uid");

      setUserId(id);
    };

    fetchuid();
  }, []);





  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date.toISOString().split('T')[0]);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setTime(date.toLocaleTimeString());
    hideTimePicker();
  };

  const createTodo = () => {
    try {
      firestore()
        .collection('todos')
        .add({
          userId: userId,
          date: date,
          time: time,
          task: task,
          category: category
        })
        .then(() => {
          console.log('todo added added!');
        });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{ flex: 1, }}>
      <View style={{ paddingBottom: responsiveHeight(1), }}>
        <Text style={{ fontSize: responsiveFontSize(4), textAlign: "center", }}>New Task</Text>

      </View>
      {/* //from */}
      <View style={{ paddingBottom: responsiveWidth(30), }}>
        <Text style={{ paddingLeft: responsiveWidth(5), }}>What are you planning today?</Text>
        <TextInput value={task} onChangeText={(text) => setTask(text)} style={{ fontSize: responsiveFontSize(4), paddingHorizontal: responsiveWidth(5), }} />

      </View >
      {/* form end  */}
      <View style={{
        borderWidth: 0.15,
        borderColor: 'black',
        marginBottom: responsiveHeight(2),

      }} />
      <View style={{ flex: 1, gap: responsiveHeight(3), paddingHorizontal: responsiveWidth(3) }}>
        <TouchableOpacity onPress={() => showDatePicker()} style={{ flexDirection: "row", gap: responsiveWidth(5), }} >
          <CalenderIcon name={"calendar"} size={30} color={"gray"} />
          <Text>{date ? date : "Select Date"}</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => showTimePicker()} style={{ flexDirection: "row", gap: responsiveWidth(5) }}>
          <CalenderIcon name={"clockcircleo"} size={30} color={"gray"} />
          <Text>{time ? time : "Select Time"}</Text>
        </TouchableOpacity>


        <View
         style={{ flexDirection: "row", alignItems: "center", gap:responsiveWidth(5), }}>
          <CalenderIcon name={"tago"} size={30} color={"gray"} />

          <RNPickerSelect
            placeholder={{ label: 'Select category', value: null }}
            onValueChange={(value) => { setCategory(value) }} // You can handle the selected value here
            items={[
              { label: 'Music', value: 'music' },
              { label: 'School', value: 'school' },
              { label: 'Work', value: 'work' },
              // Add more options as needed
            ]}
            style={{ inputAndroid: { color: 'black' , width:responsiveWidth(80)}  }} 
          />

        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}

        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}

        />
        <TouchableOpacity
          onPress={createTodo}
          style={{ backgroundColor: "#5786ff", padding: responsiveHeight(1), borderRadius: responsiveWidth(2) }}>
          <Text style={{ fontSize: responsiveFontSize(3), textAlign: "center", color: "white" }}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddTaskScreen