import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, John 👋</Text>
          <Text style={styles.date}>Thursday, 13 November 2026</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/menu")}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Prompt: Today's Question</Text>
        <Text style={styles.prompt}>
          What quality do you most admire in yourself and why?
        </Text>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Answer</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Suggested Experiences</Text>

      <View style={styles.opportunityCard}>
        <Text style={styles.opportunityTitle}>Youth Coding Workshop</Text>
        <Text style={styles.opportunityText}>Category: Workshop</Text>
        <Text style={styles.opportunityText}>Age requirement: 18–24</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.miniButton}
            onPress={() => router.push("/opportunity-details")}
          >
            <Text style={styles.miniButtonText}>View details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.miniButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>To Do List</Text>
        <Text style={styles.task}>1. Team meeting — 2:00 PM</Text>
        <Text style={styles.task}>2. Networking — 5:00 PM</Text>
        <Text style={styles.task}>3. Write report — 3:30 PM</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.navCard} onPress={() => router.push("/discover")}>
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navCard} onPress={() => router.push("/timeline")}>
          <Text style={styles.navText}>Timeline</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navCard} onPress={() => router.push("/ai-chat")}>
          <Text style={styles.navText}>AI Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navCard} onPress={() => router.push("/profile")}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F0",
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#004766",
  },
  date: {
    color: "#D8A52F",
    fontWeight: "600",
  },
  menu: {
    fontSize: 30,
    color: "#004766",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#004766",
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    color: "#004766",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  prompt: {
    color: "#004766",
    textAlign: "center",
    marginBottom: 12,
  },
  smallButton: {
    backgroundColor: "#D8A52F",
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  smallButtonText: {
    color: "#004766",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#004766",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 12,
  },
  opportunityCard: {
    backgroundColor: "#004766",
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  opportunityTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  opportunityText: {
    color: "#EBC76A",
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },
  miniButton: {
    backgroundColor: "#D8A52F",
    padding: 8,
    borderRadius: 15,
  },
  miniButtonText: {
    color: "#004766",
    fontWeight: "bold",
  },
  task: {
    color: "#004766",
    marginBottom: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  navCard: {
    width: "47%",
    backgroundColor: "#EBC76A",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
  },
  navText: {
    color: "#004766",
    fontWeight: "bold",
  },
});
