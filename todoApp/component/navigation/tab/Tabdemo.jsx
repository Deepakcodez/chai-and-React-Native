import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { Setting } from './Setting';


export const Tabdemo = () => {
    const Tab = createBottomTabNavigator();

    return (

        <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name='Home' component={Home} />
              <Tab.Screen name='Setting' component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
