import { Text, View, StyleSheet } from 'react-native';
import FirestoreScreen from './screens/FirestoreScreen';
import RealtimeDatabase from './screens/RealtimeDatabase';
import Home from './screens/ToDOApp/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirestoreScreen /> */}
      {/* <RealtimeDatabase /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue', // Set your desired background color here
  },
});
