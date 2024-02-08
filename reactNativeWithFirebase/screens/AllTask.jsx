import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import firestore, { FieldValue, FieldPath, Filter } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import AddTodoBtn from './shared/AddTodoBtn';
const AnimatableCards = Animatable.createAnimatableComponent(TouchableOpacity)

const AllTask = ({ route }) => {
    const [category, setCategory] = useState("")
    const [userId, setUserId] = useState('');
    const [data, setData] = useState([])
    const [cardIndex, setCardIndex] = useState(null)
    const { categoryData } = route.params;

    useEffect(() => {
        setCategory(categoryData.category)
        console.log(category);
    }, [category])

    useEffect(() => {
        const fetchUserId = async () => {
            const id = await AsyncStorage.getItem('uid');
            setUserId(id);
        };
        fetchUserId();
    }, []);

    useEffect(() => {
        let unsubscribe;

        try {
            function fetchTodo() {
                let query;
                if (category == "all") {
                    query = firestore()
                        .collection('todos')
                        .where('userId', '==', userId)
                }
                else {

                    query = firestore()
                        .collection('todos')
                        .where('userId', '==', userId)
                        .where('category', '==', category);
                }


                unsubscribe = query.onSnapshot(querySnapshot => {
                    const documents = [];
                    querySnapshot.forEach(documentSnapshot => {

                        console.log("id ",documentSnapshot.id);
                        // Check if documentSnapshot and data function exist before calling
                        if (documentSnapshot.exists && documentSnapshot.data) {
                            documents.push({ ...documentSnapshot.data(), id: documentSnapshot.id,});
                            console.log('todo data: ', documentSnapshot.data());
                        } else {
                            console.log('Document does not exist or data is undefined.');
                        }
                    });
                    setData(documents);
                });
            }


            fetchTodo();

            return () => {
                if (unsubscribe) {
                    unsubscribe();
                }
            };
        } catch (error) {
            console.log('Error fetching todo data: ', error);
        }
    }, [userId]);


    const deleteTodo = (cardIndex, cardValue,itemId) => {

        Alert.alert(
            `Are you sure you want to delete ${cardValue} ?`,   
            undefined,
            [
                {
                    text: "Delete",
                    onPress: async () => {
                        try {
                            await firestore()
                                .collection('todos')
                                .doc(itemId)
                                .delete();
                            console.log("Todo deleted successfully");
                        } catch (error) {
                            console.error("Error deleting todo:", error);
                        }
                    }
                },
                {
                    text: "Cancel",
                    style: "cancel"
                }
            ]
        );
    };












    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <View
                style={{
                    height: responsiveHeight(40),
                    backgroundColor: '#5786ff',
                    alignContent: 'flex-end',
                    borderBottomEndRadius: responsiveWidth(10),
                    borderBottomStartRadius: responsiveWidth(10),
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"

                }}
            >
                <Animatable.Image
                    style={{ width: responsiveHeight(15), height: responsiveHeight(15), }}
                    source={require('../Assets/logo.png')}
                    animation={"zoomIn"}
                />
                <Text style={{ fontSize: responsiveFontSize(5), color: "white", position: "absolute", bottom: responsiveHeight(3), left: responsiveWidth(7) }}>{categoryData.title}</Text>
            </View>
            <View style={{
                flex: 1,
                paddingTop: responsiveHeight(4)

            }}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <AnimatableCards style={{}}
                                animation={"slideInUp"}
                                duration={1000 * (index + 1)}
                                onLongPress={() => deleteTodo(index, item.task,item.id)}
                            >

                                <View style={{
                                    marginBottom: responsiveHeight(6),
                                    paddingLeft: responsiveWidth(6),

                                }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5) }}>{item.task}</Text>
                                    <Text style={{ fontSize: responsiveFontSize(1.2) }}>{item.id}</Text>

                                </View>
                                <View>

                                </View>

                            </AnimatableCards>
                        )
                    }}
                />

            </View>
            <AddTodoBtn />
        </View>
    );
};

export default AllTask;
