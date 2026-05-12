import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
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

const dailyPrompts = [
  "What quality do you most admire in\nyourself and why?",
  "What is one goal you want to\nwork on this week?",
  "What experience taught you\nsomething new recently?",
];

const initialExperiences = [
  {
    id: "1",
    title: "Youth Coding\nWorkshop",
    category: "Workshop",
    age: "18–24",
    type: "Tech skills",
    location: "Dubai Youth Hub",
    duration: "2 hours",
    description:
      "A beginner-friendly coding workshop where participants learn basic web development, teamwork, and problem-solving skills.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    id: "2",
    title: "Community\nPark Cleanup",
    category: "Volunteering",
    age: "16–22",
    type: "Community",
    location: "Local Community Park",
    duration: "3 hours",
    description:
      "A volunteering activity focused on cleaning public spaces, building social responsibility, and connecting with the community.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
  },
  {
    id: "3",
    title: "Digital Marketing\nInternship",
    category: "Internship",
    age: "18–24",
    type: "Career",
    location: "Hybrid / Online",
    duration: "2 weeks",
    description:
      "A short internship introducing content planning, social media strategy, branding, and digital campaign basics.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
  },
  {
    id: "4",
    title: "Senior Centre\nVolunteering",
    category: "Volunteering",
    age: "18–24",
    type: "Social care",
    location: "Senior Care Centre",
    duration: "1 day",
    description:
      "A social volunteering experience where participants support elderly residents through activities, conversation, and care.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
  },
  {
    id: "5",
    title: "Animal Shelter\nInternship",
    category: "Internship",
    age: "18–25",
    type: "Animal care",
    location: "Animal Shelter",
    duration: "1 week",
    description:
      "A hands-on experience supporting animal care, shelter organization, feeding routines, and basic rescue awareness.",
    image:
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80",
  },
];

