import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'

export const ModalComp = () => {
    const [show, setShow] = useState(false)
  return (
     <View style={{flex:1,backgroundColor:"yellow",alignItems:"bottom",padding:10}}>
          
          <Modal
           transparent={true}
           visible={show}

          >
            <View style={{flex:1, justifyContent:"center", alignItems:"center",  }}>
                <View style={{backgroundColor:"white",width:300, paddingTop:40, paddingBottom:40, paddingHorizontal:20, borderRadius:10, shadowColor:"black",shadowOpacity:1,elevation:10}}>
                    <Text>i am modal</Text>
                    <Button title='close' onPress={()=>{setShow(false)}} />
                </View>
            </View>
          </Modal>
   
   
   
   
   <View style={{flex:1,justifyContent:"flex-end"}} >

          <Button title='show modal' onPress={()=>{setShow(true)}} />
   </View>
     </View>
    )
}
