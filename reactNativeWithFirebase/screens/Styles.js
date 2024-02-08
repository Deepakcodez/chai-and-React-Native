import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listbox: {
    // backgroundColor: 'red',
    paddingVertical:20,

  },
  listboxText: {
    color: 'black',
    fontSize: 45,
    fontWeight: "bold"
  },
  listCont:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",

    
  
    

  },
  contBox:{
       backgroundColor : "white",
       padding:5,
       height:180,
       flex:1,
       width : 180,
       borderRadius:20,
       shadowColor:"black",
       shadowOpacity:.5,
       elevation : 2,
       margin:5,
       padding :15,

  }
});
