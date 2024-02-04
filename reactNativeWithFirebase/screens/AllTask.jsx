import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';

const AllTask = () => {
    const [userId, setUserId] = useState('');
    const [data, setData] = useState([])

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
                const query = firestore()
                    .collection('todos')
                    .where('userId', '==', userId);

                unsubscribe = query.onSnapshot(querySnapshot => {
                    const documents = [];
                    querySnapshot.forEach(documentSnapshot => {
                        // Check if documentSnapshot and data function exist before calling
                        if (documentSnapshot.exists && documentSnapshot.data) {
                            documents.push(documentSnapshot.data());
                            console.log('todo data: ', documentSnapshot.data());
                        } else {
                            console.log('Document does not exist or data is undefined.');
                        }
                    });
                    setData(documents)
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
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                   
                }}
            >
               <Animatable.Image
               style={{width:responsiveHeight(15), height:responsiveHeight(15),}}
               source={require('../Assets/logo.png')}
               animation={"zoomIn"}
               />
            </View>
            <View style={{
                flex: 1,
                paddingTop: responsiveHeight(4)

            }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{}}>

                                <View style={{
                                    marginBottom: responsiveHeight(6),
                                    paddingLeft: responsiveWidth(6),

                                }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5) }}>{item.task}</Text>
                                    <Text style={{fontSize:responsiveFontSize(1.2)}}>{item.time}</Text>
                                </View>
                                <View>
                                   
                                </View>

                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        </View>
    );
};

export default AllTask;
