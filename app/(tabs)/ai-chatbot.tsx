import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const COLORS = {
  cream: "#F7F5EC",
  darkBlue: "#004B6B",
  deepBlue: "#003F5C",
  gold: "#D5A12D",
  white: "#FFFFFF",
  lightGrey: "#E8E8E8",
  softBlue: "#D9EEF5",
  paleGold: "#F0D58B",
};

type ScreenMode = "home" | "question1" | "question2" | "question3";

export default function AIChatBotScreen() {
  const [screenMode, setScreenMode] = useState<ScreenMode>("home");
  const [experience, setExperience] = useState("");
  const [customAnswer, setCustomAnswer] = useState("");

  if (screenMode === "question1") {
    return (
      <ReflectionQuestionOne
        experience={experience}
        setExperience={setExperience}
        onNext={() => setScreenMode("question2")}
        onBack={() => setScreenMode("home")}
      />
    );
  }

  if (screenMode === "question2") {
    return (
      <ReflectionQuestionTwo
        experience={experience}
        customAnswer={customAnswer}
        setCustomAnswer={setCustomAnswer}
        onNext={() => setScreenMode("question3")}
        onBack={() => setScreenMode("question1")}
      />
    );
  }

  if (screenMode === "question3") {
    return (
      <ReflectionQuestionThree
        experience={experience}
        onFinish={() => setScreenMode("home")}
        onBack={() => setScreenMode("question2")}
      />
    );
  }

  return <AIHome onStartReflection={() => setScreenMode("question1")} />;
}

function AIHome({ onStartReflection }: { onStartReflection: () => void }) {
  const [thought, setThought] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>AI Chat Bot</Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        {/* Main chat intro */}
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Hi, how can I help you today?</Text>
          <Text style={styles.chatSubText}>
            Choose a topic below or just type freely.
          </Text>
        </View>

        {/* Activity Experience */}
        <TouchableOpacity style={styles.activityCard} onPress={onStartReflection}>
          <View style={styles.activityIcon}>
            <Text style={styles.activityEmoji}>💬</Text>
          </View>

          <View style={styles.activityTextBox}>
            <Text style={styles.activityTitle}>Activity Experience</Text>
            <Text style={styles.activitySub}>
              Reflect on your recent{"\n"}event experience
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={24} color={COLORS.darkBlue} />
        </TouchableOpacity>

        {/* Emotional Check-In */}
        <View style={styles.checkInCard}>
          <Text style={styles.cardTitle}>Emotional Check-In</Text>
          <Text style={styles.checkInQuestion}>
            How are you feeling after achieving this milestone?
          </Text>

          <View style={styles.moodGrid}>
            <MoodButton text="😊Happy" />
            <MoodButton text="😢Sad" />
            <MoodButton text="🤩Thrilled" />
            <MoodButton text="💪Motivated" />
            <MoodButton text="😮‍💨Burnt out" />
          </View>
        </View>

        {/* Thinking Out Loud */}
        <View style={styles.thoughtCard}>
          <Text style={styles.cardTitle}>Just thinking out loud...</Text>
          <Text style={styles.thoughtSub}>anything on your mind ?</Text>

          <TextInput
            value={thought}
            onChangeText={setThought}
            placeholder="Type your thoughts here.."
            placeholderTextColor="#7B8A90"
            multiline
            style={styles.thoughtInput}
          />

          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MoodButton({ text }: { text: string }) {
  return (
    <TouchableOpacity style={styles.moodButton}>
      <Text style={styles.moodText}>{text}</Text>
    </TouchableOpacity>
  );
}

function ReflectionQuestionOne({
  experience,
  setExperience,
  onNext,
  onBack,
}: {
  experience: string;
  setExperience: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.questionContainer}>
        <QuestionHeader onBack={onBack} />

        <Text style={styles.reflectionTitle}>
          Reflect on your recent event experience
        </Text>
        <Text style={styles.reflectionSub}>Answer at your own pace</Text>

        <View style={styles.progressRow}>
          <Text style={styles.questionCount}>Question 1 of 3</Text>
          <Text style={styles.percentText}>0% complete</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "0%" }]} />
        </View>

        <Text style={styles.questionText}>
          What was the experience or{"\n"}event you recently took part in?
        </Text>

        <TextInput
          value={experience}
          onChangeText={setExperience}
          placeholder="Type your own answer..."
          placeholderTextColor="#7B8A90"
          multiline
          style={styles.answerInput}
        />

        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ReflectionQuestionTwo({
  experience,
  customAnswer,
  setCustomAnswer,
  onNext,
  onBack,
}: {
  experience: string;
  customAnswer: string;
  setCustomAnswer: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.questionContainer}>
        <QuestionHeader onBack={onBack} />

        <Text style={styles.reflectionTitle}>
          Reflect on your recent event experience
        </Text>
        <Text style={styles.reflectionSub}>Answer at your own pace</Text>

        <View style={styles.progressRow}>
          <Text style={styles.questionCount}>Question 2 of 3</Text>
          <Text style={styles.percentText}>33% complete</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "33%" }]} />
        </View>

        <View style={styles.previousAnswerBox}>
          <Text style={styles.previousQuestion}>
            What was the experience or{"\n"}event you recently took part in?
          </Text>
          <Text style={styles.previousAnswer}>
            {experience || "Youth coding workshop"}
          </Text>
        </View>

        <Text style={styles.questionText}>How did it make you{"\n"}feel overall?</Text>

        <View style={styles.answerOptionsGrid}>
          <AnswerPill text="Really good" selected />
          <AnswerPill text="It was okay" />
          <AnswerPill text="Not great" />
          <AnswerPill text="Mixed feelings" />
        </View>

        <TextInput
          value={customAnswer}
          onChangeText={setCustomAnswer}
          placeholder="Or type your own answer..."
          placeholderTextColor="#7B8A90"
          style={styles.smallAnswerInput}
        />

        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ReflectionQuestionThree({
  experience,
  onFinish,
  onBack,
}: {
  experience: string;
  onFinish: () => void;
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.questionContainer}>
        <QuestionHeader onBack={onBack} />

        <Text style={styles.reflectionTitle}>
          Reflect on your recent event experience
        </Text>
        <Text style={styles.reflectionSub}>Answer at your own pace</Text>

        <View style={styles.progressRow}>
          <Text style={styles.questionCount}>Question 3 of 3</Text>
          <Text style={styles.percentText}>67% complete</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "67%" }]} />
        </View>

        <View style={styles.previousAnswerBox}>
          <Text style={styles.previousQuestion}>
            What was the experience or{"\n"}event you recently took part in?
          </Text>
          <Text style={styles.previousAnswer}>
            {experience || "Youth coding workshop"}
          </Text>
        </View>

        <Text style={styles.questionText}>
          Would you try something{"\n"}similar again?
        </Text>

        <View style={styles.answerOptionsGrid}>
          <AnswerPill text="Yes, definitely" selected />
          <AnswerPill text="Maybe" />
          <AnswerPill text="Not really" />
          <AnswerPill text="No" />
        </View>

        <TextInput
          placeholder="Or type your own answer..."
          placeholderTextColor="#7B8A90"
          style={styles.smallAnswerInput}
        />

        <TouchableOpacity style={styles.nextButton} onPress={onFinish}>
          <Text style={styles.nextButtonText}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function QuestionHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>AI Chat Bot</Text>

      <TouchableOpacity>
        <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
      </TouchableOpacity>
    </View>
  );
}

