import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Modal,
    Pressable,
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
  white: "#FFFFFF",
};

type BidayaMenuProps = {
  visible: boolean;
  onClose: () => void;
};

const menuItems = [
  { label: "Home", route: "/" },
  { label: "Search", route: "/opportunities" },
  { label: "Progress Timeline", route: "/timeline" },
  { label: "Community Hub", route: "/community" },
  { label: "AI ChatBot", route: "/ai-chatbot" },
  { label: "Saved Opportunities", route: "/opportunities" },
  { label: "Profile", route: "/profile" },
  { label: "Settings", route: "/settings" },
];

export default function BidayaMenu({ visible, onClose }: BidayaMenuProps) {
  const router = useRouter();

  const goTo = (route: string) => {
    onClose();
    router.push(route as any);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.menuPanel}>
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={35} color="#CFCFCF" />
            </View>

            <TouchableOpacity
              style={styles.profileNameRow}
              onPress={() => goTo("/profile")}
            >
              <Text style={styles.profileName}>John Doe</Text>
              <Ionicons name="chevron-forward" size={24} color={COLORS.navy} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuBox}>
            <Text style={styles.menuTitle}>Menu</Text>

            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={styles.menuItem}
                onPress={() => goTo(item.route)}
              >
                <Text style={styles.menuItemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.28)",
    alignItems: "flex-end",
  },

  menuPanel: {
    width: "68%",
    height: "100%",
    backgroundColor: "#F0D58B",
    paddingTop: 70,
    paddingHorizontal: 19,
    borderTopLeftRadius: 34,
    borderBottomLeftRadius: 34,
  },

  profileCard: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  profileNameRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileName: {
    color: COLORS.navy,
    fontSize: 18,
    fontWeight: "900",
  },

  menuBox: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  menuTitle: {
    color: COLORS.navy,
    fontSize: 31,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },

  menuItem: {
    backgroundColor: COLORS.cream,
    borderRadius: 18,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 8,
  },

  menuItemText: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: "900",
  },
});