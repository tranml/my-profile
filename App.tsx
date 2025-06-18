import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  ActivityIndicator,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const onPressContactMe = () => {
    console.warn("Contact me");
  };

  const buttonTitle = "Contact Tran";

  const getUserInfo = () => {
    return {
      name: "Tran Minh Luan",
      email: "tran@fluco.app",
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

  const remainingActiveDays = 100;

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "#000000", flex: 1 }}>
        <ScrollView>
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
            <Text style={styles.text}>{getUserInfo().name}</Text>
            <Text style={styles.text}>{getUserInfo().email}</Text>

            <Text
              style={{ color: "white", marginHorizontal: 20, lineHeight: 20 }}
            >
              There are {remainingActiveDays || "no"} days left to renew your
              subscription
            </Text>

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
    alignItems: "center", // put item to the right side
    justifyContent: "flex-start", // put item to the top
  },
  text: {
    color: "#ffffff",
  },
});
