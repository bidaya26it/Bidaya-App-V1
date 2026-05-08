import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
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
  darkGold: "#9B7417",
  lightGold: "#EBCB78",
  paleGold: "#F0D58B",
  white: "#FFFFFF",
  mutedText: "#6B6B6B",
};

const plans = [
  {
    key: "explore",
    title: "Get Explore",
    subtitle: "Free plan",
    price: "0 AED / MONTH",
    button: "Get Started",
    icon: "search-outline",
    cardColor: COLORS.deepBlue,
    textColor: COLORS.gold,
    buttonColor: "#003F5C",
    buttonTextColor: COLORS.gold,
    features: [
      "Basic Life Blueprint (limited layers)",
      "Daily Prompt (1 per day, skippable)",
      "Limited Search access",
      "Basic evolving profile",
      "Accessibility options",
    ],
  },
  {
    key: "align",
    title: "Get Align",
    subtitle: "Core Plan",
    price: "39 AED / MONTH",
    button: "Unlock Align",
    icon: "star",
    cardColor: COLORS.gold,
    textColor: COLORS.darkBlue,
    buttonColor: COLORS.paleGold,
    buttonTextColor: COLORS.darkBlue,
    features: [
      "Full Life Blueprint with all layers unlocked gradually",
      "Adaptive Daily Prompts based on user behavior",
      "Personalized life and career experience suggestions",
      "Full Compass System",
      "AI powered To-Do Breakdown",
      "Milestone and Bucket-List Timeline",
      "Certificate of Completion",
      "Full search Filters",
      "Community Hub access",
      "Priority personalization for accessibility needs",
    ],
  },
  {
    key: "evolve",
    title: "Get Evolve",
    subtitle: "Premium plan",
    price: "79 AED / MONTH",
    button: "Unlock Evolve",
    icon: "crown-outline",
    cardColor: COLORS.paleGold,
    textColor: COLORS.darkBlue,
    buttonColor: COLORS.darkGold,
    buttonTextColor: COLORS.white,
    features: [
      "All of the Align Features Plus:",
      "Advanced AI guidance and deeper reflections",
      "Career pattern recognition and long-term insight modeling",
      "Priority access to exclusive opportunities",
      "Mentor-led community sessions",
      "Advanced progress analytics and insights",
      "Exportable CV and experience portfolio",
      "Early access to new features",
      "Institutional reporting for sponsored users",
    ],
  },
];

