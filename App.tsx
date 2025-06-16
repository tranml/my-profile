import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
      />
      <Image
        source={require("./assets/tranml.jpg")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          borderWidth: 5,
          borderColor: "white",
          marginTop: -75,
        }}
      />
      <Text style={styles.text}>Tran Minh Luan</Text>
      <Text style={styles.text}>the44secrets@gmail.com</Text>

      <View style={{flexDirection: "row", gap: 20, marginVertical: 20}}>
        <FontAwesome6 name="at" size={24} color="white" />
        <FontAwesome6 name="phone" size={24} color="white" />
        <FontAwesome6 name="twitter" size={24} color="white" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center", // put item to the right side
    justifyContent: "flex-start", // put item to the top
  },
  text: {
    color: "#ffffff",
  },
});
