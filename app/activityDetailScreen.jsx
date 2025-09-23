// app/tutorials/GroupActivities.js
import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export default function DetailsScreen() {
  const [sport, setSport] = useState("Cabo de Guerra");
  return (
    <View style={styles.container}>
      <ScrollView>
        <AntDesign
          name={"arrow-left"}
          size={40}
          color="#EB2F96"
          onPress={router.back}
        />
        <Text style={styles.headerTitle}>{sport}</Text>
        <Text style={styles.tag}>Atividade em Grupo</Text>
        <Image
          source={require("../../Maraneyma/assets/images/cabo-de-guerra.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.bodyText}>
          O <Text style={styles.bodyTextBold}>cabo de guerra</Text> é um jogo
          clássico que estimula a força, o trabalho em equipe e a coordenação
          motora. É uma ótima opção para atividades em grupo, promovendo a
          interação e a diversão entre os alunos.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#515151",
    marginBottom: 24,
    marginTop: 24,
  },
  image: {
    marginTop: 24,
    alignSelf: "center",
  },
  tag: {
    backgroundColor: "#FFFB8F",
    width: 150,
    borderRadius: 20,
    textAlign: "center",
    padding: 5,
  },
  bodyText: {
    marginTop: 24,
    fontSize: 16,
    color: "#7B7B7B",
  },
  bodyTextBold: {
    fontWeight: "bold",
    color: "#000000",
  },
});