function AnswerPill({
  text,
  selected,
}: {
  text: string;
  selected?: boolean;
}) {
  return (
    <TouchableOpacity style={[styles.answerPill, selected && styles.selectedPill]}>
      <Text style={[styles.answerPillText, selected && styles.selectedPillText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    backgroundColor: COLORS.cream,
    paddingHorizontal: 18,
    paddingBottom: 40,
  },

  header: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#D7D7D7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: COLORS.darkBlue,
    fontSize: 25,
    fontWeight: "900",
  },

  chatBubble: {
    marginTop: 24,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 18,
  },

  chatText: {
    color: COLORS.darkBlue,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
  },

  chatSubText: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 7,
  },

  activityCard: {
    marginTop: 20,
    backgroundColor: COLORS.softBlue,
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.darkBlue,
  },

  activityIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  activityEmoji: {
    fontSize: 28,
  },

  activityTextBox: {
    flex: 1,
  },

  activityTitle: {
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: "900",
  },

  activitySub: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 17,
    marginTop: 3,
  },

  checkInCard: {
    marginTop: 18,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 22,
    padding: 16,
  },

  cardTitle: {
    color: COLORS.darkBlue,
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 8,
  },

  checkInQuestion: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 12,
  },

  moodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  moodButton: {
    backgroundColor: COLORS.paleGold,
    borderRadius: 18,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  moodText: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "900",
  },

  thoughtCard: {
    marginTop: 18,
    backgroundColor: COLORS.deepBlue,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 22,
    padding: 16,
  },

  thoughtSub: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 10,
  },

  thoughtInput: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    minHeight: 95,
    paddingHorizontal: 13,
    paddingVertical: 10,
    color: COLORS.darkBlue,
    fontWeight: "700",
    textAlignVertical: "top",
  },

  sendButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    alignSelf: "flex-end",
    paddingHorizontal: 22,
    paddingVertical: 8,
    marginTop: 12,
  },

  sendButtonText: {
    color: COLORS.darkBlue,
    fontWeight: "900",
  },

  questionContainer: {
    backgroundColor: COLORS.cream,
    paddingHorizontal: 18,
    paddingBottom: 40,
  },

  reflectionTitle: {
    color: COLORS.darkBlue,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 28,
  },

  reflectionSub: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 4,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  questionCount: {
    color: COLORS.darkBlue,
    fontWeight: "900",
    fontSize: 12,
  },

  percentText: {
    color: COLORS.gold,
    fontWeight: "900",
    fontSize: 12,
  },

  progressBar: {
    height: 9,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    marginTop: 7,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: COLORS.gold,
    borderRadius: 8,
  },

  questionText: {
    color: COLORS.darkBlue,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 30,
    marginTop: 34,
    marginBottom: 18,
  },

  answerInput: {
    minHeight: 115,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 18,
    padding: 14,
    color: COLORS.darkBlue,
    fontWeight: "800",
    textAlignVertical: "top",
  },

  smallAnswerInput: {
    height: 48,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 18,
    paddingHorizontal: 14,
    color: COLORS.darkBlue,
    fontWeight: "800",
    marginTop: 14,
  },

  nextButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 28,
    marginHorizontal: 80,
  },

  nextButtonText: {
    color: COLORS.darkBlue,
    fontSize: 19,
    fontWeight: "900",
  },

  previousAnswerBox: {
    marginTop: 22,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: COLORS.gold,
    padding: 12,
  },

  previousQuestion: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
  },

  previousAnswer: {
    color: COLORS.gold,
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 6,
  },

  answerOptionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },

  answerPill: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 17,
    paddingVertical: 8,
  },

  selectedPill: {
    backgroundColor: COLORS.gold,
  },

  answerPillText: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "900",
  },

  selectedPillText: {
    color: COLORS.white,
  },
});