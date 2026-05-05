import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function BlueprintIntroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Blueprint</Text>

      <Text style={styles.subtitle}>
        Answer a few questions to discover your productivity style and how you work best.
      </Text>

      <View style={styles.progressBox}>
        <Text style={styles.walker}>🚶</Text>
        <Text style={styles.progressText}>Discover how you work best</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/blueprint-question")}
      >
        <Text style={styles.buttonText}>Start Questions</Text>
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
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#004766",
    marginBottom: 16,
  },
  subtitle: {
    backgroundColor: "#EBC76A",
    padding: 14,
    borderRadius: 20,
    color: "#004766",
    textAlign: "center",
    marginBottom: 40,
  },
  progressBox: {
    borderWidth: 2,
    borderColor: "#D8A52F",
    borderRadius: 30,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  walker: {
    fontSize: 34,
  },
  progressText: {
    color: "#004766",
    marginTop: 8,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#D8A52F",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  buttonText: {
    color: "#004766",
    fontWeight: "bold",
    fontSize: 16,
  },
});
