import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RootNavigation} from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <RootNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
