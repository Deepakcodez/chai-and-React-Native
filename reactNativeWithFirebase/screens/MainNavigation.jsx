import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Createuser from './Auth/Createuser';
import Login from './Auth/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './ToDOApp/Home';
import HomePage from './Homepage';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen name="register" component={Createuser}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="login" component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="home" component={HomePage}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});
export default MainNavigation