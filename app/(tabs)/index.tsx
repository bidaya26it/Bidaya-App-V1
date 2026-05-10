import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BidayaMenu from "../../components/BidayaMenu";

const COLORS = {
  cream: "#F7F5EC",
  navy: "#004B6B",
  deepNavy: "#003F5C",
  gold: "#D5A12D",
  white: "#FFFFFF",
  grey: "#D9D9D9",
};

const ICONS = {
  compass: require("../../assets/images/compass-4-pillars.png"),
  arrow: require("../../assets/images/play-small.png"),
};

const experiences = [
  {
    title: "Youth Coding\nWorkshop",
    category: "Workshop",
    age: "18-24",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    title: "Community\nPark clean-up",
    category: "Volunteering",
    age: "16-22",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
  },
  {
    title: "Digital Marketing\nInternship",
    category: "Workshop",
    age: "18-24",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
  },
  {
    title: "Senior Centre\nVolunteering",
    category: "Volunteering",
    age: "18-24",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
  },
  {
    title: "Animal Shelter\nInternship",
    category: "Internship",
    age: "18-25",
    image:
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80",
  },
  {
    title: "High-school\nStudy Session",
    category: "Volunteering",
    age: "16-24",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    title: "Local Beach\nClean-up",
    category: "Volunteering",
    age: "16-24",
    image:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&q=80",
  },
  {
    title: "Event\nOrganization",
    category: "Volunteering",
    age: "18-24",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  },
];

export default function HomeScreen() {
  const [promptOpen, setPromptOpen] = useState(false);
const [answer, setAnswer] = useState("");
const [menuVisible, setMenuVisible] = useState(false);
  const experienceScrollRef = useRef<ScrollView>(null);
  const [experienceScrollX, setExperienceScrollX] = useState(0);

  const scrollExperiences = (direction: "left" | "right") => {
    const scrollAmount = 106;
    const nextX =
      direction === "right"
        ? experienceScrollX + scrollAmount
        : Math.max(0, experienceScrollX - scrollAmount);

    experienceScrollRef.current?.scrollTo({
      x: nextX,
      animated: true,
    });

    setExperienceScrollX(nextX);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={42} color="#BEBEBE" />
            </View>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.helloText}>Hello , John 👋</Text>
            <Text style={styles.dateText}>Thursday, 13ᵗʰ of November 2026</Text>
          </View>

          <View style={styles.headerIcons}>
            <View style={styles.flameBox}>
              <Ionicons name="flame" size={27} color={COLORS.gold} />
              <Text style={styles.flameNumber}>10</Text>
            </View>

            <TouchableOpacity onPress={() => setMenuVisible(true)}>
  <Ionicons name="menu" size={34} color={COLORS.navy} />
</TouchableOpacity>
          </View>
        </View>

        {/* DAILY PROMPT */}
        <Text style={styles.dailyTitle}>Daily Prompt: Today's Question</Text>

        <View style={styles.promptCard}>
          <Text style={styles.promptQuestion}>
            What quality do you most admire in{"\n"}yourself and why?
          </Text>

          <View style={styles.promptButtons}>
            <TouchableOpacity
              style={styles.promptButton}
              onPress={() => setPromptOpen(true)}
            >
              <Text style={styles.promptButtonText}>[Answer]</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promptButton}>
              <Text style={styles.promptButtonText}>[Skip]</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promptButton}>
              <Text style={styles.promptButtonText}>[Remind me later]</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.reflectionText}>Reflection Logs</Text>
        </View>

        {/* EXPERIENCES */}
        <Text style={styles.experienceTitle}>Suggested Experiences</Text>

        <View style={styles.experienceBar}>
          <TouchableOpacity
            style={[styles.arrowButton, styles.leftArrowButton]}
            onPress={() => scrollExperiences("left")}
            activeOpacity={0.75}
          >
            <Image
              source={ICONS.arrow}
              style={[styles.arrowImage, styles.leftArrowImage]}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <ScrollView
            ref={experienceScrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={(event) =>
              setExperienceScrollX(event.nativeEvent.contentOffset.x)
            }
            contentContainerStyle={styles.experienceScroll}
          >
            {experiences.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </ScrollView>

          <TouchableOpacity
            style={[styles.arrowButton, styles.rightArrowButton]}
            onPress={() => scrollExperiences("right")}
            activeOpacity={0.75}
          >
            <Image
              source={ICONS.arrow}
              style={styles.arrowImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* LOWER TITLES */}
        <View style={styles.lowerTitles}>
          <Text style={styles.lowerTitle}>To Do List:</Text>
          <Text style={styles.lowerTitle}>Compass:</Text>
        </View>

        {/* LOWER CARDS */}
        <View style={styles.lowerRow}>
          <View style={styles.todoCard}>
            <Text style={styles.todoHeading}>Today's tasks</Text>

            <TaskRow title="1.Team meeting" time="2:00 PM" checked />
            <TaskRow title="2.Networking" time="5:00 PM" />
            <TaskRow title="3.Write report" time="3:30 PM" checked />

            <View style={styles.todoButtons}>
              <SmallButton text="Create List" />
              <SmallButton text="AI Breakdown" />
              <SmallButton text="Add Task" />
              <SmallButton text="Mark Complete" />
            </View>
          </View>

          <View style={styles.compassCard}>
            <Image
              source={ICONS.compass}
              style={styles.compassImage}
              resizeMode="contain"
            />

            <Link href="/compass" asChild>
              <TouchableOpacity style={styles.compassButton}>
                <Text style={styles.compassButtonText}>View Weekly Summary</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/compass" asChild>
              <TouchableOpacity style={styles.compassButton}>
                <Text style={styles.compassButtonText}>View Insights</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>

      {/* MODAL */}
      <Modal visible={promptOpen} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.promptModal}>
            <Text style={styles.modalQuestion}>
              What quality do you most admire{"\n"}in yourself and why?
            </Text>

            <TextInput
              value={answer}
              onChangeText={setAnswer}
              placeholder="Type here..."
              placeholderTextColor="#777"
              style={styles.modalInput}
            />

            <TouchableOpacity onPress={() => setPromptOpen(false)}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <BidayaMenu
  visible={menuVisible}
  onClose={() => setMenuVisible(false)}
/>
    </SafeAreaView>
  );
}

