// app/tutorials/GroupActivities.js
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Accordion from "../../Maraneyma/components/Accordion/index";
const mockData = [
  {
    id: 1,
    title: "Como planejar a atividade?",
    content:
      "1. Escolha do local: Opte por um espaço amplo e seguro, com o chão livre de obstáculos...\n\n2. Preparo do material: Você precisará de uma corda resistente...\n\n3. Demarcação: Trace uma linha no chão que servirá como linha de vitória.",
  },
  {
    id: 2,
    title: "Regras a serem seguidas",
    content:
      "Duas equipes se posicionam em lados opostos...\n\nCada equipe segura a corda, com os participantes enfileirados...\n\nAo sinal combinado, todos começam a puxar...",
  },
  {
    id: 3,
    title: "Quantidade de participantes",
    content: "O ideal é ter de 6 a 10 participantes por equipe.",
  },
  {
    id: 4,
    title: "Dicas para que as crianças não se machuquem",
    content: "Evite solos escorregadios, use corda de espessura adequada...",
  },
];

export default function DetailsScreen() {
  const [sport, setSport] = useState("Cabo de Guerra");
  const handleShare = () => {
    router.push("../app/(tabs)/homeScreen.jsx");
  };

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
        {/* Accordion com mock */}
        <View style={{ marginTop: 24 }}>
          {mockData.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.primaryButton} onPress={handleShare}>
            <Text style={styles.primaryText}>Compartilhar</Text>
          </Pressable>
        </View>
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
  primaryButton: {
    backgroundColor: "#EB2F96",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 16,
  },
});
