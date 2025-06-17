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
      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "#000000" }}>
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

            <Text
              style={{ color: "white", marginHorizontal: 20, lineHeight: 20 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              maiores totam modi deserunt, exercitationem officiis ea possimus
              nisi enim distinctio eum aliquam repellat dignissimos perferendis
              placeat suscipit doloremque voluptas sequi hic a iusto voluptatum?
              Dicta aspernatur sint perspiciatis culpa totam accusamus ipsam
              fugiat veniam facere ea possimus distinctio nostrum quaerat,
              tenetur commodi corrupti unde rem omnis reprehenderit maiores
              molestias ad. Culpa iste dolores quibusdam excepturi quasi dolorem
              asperiores iusto id placeat quo commodi, ullam suscipit unde velit
              magnam. Deserunt quas facere temporibus voluptas iusto excepturi,
              laboriosam asperiores. Molestias esse, necessitatibus ratione
              eaque nostrum in delectus similique doloribus facere debitis
              beatae? Eos dicta rerum quaerat quasi ut! Quasi perferendis fugit
              earum velit eius, aperiam atque numquam enim odio itaque esse quam
              sint error minus praesentium natus temporibus ipsum exercitationem
              ea perspiciatis ullam! A explicabo voluptatum aspernatur adipisci
              eaque recusandae repellat nulla voluptate dolor? Mollitia illum
              fugiat cupiditate molestiae ducimus unde debitis accusamus, fuga
              vero tempore enim aliquam nihil eligendi aperiam minus animi
              quaerat deleniti, eum, quasi non iure quos. Ipsam quam voluptas
              facere, earum quia perspiciatis sapiente. Labore provident
              dignissimos iusto dicta maxime facilis exercitationem neque
              adipisci nihil. Soluta quisquam cumque, optio molestiae dolor
              ipsum itaque nihil culpa illo rerum, voluptate est, doloremque sed
              eligendi pariatur consequatur. Incidunt aliquam voluptates nobis,
              eligendi ea esse tempore numquam ullam labore dolores quo minima
              mollitia illum veritatis ab at consectetur modi rerum voluptas
              cupiditate assumenda? Officiis voluptatem amet ipsum voluptatibus
              fugiat incidunt dicta eum ullam iusto id nostrum veritatis quaerat
              deleniti beatae laborum placeat aliquam laboriosam blanditiis
              corrupti, temporibus sequi quibusdam unde voluptas. Ad illum
              excepturi eveniet eius rerum aperiam unde molestias numquam
              veniam, nemo facilis doloribus voluptate est commodi dolore,
              soluta illo perferendis facere, culpa dolorem sunt perspiciatis
              sint quae voluptates! Delectus commodi, sed labore minus,
              dignissimos impedit deserunt enim minima officia odio a nisi
              accusamus. Necessitatibus perferendis numquam similique nemo neque
              asperiores veniam accusantium deleniti harum, natus quos nihil
              porro officia doloremque magnam? Voluptatum consectetur nam dicta
              assumenda ad? Itaque, hic. Natus, atque. Accusantium distinctio
              eaque quasi illo animi. Beatae unde qui amet sed architecto maxime
              magnam praesentium nihil assumenda cum reprehenderit id incidunt
              accusantium molestias eligendi reiciendis quisquam, quasi hic quas
              tempora officiis! Ipsum veniam ex tempore? Laborum distinctio
              aperiam quia pariatur blanditiis sunt vero sint magni?
              Consectetur, doloribus non illo nihil vero inventore quia corporis
              dolore laudantium ab sit a natus. Ex voluptate minus, consectetur
              quidem quibusdam aliquid sint repudiandae nulla earum! Quam
              recusandae minima voluptate ad, reiciendis, explicabo, aliquam
              tempora quaerat dolor vitae ea suscipit dolorem adipisci eos est
              placeat expedita dolores. Totam, ex modi sunt explicabo ratione
              consectetur at ab placeat, veniam deserunt numquam ut tempore?
              Eligendi minima ratione deleniti voluptates non cum dolorum
              laudantium? Aperiam quidem, dignissimos incidunt officiis autem
              doloremque! Nesciunt, magnam quod temporibus fugiat nihil iusto
              vitae, quas tempore neque beatae dolore alias et modi incidunt
              provident illum cupiditate dolor quos quidem repudiandae. Saepe
              nam, minima ipsam quasi repellendus numquam, impedit iste, sunt
              eligendi delectus accusantium nihil tempora sit officiis fugiat
              praesentium molestiae sed cupiditate?
            </Text>
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
