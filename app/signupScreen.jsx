import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ActionButton } from "../components/ActionButton";

export default function CreateAccountScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    router.push("/userDataScreen");
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
  };

  const handleAlreadyHaveAccount = () => {
    // Navegar para tela de login
    router.push("/loginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Criar conta</Text>
        <Text style={styles.headerSubtitle}>
          Opção mais simples{"\n"}
          Crie a partir da sua conta no Google
        </Text>
      </View>

      <Pressable style={styles.googleButton} onPress={handleGoogleLogin}>
        <View style={styles.googleIcon}>
          <Image
            source={require("../assets/images/logo-google.png")}
            style={styles.googleIconImage}
          />
        </View>
        <Text style={styles.googleButtonText}>Continue com o Google</Text>
      </Pressable>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OU</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Crie um usuário e uma senha</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Qual o seu email?</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Crie uma senha de acesso</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <Pressable style={styles.primaryButton} onPress={handleCreateAccount}>
          <Text style={styles.primaryText}>Criar Conta</Text>
        </Pressable>
        <Pressable
          style={styles.secondaryButton}
          onPress={handleAlreadyHaveAccount}
        >
          <Text style={styles.secondaryText}>Já tenho uma conta</Text>
        </Pressable>
      </View>
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
  header: {
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 22,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  googleIconText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#1890FF",
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#666666",
  },
  form: {
    marginBottom: 32,
  },
  formTitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inputHelper: {
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },

  buttons: {
    gap: 10,
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
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryText: {
    color: "#000",
    fontSize: 16,
  },
  googleIconImage: {},
});
