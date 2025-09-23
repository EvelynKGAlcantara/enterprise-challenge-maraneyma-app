import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/construcao.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Página em Construção</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#000",
  },
  image: {
    height: "40%",
    resizeMode: "contain",
    marginTop: 90,
  },
});
