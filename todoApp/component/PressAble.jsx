import React from 'react'
import { Button, Pressable, Text, View } from 'react-native'

export const PressAble = () => {
    return (

        <View style={{ flex: 1, backgroundColor: "yellow", justifyContent: "center", paddingHorizontal: 10 }}>

            <Pressable
             onLongPress={()=>console.warn("long press")}
             onPress={()=>console.warn("press")}
             onPressIn={()=>console.warn("press in")}
             onPressOut={()=>console.warn("press out")}
            >
                <View style={{ backgroundColor: "blue", padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: "white", textAlign: "center" }}>press</Text>
                </View>

            </Pressable>
        </View>

    )
}
