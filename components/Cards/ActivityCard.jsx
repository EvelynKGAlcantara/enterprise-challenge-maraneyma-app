import { View, Text, StyleSheet, Pressable } from "react-native";

export default function SportCard({ title, description, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9ff",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ff007f",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#ff007f",
    fontWeight: "600",
  },
});
