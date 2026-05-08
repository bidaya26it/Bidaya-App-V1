import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
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
  lightGold: "#EBCB78",
  paleGrey: "#ECECEC",
  white: "#FFFFFF",
};

export default function GoalsScreen() {
  const [goal, setGoal] = useState("");

  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Add your <Text style={styles.goldText}>goals!</Text>
          </Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        {/* Intro Card */}
        <View style={styles.introWrapper}>
          <Text style={styles.sparkleLeft}>✦</Text>
          <Text style={styles.sparkleRight}>✦</Text>

          <Text style={styles.description}>
            Write anything you hope to achieve or{"\n"}
            explore. The app will organize it into{"\n"}
            your journey!
          </Text>
        </View>

        {/* Input */}
        <TextInput
          value={goal}
          onChangeText={setGoal}
          placeholder="My Goal is to..."
          placeholderTextColor="#9AA9AE"
          style={styles.goalInput}
          multiline
        />

        {/* Decorative connector */}
        <View style={styles.connectorWrapper}>
          <View style={styles.verticalDashedLine} />
          <View style={styles.paperPlane}>
            <View style={styles.planeGold} />
            <View style={styles.planeBlue} />
          </View>
        </View>

        {/* Plan Timeline Button */}
        <TouchableOpacity style={styles.planButton}>
          <Text style={styles.planButtonText}>Plan my Timeline</Text>
        </TouchableOpacity>

        {/* Bottom Illustration */}
        <View style={styles.illustrationArea}>
          <View style={styles.pathLineOne} />
          <View style={styles.pathLineTwo} />

          <View style={[styles.coin, styles.coinOne]} />
          <View style={[styles.coin, styles.coinTwo]} />
          <View style={[styles.coin, styles.coinThree]} />

          <View style={styles.bigHill}>
            <View style={styles.hillDots}>
              {Array.from({ length: 18 }).map((_, index) => (
                <View key={index} style={styles.dot} />
              ))}
            </View>
          </View>

          <View style={styles.walkingPerson}>
            <View style={styles.personHead} />
            <View style={styles.personBody} />
            <View style={styles.personArm} />
            <View style={styles.personLegOne} />
            <View style={styles.personLegTwo} />
          </View>

          <View style={styles.flagPole} />
          <View style={styles.flag} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    flexGrow: 1,
    backgroundColor: COLORS.cream,
    paddingBottom: 30,
  },

  header: {
    height: 43,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D7D7D7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: COLORS.darkBlue,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },

  goldText: {
    color: COLORS.gold,
  },

  introWrapper: {
    marginTop: 34,
    marginHorizontal: 34,
    backgroundColor: "rgba(255,255,255,0.35)",
    minHeight: 94,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  description: {
    color: COLORS.darkBlue,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 21,
  },

  sparkleLeft: {
    position: "absolute",
    left: -12,
    top: -14,
    color: COLORS.gold,
    fontSize: 25,
  },

  sparkleRight: {
    position: "absolute",
    right: -10,
    bottom: -8,
    color: COLORS.gold,
    fontSize: 25,
  },

  goalInput: {
    marginTop: 20,
    marginHorizontal: 42,
    minHeight: 52,
    backgroundColor: COLORS.paleGrey,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 13,
    textAlign: "center",
    color: COLORS.darkBlue,
    fontSize: 19,
    fontWeight: "700",
  },

  connectorWrapper: {
    alignItems: "center",
    marginTop: 4,
    height: 88,
  },

  verticalDashedLine: {
    height: 70,
    borderLeftWidth: 3,
    borderStyle: "dashed",
    borderColor: COLORS.gold,
  },

  paperPlane: {
    width: 70,
    height: 45,
    marginTop: -8,
    position: "relative",
  },

  planeGold: {
    position: "absolute",
    left: 7,
    top: 9,
    width: 34,
    height: 28,
    backgroundColor: COLORS.gold,
    transform: [{ rotate: "-25deg" }, { skewX: "-18deg" }],
  },

  planeBlue: {
    position: "absolute",
    right: 6,
    top: 6,
    width: 38,
    height: 30,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "25deg" }, { skewX: "18deg" }],
  },

  planButton: {
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderStyle: "dashed",
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  planButtonText: {
    color: COLORS.darkBlue,
    fontSize: 22,
    fontWeight: "900",
  },

  illustrationArea: {
    flex: 1,
    minHeight: 260,
    marginTop: 22,
    position: "relative",
    overflow: "hidden",
  },

  bigHill: {
    position: "absolute",
    bottom: -110,
    left: -35,
    width: 330,
    height: 230,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    backgroundColor: COLORS.gold,
  },

  hillDots: {
    position: "absolute",
    top: -10,
    left: 60,
    flexDirection: "row",
    gap: 7,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.darkBlue,
  },

  coin: {
    position: "absolute",
    width: 64,
    height: 34,
    borderRadius: 40,
    backgroundColor: COLORS.gold,
    borderWidth: 2,
    borderColor: "#B78620",
    transform: [{ rotate: "-12deg" }],
  },

  coinOne: {
    left: 20,
    bottom: 32,
  },

  coinTwo: {
    left: 140,
    bottom: 75,
  },

  coinThree: {
    right: 42,
    bottom: 112,
  },

  pathLineOne: {
    position: "absolute",
    left: 73,
    bottom: 58,
    width: 104,
    borderTopWidth: 2,
    borderStyle: "dashed",
    borderColor: COLORS.gold,
    transform: [{ rotate: "-18deg" }],
  },

  pathLineTwo: {
    position: "absolute",
    right: 92,
    bottom: 100,
    width: 105,
    borderTopWidth: 2,
    borderStyle: "dashed",
    borderColor: COLORS.gold,
    transform: [{ rotate: "-10deg" }],
  },

  walkingPerson: {
    position: "absolute",
    left: 135,
    bottom: 105,
    width: 70,
    height: 85,
  },

  personHead: {
    position: "absolute",
    top: 0,
    left: 32,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: COLORS.darkBlue,
  },

  personBody: {
    position: "absolute",
    top: 16,
    left: 31,
    width: 12,
    height: 34,
    borderRadius: 8,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "12deg" }],
  },

  personArm: {
    position: "absolute",
    top: 24,
    left: 18,
    width: 34,
    height: 7,
    borderRadius: 6,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "-20deg" }],
  },

  personLegOne: {
    position: "absolute",
    top: 46,
    left: 22,
    width: 36,
    height: 8,
    borderRadius: 6,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "-33deg" }],
  },

  personLegTwo: {
    position: "absolute",
    top: 48,
    left: 34,
    width: 36,
    height: 8,
    borderRadius: 6,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "40deg" }],
  },

  flagPole: {
    position: "absolute",
    right: 55,
    bottom: 132,
    width: 4,
    height: 62,
    backgroundColor: COLORS.darkBlue,
  },

  flag: {
    position: "absolute",
    right: 18,
    bottom: 170,
    width: 38,
    height: 24,
    backgroundColor: COLORS.darkBlue,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 10,
  },
});