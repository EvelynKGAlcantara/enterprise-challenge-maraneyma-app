import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActionButton } from "../components/ActionButton";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onBoarding");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo-maraneyma.png")}
      />
      <Image source={require("../assets/images/pular-corda.png")} />
      <View>
        <Text style={styles.title}>Seu guia de</Text>
        <Text style={styles.titleBold}>esportes escolares</Text>
      </View>
      <View>
        <Text style={styles.text}>
          <Text style={styles.textBoldPurple}>"Maraneyma”</Text> significa
          <Text style={styles.textBoldBlack}> "saúde"</Text> {"\n"} em{" "}
          <Text style={styles.textBoldBlack}>Tupi-Guarani.</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    gap: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#000000",
  },
  titleBold: {
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
  },
  textBoldPurple: {
    fontWeight: "bold",
    color: "#EB2F96",
  },
  textBoldBlack: {
    fontWeight: "bold",
    color: "#000000",
  },
  image: {},
  tabs: {
    flexDirection: "row",
  },
});
