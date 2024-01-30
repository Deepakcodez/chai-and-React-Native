import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FirestoreScreen from './screens/FirestoreScreen';
import RealtimeDatabase from './screens/RealtimeDatabase';
import Home from './screens/ToDOApp/Home';
import Createuser from './screens/Auth/Createuser';
import MainNavigation from './screens/MainNavigation';

export default function App() {
  return (
  
    <View style={styles.container}>
      {/* <FirestoreScreen /> */}
      {/* <RealtimeDatabase /> */}
      {/* <Home /> */}
      {/* <Createuser/> */}
      <MainNavigation/>

    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9F1', // Set your desired background color here
    justifyContent : "center"
  },
});
