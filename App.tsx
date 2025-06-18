import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  ActivityIndicator,
  Linking,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const onPressContactMe = () => {
    Linking.openURL("mailto:tran@fluco.app");
  };

  const buttonTitle = "Contact Tran";

  const getUserInfo = () => {
    return {
      name: "TranML",
      occupation: "Solo Indie Developer",
      links: {
        email: "",
        phone: "+84338027081",
        twitter: "https://x.com/tranmlcom",
      },
    };
  };
  const renderContactIcons = () => {
    const links = getUserInfo().links;
    return (
      <View style={{ flexDirection: "row", gap: 20, marginVertical: 20 }}>
        {links.email !== "" ? (
          <FontAwesome6 name="at" size={24} color="white" />
        ) : null}
        {links.phone !== "" ? (
          <FontAwesome6 name="phone" size={24} color="white" />
        ) : null}
        {links.twitter !== "" ? (
          <FontAwesome6 name="twitter" size={24} color="white" />
        ) : null}
      </View>
    );
  };

  const isLoading = false;

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
        }}
      >
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "#000000", flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg" }}
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
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", marginTop: 10, marginBottom: 5 }}>{getUserInfo().name}</Text>
            <Text style={{ color: "white", fontSize: 12 }}>{getUserInfo().occupation}</Text>

            {renderContactIcons()}

            <Button
              title={buttonTitle}
              accessibilityLabel="Contact me via email"
              onPress={onPressContactMe}
            />
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "#ffffff",
  },
});
