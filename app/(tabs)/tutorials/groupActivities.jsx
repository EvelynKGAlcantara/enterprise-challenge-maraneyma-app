// app/tutorials/GroupActivities.js
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import SportCard from "../../../components/Cards/ActivityCard";

const sports = [
  {
    title: "Cabo de guerra",
    description:
      "Um esporte de força onde duas equipes puxam uma corda em direções opostas...",
  },
  {
    title: "Corrida de revezamento",
    description:
      "Uma modalidade de corrida onde equipes se alternam correndo trechos...",
  },
  {
    title: "Futebol",
    description: "Um esporte coletivo jogado com uma bola para marcar gols.",
  },
  {
    title: "Handball",
    description: "Jogadores lançam a bola com as mãos para marcar gols.",
  },
  {
    title: "Peteca",
    description:
      "Esporte de raquete onde jogadores golpeiam uma peteca sobre a rede.",
  },
  {
    title: "Queimada (Carimbada)",
    description: "Um time tenta eliminar o adversário acertando-os com a bola.",
  },
];

export default function GroupActivities() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Atividades em grupo</Text>
      <Image
        source={require("../../../assets/images/futebol.png")}
        style={styles.image}
        resizeMode="contain"
      />
      {sports.map((sport, index) => (
        <SportCard
          key={index}
          title={sport.title}
          description={sport.description}
          onPress={() => console.log("Detalhes de:", sport.title)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#ff007f",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 16,
  },
});
