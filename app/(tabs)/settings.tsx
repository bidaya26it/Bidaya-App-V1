import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COLORS = {
  cream: "#F7F5EC",
  darkBlue: "#004B6B",
  deepBlue: "#003F5C",
  gold: "#D5A12D",
  white: "#FFFFFF",
  lightGrey: "#F0F0F0",
  purple: "#8F73A8",
  pink: "#E9D4E8",
  softGold: "#F3E3B0",
  borderGrey: "#D6D6D6",
};

type TabType = "accessibility" | "support" | "notifications";

export default function SettingsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("accessibility");
  const [hasCondition, setHasCondition] = useState(false);
  const [dailyPrompts, setDailyPrompts] = useState(true);
  const [dailyAffirmations, setDailyAffirmations] = useState(true);
  const [frequency, setFrequency] = useState("moderate");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Settings</Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabsWrapper}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "accessibility" && styles.activeAccessibilityTab,
            ]}
            onPress={() => setActiveTab("accessibility")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "accessibility" && styles.activeTabText,
              ]}
            >
              Accessibility
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "support" && styles.activeSupportTab,
            ]}
            onPress={() => setActiveTab("support")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "support" && styles.activeTabText,
              ]}
            >
              Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "notifications" && styles.activeNotificationTab,
            ]}
            onPress={() => setActiveTab("notifications")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "notifications" && styles.activeTabText,
              ]}
            >
              Notifications
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "accessibility" && <AccessibilityContent />}

        {activeTab === "support" && (
          <SupportContent
            hasCondition={hasCondition}
            setHasCondition={setHasCondition}
          />
        )}

        {activeTab === "notifications" && (
          <NotificationsContent
            dailyPrompts={dailyPrompts}
            setDailyPrompts={setDailyPrompts}
            dailyAffirmations={dailyAffirmations}
            setDailyAffirmations={setDailyAffirmations}
            frequency={frequency}
            setFrequency={setFrequency}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function AccessibilityContent() {
  return (
    <View style={styles.content}>
      <View style={styles.sectionHeader}>
        <View style={styles.iconBoxBlue}>
          <Ionicons name="eye-outline" size={25} color={COLORS.darkBlue} />
        </View>

        <View>
          <Text style={styles.mainSectionTitle}>Accessibility</Text>
          <Text style={styles.mainSectionSub}>
            Customize your experience for comfort
          </Text>
        </View>
      </View>

      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Color Theme</Text>

        <View style={styles.selectBox}>
          <Text style={styles.selectText}>Default</Text>
          <Ionicons name="chevron-down" size={22} color="#777" />
        </View>
      </View>

      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Text size</Text>

        <View style={styles.selectBox}>
          <Text style={styles.selectText}>Medium</Text>
          <Ionicons name="chevron-down" size={22} color="#777" />
        </View>
      </View>
    </View>
  );
}

function SupportContent({
  hasCondition,
  setHasCondition,
}: {
  hasCondition: boolean;
  setHasCondition: (value: boolean) => void;
}) {
  return (
    <View style={styles.content}>
      <View style={styles.sectionHeader}>
        <View style={styles.iconBoxPurple}>
          <Ionicons name="accessibility-outline" size={25} color={COLORS.purple} />
        </View>

        <View>
          <Text style={styles.mainSectionTitle}>Support & Accommodation</Text>
          <Text style={styles.mainSectionSub}>Help us personalize your experience</Text>
        </View>
      </View>

      <View style={styles.supportInfoBox}>
        <Text style={styles.supportInfoText}>
          This information is entirely optional and private.{"\n"}
          It helps us suggest the right experiences and{"\n"}
          make the app more comfortable for you. You{"\n"}
          are extraordinary - let us support you.
        </Text>
      </View>

      <View style={styles.switchCard}>
        <View>
          <Text style={styles.switchTitle}>I have a disability or condition</Text>
          <Text style={styles.switchSub}>Enabling this personalizes recommendations</Text>
        </View>

        <Switch
          value={hasCondition}
          onValueChange={setHasCondition}
          trackColor={{ false: "#AFAFAF", true: "#111111" }}
          thumbColor={COLORS.white}
        />
      </View>

      {hasCondition && (
        <View style={styles.conditionBox}>
          <ConditionOption text="Autism (ASD)" />
          <ConditionOption text="ADHD / ADD" selected />
          <ConditionOption text="Dyslexia" />
          <ConditionOption text="Anxiety" />
          <ConditionOption text="Mobility Challenges" selected />
          <ConditionOption text="Other (please specify)" />
        </View>
      )}
    </View>
  );
}

function ConditionOption({
  text,
  selected,
}: {
  text: string;
  selected?: boolean;
}) {
  return (
    <View style={styles.conditionRow}>
      <View style={[styles.radioCircle, selected && styles.radioSelected]} />
      <Text style={styles.conditionText}>{text}</Text>
    </View>
  );
}

function NotificationsContent({
  dailyPrompts,
  setDailyPrompts,
  dailyAffirmations,
  setDailyAffirmations,
  frequency,
  setFrequency,
}: {
  dailyPrompts: boolean;
  setDailyPrompts: (value: boolean) => void;
  dailyAffirmations: boolean;
  setDailyAffirmations: (value: boolean) => void;
  frequency: string;
  setFrequency: (value: string) => void;
}) {
  return (
    <View style={styles.content}>
      <View style={styles.sectionHeader}>
        <View style={styles.iconBoxGold}>
          <Ionicons name="notifications-outline" size={25} color={COLORS.gold} />
        </View>

        <View>
          <Text style={styles.mainSectionTitle}>Notifications & Prompts</Text>
          <Text style={styles.mainSectionSub}>Control how the app reaches out to you</Text>
        </View>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.notificationTextBox}>
          <View style={styles.notificationIconCircle}>
            <Ionicons name="sunny-outline" size={21} color={COLORS.gold} />
          </View>

          <View>
            <Text style={styles.notificationTitle}>Daily prompts</Text>
            <Text style={styles.notificationSub}>Personality & lifestyle questions</Text>
          </View>
        </View>

        <Switch
          value={dailyPrompts}
          onValueChange={setDailyPrompts}
          trackColor={{ false: "#AFAFAF", true: "#111111" }}
          thumbColor={COLORS.white}
        />
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.notificationTextBox}>
          <View style={styles.notificationIconCircle}>
            <Ionicons name="sparkles-outline" size={21} color={COLORS.gold} />
          </View>

          <View>
            <Text style={styles.notificationTitle}>Daily affirmations</Text>
            <Text style={styles.notificationSub}>Encouragement and positive reminders</Text>
          </View>
        </View>

        <Switch
          value={dailyAffirmations}
          onValueChange={setDailyAffirmations}
          trackColor={{ false: "#AFAFAF", true: "#111111" }}
          thumbColor={COLORS.white}
        />
      </View>

      <View style={styles.frequencyCard}>
        <Text style={styles.frequencyTitle}>Notification frequency</Text>

        <FrequencyOption
          text="Minimal — only essentials"
          selected={frequency === "minimal"}
          onPress={() => setFrequency("minimal")}
        />

        <FrequencyOption
          text="Moderate — balanced reminders"
          selected={frequency === "moderate"}
          onPress={() => setFrequency("moderate")}
        />

        <FrequencyOption
          text="All — keep me in the loop"
          selected={frequency === "all"}
          onPress={() => setFrequency("all")}
        />
      </View>
    </View>
  );
}

