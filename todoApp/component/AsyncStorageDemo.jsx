import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageDemo = () => {
   const [data , setData] =useState("");
   const [show,setShow] = useState(false)


   
   const setDataHandler=(text)=>{
       setShow(false)
       setData(text)
       
}

    const setHandler = async () => {
        try {
            await AsyncStorage.setItem("name", "Deepak");
            console.log("Data successfully set in AsyncStorage.");
        } catch (error) {
            console.error("Error setting data in AsyncStorage:", error);
        }
    };
    
    const getHandler = async () => {
        setShow(true)  
        try {
            const name = await AsyncStorage.getItem("name");
            console.log("Retrieved data from AsyncStorage:", name);
            setShow(true)
        } catch (error) {
            console.error("Error getting data from AsyncStorage:", error);
        }
    };

    useEffect(() => {
        // You can perform any initial actions here
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Async storage in React Native</Text>
            <TextInput placeholder='enter something' 
            onChangeText={(text)=>setDataHandler(text)}
            style={{borderColor:"black", borderWidth:1, borderRadius:10, paddingLeft:10}}
            />
            <View style={{ margin: 10 }}>
                <Button title='Set Data' onPress={setHandler} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Get Data' onPress={getHandler} />
            </View>
            <View style={{height:200, backgroundColor:"black",borderRadius:10}}>
                {
                    show?
                    <Text style={{color:"pink"}}>{data}</Text>:null
                }
            </View>

        </View>
    );
};
