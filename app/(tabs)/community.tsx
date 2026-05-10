import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const COLORS = {
  cream: "#F7F5EC",
  navy: "#004B6B",
  deepNavy: "#003F5C",
  gold: "#D5A12D",
  softGold: "#E7C66B",
  paleGold: "#F0D58B",
  white: "#FFFFFF",
  lightGrey: "#EFEFEF",
};

const filters = [
  "All",
  "Medicine",
  "Engineering",
  "Computer Science",
  "Psychology",
  "Technology",
];

export default function CommunityHubScreen() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color={COLORS.navy} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Community Hub</Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={32} color={COLORS.navy} />
          </TouchableOpacity>
        </View>

        {/* TOP SECTION */}
        <View style={styles.topSection}>
          <View style={styles.sectionTitleRow}>
            <Ionicons name="options-outline" size={18} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>Career stories & insights</Text>
          </View>

          <Text style={styles.subtitle}>Connect • Learn • Grow</Text>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilterOpen(!filterOpen)}
          >
            <Text style={styles.filterButtonText}>{selectedFilter}</Text>
            <Ionicons
              name={filterOpen ? "chevron-up" : "chevron-down"}
              size={15}
              color={COLORS.navy}
            />
          </TouchableOpacity>

          {filterOpen && (
            <View style={styles.filterDropdown}>
              {filters.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.filterItem,
                    selectedFilter === item && styles.activeFilterItem,
                  ]}
                  onPress={() => {
                    setSelectedFilter(item);
                    setFilterOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.filterItemText,
                      selectedFilter === item && styles.activeFilterItemText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* CAREER STORY CARD */}
        <View style={styles.storyCardWrapper}>
          <TouchableOpacity style={styles.sideArrowLeft}>
            <Ionicons name="caret-back" size={13} color={COLORS.navy} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sideArrowRight}>
            <Ionicons name="caret-forward" size={13} color={COLORS.navy} />
          </TouchableOpacity>

          <View style={styles.walkerIcon}>
            <Ionicons name="walk" size={18} color={COLORS.navy} />
          </View>

          <View style={styles.profileColumn}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={34} color={COLORS.white} />
            </View>

            <Text style={styles.personName}>Will S.</Text>
            <Text style={styles.personJob}>Dermatologist</Text>

            <View style={styles.tagPill}>
              <Text style={styles.tagText}>Medicine</Text>
            </View>
          </View>

          <View style={styles.descriptionColumn}>
            <Text style={styles.descriptionLabel}>Description:</Text>
            <Text style={styles.descriptionText}>
              A deep dive into clinical life, daily procedures, and the journey
              to becoming a skin specialist.
            </Text>

            <TouchableOpacity style={styles.storyLink}>
              <Text style={styles.storyLinkText}>[View Full Story]</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* DECORATIVE DIVIDER */}
        <View style={styles.goldLine} />

        {/* ADVICE Q&A CARD */}
        <View style={styles.qaCard}>
          <TouchableOpacity style={styles.sideArrowLeftSmall}>
            <Ionicons name="caret-back" size={12} color={COLORS.navy} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sideArrowRightSmall}>
            <Ionicons name="caret-forward" size={12} color={COLORS.navy} />
          </TouchableOpacity>

          <View style={styles.qaHeader}>
            <View style={styles.questionCircle}>
              <Text style={styles.questionMark}>?</Text>
            </View>

            <View>
              <Text style={styles.qaTitle}>Advice Q&A</Text>
              <Text style={styles.qaSub}>Common questions</Text>
            </View>
          </View>

          <View style={styles.questionRow}>
            <View style={styles.qBadge}>
              <Text style={styles.qBadgeText}>Q</Text>
            </View>

            <Text style={styles.questionText}>
              What’s the most important skill for a doctor besides medical
              knowledge?
            </Text>

            <View style={styles.smallTag}>
              <Text style={styles.smallTagText}>Medicine</Text>
            </View>
          </View>

          <View style={styles.answerRow}>
            <View style={styles.aBadge}>
              <Text style={styles.qBadgeText}>A</Text>
            </View>

            <View style={styles.answerContent}>
              <Text style={styles.byText}>By: Dr. Will S.</Text>
              <Text style={styles.answerText}>
                Empathy and communication. Building trust with your patients...
              </Text>

              <TouchableOpacity style={styles.answerLink}>
                <Text style={styles.storyLinkText}>[View Detailed Answer]</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* SECOND DECORATIVE DIVIDER */}
        <View style={styles.goldLineShort} />

        {/* BURNOUT CARD */}
        <View style={styles.burnoutCard}>
          <TouchableOpacity style={styles.sideArrowLeftSmall}>
            <Ionicons name="caret-back" size={12} color={COLORS.navy} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sideArrowRightSmall}>
            <Ionicons name="caret-forward" size={12} color={COLORS.navy} />
          </TouchableOpacity>

          <View style={styles.bottomWalker}>
            <Ionicons name="accessibility" size={22} color={COLORS.navy} />
          </View>

          <Text style={styles.burnoutTitle}>How I Managed?</Text>
          <Text style={styles.burnoutTopic}>Burnout:</Text>

          <Text style={styles.insightText}>Insight from Dr. Will S.</Text>

          <Text style={styles.burnoutText}>
            I manage stress by setting firm boundaries, no work at home,
            prioritizing exercise, and seeking mentorship from peers...
          </Text>

          <TouchableOpacity style={styles.fullAnswerButton}>
            <Text style={styles.storyLinkText}>[View Full Answer]</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    backgroundColor: COLORS.cream,
    paddingBottom: 28,
  },

  header: {
    height: 50,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: COLORS.navy,
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  topSection: {
    paddingHorizontal: 23,
    paddingTop: 10,
    position: "relative",
    zIndex: 10,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  sectionTitle: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: "900",
  },

  subtitle: {
    color: COLORS.gold,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 15,
    marginBottom: 16,
  },

  filterButton: {
    position: "absolute",
    top: 70,
    left: 23,
    backgroundColor: COLORS.paleGold,
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 16,
    minWidth: 82,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    zIndex: 20,
  },

  filterButtonText: {
    color: COLORS.navy,
    fontSize: 11,
    fontWeight: "900",
  },

  filterDropdown: {
    position: "absolute",
    top: 98,
    left: 23,
    backgroundColor: COLORS.paleGold,
    borderRadius: 13,
    paddingVertical: 5,
    width: 118,
    zIndex: 50,
  },

  filterItem: {
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 9,
    marginHorizontal: 6,
  },

  activeFilterItem: {
    backgroundColor: COLORS.gold,
  },

  filterItemText: {
    color: COLORS.navy,
    fontSize: 10,
    fontWeight: "900",
  },

  activeFilterItemText: {
    color: COLORS.white,
  },

  storyCardWrapper: {
    marginHorizontal: 23,
    marginTop: 4,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    minHeight: 92,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: "relative",
    overflow: "hidden",
  },

  sideArrowLeft: {
    position: "absolute",
    left: 2,
    top: 40,
    zIndex: 4,
  },

  sideArrowRight: {
    position: "absolute",
    right: 2,
    top: 40,
    zIndex: 4,
  },

  walkerIcon: {
    position: "absolute",
    right: 18,
    top: -3,
  },

  profileColumn: {
    width: 78,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },

  avatarCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },

  personName: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: "900",
    marginTop: 3,
  },

  personJob: {
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "700",
  },

  tagPill: {
    backgroundColor: COLORS.paleGold,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 2,
  },

  tagText: {
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "900",
  },

  descriptionColumn: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 9,
  },

  descriptionLabel: {
    color: COLORS.navy,
    fontSize: 10,
    fontWeight: "900",
  },

  descriptionText: {
    color: COLORS.navy,
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 13,
    marginTop: 2,
  },

  storyLink: {
    alignSelf: "flex-end",
    marginTop: 4,
  },

  storyLinkText: {
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "900",
  },

  goldLine: {
    height: 2,
    backgroundColor: COLORS.gold,
    marginHorizontal: 44,
    marginTop: 6,
    marginBottom: 10,
  },

  goldLineShort: {
    height: 2,
    backgroundColor: COLORS.gold,
    marginHorizontal: 70,
    marginTop: 9,
    marginBottom: 11,
  },

  qaCard: {
    marginHorizontal: 23,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 9,
    minHeight: 118,
    position: "relative",
  },

  sideArrowLeftSmall: {
    position: "absolute",
    left: 2,
    top: 50,
    zIndex: 4,
  },

  sideArrowRightSmall: {
    position: "absolute",
    right: 2,
    top: 50,
    zIndex: 4,
  },

  qaHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  questionCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.paleGold,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  questionMark: {
    color: COLORS.navy,
    fontSize: 11,
    fontWeight: "900",
  },

  qaTitle: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: "900",
  },

  qaSub: {
    color: COLORS.navy,
    fontSize: 9,
    fontWeight: "700",
    marginTop: -2,
  },

  questionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 2,
  },

  qBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  aBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  qBadgeText: {
    color: COLORS.white,
    fontSize: 9,
    fontWeight: "900",
  },

  questionText: {
    flex: 1,
    color: COLORS.navy,
    fontSize: 10,
    fontWeight: "800",
    lineHeight: 13,
  },

  smallTag: {
    backgroundColor: COLORS.paleGold,
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 5,
  },

  smallTagText: {
    color: COLORS.navy,
    fontSize: 7,
    fontWeight: "900",
  },

  answerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 4,
  },

  answerContent: {
    flex: 1,
  },

  byText: {
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "900",
  },

  answerText: {
    color: COLORS.navy,
    fontSize: 9,
    fontWeight: "700",
    lineHeight: 12,
    marginTop: 1,
  },

  answerLink: {
    alignSelf: "flex-end",
    marginTop: 3,
  },

  burnoutCard: {
    marginHorizontal: 23,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 121,
    position: "relative",
  },

  bottomWalker: {
    position: "absolute",
    right: 11,
    top: -20,
  },

  burnoutTitle: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: "900",
  },

  burnoutTopic: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: "900",
    marginTop: 1,
  },

  insightText: {
    color: COLORS.navy,
    fontSize: 10,
    fontWeight: "800",
    marginTop: 5,
  },

  burnoutText: {
    color: COLORS.navy,
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 13,
    marginTop: 4,
  },

  fullAnswerButton: {
    alignSelf: "flex-end",
    marginTop: 4,
  },
});