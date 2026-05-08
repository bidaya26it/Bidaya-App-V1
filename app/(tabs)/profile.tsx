import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
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
};

const badges = [
  "Attended 20\nVolunteering\nActivities",
  "Attended a\nMicrosoft\nWorkshop",
  "Attended 15\nInternships",
  "Attended 10\nWorkshops",
];

const certificates = [
  "Certificate of\nAppreciation",
  "Certificate of\nParticipation -\nMicrosoft Workshop",
  "Certificate of\nRecognition",
  "Certificate of\nAchievement",
];

export default function ProfileScreen() {
  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Profile</Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        {/* Profile Top */}
        <View style={styles.profileTop}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={54} color="#D0D0D0" />
            </View>
          </View>

          <View style={styles.pencil}>
            <Ionicons name="pencil" size={13} color={COLORS.white} />
          </View>

          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>Age: 24</Text>
          <Text style={styles.info}>Sex: Male</Text>
          <Text style={styles.email}>xxxxxxxx@example.com</Text>

          <Link href="/cv" asChild>
            <TouchableOpacity style={styles.cvButton}>
              <Text style={styles.cvButtonText}>My CV</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Badges / Certificates Titles */}
        <View style={styles.tabsRow}>
          <View style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Badges</Text>
          </View>

          <View style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Certificates</Text>
          </View>
        </View>

        {/* Panels */}
        <View style={styles.panelsWrapper}>
          {/* Left Panel */}
          <View style={styles.leftPanel}>
            {badges.map((badge, index) => (
              <View key={index} style={styles.badgeItem}>
                <View style={styles.medalIcon}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={36}
                    color={COLORS.gold}
                  />
                  <View style={styles.medalRibbonLeft} />
                  <View style={styles.medalRibbonRight} />
                </View>

                <Text style={styles.panelText}>{badge}</Text>
              </View>
            ))}

            <TouchableOpacity style={styles.leftArrow}>
              <Ionicons name="chevron-back" size={16} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* Center Divider */}
          <View style={styles.centerCurve} />

          {/* Right Panel */}
          <View style={styles.rightPanel}>
            {certificates.map((certificate, index) => (
              <View key={index} style={styles.certificateItem}>
                <View style={styles.certificateIcon}>
                  <View style={styles.certLineLong} />
                  <View style={styles.certLineShort} />
                  <Ionicons
                    name="ribbon-outline"
                    size={20}
                    color={COLORS.gold}
                  />
                </View>

                <Text style={styles.panelText}>{certificate}</Text>
              </View>
            ))}

            <TouchableOpacity style={styles.rightArrow}>
              <Ionicons name="chevron-forward" size={16} color={COLORS.white} />
            </TouchableOpacity>
          </View>
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
    backgroundColor: COLORS.cream,
    paddingBottom: 18,
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
    fontSize: 23,
    fontWeight: "900",
    textAlign: "center",
  },

  profileTop: {
    alignItems: "center",
    paddingTop: 8,
  },

  avatarOuter: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    borderStyle: "dotted",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  pencil: {
    width: 24,
    height: 8,
    borderRadius: 6,
    backgroundColor: COLORS.gold,
    transform: [{ rotate: "-45deg" }],
    marginTop: -13,
    marginLeft: 58,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    color: COLORS.darkBlue,
    fontSize: 23,
    fontWeight: "900",
    lineHeight: 25,
    marginTop: 2,
  },

  info: {
    color: COLORS.darkBlue,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 18,
  },

  email: {
    color: COLORS.darkBlue,
    fontSize: 10,
    fontWeight: "900",
    marginTop: 1,
    marginBottom: 4,
  },

  cvButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 12,
    width: 118,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  cvButtonText: {
    color: COLORS.darkBlue,
    fontSize: 15,
    fontWeight: "900",
  },

  tabsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 8,
    zIndex: 10,
  },

  tabButton: {
    flex: 1,
    maxWidth: 120,
    height: 22,
    backgroundColor: COLORS.deepBlue,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  tabButtonText: {
    color: COLORS.gold,
    fontSize: 15,
    fontWeight: "900",
  },

  panelsWrapper: {
    marginHorizontal: 7,
    marginTop: 2,
    minHeight: 330,
    flexDirection: "row",
    position: "relative",
  },

  leftPanel: {
    flex: 1,
    backgroundColor: COLORS.deepBlue,
    borderColor: COLORS.gold,
    borderWidth: 2.5,
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
    borderTopRightRadius: 34,
    borderBottomRightRadius: 34,
    paddingTop: 11,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 11,
  },

  rightPanel: {
    flex: 1,
    backgroundColor: COLORS.deepBlue,
    borderColor: COLORS.gold,
    borderWidth: 2.5,
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 34,
    borderBottomLeftRadius: 34,
    paddingTop: 11,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 11,
  },

  centerCurve: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 28,
    marginLeft: -14,
    backgroundColor: COLORS.cream,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: COLORS.gold,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    zIndex: 5,
  },

  badgeItem: {
    alignItems: "center",
    width: "100%",
  },

  certificateItem: {
    alignItems: "center",
    width: "100%",
  },

  medalIcon: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    borderWidth: 2,
    borderColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },

  medalRibbonLeft: {
    position: "absolute",
    bottom: -11,
    left: 13,
    width: 9,
    height: 17,
    backgroundColor: COLORS.gold,
    transform: [{ rotate: "22deg" }],
  },

  medalRibbonRight: {
    position: "absolute",
    bottom: -11,
    right: 13,
    width: 9,
    height: 17,
    backgroundColor: COLORS.gold,
    transform: [{ rotate: "-22deg" }],
  },

  certificateIcon: {
    width: 54,
    height: 39,
    borderWidth: 3,
    borderColor: COLORS.gold,
    backgroundColor: "#0B5878",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },

  certLineLong: {
    width: 24,
    height: 2,
    backgroundColor: COLORS.gold,
    marginBottom: 5,
  },

  certLineShort: {
    width: 15,
    height: 2,
    backgroundColor: COLORS.gold,
    marginBottom: 2,
  },

  panelText: {
    color: COLORS.gold,
    fontSize: 7.5,
    fontWeight: "800",
    lineHeight: 9,
    textAlign: "center",
  },

  leftArrow: {
    position: "absolute",
    left: 6,
    top: "47%",
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },

  rightArrow: {
    position: "absolute",
    right: 6,
    top: "47%",
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
});
