import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import  exStyle from "./exStyle" 
export const Learning = ({ message }) => {

    const [count, setCount] = useState(0)

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
        </View>
    )
}

export default Learning