import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tran Minh Luan</Text>
      <Text style={styles.text}>the44secrets@gmail.com</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/4,
    backgroundColor: '#000000',
    alignItems: 'flex-end', // put item to the right side
    justifyContent: 'flex-end', // put item to the bottom
    padding: 16
  },
  text: {
    color: "#ffffff"
  }
});