function ExperienceCard({ item }: { item: any }) {
  return (
    <View style={styles.expCard}>
      <Image source={{ uri: item.image }} style={styles.expImage} />

      <Text style={styles.expTitle}>{item.title}</Text>

      <Text style={styles.expInfo}>Category: {item.category}</Text>
      <Text style={styles.expInfo}>Age requirement: {item.age}</Text>

      <View style={styles.expButtonRow}>
        <TouchableOpacity style={styles.expButton}>
          <Text style={styles.expButtonText}>View details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.expButtonSmall}>
          <Text style={styles.expButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.notInterested}>
        <Text style={styles.expButtonText}>Not Intrested</Text>
      </TouchableOpacity>
    </View>
  );
}

function TaskRow({
  title,
  time,
  checked,
}: {
  title: string;
  time: string;
  checked?: boolean;
}) {
  return (
    <View style={styles.taskRow}>
      <Text style={styles.taskTitle} numberOfLines={1}>
        {title}
      </Text>

      <Text style={styles.taskTime}>{time}</Text>

      <Ionicons
        name={checked ? "checkbox-outline" : "square-outline"}
        size={16}
        color={COLORS.gold}
      />
    </View>
  );
}

function SmallButton({ text }: { text: string }) {
  return (
    <TouchableOpacity style={styles.smallButton}>
      <Text style={styles.smallButtonText} numberOfLines={2}>
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

  scroll: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    backgroundColor: COLORS.cream,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
  },

  header: {
    height: 78,
    flexDirection: "row",
    alignItems: "center",
  },

  avatarOuter: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 1.3,
    borderStyle: "dotted",
    borderColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    flex: 1,
  },

  helloText: {
    color: COLORS.navy,
    fontSize: 25,
    fontWeight: "900",
    lineHeight: 29,
  },

  dateText: {
    color: COLORS.gold,
    fontSize: 10.5,
    fontWeight: "900",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  flameBox: {
    position: "relative",
  },

  flameNumber: {
    position: "absolute",
    bottom: 3,
    left: 8,
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "900",
  },

  dailyTitle: {
    color: COLORS.navy,
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 8,
  },

  promptCard: {
    borderWidth: 2.2,
    borderColor: COLORS.navy,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 5,
  },

  promptQuestion: {
    color: COLORS.gold,
    fontSize: 14.5,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 19,
    marginBottom: 14,
  },

  promptButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  promptButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 16,
    minWidth: 84,
    alignItems: "center",
  },

  promptButtonText: {
    color: COLORS.navy,
    fontSize: 9,
    fontWeight: "900",
  },

  reflectionText: {
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 7,
  },

  experienceTitle: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 12,
    marginBottom: -4,
    zIndex: 2,
  },

  experienceBar: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 40,
    borderWidth: 1.3,
    borderStyle: "dashed",
    borderColor: COLORS.gold,
    height: 174,
    paddingHorizontal: 14,
    paddingTop: 25,
    paddingBottom: 15,
    position: "relative",
    overflow: "hidden",
  },

  experienceScroll: {
    paddingLeft: 6,
    paddingRight: 45,
    gap: 10,
  },

  arrowButton: {
    width: 38,
    height: 38,
    position: "absolute",
    top: 68,
    zIndex: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  leftArrowButton: {
    left: 3,
  },

  rightArrowButton: {
    right: 3,
  },

  arrowImage: {
    width: 35,
    height: 35,
  },

  leftArrowImage: {
    transform: [{ rotate: "180deg" }],
  },

  expCard: {
    width: 92,
    height: 132,
    backgroundColor: COLORS.cream,
    borderWidth: 2.4,
    borderColor: COLORS.gold,
    borderRadius: 21,
    padding: 5,
    alignItems: "center",
  },

  expImage: {
    width: "100%",
    height: 47,
    borderRadius: 14,
    backgroundColor: "#C8D4D7",
    marginBottom: 4,
  },

  expTitle: {
    color: COLORS.navy,
    fontSize: 8,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 9.4,
    height: 23,
  },

  expInfo: {
    color: COLORS.navy,
    fontSize: 5.3,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 7,
  },

  expButtonRow: {
    flexDirection: "row",
    gap: 3,
    marginTop: 4,
  },

  expButton: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 9,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },

  expButtonSmall: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 9,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },

  notInterested: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },

  expButtonText: {
    color: COLORS.white,
    fontSize: 4.7,
    fontWeight: "900",
  },

  lowerTitles: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 7,
  },

  lowerTitle: {
    flex: 1,
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
  },

  lowerRow: {
    flexDirection: "row",
    gap: 14,
  },

  todoCard: {
    flex: 1,
    height: 214,
    backgroundColor: COLORS.deepNavy,
    borderWidth: 2.2,
    borderColor: COLORS.gold,
    borderRadius: 27,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  todoHeading: {
    color: COLORS.gold,
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 12,
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  taskTitle: {
    flex: 1,
    color: COLORS.gold,
    fontSize: 11.8,
    fontWeight: "900",
  },

  taskTime: {
    color: COLORS.gold,
    fontSize: 7.8,
    fontWeight: "900",
    width: 40,
    textAlign: "right",
    marginRight: 8,
  },

  todoButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 7,
    marginTop: 10,
  },

  smallButton: {
    width: "47%",
    borderWidth: 1.7,
    borderColor: COLORS.gold,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    paddingHorizontal: 3,
  },

  smallButtonText: {
    color: COLORS.gold,
    fontSize: 6.6,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 8,
  },

  compassCard: {
    flex: 1,
    height: 214,
    backgroundColor: COLORS.deepNavy,
    borderWidth: 2.2,
    borderColor: COLORS.gold,
    borderRadius: 27,
    paddingHorizontal: 13,
    paddingVertical: 12,
    alignItems: "center",
  },

  compassImage: {
    width: "112%",
    height: 126,
    marginTop: -2,
    marginBottom: 2,
  },

  compassButton: {
    width: "100%",
    borderWidth: 1.8,
    borderColor: COLORS.gold,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 5,
    marginTop: 7,
  },

  compassButtonText: {
    color: COLORS.gold,
    fontSize: 8.3,
    fontWeight: "900",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  promptModal: {
    width: "77%",
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
  },

  modalQuestion: {
    color: COLORS.gold,
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },

  modalInput: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: COLORS.navy,
    fontWeight: "800",
  },

  doneText: {
    color: COLORS.gold,
    fontSize: 24,
    fontWeight: "900",
    marginTop: 12,
  },
});