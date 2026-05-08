import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
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
  lightGrey: "#E6E6E6",
  white: "#FFFFFF",
  blackText: "#24333A",
};

export default function CVScreen() {
  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My CV</Text>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        {/* CV Paper */}
        <View style={styles.cvPaper}>
          {/* Left Sidebar */}
          <View style={styles.sidebar}>
            <View style={styles.yellowCorner} />

            <View style={styles.avatarWrapper}>
              <Ionicons name="person" size={55} color="#CFCFCF" />
            </View>

            <Text style={styles.sidebarTitle}>Personal Information</Text>

            <InfoLine icon="location-outline" text="Dubai, UAE" />
            <InfoLine icon="mail-outline" text="johndoe@example.com" />
            <InfoLine icon="call-outline" text="+971 50 123 4567" />
            <InfoLine icon="calendar-outline" text="22/05/2002" />
            <InfoLine icon="logo-linkedin" text="linkedin.com/xxxxx" />

            <SectionDivider />

            <Text style={styles.sidebarHeading}>Skills</Text>
            <Bullet text="Python" />
            <Bullet text="JavaScript" />
            <Bullet text="React" />
            <Bullet text="AWS" />
            <Bullet text="Kubernetes" />
            <Bullet text="Docker" />
            <Bullet text="Machine Learning" />
            <Bullet text="Distributed Systems" />

            <SectionDivider />

            <Text style={styles.sidebarHeading}>Languages</Text>
            <Bullet text="English" />
            <Bullet text="Spanish" />
            <Bullet text="French" />
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.role}>Software Engineer</Text>

            <CVSection title="Summary">
              <Text style={styles.paragraph}>
                Experienced software engineer with 3 years of experience in
                building scalable web and mobile applications. Passionate about
                clean code, system design, and emerging technologies.
              </Text>
            </CVSection>

            <CVSection title="Education">
              <Text style={styles.itemTitle}>
                University of California, Berkeley
              </Text>
              <Text style={styles.itemDate}>2020 - 2023</Text>
              <Text style={styles.itemSubtitle}>B.Sc. in Computer Science</Text>

              <Text style={styles.paragraph}>
                Gained foundational knowledge in computer science, with hands-on
                experience in software development, algorithms, and system
                architecture. Key courses included:
              </Text>

              <BulletMain text="Operating Systems and Networking." />
              <BulletMain text="Data Structures and Algorithm Analysis." />
              <BulletMain text="Software Engineering and Agile Development." />

              <View style={{ height: 8 }} />

              <Text style={styles.itemTitle}>Lowell High School</Text>
              <Text style={styles.itemDate}>2016 - 2020</Text>
              <Text style={styles.itemSubtitle}>High School Diploma</Text>
            </CVSection>

            <CVSection title="Work Experience">
              <Text style={styles.itemTitle}>Software Engineer</Text>

              <Text style={styles.paragraph}>
                At Google, I have been responsible for designing and
                implementing large-scale web applications with a focus on
                performance, scalability, and reliability. Key contributions
                include:
              </Text>

              <BulletMain text="Leading a team of developers in building a real-time analytics dashboard using React, Node.js, and BigQuery." />
              <BulletMain text="Optimizing cloud-based applications by reducing latency through caching mechanisms and database indexing." />
              <BulletMain text="Mentoring junior developers, conducting code reviews, and improving best practices for clean code and documentation." />
              <BulletMain text="Collaborating with cross-functional teams to integrate AI-driven features into cloud services." />
            </CVSection>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function InfoLine({ icon, text }: { icon: any; text: string }) {
  return (
    <View style={styles.infoLine}>
      <Ionicons name={icon} size={10} color={COLORS.darkBlue} />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}

function SectionDivider() {
  return <View style={styles.divider} />;
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

function BulletMain({ text }: { text: string }) {
  return (
    <View style={styles.mainBulletRow}>
      <Text style={styles.mainBulletDot}>•</Text>
      <Text style={styles.mainBulletText}>{text}</Text>
    </View>
  );
}

function CVSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.cvSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.goldLine} />
      {children}
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
    paddingBottom: 35,
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
  },

  cvPaper: {
    marginHorizontal: 13,
    marginTop: 12,
    backgroundColor: COLORS.white,
    minHeight: 720,
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#DADADA",
  },

  sidebar: {
    width: "35%",
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: 9,
    paddingTop: 16,
    position: "relative",
  },

  yellowCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 82,
    height: 82,
    backgroundColor: COLORS.gold,
    borderBottomRightRadius: 75,
  },

  avatarWrapper: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    zIndex: 2,
    overflow: "hidden",
  },

  sidebarTitle: {
    color: COLORS.darkBlue,
    fontSize: 10,
    fontWeight: "900",
    marginBottom: 5,
  },

  infoLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 4,
  },

  infoText: {
    color: COLORS.darkBlue,
    fontSize: 7,
    fontWeight: "700",
    flex: 1,
  },

  divider: {
    height: 1.5,
    backgroundColor: COLORS.gold,
    marginVertical: 9,
  },

  sidebarHeading: {
    color: COLORS.darkBlue,
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 5,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
  },

  bulletDot: {
    color: COLORS.darkBlue,
    fontSize: 9,
    marginRight: 4,
    lineHeight: 10,
  },

  bulletText: {
    color: COLORS.darkBlue,
    fontSize: 7.5,
    fontWeight: "800",
    flex: 1,
    lineHeight: 10,
  },

  mainContent: {
    width: "65%",
    paddingHorizontal: 11,
    paddingTop: 20,
    paddingBottom: 15,
  },

  name: {
    color: COLORS.darkBlue,
    fontSize: 27,
    fontWeight: "500",
    letterSpacing: 1,
  },

  role: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 12,
  },

  cvSection: {
    marginBottom: 11,
  },

  sectionTitle: {
    color: COLORS.darkBlue,
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 1,
  },

  goldLine: {
    height: 1.5,
    backgroundColor: COLORS.gold,
    marginBottom: 5,
  },

  paragraph: {
    color: COLORS.blackText,
    fontSize: 8.5,
    lineHeight: 11,
    marginBottom: 5,
  },

  itemTitle: {
    color: COLORS.blackText,
    fontSize: 9.5,
    fontWeight: "900",
  },

  itemDate: {
    color: COLORS.blackText,
    fontSize: 8,
    fontWeight: "700",
  },

  itemSubtitle: {
    color: COLORS.blackText,
    fontSize: 8.5,
    fontWeight: "800",
    marginBottom: 4,
  },

  mainBulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
  },

  mainBulletDot: {
    color: COLORS.blackText,
    fontSize: 8,
    marginRight: 4,
    lineHeight: 10,
  },

  mainBulletText: {
    color: COLORS.blackText,
    fontSize: 8,
    lineHeight: 10,
    flex: 1,
  },
});