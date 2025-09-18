import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("./logo-maraneyma.png")} />
      <Image source={require("./pular-corda.png")} />
      <Text style={styles.text}>Seu guia de</Text>
      <Text style={styles.text}>esportes escolates</Text>
      <Text style={styles.text}>
        Maraneyma” significa saúde em Tupi-Guarani.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  text: {
    color: "#000000",
  },
});