const initialTasks = [
  { id: "1", title: "1. Team meeting", time: "2:30 PM", done: false },
  { id: "2", title: "2. Networking", time: "5:00 PM", done: false },
  { id: "3", title: "3. Do My Homework", time: "", done: false },
  { id: "4", title: "4. Volunteer", time: "", done: false },
  { id: "5", title: "5. Animal Shelter", time: "10:30 AM", done: false },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const pagePadding = 18;
  const experienceGap = 10;
  const experienceInnerPadding = 18;

  const experienceCardWidth =
    (width -
      pagePadding * 2 -
      experienceInnerPadding * 2 -
      experienceGap * 3) /
    4;

  const [promptOpen, setPromptOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);

  const [menuVisible, setMenuVisible] = useState(false);

  const [experiences, setExperiences] = useState(initialExperiences);
  const [savedExperiences, setSavedExperiences] = useState<
    typeof initialExperiences
  >([]);

  const [selectedExperience, setSelectedExperience] = useState<
    (typeof initialExperiences)[0] | null
  >(null);

  const [tasks, setTasks] = useState(initialTasks);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const scrollRef = useRef<ScrollView>(null);
  const [scrollX, setScrollX] = useState(0);

  const scrollExperiences = (direction: "left" | "right") => {
    const amount = experienceCardWidth + experienceGap;

    const nextX =
      direction === "right" ? scrollX + amount : Math.max(0, scrollX - amount);

    scrollRef.current?.scrollTo({
      x: nextX,
      animated: true,
    });

    setScrollX(nextX);
  };

  const skipPrompt = () => {
    setPromptIndex((current) => (current + 1) % dailyPrompts.length);
    setAnswer("");
  };

  const savePromptAnswer = () => {
    if (!answer.trim()) {
      Alert.alert("Empty answer", "Please write something first.");
      return;
    }

    Alert.alert("Saved", "Your reflection has been saved.");
    setPromptOpen(false);
    setAnswer("");
  };

  const remindLater = () => {
    Alert.alert("Reminder", "You will be notified later.");
  };

  const closePromptModal = () => {
    setPromptOpen(false);
    setAnswer("");
  };

  const saveExperience = (experience: (typeof initialExperiences)[0]) => {
    setSavedExperiences((current) => {
      const alreadySaved = current.some((item) => item.id === experience.id);
      if (alreadySaved) return current;
      return [...current, experience];
    });

    setExperiences((current) =>
      current.filter((item) => item.id !== experience.id)
    );

    Alert.alert(
      "Saved",
      `${experience.title.replace("\n", " ")} was moved to Saved Opportunities.`
    );
  };

  const removeExperience = (id: string) => {
    setExperiences((current) => current.filter((item) => item.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addNewTask = () => {
    if (!newTask.trim()) {
      Alert.alert("Empty task", "Please write a task first.");
      return;
    }

    const nextNumber = tasks.length + 1;

    setTasks((current) => [
      ...current,
      {
        id: Date.now().toString(),
        title: `${nextNumber}. ${newTask.trim()}`,
        time: "",
        done: false,
      },
    ]);

    setNewTask("");
    setAddTaskOpen(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.pageScroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatarInner}>
              <Ionicons name="person" size={31} color="#BDBDBD" />
            </View>
          </View>

          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Hello , John 👋</Text>
            <Text style={styles.date}>Thursday, 13ᵗʰ of November 2026</Text>
          </View>

          <View style={styles.topIcons}>
            <View style={styles.flameWrapper}>
              <Ionicons name="flame" size={24} color={COLORS.gold} />
              <Text style={styles.flameNumber}>10</Text>
            </View>

            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <Ionicons name="menu" size={32} color={COLORS.navy} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.dailyTitle}>Daily Prompt: Today’s Question</Text>

        <View style={styles.promptCard}>
          <Text style={styles.promptQuestion}>{dailyPrompts[promptIndex]}</Text>

          <View style={styles.promptButtonRow}>
            <TouchableOpacity
              style={styles.promptButton}
              onPress={() => setPromptOpen(true)}
            >
              <Text style={styles.promptButtonText}>(Answer)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promptButton} onPress={skipPrompt}>
              <Text style={styles.promptButtonText}>(Skip)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.promptButtonWide}
              onPress={remindLater}
            >
              <Text style={styles.promptButtonText}>(Remind me later)</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => Alert.alert("Reflection Logs")}>
            <Text style={styles.reflectionText}>Reflection Logs</Text>
          </TouchableOpacity>
        </View>

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
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={(event) => setScrollX(event.nativeEvent.contentOffset.x)}
            contentContainerStyle={styles.experienceScrollContent}
          >
            {experiences.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                width={experienceCardWidth}
                onView={() => setSelectedExperience(item)}
                onSave={() => saveExperience(item)}
                onNotInterested={() => removeExperience(item.id)}
              />
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

        <View style={styles.lowerTitles}>
          <Text style={styles.lowerTitle}>To Do List:</Text>
          <Text style={styles.lowerTitle}>Compass:</Text>
        </View>

        <View style={styles.lowerCards}>
          <View style={styles.todoCard}>
            <Text style={styles.todoHeading}>Today’s tasks</Text>

            {tasks.slice(0, 5).map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onPress={() => toggleTask(task.id)}
              />
            ))}

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setAddTaskOpen(true)}
            >
              <Text style={styles.addButtonText}>＋</Text>
            </TouchableOpacity>
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

      <Modal visible={promptOpen} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.promptModal}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={closePromptModal}
            >
              <Ionicons name="close" size={22} color={COLORS.navy} />
            </TouchableOpacity>

            <Text style={styles.modalQuestion}>{dailyPrompts[promptIndex]}</Text>

            <TextInput
              value={answer}
              onChangeText={setAnswer}
              placeholder="Type here..."
              placeholderTextColor="#777"
              style={styles.modalInput}
              multiline
            />

            <TouchableOpacity onPress={savePromptAnswer}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={!!selectedExperience} transparent animationType="slide">
        <View style={styles.detailsOverlay}>
          <View style={styles.detailsPage}>
            {selectedExperience ? (
              <>
                <View style={styles.detailsHeader}>
                  <TouchableOpacity onPress={() => setSelectedExperience(null)}>
                    <Ionicons name="arrow-back" size={26} color={COLORS.navy} />
                  </TouchableOpacity>

                  <Text style={styles.detailsHeaderTitle}>
                    Opportunity Details
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      saveExperience(selectedExperience);
                      setSelectedExperience(null);
                    }}
                  >
                    <Ionicons
                      name="bookmark-outline"
                      size={25}
                      color={COLORS.gold}
                    />
                  </TouchableOpacity>
                </View>

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.detailsScrollContent}
                >
                  <Image
                    source={{ uri: selectedExperience.image }}
                    style={styles.detailsImage}
                  />

                  <Text style={styles.detailsTitle}>
                    {selectedExperience.title.replace("\n", " ")}
                  </Text>

                  <View style={styles.detailsTagRow}>
                    <View style={styles.detailsTag}>
                      <Text style={styles.detailsTagText}>
                        {selectedExperience.category}
                      </Text>
                    </View>

                    <View style={styles.detailsTag}>
                      <Text style={styles.detailsTagText}>
                        Age {selectedExperience.age}
                      </Text>
                    </View>

                    <View style={styles.detailsTag}>
                      <Text style={styles.detailsTagText}>
                        {selectedExperience.type}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.detailsInfoCard}>
                    <View style={styles.detailsInfoRow}>
                      <Ionicons
                        name="location-outline"
                        size={17}
                        color={COLORS.gold}
                      />
                      <Text style={styles.detailsInfoText}>
                        {selectedExperience.location}
                      </Text>
                    </View>

                    <View style={styles.detailsInfoRow}>
                      <Ionicons
                        name="time-outline"
                        size={17}
                        color={COLORS.gold}
                      />
                      <Text style={styles.detailsInfoText}>
                        {selectedExperience.duration}
                      </Text>
                    </View>

                    <View style={styles.detailsInfoRow}>
                      <Ionicons
                        name="school-outline"
                        size={17}
                        color={COLORS.gold}
                      />
                      <Text style={styles.detailsInfoText}>
                        Skill-building experience
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.detailsSectionTitle}>
                    About this opportunity
                  </Text>

                  <Text style={styles.detailsDescription}>
                    {selectedExperience.description}
                  </Text>

                  <Text style={styles.detailsSectionTitle}>
                    What you’ll gain
                  </Text>

                  <View style={styles.benefitBox}>
                    <Text style={styles.benefitText}>
                      • Practical real-world exposure
                    </Text>
                    <Text style={styles.benefitText}>
                      • Confidence and communication skills
                    </Text>
                    <Text style={styles.benefitText}>
                      • A stronger personal development profile
                    </Text>
                  </View>

                  <View style={styles.detailsButtonRow}>
                    <TouchableOpacity
                      style={styles.primaryDetailsButton}
                      onPress={() => {
                        saveExperience(selectedExperience);
                        setSelectedExperience(null);
                      }}
                    >
                      <Text style={styles.primaryDetailsButtonText}>
                        Save Opportunity
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.secondaryDetailsButton}
                      onPress={() => setSelectedExperience(null)}
                    >
                      <Text style={styles.secondaryDetailsButtonText}>
                        Close
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            ) : null}
          </View>
        </View>
      </Modal>

      <Modal visible={addTaskOpen} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.promptModal}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => {
                setAddTaskOpen(false);
                setNewTask("");
              }}
            >
              <Ionicons name="close" size={22} color={COLORS.navy} />
            </TouchableOpacity>

            <Text style={styles.modalQuestion}>Add a new task</Text>

            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Type task..."
              placeholderTextColor="#777"
              style={styles.modalInput}
            />

            <TouchableOpacity onPress={addNewTask}>
              <Text style={styles.doneText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setAddTaskOpen(false);
                setNewTask("");
              }}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <BidayaMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </SafeAreaView>
  );
}

