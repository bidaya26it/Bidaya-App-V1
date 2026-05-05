import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const questions = [
  {
    question: "When are you most productive?",
    options: [
      "Early morning (5AM–12PM)",
      "Afternoon (12PM–5PM)",
      "Evening (5PM–10PM)",
      "Late night (10PM+)",
    ],
  },
  {
    question: "What type of activities do you enjoy most?",
    options: ["Creative", "Technical", "Social", "Helping others"],
  },
  {
    question: "What motivates you most?",
    options: ["Learning", "Achievement", "Helping people", "Recognition"],
  },
];

export default function BlueprintQuestionScreen() {
  const [current, setCurrent] = useState(0);

  const question = questions[current];

  function handleAnswer() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      router.push("/home");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        {current + 1}/{questions.length}
      </Text>

      <Text style={styles.question}>{question.question}</Text>

      {question.options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={handleAnswer}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
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
  progress: {
    color: "#004766",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  question: {
    color: "#004766",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  option: {
    backgroundColor: "#EBC76A",
    padding: 18,
    borderRadius: 22,
    marginBottom: 14,
  },
  optionText: {
    color: "#004766",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
