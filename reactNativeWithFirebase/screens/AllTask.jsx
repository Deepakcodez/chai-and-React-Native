import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllTask = () => {
    const [userId, setUserId] = useState('');

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
                    querySnapshot.forEach(documentSnapshot => {
                        // Check if documentSnapshot and data function exist before calling
                        if (documentSnapshot.exists && documentSnapshot.data) {
                            console.log('todo data: ', documentSnapshot.data());
                        } else {
                            console.log('Document does not exist or data is undefined.');
                        }
                    });
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
                }}
            >
                {/* Your UI components go here */}
            </View>
        </View>
    );
};

export default AllTask;
