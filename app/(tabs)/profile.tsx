import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const COLORS = {
  cream: "#F7F5EC",
  deepBlue: "#003F5C",
  gold: "#D5A12D",
  white: "#FFFFFF",
  greyAvatar: "#D9D9D9",
};

const badgeIcon = require("../../assets/images/badge-check.png");
const certificateIcon = require("../../assets/images/money-card.png");

type ProfileItem = {
  text: string;
  icon: ImageSourcePropType;
};

const badges: ProfileItem[] = [
  {
    text: "Attended 20\nVolunteering\nActivities",
    icon: badgeIcon,
  },
  {
    text: "Attended a\nMicrosoft\nWorkshop",
    icon: badgeIcon,
  },
  {
    text: "Attended 15\nInternships",
    icon: badgeIcon,
  },
  {
    text: "Attended 10\nWorkshops",
    icon: badgeIcon,
  },
];

const certificates: ProfileItem[] = [
  {
    text: "Certificate of\nAppreciation",
    icon: certificateIcon,
  },
  {
    text: "Certificate of\nParticipation -\nMicrosoft Workshop",
    icon: certificateIcon,
  },
  {
    text: "Certificate of\nRecognition",
    icon: certificateIcon,
  },
  {
    text: "Certificate of\nAchievement",
    icon: certificateIcon,
  },
];

