import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function OnBoarding() {
  const slides = [
    {
      id: "1",
      title: (
        <Text style={styles.text}>
          No <Text style={styles.boldText}>Maraneyma</Text> você aprende sobre
          formas de praticar esportes na sua escola ou com seus amigos, sem
          precisar de internet
        </Text>
      ),
      image: require("../assets/images/futebol.png"),
    },
    {
      id: "2",
      title: (
        <Text style={styles.text}>
          Você cria sua conta (gratuitamente),
          <Text style={styles.boldText}>
            cria seus campeonatos e atividades{" "}
          </Text>
          e, quando estiver online novamente, você sincroniza tudo na internet
          pra não perder seu histórico.
        </Text>
      ),
      image: require("../assets/images/corrida.png"),
    },
    {
      id: "3",
      title: (
        <Text style={styles.text}>
          {" "}
          <Text style={styles.boldText}>
            Dá pra fazer tudo de um único celular
          </Text>{" "}
          (do professor). Você pode gerenciar e controlar os campeonatos de
          várias turmas. Feito pra ser simples e acessível a todos.
        </Text>
      ),
      image: require("../assets/images/peteca.png"),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("/signupScreen");
    }
  };

  const handleSkip = () => {
    router.replace("/signupScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-maraneyma.png")}
        style={styles.logo}
      />

      <FlatList
        data={slides}
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToInterval={width}
        decelerationRate="normal"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            {item.title}
          </View>
        )}
      />

      <Text style={styles.counter}>{`${currentIndex + 1} de ${
        slides.length
      }`}</Text>

      <View style={styles.buttons}>
        {currentIndex < slides.length - 1 ? (
          <>
            <Pressable style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryText}>Avançar</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={handleSkip}>
              <Text style={styles.secondaryText}>Pular</Text>
            </Pressable>
          </>
        ) : (
          <Pressable style={styles.primaryButton} onPress={handleNext}>
            <Text style={styles.primaryText}>Começar</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    resizeMode: "contain",
    marginTop: 90,
    marginBottom: 70,
  },
  slide: {
    width: width,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    fontFamily: "SofiaSans_400Regular",
  },
  boldText: {
    fontWeight: "bold",
    fontFamily: "SofiaSans_400Regular",
  },
  counter: {
    fontSize: 14,
    color: "#555",
    marginVertical: 10,
    fontFamily: "SofiaSans_400Regular",
  },
  buttons: {
    gap: 10,
    width: "90%",
    marginBottom: 60,
  },
  primaryButton: {
    backgroundColor: "#EB2F96",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    fontFamily: "SofiaSans_400Regular",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "SofiaSans_400Regular",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    fontFamily: "SofiaSans_400Regular",
  },
  secondaryText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "SofiaSans_400Regular",
  },
});
