import React, { useState } from 'react'
import { Button, Text, View, TextInput, FlatList } from 'react-native'
import exStyle from "./exStyle"
export const Learning = ({ message }) => {

    const [count, setCount] = useState(0)
    const [textInput, setTextInput] = useState("")
    const users = [
        {
            id: 0,
            name: "Deepak",
        },
        {
            id: 2,
            name: "Musu",
        },
        {
            id: 3,
            name: "Abhi",
        },
    ]
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
                onChangeText={(text) => setTextInput(text)}
                placeholder='enter your name'
            />
            <Text>Friends</Text>
            <FlatList
                data={users}
                renderItem={({item})=><Text style={exStyle.data}>{item.name}</Text>}
                keyExtractor={item=>item.id}
            />
        </View>
    )
}

export default Learning