function ExperienceCard({
  item,
  width,
  onView,
  onSave,
  onNotInterested,
}: {
  item: {
    id: string;
    title: string;
    category: string;
    age: string;
    type: string;
    location: string;
    duration: string;
    description: string;
    image: string;
  };
  width: number;
  onView: () => void;
  onSave: () => void;
  onNotInterested: () => void;
}) {
  return (
    <View style={[styles.experienceCard, { width }]}>
      <Image source={{ uri: item.image }} style={styles.experienceImage} />

      <Text style={styles.experienceName}>{item.title}</Text>

      <Text style={styles.experienceInfo}>Category: {item.category}</Text>
      <Text style={styles.experienceInfo}>Age: {item.age}</Text>
      <Text style={styles.experienceInfo}>Type: {item.type}</Text>

      <View style={styles.experienceButtonRow}>
        <TouchableOpacity style={styles.experienceSmallButton} onPress={onView}>
          <Text style={styles.experienceSmallButtonText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.experienceSmallButton} onPress={onSave}>
          <Text style={styles.experienceSmallButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.notInterestedButton}
        onPress={onNotInterested}
      >
        <Text style={styles.experienceSmallButtonText}>Not Interested</Text>
      </TouchableOpacity>
    </View>
  );
}

function TaskRow({
  task,
  onPress,
}: {
  task: {
    id: string;
    title: string;
    time: string;
    done: boolean;
  };
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.taskRow} onPress={onPress}>
      <View style={styles.taskTextArea}>
        <Text
          style={[styles.taskTitle, task.done && styles.taskDoneText]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {task.title}
        </Text>

        {task.time ? <Text style={styles.taskTime}>{task.time}</Text> : null}
      </View>

      <Ionicons
        name={task.done ? "checkbox-outline" : "square-outline"}
        size={15}
        color={COLORS.gold}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  pageScroll: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    backgroundColor: COLORS.cream,
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 24,
  },

  header: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
  },

  avatarOuter: {
    width: 53,
    height: 53,
    borderRadius: 27,
    borderWidth: 1.1,
    borderStyle: "dotted",
    borderColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  avatarInner: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
  },

  greetingBox: {
    flex: 1,
  },

  greeting: {
    color: COLORS.navy,
    fontSize: 21,
    fontWeight: "900",
    lineHeight: 24,
  },

  date: {
    color: COLORS.gold,
    fontSize: 8.5,
    fontWeight: "900",
  },

  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  flameWrapper: {
    position: "relative",
  },

  flameNumber: {
    position: "absolute",
    bottom: 3,
    left: 7,
    color: COLORS.navy,
    fontSize: 6.5,
    fontWeight: "900",
  },

  dailyTitle: {
    color: COLORS.navy,
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 8,
  },

  promptCard: {
    minHeight: 112,
    borderWidth: 2,
    borderColor: COLORS.navy,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 8,
  },

  promptQuestion: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 17,
    marginBottom: 15,
  },

  promptButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  promptButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    width: 72,
    paddingVertical: 6,
    alignItems: "center",
  },

  promptButtonWide: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    width: 112,
    paddingVertical: 6,
    alignItems: "center",
  },

  promptButtonText: {
    color: COLORS.navy,
    fontSize: 7.8,
    fontWeight: "900",
  },

  reflectionText: {
    color: COLORS.navy,
    fontSize: 7,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 7,
  },

  experienceTitle: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 8,
    marginBottom: -2,
    zIndex: 2,
  },

  experienceBar: {
    height: 168,
    backgroundColor: COLORS.deepNavy,
    borderRadius: 34,
    borderWidth: 1.2,
    borderStyle: "solid",
    borderColor: COLORS.gold,
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 10,
    position: "relative",
    overflow: "hidden",
  },

  experienceScrollContent: {
    gap: 10,
    paddingRight: 48,
  },

  arrowButton: {
    position: "absolute",
    top: 68,
    width: 35,
    height: 35,
    zIndex: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  leftArrowButton: {
    left: 0,
  },

  rightArrowButton: {
    right: 0,
  },

  arrowImage: {
    width: 34,
    height: 34,
  },

  leftArrowImage: {
    transform: [{ rotate: "180deg" }],
  },

  experienceCard: {
    height: 124,
    backgroundColor: COLORS.cream,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: 18,
    padding: 5,
    alignItems: "center",
  },

  experienceImage: {
    width: "100%",
    height: 38,
    borderRadius: 13,
    backgroundColor: "#C8D4D7",
    marginBottom: 5,
  },

  experienceName: {
    color: COLORS.navy,
    fontSize: 7,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 8,
    minHeight: 18,
  },

  experienceInfo: {
    color: COLORS.navy,
    fontSize: 4.45,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 5.4,
  },

  experienceButtonRow: {
    flexDirection: "row",
    gap: 3,
    marginTop: 3,
  },

  experienceSmallButton: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  notInterestedButton: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 3,
  },

  experienceSmallButtonText: {
    color: COLORS.white,
    fontSize: 4.4,
    fontWeight: "900",
  },

  lowerTitles: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
  },

  lowerTitle: {
    flex: 1,
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
  },

  lowerCards: {
    flexDirection: "row",
    gap: 14,
    height: 292,
  },

  todoCard: {
    flex: 1,
    height: 292,
    backgroundColor: COLORS.deepNavy,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: 26,
    paddingHorizontal: 11,
    paddingTop: 16,
    paddingBottom: 10,
  },

  todoHeading: {
    color: COLORS.gold,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 18,
    lineHeight: 21,
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },

  taskTextArea: {
    flex: 1,
    paddingRight: 4,
  },

  taskTitle: {
    color: COLORS.gold,
    fontSize: 11.5,
    fontWeight: "900",
    lineHeight: 14,
  },

  taskDoneText: {
    opacity: 0.45,
    textDecorationLine: "line-through",
  },

  taskTime: {
    color: COLORS.gold,
    fontSize: 7.5,
    fontWeight: "800",
    marginTop: 1,
  },

  addButton: {
    alignSelf: "center",
    marginTop: "auto",
  },

  addButtonText: {
    color: COLORS.gold,
    fontSize: 32,
    fontWeight: "300",
    lineHeight: 34,
  },

  compassCard: {
    flex: 1,
    height: 292,
    backgroundColor: COLORS.deepNavy,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: 26,
    paddingHorizontal: 14,
    paddingTop: 17,
    paddingBottom: 15,
    alignItems: "center",
  },

  compassImage: {
    width: "122%",
    height: 190,
    marginBottom: 9,
  },

  compassButton: {
    width: "100%",
    borderWidth: 1.8,
    borderColor: COLORS.gold,
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 5,
    marginTop: 7,
  },

  compassButtonText: {
    color: COLORS.gold,
    fontSize: 8.4,
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
    paddingTop: 34,
    alignItems: "center",
    position: "relative",
  },

  closeModalButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
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
    minHeight: 44,
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

  cancelText: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: "900",
    marginTop: 8,
  },

  detailsOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  detailsPage: {
    height: "88%",
    backgroundColor: COLORS.cream,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 16,
    overflow: "hidden",
  },

  detailsHeader: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  detailsHeaderTitle: {
    color: COLORS.navy,
    fontSize: 18,
    fontWeight: "900",
  },

  detailsScrollContent: {
    paddingBottom: 28,
  },

  detailsImage: {
    width: "100%",
    height: 170,
    borderRadius: 22,
    backgroundColor: "#D7D7D7",
    marginBottom: 16,
  },

  detailsTitle: {
    color: COLORS.navy,
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 28,
    marginBottom: 12,
  },

  detailsTagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },

  detailsTag: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  detailsTagText: {
    color: COLORS.navy,
    fontSize: 11,
    fontWeight: "900",
  },

  detailsInfoCard: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.gold,
    padding: 14,
    marginBottom: 18,
  },

  detailsInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  detailsInfoText: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: "900",
    marginLeft: 8,
  },

  detailsSectionTitle: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 7,
  },

  detailsDescription: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
    marginBottom: 16,
  },

  benefitBox: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    padding: 13,
    marginBottom: 18,
  },

  benefitText: {
    color: COLORS.navy,
    fontSize: 12.5,
    fontWeight: "800",
    lineHeight: 20,
  },

  detailsButtonRow: {
    flexDirection: "row",
    gap: 10,
  },

  primaryDetailsButton: {
    flex: 1.4,
    backgroundColor: COLORS.gold,
    borderRadius: 20,
    paddingVertical: 11,
    alignItems: "center",
  },

  primaryDetailsButtonText: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: "900",
  },

  secondaryDetailsButton: {
    flex: 1,
    backgroundColor: COLORS.deepNavy,
    borderRadius: 20,
    paddingVertical: 11,
    alignItems: "center",
  },

  secondaryDetailsButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "900",
  },
});