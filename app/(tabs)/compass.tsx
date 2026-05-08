import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const COLORS = {
  cream: "#F7F5EC",
  darkBlue: "#004B6B",
  deepBlue: "#003F5C",
  gold: "#D5A12D",
  lightGold: "#EBCB78",
  white: "#FFFFFF",
  softGold: "#F3D98B",
  paleBlue: "#7FAEC4",
};

export default function CompassScreen() {
  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Compass</Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        <Text style={styles.dateText}>Thursday, 13th of November 2026</Text>

        {/* Main Compass Card */}
        <View style={styles.compassCard}>
          <Text style={[styles.cornerLabel, styles.topLeftLabel]}>
            Insights & Reflections
          </Text>

          <Text style={[styles.cornerLabel, styles.topRightLabel]}>
            Goals & Dreams
          </Text>

          <Text style={[styles.cornerLabel, styles.bottomLeftLabel]}>
            Identity & Values
          </Text>

          <Text style={[styles.cornerLabel, styles.bottomRightLabel]}>
            Experiences & Trials
          </Text>

          <Text style={[styles.cornerSmallText, styles.topLeftSmall]}>
            Deep realizations,{"\n"}growth thoughts
          </Text>

          <Text style={[styles.cornerSmallText, styles.topRightSmall]}>
            Actions related{"\n"}to ambitions
          </Text>

          <Text style={[styles.cornerSmallText, styles.bottomLeftSmall]}>
            Reflections, beliefs,{"\n"}or meaningful actions
          </Text>

          <Text style={[styles.cornerSmallText, styles.bottomRightSmall]}>
            Internships, volunteering,{"\n"}new activities
          </Text>

          {/* Gold glow */}
          <View style={styles.glowCircle} />

          {/* Compass star */}
          <View style={styles.compassStar}>
            <View style={[styles.needle, styles.needleVertical]} />
            <View style={[styles.needle, styles.needleHorizontal]} />
            <View style={[styles.needle, styles.needleDiagonalOne]} />
            <View style={[styles.needle, styles.needleDiagonalTwo]} />

            <View style={styles.centerDot} />

            <Text style={[styles.directionText, styles.north]}>N</Text>
            <Text style={[styles.directionText, styles.south]}>S</Text>
            <Text style={[styles.directionText, styles.east]}>E</Text>
            <Text style={[styles.directionText, styles.west]}>W</Text>
          </View>
        </View>

        {/* Weekly Direction Insight */}
        <View style={styles.insightCard}>
          <Text style={styles.cardTitle}>Weekly Direction Insight</Text>
          <Text style={styles.cardText}>
            You've reflected deeply on your values and{"\n"}future goals.
          </Text>
        </View>

        {/* Weekly Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>Weekly Summary</Text>

          <View style={styles.summaryContent}>
            <View style={styles.summaryLabels}>
              <Text style={styles.summaryLabel}>experiences & trials</Text>
              <Text style={styles.summaryLabel}>insights & reflections</Text>
              <Text style={styles.summaryLabel}>goals & dreams</Text>
              <Text style={styles.summaryLabel}>identity & values</Text>
            </View>

            <View style={styles.chartBox}>
              <View style={[styles.chartLine, styles.lineOne]} />
              <View style={[styles.chartLine, styles.lineTwo]} />
              <View style={[styles.chartLine, styles.lineThree]} />
              <View style={[styles.chartLine, styles.lineFour]} />

              <View style={[styles.chartDot, styles.dotOne]} />
              <View style={[styles.chartDot, styles.dotTwo]} />
              <View style={[styles.chartDot, styles.dotThree]} />
              <View style={[styles.chartDot, styles.dotFour]} />
            </View>
          </View>
        </View>

        {/* Explanation Cards */}
        <View style={styles.explanationGrid}>
          <CompassMiniCard
            title="Goals & Dreams"
            text="Actions related to ambitions or future planning."
          />
          <CompassMiniCard
            title="Identity & Values"
            text="Reflections, beliefs, or meaningful actions."
          />
          <CompassMiniCard
            title="Insights & Reflections"
            text="Journaling, prompts, or personal thoughts."
          />
          <CompassMiniCard
            title="Experiences & Trials"
            text="Internships, volunteering, new activities."
          />
        </View>
      </ScrollView>
    </View>
  );
}

