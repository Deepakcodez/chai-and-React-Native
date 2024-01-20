import React, { useState } from 'react'
import { Button, Text, View , TextInput} from 'react-native'
import  exStyle from "./exStyle" 
export const Learning = ({ message }) => {

    const [count, setCount] = useState(0)
    const [textInput, setTextInput] = useState("")

    const pressHandler = () => {
        console.warn("button pressed")
    }
    const coutHandler = () => {
        setCount(count + 1)
    }
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{message}</Text>
            <Text style={exStyle.textStyle}>{count}</Text>
            <Text style={exStyle.textStyle}>{textInput}</Text>
            <Button
                
                title='Press'
                color={"green"}
                onPress={pressHandler}
            />
            <Button
                title='count+'
                color={"blue"}
                onPress={coutHandler}
            />
            <TextInput
            style={exStyle.textInput}
            value={textInput}
            onChangeText={(text)=>setTextInput(text)}
            placeholder='enter your name'
            />
        </View>
    )
}

export default Learning