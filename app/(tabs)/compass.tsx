import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BidayaMenu from "../../components/BidayaMenu";

const COLORS = {
  cream: "#F7F5EC",
  navy: "#003F5C",
  blue: "#004B6B",
  gold: "#D5A12D",
  goldLight: "#E1C04F",
};

const IMAGES = {
  compass: require("../../assets/images/compass-main.png"),
  graph: require("../../assets/images/graph-lines.png"),
};

export default function CompassScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color={COLORS.blue} />
          </TouchableOpacity>

          <View style={styles.titleRow}>
            <Text style={styles.titleText}>My C</Text>
            <Image
              source={IMAGES.compass}
              style={styles.titleCompass}
              resizeMode="contain"
            />
            <Text style={styles.titleText}>mpass</Text>
          </View>

          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="menu" size={28} color={COLORS.blue} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerLine} />

        <Text style={styles.dateText}>Thursday, 13ᵗʰ of November 2026</Text>

        {/* MAIN COMPASS CARD */}
        <View style={styles.compassCard}>
          <Image
            source={IMAGES.compass}
            style={styles.mainCompass}
            resizeMode="contain"
          />

          <View style={styles.labelTopLeft}>
            <Text style={styles.labelTitle}>Insights & Reflections</Text>
            <View style={styles.labelLine} />
            <Text style={styles.labelSub}>
              Journaling, prompts, or{"\n"}personal thoughts
            </Text>
          </View>

          <View style={styles.labelMiddleLeft}>
            <Text style={styles.labelTitle}>Identity & Values</Text>
            <View style={styles.labelLine} />
            <Text style={styles.labelSub}>
              Reflections, beliefs, or{"\n"}meaningful actions
            </Text>
          </View>

          <View style={styles.labelMiddleRight}>
            <Text style={styles.labelTitleRight}>Goals & Dreams</Text>
            <View style={styles.labelLineRight} />
            <Text style={styles.labelSubRight}>
              Actions related to{"\n"}ambitions or future{"\n"}planning
            </Text>
          </View>

          <View style={styles.labelBottomRight}>
            <Text style={styles.labelTitleRight}>Experiences & Trials</Text>
            <View style={styles.labelLineRight} />
            <Text style={styles.labelSubRight}>
              Internships, volunteering, new{"\n"}activities
            </Text>
          </View>
        </View>

        {/* WEEKLY DIRECTION INSIGHT */}
        <View style={styles.insightCard}>
          <Text style={styles.insightTitle}>Weekly Direction Insight</Text>
          <Text style={styles.insightBody}>
            You’ve reflected deeply on your values and{"\n"}future goals.
          </Text>
        </View>

        {/* WEEKLY SUMMARY */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Weekly Summary</Text>

          <View style={styles.summaryRow}>
            <View style={styles.legendColumn}>
              <Text style={styles.legendText}>experiences & trials</Text>
              <Text style={styles.legendText}>insights & reflections</Text>
              <Text style={styles.legendText}>goals & dreams</Text>
              <Text style={styles.legendText}>identity & values</Text>
            </View>

            <Image
              source={IMAGES.graph}
              style={styles.graphImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>

      <BidayaMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  screen: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    backgroundColor: COLORS.cream,
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 14,
  },

  header: {
    height: 39,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },

  titleRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    color: COLORS.blue,
    fontSize: 23,
    fontWeight: "900",
    lineHeight: 27,
  },

  titleCompass: {
    width: 16,
    height: 16,
    marginHorizontal: -1,
    marginTop: 2,
  },

  headerLine: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginHorizontal: -18,
  },

  dateText: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 8,
  },

  compassCard: {
    height: 176,
    backgroundColor: COLORS.navy,
    borderWidth: 5,
    borderColor: COLORS.gold,
    borderRadius: 17,
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  mainCompass: {
    width: 138,
    height: 138,
    zIndex: 2,
  },

  labelTopLeft: {
    position: "absolute",
    left: 9,
    top: 10,
    width: 96,
    zIndex: 5,
  },

  labelMiddleLeft: {
    position: "absolute",
    left: 9,
    top: 66,
    width: 98,
    zIndex: 5,
  },

  labelMiddleRight: {
    position: "absolute",
    right: 8,
    top: 67,
    width: 96,
    alignItems: "flex-end",
    zIndex: 5,
  },

  labelBottomRight: {
    position: "absolute",
    right: 9,
    bottom: 11,
    width: 106,
    alignItems: "flex-end",
    zIndex: 5,
  },

  labelTitle: {
    color: COLORS.gold,
    fontSize: 6.8,
    fontWeight: "900",
    lineHeight: 7.6,
  },

  labelTitleRight: {
    color: COLORS.gold,
    fontSize: 6.8,
    fontWeight: "900",
    lineHeight: 7.6,
    textAlign: "right",
  },

  labelLine: {
    width: 60,
    height: 1.1,
    backgroundColor: COLORS.gold,
    marginTop: 2,
    marginBottom: 1,
  },

  labelLineRight: {
    width: 60,
    height: 1.1,
    backgroundColor: COLORS.gold,
    marginTop: 2,
    marginBottom: 1,
  },

  labelSub: {
    color: COLORS.goldLight,
    fontSize: 4.6,
    fontWeight: "800",
    lineHeight: 5.2,
  },

  labelSubRight: {
    color: COLORS.goldLight,
    fontSize: 4.6,
    fontWeight: "800",
    lineHeight: 5.2,
    textAlign: "right",
  },

  insightCard: {
    height: 103,
    backgroundColor: COLORS.navy,
    borderWidth: 5,
    borderColor: COLORS.gold,
    borderRadius: 17,
    paddingHorizontal: 17,
    paddingTop: 14,
    marginBottom: 10,
  },

  insightTitle: {
    color: COLORS.gold,
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 14,
  },

  insightBody: {
    color: COLORS.goldLight,
    fontSize: 10.2,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 13,
  },

  summaryCard: {
    height: 147,
    backgroundColor: COLORS.navy,
    borderWidth: 5,
    borderColor: COLORS.gold,
    borderRadius: 17,
    paddingHorizontal: 14,
    paddingTop: 12,
  },

  summaryTitle: {
    color: COLORS.gold,
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 5,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  legendColumn: {
    width: 100,
  },

  legendText: {
    color: COLORS.gold,
    fontSize: 8.7,
    fontWeight: "500",
    lineHeight: 18,
  },

  graphImage: {
    flex: 1,
    height: 94,
    marginLeft: 2,
  },
});