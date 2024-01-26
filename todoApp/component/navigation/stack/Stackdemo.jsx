import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Login } from './Login';



export const Stackdemo = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
            // this apply to all screen  navbar 
            screenOptions={
                {
                   
                    headerStyle: {
                        backgroundColor: "pink"
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontSize: 20,
                    }

                }}
            >
                <Stack.Screen name='Login'
                    options={
                        {
                            title: "user Login",
                            headerStyle: {
                                backgroundColor: "pink"
                            },
                            headerTintColor: "black",
                            headerTitleStyle: {
                                fontSize: 30,
                            }

                        }}

                    component={Login} />

                <Stack.Screen name='Home' component={Home} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};
