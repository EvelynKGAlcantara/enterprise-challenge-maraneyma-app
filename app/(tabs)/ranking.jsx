import { View, Text, StyleSheet, Image } from "react-native";

export default function Ranking() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/construcao.png")}
          style={styles.image}
        />
        <Text style={styles.mainText}>Em construção</Text>
        <Text style={styles.subText}>Ranking</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 24,
    textAlign: "center",
    color: "#666",
    fontWeight: "500",
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#999",
    marginTop: 8,
  },
  image: {
    height: "40%",
    resizeMode: "contain",
  },
});