export default function SubscriptionScreen() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const selectedPlan = plans[selectedIndex];

  function goToPreviousPlan() {
    setSelectedIndex((current) => {
      if (current === 0) return plans.length - 1;
      return current - 1;
    });
  }

  function goToNextPlan() {
    setSelectedIndex((current) => {
      if (current === plans.length - 1) return 0;
      return current + 1;
    });
  }

  function handlePlanButton() {
    if (selectedPlan.key === "explore") {
      return;
    }

    router.push("/payment");
  }

  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        <Text style={styles.mainTitle}>Subscription Plans</Text>

        <Text style={styles.planTitle}>
          {selectedPlan.title.split(" ")[0]}{" "}
          <Text style={styles.goldText}>
            {selectedPlan.title.split(" ").slice(1).join(" ")}
          </Text>
        </Text>

        <Text style={styles.planSubtitle}>{selectedPlan.subtitle}</Text>

        {/* Carousel Area */}
        <View style={styles.carouselArea}>
          <TouchableOpacity style={styles.sideCardLeft} onPress={goToPreviousPlan}>
            <Ionicons name="chevron-back" size={30} color={COLORS.gold} />
          </TouchableOpacity>

          <PlanCard plan={selectedPlan} onPress={handlePlanButton} />

          <TouchableOpacity style={styles.sideCardRight} onPress={goToNextPlan}>
            <Ionicons name="chevron-forward" size={30} color={COLORS.gold} />
          </TouchableOpacity>
        </View>

        {/* Dots */}
        <View style={styles.dotsRow}>
          {plans.map((plan, index) => (
            <TouchableOpacity
              key={plan.key}
              onPress={() => setSelectedIndex(index)}
              style={[
                styles.dot,
                selectedIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Bottom Decoration */}
        <View style={styles.bottomDecoration}>
          <View style={styles.blueHill} />
          <View style={styles.goldHill} />

          <View style={styles.person}>
            <View style={styles.personHead} />
            <View style={styles.personBody} />
            <View style={styles.personArm} />
            <View style={styles.personLegOne} />
            <View style={styles.personLegTwo} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function PlanCard({
  plan,
  onPress,
}: {
  plan: (typeof plans)[0];
  onPress: () => void;
}) {
  return (
    <View style={[styles.planCard, { backgroundColor: plan.cardColor }]}>
      <Ionicons
        name={plan.icon as any}
        size={28}
        color={plan.textColor}
        style={styles.planIcon}
      />

      <Text style={[styles.priceText, { color: plan.textColor }]}>
        {plan.price}
      </Text>

      <Text style={[styles.includedTitle, { color: plan.textColor }]}>
        Included Features:
      </Text>

      <View style={styles.featuresList}>
        {plan.features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Text style={[styles.bullet, { color: plan.textColor }]}>•</Text>
            <Text style={[styles.featureText, { color: plan.textColor }]}>
              {feature}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.unlockButton, { backgroundColor: plan.buttonColor }]}
        onPress={onPress}
      >
        <Text style={[styles.unlockButtonText, { color: plan.buttonTextColor }]}>
          {plan.button}
        </Text>
      </TouchableOpacity>
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
  },

  header: {
    height: 43,
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  mainTitle: {
    color: COLORS.darkBlue,
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 5,
  },

  planTitle: {
    color: COLORS.darkBlue,
    fontSize: 21,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 8,
  },

  goldText: {
    color: COLORS.gold,
  },

  planSubtitle: {
    color: COLORS.gold,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 1,
  },

  carouselArea: {
    marginTop: 18,
    minHeight: 320,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  sideCardLeft: {
    position: "absolute",
    left: -42,
    width: 96,
    height: 210,
    borderWidth: 3,
    borderColor: COLORS.gold,
    borderRadius: 22,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
    backgroundColor: "rgba(213,161,45,0.2)",
  },

  sideCardRight: {
    position: "absolute",
    right: -42,
    width: 96,
    height: 210,
    borderWidth: 3,
    borderColor: COLORS.gold,
    borderRadius: 22,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    backgroundColor: "rgba(213,161,45,0.2)",
  },

  planCard: {
    width: 260,
    minHeight: 310,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 18,
    alignItems: "center",
    justifyContent: "space-between",
  },

  planIcon: {
    marginBottom: 5,
  },

  priceText: {
    fontSize: 17,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },

  includedTitle: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 4,
  },

  featuresList: {
    width: "100%",
    flex: 1,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 3,
  },

  bullet: {
    fontSize: 10,
    marginRight: 5,
    lineHeight: 13,
  },

  featureText: {
    flex: 1,
    fontSize: 8.8,
    fontWeight: "800",
    lineHeight: 12,
  },

  unlockButton: {
    width: "100%",
    height: 42,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  unlockButtonText: {
    fontSize: 15,
    fontWeight: "900",
  },

  dotsRow: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 8,
    marginTop: 5,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#C7C7C7",
  },

  activeDot: {
    backgroundColor: COLORS.gold,
    width: 22,
  },

  bottomDecoration: {
    flex: 1,
    minHeight: 205,
    marginTop: 20,
    position: "relative",
    overflow: "hidden",
  },

  blueHill: {
    position: "absolute",
    bottom: -70,
    left: -40,
    width: 270,
    height: 155,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    backgroundColor: COLORS.deepBlue,
  },

  goldHill: {
    position: "absolute",
    bottom: -85,
    right: -35,
    width: 280,
    height: 175,
    borderTopLeftRadius: 170,
    borderTopRightRadius: 170,
    backgroundColor: COLORS.gold,
  },

  person: {
    position: "absolute",
    right: 95,
    bottom: 74,
    width: 55,
    height: 80,
  },

  personHead: {
    position: "absolute",
    top: 0,
    left: 26,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.darkBlue,
  },

  personBody: {
    position: "absolute",
    top: 15,
    left: 27,
    width: 10,
    height: 30,
    borderRadius: 8,
    backgroundColor: COLORS.darkBlue,
  },

  personArm: {
    position: "absolute",
    top: 22,
    left: 15,
    width: 31,
    height: 7,
    borderRadius: 6,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "-25deg" }],
  },

  personLegOne: {
    position: "absolute",
    top: 43,
    left: 19,
    width: 28,
    height: 7,
    borderRadius: 6,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "-42deg" }],
  },

  personLegTwo: {
    position: "absolute",
    top: 43,
    left: 31,
    width: 28,
    height: 7,
    borderRadius: 6,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "42deg" }],
  },
});