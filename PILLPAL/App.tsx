import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomePage';


export default function App() {
  return (
    <View >
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

