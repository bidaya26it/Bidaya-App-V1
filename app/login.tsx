import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Bidaya</Text>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        placeholderTextColor="#777"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup-step-1")}>
        <Text style={styles.link}>Don’t have an account? Sign up for Bidaya</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F0",
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    fontSize: 46,
    fontWeight: "bold",
    color: "#004766",
    textAlign: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#004766",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#EBC76A",
    borderRadius: 25,
    padding: 14,
    marginBottom: 14,
    color: "#004766",
  },
  button: {
    backgroundColor: "#D8A52F",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
  },
  buttonText: {
    color: "#004766",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#004766",
    textAlign: "center",
    fontWeight: "600",
  },
});