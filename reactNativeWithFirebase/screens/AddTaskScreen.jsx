import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalenderIcon from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';

const AddTaskScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState("")
  const [time, setTime] = useState("");

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

  return (
    <View style={{ flex: 1, }}>
      <View style={{ paddingBottom: responsiveHeight(1), }}>
        <Text style={{ fontSize: responsiveFontSize(4), textAlign: "center", }}>New Task</Text>

      </View>
      {/* //from */}
      <View style={{ paddingBottom: responsiveWidth(30), }}>
        <Text style={{ paddingLeft: responsiveWidth(5), }}>What are you planning today?</Text>
        <TextInput style={{ fontSize: responsiveFontSize(4), paddingHorizontal: responsiveWidth(5), }} />
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


        <View style={{ flexDirection: "row", gap: responsiveWidth(5) }}>
          <CalenderIcon name={"tago"} size={30} color={"gray"} />
          <RNPickerSelect
            placeholder={{ label: 'Select a tag', value: null }}
            onValueChange={(value) => console.log(value)} // You can handle the selected value here
            items={[
              { label: 'All', value: 'All' },
              { label: 'Music', value: 'Music' },
              // Add more options as needed
            ]}
            style={{ inputAndroid: { color: 'black' } }} // You can customize the style
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
      </View>
    </View>
  )
}

export default AddTaskScreen