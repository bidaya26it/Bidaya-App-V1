import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function SignupStep1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Bidaya</Text>

      <Text style={styles.step}>Step 1 of 2</Text>
      <Text style={styles.title}>Sign up for Bidaya</Text>

      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      <Text style={styles.note}>Password must contain:</Text>
      <Text style={styles.rule}>✦ At least 8 characters</Text>
      <Text style={styles.rule}>✦ At least 1 uppercase letter</Text>
      <Text style={styles.rule}>✦ At least 1 lowercase letter</Text>
      <Text style={styles.rule}>✦ At least 1 number or special character</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signup-step-2")}
      >
        <Text style={styles.buttonText}>Next</Text>
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
    fontSize: 42,
    fontWeight: "bold",
    color: "#004766",
    textAlign: "center",
    marginBottom: 14,
  },
  step: {
    color: "#004766",
    fontWeight: "600",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#004766",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#EBC76A",
    borderRadius: 25,
    padding: 14,
    marginBottom: 12,
  },
  note: {
    color: "#C9961A",
    fontWeight: "bold",
    marginTop: 4,
  },
  rule: {
    color: "#004766",
    fontSize: 13,
    marginTop: 3,
  },
  button: {
    backgroundColor: "#D8A52F",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 22,
  },
  buttonText: {
    color: "#004766",
    fontWeight: "bold",
    fontSize: 16,
  },
});
