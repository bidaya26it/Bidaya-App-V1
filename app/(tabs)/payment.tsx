import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
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
  grey: "#E8E8E8",
  mutedText: "#6B6B6B",
};

export default function PaymentScreen() {
  const [selectedPlan, setSelectedPlan] = useState<"align" | "evolve">("align");

  const planDetails = {
    align: {
      name: "Align Core Plan",
      price: "39 AED/Month",
      cardColor: COLORS.gold,
      buttonColor: COLORS.paleGold,
      buttonTextColor: COLORS.darkBlue,
    },
    evolve: {
      name: "Evolve Premium",
      price: "79 AED/Month",
      cardColor: COLORS.paleGold,
      buttonColor: COLORS.darkGold,
      buttonTextColor: COLORS.white,
    },
  };

  const currentPlan = planDetails[selectedPlan];

  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={25} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="menu" size={31} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        <Text style={styles.smallTitle}>Check Out</Text>

        <Text style={styles.mainTitle}>
          Complete Your Upgrade{"\n"}to{" "}
          <Text style={styles.goldText}>Evolve</Text>
        </Text>

        {/* Plan Switcher for testing both screens */}
        <View style={styles.planSwitcher}>
          <TouchableOpacity
            style={[
              styles.planSwitchButton,
              selectedPlan === "align" && styles.activePlanSwitchButton,
            ]}
            onPress={() => setSelectedPlan("align")}
          >
            <Text
              style={[
                styles.planSwitchText,
                selectedPlan === "align" && styles.activePlanSwitchText,
              ]}
            >
              39 AED
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.planSwitchButton,
              selectedPlan === "evolve" && styles.activePlanSwitchButton,
            ]}
            onPress={() => setSelectedPlan("evolve")}
          >
            <Text
              style={[
                styles.planSwitchText,
                selectedPlan === "evolve" && styles.activePlanSwitchText,
              ]}
            >
              79 AED
            </Text>
          </TouchableOpacity>
        </View>

        {/* Order Summary */}
        <View style={styles.orderSummary}>
          <Text style={styles.orderTitle}>Order Summary:</Text>
          <Text style={styles.orderText}>
            {currentPlan.name} - {currentPlan.price}
          </Text>
        </View>

        {/* Payment Card */}
        <View
          style={[
            styles.paymentCard,
            { backgroundColor: currentPlan.cardColor },
          ]}
        >
          <Text style={styles.secureTitle}>Secure Payment</Text>

          <TextInput
            placeholder="Cardholder Name"
            placeholderTextColor="#777"
            style={styles.fullInput}
          />

          <View style={styles.cardNumberWrapper}>
            <Ionicons name="lock-closed" size={13} color={COLORS.darkBlue} />
            <TextInput
              placeholder="Card Number"
              placeholderTextColor="#777"
              style={styles.cardInput}
              keyboardType="number-pad"
            />

            <View style={styles.cardLogos}>
              <Text style={styles.visaText}>VISA</Text>
              <View style={styles.masterCircleOne} />
              <View style={styles.masterCircleTwo} />
            </View>
          </View>

          <View style={styles.row}>
            <TextInput
              placeholder="Expiry (MM/YY)"
              placeholderTextColor="#777"
              style={styles.halfInput}
              keyboardType="number-pad"
            />

            <TextInput
              placeholder="CVC"
              placeholderTextColor="#777"
              style={styles.halfInput}
              keyboardType="number-pad"
            />
          </View>

          <TouchableOpacity
            style={[
              styles.payButton,
              { backgroundColor: currentPlan.buttonColor },
            ]}
          >
            <Text
              style={[
                styles.payButtonText,
                { color: currentPlan.buttonTextColor },
              ]}
            >
              Pay with Card
            </Text>
          </TouchableOpacity>

          <Text style={styles.securityNote}>
            Your transaction is encrypted.{"\n"}
            Plan will automatically renew.{"\n"}
            Cancel anytime.
          </Text>
        </View>

        {/* Bottom Illustration */}
        <View style={styles.bottomDecoration}>
          <View style={styles.blueHill} />
          <View style={styles.goldHill} />

          <View style={styles.person}>
            <View style={styles.personHead} />
            <View style={styles.personBody} />
            <View style={styles.personArmLeft} />
            <View style={styles.personArmRight} />
            <View style={styles.personLegLeft} />
            <View style={styles.personLegRight} />
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
    flexGrow: 1,
    backgroundColor: COLORS.cream,
    paddingBottom: 0,
  },

  header: {
    height: 43,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smallTitle: {
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 3,
  },

  mainTitle: {
    color: COLORS.darkBlue,
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 32,
    marginTop: 5,
  },

  goldText: {
    color: COLORS.gold,
  },

  planSwitcher: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 12,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    overflow: "hidden",
  },

  planSwitchButton: {
    paddingVertical: 7,
    paddingHorizontal: 18,
  },

  activePlanSwitchButton: {
    backgroundColor: COLORS.gold,
  },

  planSwitchText: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "800",
  },

  activePlanSwitchText: {
    color: COLORS.white,
  },

  orderSummary: {
    marginHorizontal: 28,
    marginTop: 15,
    backgroundColor: "#F3E4C8",
    borderRadius: 18,
    paddingVertical: 11,
    alignItems: "center",
  },

  orderTitle: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "900",
  },

  orderText: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "900",
    marginTop: 2,
  },

  paymentCard: {
    marginHorizontal: 28,
    marginTop: 15,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: COLORS.darkGold,
    paddingHorizontal: 22,
    paddingVertical: 21,
    alignItems: "center",
  },

  secureTitle: {
    color: COLORS.darkBlue,
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 18,
  },

  fullInput: {
    width: "100%",
    height: 31,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: COLORS.darkBlue,
    paddingHorizontal: 14,
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 9,
  },

  cardNumberWrapper: {
    width: "100%",
    height: 31,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: COLORS.darkBlue,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  cardInput: {
    flex: 1,
    marginLeft: 5,
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "700",
  },

  cardLogos: {
    flexDirection: "row",
    alignItems: "center",
  },

  visaText: {
    color: COLORS.darkBlue,
    fontSize: 9,
    fontWeight: "900",
    marginRight: 2,
  },

  masterCircleOne: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#E03A2F",
    marginLeft: 1,
  },

  masterCircleTwo: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#F2A900",
    marginLeft: -4,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    marginBottom: 15,
  },

  halfInput: {
    flex: 1,
    height: 31,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: COLORS.darkBlue,
    paddingHorizontal: 14,
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },

  payButton: {
    width: "82%",
    height: 43,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },

  payButtonText: {
    fontSize: 16,
    fontWeight: "900",
  },

  securityNote: {
    color: COLORS.darkBlue,
    textAlign: "center",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "800",
    marginTop: 11,
  },

  bottomDecoration: {
    flex: 1,
    minHeight: 190,
    marginTop: 18,
    position: "relative",
    overflow: "hidden",
  },

  blueHill: {
    position: "absolute",
    bottom: -65,
    left: -30,
    width: 260,
    height: 150,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: COLORS.deepBlue,
  },

  goldHill: {
    position: "absolute",
    bottom: -80,
    right: -35,
    width: 270,
    height: 165,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    backgroundColor: COLORS.gold,
  },

  person: {
    position: "absolute",
    right: 85,
    bottom: 72,
    width: 50,
    height: 75,
  },

  personHead: {
    position: "absolute",
    top: 0,
    left: 20,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.darkBlue,
  },

  personBody: {
    position: "absolute",
    top: 14,
    left: 22,
    width: 10,
    height: 30,
    borderRadius: 8,
    backgroundColor: COLORS.darkBlue,
  },

  personArmLeft: {
    position: "absolute",
    top: 16,
    left: 6,
    width: 25,
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "35deg" }],
  },

  personArmRight: {
    position: "absolute",
    top: 16,
    right: 4,
    width: 25,
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "-35deg" }],
  },

  personLegLeft: {
    position: "absolute",
    top: 42,
    left: 12,
    width: 25,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "-45deg" }],
  },

  personLegRight: {
    position: "absolute",
    top: 42,
    right: 3,
    width: 25,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.darkBlue,
    transform: [{ rotate: "45deg" }],
  },
});