function WaveDivider() {
  return (
    <Svg width={70} height={315} viewBox="0 0 70 315" style={styles.waveSvg}>
      <Path
        d="
          M18 0
          C45 65 45 112 26 157
          C7 202 7 250 18 315
          L52 315
          C41 250 41 202 60 157
          C79 112 79 65 52 0
          Z
        "
        fill={COLORS.cream}
      />

      <Path
        d="
          M18 0
          C45 65 45 112 26 157
          C7 202 7 250 18 315
        "
        fill="none"
        stroke={COLORS.gold}
        strokeWidth={2}
      />

      <Path
        d="
          M52 0
          C41 65 41 112 60 157
          C79 202 79 250 52 315
        "
        fill="none"
        stroke={COLORS.gold}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default function ProfileScreen() {
  const { width } = useWindowDimensions();

  const contentWidth = Math.min(width, 390);
  const cardWidth = contentWidth - 54;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.screenInner}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="arrow-back" size={20} color={COLORS.deepBlue} />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>My Profile</Text>

            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="menu" size={25} color={COLORS.deepBlue} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileTop}>
            <View style={styles.avatarOuter}>
              <View style={styles.avatarCircle}>
                <Ionicons name="person" size={43} color={COLORS.white} />
              </View>
            </View>

            <View style={styles.editSlash} />

            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>Age: 24</Text>
            <Text style={styles.info}>Sex: Male</Text>
            <Text style={styles.email}>xxxxxxxx@example.com</Text>

            <TouchableOpacity style={styles.cvButton} activeOpacity={0.85}>
              <Text style={styles.cvText}>My CV</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.tabsRow, { width: cardWidth }]}>
            <View style={styles.tabPill}>
              <Text style={styles.tabText}>Badges</Text>
            </View>

            <View style={styles.tabGap} />

            <View style={styles.tabPill}>
              <Text style={styles.tabText}>Certificates</Text>
            </View>
          </View>

          <View style={[styles.cardsWrap, { width: cardWidth }]}>
            <View style={styles.leftCard}>
              <TouchableOpacity style={styles.leftArrow} activeOpacity={0.7}>
                <Ionicons name="chevron-back" size={14} color={COLORS.white} />
              </TouchableOpacity>

              <View style={styles.badgeList}>
                {badges.map((item, index) => (
                  <View key={index} style={styles.badgeItem}>
                    <Image source={item.icon} style={styles.badgeImage} />
                    <Text style={styles.badgeText}>{item.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.rightCard}>
              <TouchableOpacity style={styles.rightArrow} activeOpacity={0.7}>
                <Ionicons
                  name="chevron-forward"
                  size={14}
                  color={COLORS.white}
                />
              </TouchableOpacity>

              <View style={styles.certificateList}>
                {certificates.map((item, index) => (
                  <View key={index} style={styles.certificateItem}>
                    <Image
                      source={item.icon}
                      style={styles.certificateImage}
                    />
                    <Text style={styles.certificateText}>{item.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View pointerEvents="none" style={styles.waveHolder}>
              <WaveDivider />
            </View>
          </View>
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

  page: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  scrollContent: {
    minHeight: "100%",
    paddingBottom: 95,
    backgroundColor: COLORS.cream,
  },

  screenInner: {
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.cream,
  },

  header: {
    width: "100%",
    height: 38,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.cream,
  },

  headerTitle: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: "900",
    color: COLORS.deepBlue,
    letterSpacing: 0.2,
  },

  profileTop: {
    alignItems: "center",
    paddingTop: 8,
  },

  avatarOuter: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.cream,
  },

  avatarCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: COLORS.greyAvatar,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  editSlash: {
    width: 19,
    height: 5,
    backgroundColor: COLORS.gold,
    borderRadius: 10,
    transform: [{ rotate: "-45deg" }],
    marginTop: -9,
    marginLeft: 50,
  },

  name: {
    marginTop: 5,
    fontSize: 21,
    lineHeight: 22,
    fontWeight: "900",
    color: COLORS.deepBlue,
    letterSpacing: 0.2,
  },

  info: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "900",
    color: COLORS.deepBlue,
  },

  email: {
    marginTop: 1,
    fontSize: 8.7,
    lineHeight: 10,
    fontWeight: "900",
    color: COLORS.deepBlue,
    textDecorationLine: "underline",
  },

  cvButton: {
    marginTop: 5,
    width: 110,
    height: 18,
    borderRadius: 12,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
  },

  cvText: {
    color: COLORS.deepBlue,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "900",
  },

  tabsRow: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 70,
  },

  tabPill: {
    width: 98,
    height: 15,
    borderRadius: 10,
    backgroundColor: COLORS.deepBlue,
    borderWidth: 1.4,
    borderColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
  },

  tabGap: {
    width: 35,
  },

  tabText: {
    color: COLORS.gold,
    fontSize: 9.6,
    lineHeight: 11,
    fontWeight: "900",
  },

  cardsWrap: {
    marginTop: -1,
    height: 315,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    position: "relative",
  },

  leftCard: {
    flex: 1,
    backgroundColor: COLORS.deepBlue,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: "center",
    overflow: "hidden",
  },

  rightCard: {
    flex: 1,
    backgroundColor: COLORS.deepBlue,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: "center",
    overflow: "hidden",
  },

  waveHolder: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: 70,
    marginLeft: -35,
    zIndex: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  waveSvg: {
    position: "absolute",
    top: 0,
  },

  badgeList: {
    paddingTop: 14,
    alignItems: "center",
  },

  certificateList: {
    paddingTop: 14,
    alignItems: "center",
  },

  leftArrow: {
    position: "absolute",
    left: 6,
    top: 139,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 90,
  },

  rightArrow: {
    position: "absolute",
    right: 6,
    top: 139,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 90,
  },

  badgeItem: {
    alignItems: "center",
    marginBottom: 11,
  },

  badgeImage: {
    width: 43,
    height: 43,
    resizeMode: "contain",
  },

  badgeText: {
    marginTop: -3,
    color: COLORS.gold,
    fontSize: 6.4,
    lineHeight: 7.3,
    fontWeight: "900",
    textAlign: "center",
    width: 64,
  },

  certificateItem: {
    alignItems: "center",
    marginBottom: 16,
  },

  certificateImage: {
    width: 47,
    height: 32,
    resizeMode: "contain",
  },

  certificateText: {
    marginTop: 1,
    color: COLORS.gold,
    fontSize: 5.8,
    lineHeight: 6.7,
    fontWeight: "900",
    textAlign: "center",
    width: 76,
  },
});