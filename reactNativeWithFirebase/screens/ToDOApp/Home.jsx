import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';

export default function Home() {
    const [todo, setTodo] = useState(null)
    const [todoList, setTodoList] = useState(null)



    useEffect(() => {
        const unsubscribe = database().ref("todo").on('value', (latestdata) => {
            setTodoList(latestdata.val());
            console.log('>>>>>>>>>>>todolist', todoList);
            console.log('>>>>>>>>>>>data', latestdata);
        });

        // Clean up the subscription when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);
 




    const addHandler = async () => {
        const index = todoList.length;
        try {
            const resp = await database().ref(`todo/${index }`).set({ value: todo })

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
                    <Text style={[styles.textLight, styles.textCenter]}>ADD</Text>
                </TouchableOpacity>
            </View>
            {/* //todo list  */}
            <View style={styles.listbox}>
                <FlatList
                    data={todoList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        console.log('>>>>>>>>>>>item', item)
                        if (item !== null && item.value !== null) {
                            return (
                                <View style={styles.card}>
                                    <Text style={[styles.textDark,styles.textLarge]} >{item.value}</Text>
                                </View>
                            )
                        }
                       
                    }

                    }
                />
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
    textLight: {
        color: "white",
    },
    textDark: {
        color: "black",
    },
    textCenter: {
        textAlign: "center"
    },
    textLarge:{
        fontSize : 20,

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
    },
    listbox: {

        borderRadius: 20,
        marginHorizontal: 10,
        height: 500
    },
    card:{
        paddingVertical : 20,
        backgroundColor:"white",
        margin : 10,
        paddingLeft : 10,
        borderRadius : 20,
        shadowColor : "black",
        shadowOpacity : 1,
        elevation : 3,



        

        


    }
});
