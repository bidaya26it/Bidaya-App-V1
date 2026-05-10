import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BidayaMenu from "../../components/BidayaMenu";

const COLORS = {
  cream: "#F7F5EC",
  navy: "#004B6B",
  deepNavy: "#003F5C",
  gold: "#D5A12D",
  goldLight: "#E1C04F",
  white: "#FFFFFF",
};

export default function CompassScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerIcon}>
            <Ionicons name="arrow-back" size={28} color={COLORS.navy} />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <View style={styles.logoTitleRow}>
              <Text style={styles.headerTitle}>My C</Text>

              <Image
                source={require("../../assets/images/compass-main.png")}
                style={styles.titleCompassIcon}
                resizeMode="contain"
              />

              <Text style={styles.headerTitle}>mpass</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setMenuVisible(true)}
            style={styles.headerIcon}
          >
            <Ionicons name="menu" size={34} color={COLORS.navy} />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerDate}>
          Thursday, 13ᵗʰ of November 2026
        </Text>

        {/* COMPASS CARD */}
        <View style={styles.cardOuter}>
          <View style={styles.compassCardInner}>
            <Image
              source={require("../../assets/images/compass-main.png")}
              style={styles.mainCompass}
              resizeMode="contain"
            />

            {/* Left lines */}
            <View style={[styles.connectorLine, styles.lineTopLeft]} />
            <View style={[styles.connectorLine, styles.lineMidLeft]} />

            {/* Right lines */}
            <View style={[styles.connectorLine, styles.lineMidRight]} />
            <View style={[styles.connectorLine, styles.lineBottomRight]} />

            {/* Labels */}
            <View style={styles.labelTopLeft}>
              <Text style={styles.compassLabelTitle}>Insights & Reflections</Text>
              <Text style={styles.compassLabelSub}>
                Journaling, prompts, or{"\n"}personal thoughts
              </Text>
            </View>

            <View style={styles.labelMiddleLeft}>
              <Text style={styles.compassLabelTitle}>Identity & Values</Text>
              <Text style={styles.compassLabelSub}>
                Reflections, beliefs, or{"\n"}meaningful actions.
              </Text>
            </View>

            <View style={styles.labelMiddleRight}>
              <Text style={styles.compassLabelTitle}>Goals & Dreams</Text>
              <Text style={styles.compassLabelSub}>
                Actions related to{"\n"}ambitions or future{"\n"}planning.
              </Text>
            </View>

            <View style={styles.labelBottomRight}>
              <Text style={styles.compassLabelTitleWhite}>Experiences & Trials</Text>
              <Text style={styles.compassLabelSub}>
                Internships, volunteering, new{"\n"}activities.
              </Text>
            </View>
          </View>
        </View>

        {/* WEEKLY DIRECTION */}
        <View style={styles.cardOuterSmall}>
          <View style={styles.insightCardInner}>
            <Text style={styles.softSectionTitle}>Weekly Direction Insight</Text>

            <Text style={styles.insightText}>
              You've reflected deeply on your values and{"\n"}future goals.
            </Text>
          </View>
        </View>

        {/* WEEKLY SUMMARY */}
        <View style={styles.cardOuterSummary}>
          <View style={styles.summaryCardInner}>
            <Text style={styles.softSectionTitle}>Weekly Summary</Text>

            <View style={styles.summaryRow}>
              <View style={styles.legendColumn}>
                <Text style={styles.legendText}>experiences & trials</Text>
                <Text style={styles.legendText}>insights & reflections</Text>
                <Text style={styles.legendText}>goals & dreams</Text>
                <Text style={styles.legendText}>identity & values</Text>
              </View>

              <Image
                source={require("../../assets/images/graph-lines.png")}
                style={styles.graphImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <BidayaMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  screen: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  content: {
    paddingHorizontal: 30,
    paddingTop: 0,
    paddingBottom: 30,
  },

  header: {
    height: 48,
    marginHorizontal: -30,
    paddingHorizontal: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#CFCFCF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
  },

  logoTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: COLORS.navy,
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
    letterSpacing: 0.5,
  },

  titleCompassIcon: {
    width: 22,
    height: 22,
    marginHorizontal: -1,
    marginTop: 2,
  },

  headerDate: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 9,
    marginBottom: 20,
  },

  cardOuter: {
    backgroundColor: COLORS.gold,
    borderRadius: 30,
    padding: 7,
    marginBottom: 22,
  },

 compassCardInner: {
  height: 278,
  backgroundColor: COLORS.deepNavy,
  borderRadius: 22,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
},

mainCompass: {
  width: 170,
  height: 170,
  zIndex: 4,
  marginTop: 8,
},

lineTopLeft: {
  left: 22,
  top: 58,
  width: 150,
},

lineMidLeft: {
  left: 22,
  top: 132,
  width: 112,
},

lineMidRight: {
  right: 22,
  top: 132,
  width: 112,
},

lineBottomRight: {
  right: 22,
  bottom: 63,
  width: 132,
},

labelTopLeft: {
  position: "absolute",
  left: 22,
  top: 42,
  width: 135,
  zIndex: 6,
},

labelMiddleLeft: {
  position: "absolute",
  left: 22,
  top: 116,
  width: 125,
  zIndex: 6,
},

labelMiddleRight: {
  position: "absolute",
  right: 22,
  top: 116,
  width: 125,
  alignItems: "flex-end",
  zIndex: 6,
},

labelBottomRight: {
  position: "absolute",
  right: 22,
  bottom: 42,
  width: 140,
  alignItems: "flex-end",
  zIndex: 6,
},

  compassLabelTitle: {
  color: COLORS.gold,
  fontSize: 10,
  fontWeight: "900",
  lineHeight: 12,
},

compassLabelTitleWhite: {
  color: COLORS.white,
  fontSize: 10,
  fontWeight: "900",
  lineHeight: 12,
  textShadowColor: COLORS.gold,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 4,
},

compassLabelSub: {
  color: COLORS.goldLight,
  fontSize: 6.4,
  fontWeight: "800",
  lineHeight: 7.4,
  marginTop: 2,
},


  cardOuterSmall: {
    backgroundColor: COLORS.gold,
    borderRadius: 28,
    padding: 8,
    marginBottom: 22,
  },

  insightCardInner: {
    minHeight: 145,
    backgroundColor: COLORS.deepNavy,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  softSectionTitle: {
    color: COLORS.gold,
    fontSize: 27,
    fontWeight: "400",
    marginBottom: 20,
    alignSelf: "flex-start",
  },

  insightText: {
    color: COLORS.goldLight,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 22,
  },

  cardOuterSummary: {
    backgroundColor: COLORS.gold,
    borderRadius: 28,
    padding: 8,
  },

  summaryCardInner: {
    minHeight: 225,
    backgroundColor: COLORS.deepNavy,
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  legendColumn: {
    width: "42%",
    paddingTop: 5,
  },

  legendText: {
    color: COLORS.gold,
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 31,
  },

  graphImage: {
    width: 205,
    height: 145,
    marginLeft: 6,
  },
});