// app/tutorials/IndividualActivities.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function IndividualActivities() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui vão as atividades individuais 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16 },
});
