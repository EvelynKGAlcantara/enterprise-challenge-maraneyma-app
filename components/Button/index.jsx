import { StyleSheet, Text, Pressable } from "react-native";

export const Button = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.textButton}>Teste</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EB2F96",
    padding: 20,
    borderRadius: 20,
  },
  textButton: {
    color: "#FFFFFF",
  },
});