function FrequencyOption({
  text,
  selected,
  onPress,
}: {
  text: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.frequencyRow} onPress={onPress}>
      <View style={[styles.frequencyCircle, selected && styles.frequencySelected]} />
      <Text style={styles.frequencyText}>{text}</Text>
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
    paddingBottom: 35,
  },

  header: {
    height: 47,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: COLORS.darkBlue,
    fontSize: 28,
    fontWeight: "900",
  },

  tabsWrapper: {
    marginHorizontal: 17,
    marginTop: 16,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    minHeight: 31,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },

  tabButton: {
    flex: 1,
    height: 27,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  activeAccessibilityTab: {
    backgroundColor: COLORS.deepBlue,
  },

  activeSupportTab: {
    backgroundColor: COLORS.purple,
  },

  activeNotificationTab: {
    backgroundColor: COLORS.gold,
    borderWidth: 1.5,
    borderColor: COLORS.darkBlue,
  },

  tabText: {
    fontSize: 13,
    color: "#A4A4A4",
    fontWeight: "800",
  },

  activeTabText: {
    color: COLORS.white,
  },

  content: {
    paddingHorizontal: 17,
    paddingTop: 28,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  iconBoxBlue: {
    width: 45,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#6B9EB6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },

  iconBoxPurple: {
    width: 45,
    height: 34,
    borderRadius: 8,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },

  iconBoxGold: {
    width: 45,
    height: 34,
    borderRadius: 8,
    backgroundColor: COLORS.softGold,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },

  mainSectionTitle: {
    color: COLORS.darkBlue,
    fontSize: 21,
    fontWeight: "800",
  },

  mainSectionSub: {
    color: "#777",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 1,
  },

  optionCard: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: COLORS.deepBlue,
    borderRadius: 9,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 27,
    backgroundColor: COLORS.cream,
  },

  optionTitle: {
    color: "#333",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 7,
  },

  selectBox: {
    height: 31,
    borderRadius: 7,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderGrey,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectText: {
    color: "#222",
    fontSize: 15,
    fontWeight: "800",
  },

  supportInfoBox: {
    backgroundColor: COLORS.pink,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 9,
    marginBottom: 9,
  },

  supportInfoText: {
    color: "#5E5367",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
  },

  switchCard: {
    borderWidth: 1.3,
    borderStyle: "dashed",
    borderColor: "#8D7A97",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 9,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  switchTitle: {
    color: "#333",
    fontSize: 14,
    fontWeight: "900",
  },

  switchSub: {
    color: "#777",
    fontSize: 8.5,
    fontWeight: "700",
    marginTop: 2,
  },

  conditionBox: {
    marginTop: 9,
    borderWidth: 1.3,
    borderStyle: "dashed",
    borderColor: "#8D7A97",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },

  conditionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  radioCircle: {
    width: 20,
    height: 11,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    marginRight: 10,
  },

  radioSelected: {
    backgroundColor: COLORS.purple,
    borderColor: COLORS.purple,
  },

  conditionText: {
    color: "#333",
    fontSize: 13,
    fontWeight: "800",
  },

  notificationCard: {
    borderWidth: 1.2,
    borderColor: COLORS.gold,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: COLORS.white,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  notificationTextBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  notificationIconCircle: {
    width: 37,
    alignItems: "center",
  },

  notificationTitle: {
    color: "#333",
    fontSize: 17,
    fontWeight: "800",
  },

  notificationSub: {
    color: "#777",
    fontSize: 9.5,
    fontWeight: "700",
  },

  frequencyCard: {
    borderWidth: 1.2,
    borderColor: COLORS.gold,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingVertical: 13,
  },

  frequencyTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 11,
  },

  frequencyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  frequencyCircle: {
    width: 20,
    height: 11,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    marginRight: 11,
  },

  frequencySelected: {
    backgroundColor: COLORS.gold,
    borderColor: COLORS.gold,
  },

  frequencyText: {
    color: "#333",
    fontSize: 12.5,
    fontWeight: "700",
  },
});