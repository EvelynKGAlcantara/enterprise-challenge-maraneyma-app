import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./logo-maraneyma.png")} />
      <Image source={require("./pular-corda.png")} />
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
    backgroundColor: "#D3D3D3",
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
    fontSize: 16,
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
});