function CompassMiniCard({ title, text }: { title: string; text: string }) {
  return (
    <View style={styles.miniCard}>
      <Text style={styles.miniTitle}>{title}</Text>
      <Text style={styles.miniText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
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
    fontSize: 25,
    fontWeight: "900",
  },

  dateText: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 8,
  },

  compassCard: {
    height: 185,
    marginHorizontal: 13,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: COLORS.gold,
    backgroundColor: COLORS.deepBlue,
    overflow: "hidden",
    position: "relative",
  },

  glowCircle: {
    position: "absolute",
    width: 180,
    height: 105,
    borderRadius: 90,
    backgroundColor: "rgba(213, 161, 45, 0.55)",
    left: "50%",
    top: "50%",
    marginLeft: -90,
    marginTop: -52,
    transform: [{ scaleX: 1.25 }],
  },

  compassStar: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 125,
    height: 125,
    marginLeft: -62.5,
    marginTop: -62.5,
    alignItems: "center",
    justifyContent: "center",
  },

  needle: {
    position: "absolute",
    backgroundColor: COLORS.gold,
    borderRadius: 8,
  },

  needleVertical: {
    width: 4,
    height: 116,
  },

  needleHorizontal: {
    width: 116,
    height: 4,
  },

  needleDiagonalOne: {
    width: 100,
    height: 4,
    transform: [{ rotate: "45deg" }],
  },

  needleDiagonalTwo: {
    width: 100,
    height: 4,
    transform: [{ rotate: "-45deg" }],
  },

  centerDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: COLORS.deepBlue,
    borderWidth: 2,
    borderColor: COLORS.gold,
    zIndex: 10,
  },

  directionText: {
    position: "absolute",
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: "900",
  },

  north: {
    top: 0,
  },

  south: {
    bottom: 0,
  },

  east: {
    right: 0,
  },

  west: {
    left: 0,
  },

  cornerLabel: {
    position: "absolute",
    color: COLORS.gold,
    fontSize: 9,
    fontWeight: "900",
    zIndex: 5,
  },

  topLeftLabel: {
    left: 9,
    top: 10,
  },

  topRightLabel: {
    right: 12,
    top: 65,
  },

  bottomLeftLabel: {
    left: 14,
    top: 75,
  },

  bottomRightLabel: {
    right: 8,
    bottom: 15,
  },

  cornerSmallText: {
    position: "absolute",
    color: COLORS.lightGold,
    fontSize: 5.5,
    fontWeight: "700",
    lineHeight: 7,
    zIndex: 5,
  },

  topLeftSmall: {
    left: 12,
    top: 24,
  },

  topRightSmall: {
    right: 10,
    top: 80,
    textAlign: "right",
  },

  bottomLeftSmall: {
    left: 14,
    top: 90,
  },

  bottomRightSmall: {
    right: 8,
    bottom: 5,
    textAlign: "right",
  },

  insightCard: {
    marginHorizontal: 13,
    marginTop: 11,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: COLORS.gold,
    backgroundColor: COLORS.deepBlue,
    minHeight: 85,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },

  cardTitle: {
    color: COLORS.gold,
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 5,
  },

  cardText: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 17,
  },

  summaryCard: {
    marginHorizontal: 13,
    marginTop: 11,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: COLORS.gold,
    backgroundColor: COLORS.deepBlue,
    minHeight: 145,
    paddingVertical: 12,
    paddingHorizontal: 13,
  },

  summaryContent: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },

  summaryLabels: {
    width: "42%",
  },

  summaryLabel: {
    color: COLORS.gold,
    fontSize: 9,
    fontWeight: "800",
    marginBottom: 10,
  },

  chartBox: {
    flex: 1,
    height: 90,
    position: "relative",
    overflow: "hidden",
  },

  chartLine: {
    position: "absolute",
    width: 130,
    borderTopWidth: 2,
    borderRadius: 20,
  },

  lineOne: {
    borderColor: COLORS.gold,
    top: 18,
    left: 0,
    transform: [{ rotate: "12deg" }],
  },

  lineTwo: {
    borderColor: COLORS.paleBlue,
    top: 38,
    left: 0,
    transform: [{ rotate: "-10deg" }],
  },

  lineThree: {
    borderColor: COLORS.lightGold,
    top: 58,
    left: 5,
    transform: [{ rotate: "20deg" }],
  },

  lineFour: {
    borderColor: COLORS.white,
    top: 72,
    left: 4,
    transform: [{ rotate: "-18deg" }],
  },

  chartDot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  dotOne: {
    backgroundColor: COLORS.gold,
    top: 15,
    right: 25,
  },

  dotTwo: {
    backgroundColor: COLORS.paleBlue,
    top: 34,
    right: 48,
  },

  dotThree: {
    backgroundColor: COLORS.lightGold,
    top: 55,
    right: 14,
  },

  dotFour: {
    backgroundColor: COLORS.white,
    top: 70,
    right: 35,
  },

  explanationGrid: {
    marginHorizontal: 13,
    marginTop: 13,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
    justifyContent: "space-between",
  },

  miniCard: {
    width: "48%",
    minHeight: 82,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.gold,
    padding: 10,
  },

  miniTitle: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 5,
  },

  miniText: {
    color: COLORS.darkBlue,
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 14,
  },
});