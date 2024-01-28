import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';

export default function Home() {
    const [todo, setTodo] = useState(null)
    const [todoList, setTodoList] = useState(null)
    const [isupdateTodo, setIsUpdateTodo] = useState(false)
    const [cardIndex, setCardIndex] = useState(null)



    useEffect(() => {
        const unsubscribe = database().ref("todo").on('value', (latestdata) => {
            setTodoList(latestdata.val());

        });

        // Clean up the subscription when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);





    const addHandler = async () => {
        try {
            if (isupdateTodo) {
                // Updating an existing item
                if (todo.length > 0) {
                    await database().ref(`todo/${cardIndex}`).update({ value: todo });
                    setIsUpdateTodo(false);
                    setTodo('')
                }

            } else {
                // Adding a new item
                if (todo.length > 0) {
                    const index = todoList.length;
                    await database().ref(`todo/${index}`).set({ value: todo });
                }
                setTodo('');
            }

        } catch (error) {
            Alert.alert(error);
        }
    }

    const onpressCard = (cardIndex, cardValue) => {
        setIsUpdateTodo(true)
        setCardIndex(cardIndex)
        setTodo(cardValue)
        console.log("card press", cardIndex)

    }

    const onLongPressCard =(cardIndex, cardValue) =>{
        setCardIndex(cardIndex)
        Alert.alert("Delete",`Are you sure to Delete " ${cardValue}" ?`,
        [
            {
                text : "Delete",
                onPress : async()=>{
                           await database().ref(`todo/${cardIndex}`).remove();
                }
            },
            {
                text : "Cancel",
                
            }
        ])
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
                {
                    isupdateTodo ?
                        <TouchableOpacity style={styles.button} onPress={addHandler}>
                            <Text style={[styles.textLight, styles.textCenter]}>Update</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.button} onPress={addHandler}>
                            <Text style={[styles.textLight, styles.textCenter]}>Add</Text>
                        </TouchableOpacity>
                }
            </View>
            {/* //todo list  */}
            <View style={styles.listbox}>
                <FlatList
                    data={todoList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        console.log('>>>>>>>>>>>item', item)
                        if (item !== null && item.value !== null) {
                            return (
                                <TouchableOpacity style={styles.card} 
                                onPress={() => onpressCard(index, item.value)}
                                onLongPress={() => onLongPressCard(index, item.value)}
                                
                                >
                                    <Text style={[styles.textDark, styles.textLarge]} >{item.value}</Text>
                                </TouchableOpacity>
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
    textLarge: {
        fontSize: 20,

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
    card: {
        paddingVertical: 20,
        backgroundColor: "white",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingLeft: 10,
        borderRadius: 20,
        shadowColor: "black",
        shadowOpacity: 1,
        elevation: 3,








    }
});
