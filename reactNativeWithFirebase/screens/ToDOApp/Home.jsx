import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import database from '@react-native-firebase/database';

export default function Home() {
    const [todo, setTodo] = useState(null)


    const addHandler = async () => {
        try {
          const resp = database().ref("todo/1").set({value : todo})

          setTodo('')


        } catch (error) {
            Alert.alert(error)
        }
    }


    return (
        <View  >
            <View style={styles.headerCont}>
                <Text style={styles.header} >TODO App</Text>
                <TextInput
                    placeholder='Enter Task'
                    style={styles.inputbox}
                    value={todo}
                    onChangeText={(text => setTodo(text))}

                />
                <TouchableOpacity style={styles.button} onPress={addHandler}>
                    <Text style={[styles.text, styles.textCenter]}>ADD</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    headerCont: {

    },
    header: {
        fontSize: 25,
        alignSelf: "center",
        marginBottom: 5,
    },
    text: {
        color: "white",
    },
    textCenter: {
        textAlign: "center"
    },
    inputbox: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 20,


    },
    button: {
        backgroundColor: "green",
        borderRadius: 10,
        padding: 15,
        margin: 10
    }
});
