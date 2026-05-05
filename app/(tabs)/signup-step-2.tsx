import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function SignupStep2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Bidaya</Text>

      <Text style={styles.step}>Step 2 of 2</Text>
      <Text style={styles.title}>Step Into Your Journey</Text>

      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Date of Birth: DD / MM / YYYY" />

      <Text style={styles.label}>Gender</Text>

      <View style={styles.genderRow}>
        <TouchableOpacity style={styles.genderButton}>
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genderButton}>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/blueprint-intro")}
      >
        <Text style={styles.buttonText}>Step Into Your Journey</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#004766",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#EBC76A",
    borderRadius: 25,
    padding: 14,
    marginBottom: 14,
  },
  label: {
    color: "#004766",
    fontWeight: "bold",
    marginBottom: 10,
  },
  genderRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  genderButton: {
    flex: 1,
    backgroundColor: "#FFF8E8",
    borderWidth: 2,
    borderColor: "#D8A52F",
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
  },
  genderText: {
    color: "#004766",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#D8A52F",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#004766",
    fontWeight: "bold",
    fontSize: 16,
  },
});
