import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
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
  lightGold: "#EBCB78",
  paleGold: "#F4E1A5",
  white: "#FFFFFF",
  grey: "#E9E9E9",
  mutedText: "#5E6A70",
  softBlue: "#DDEAF0",
};

const opportunities = [
  {
    id: 1,
    title: "Youth Coding Workshop",
    category: "Workshop",
    age: "18-24",
    field: "Technology / Computer Science",
    method: "Face-to-Face",
    price: "Free",
    time: "3pm to 6pm",
    duration: "20/11/2026 to 21/11/2026",
    deadline: "18/11/2026 at 11:59PM",
    applicants: "35/50",
    description:
      "Join a beginner-friendly coding workshop designed to help youth explore programming, problem solving, and digital creativity.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
  {
    id: 2,
    title: "Community Park Clean-up",
    category: "Volunteering",
    age: "16-22",
    field: "Environmental / Community Service",
    method: "Face-to-Face",
    price: "Free",
    time: "4pm to 7pm",
    duration: "27/11/2026 to 29/11/2026",
    deadline: "23/11/2026 at 11:59PM",
    applicants: "27/50",
    description:
      "Contribute to making your community safer and more livable by volunteering for the community park cleanup.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  {
    id: 3,
    title: "Digital Marketing Internship",
    category: "Internship",
    age: "18-24",
    field: "Marketing / Media",
    method: "Hybrid",
    price: "Free",
    time: "10am to 2pm",
    duration: "01/12/2026 to 20/12/2026",
    deadline: "28/11/2026 at 11:59PM",
    applicants: "14/25",
    description:
      "Gain hands-on experience in content planning, social media campaigns, branding, and digital marketing strategy.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
  {
    id: 4,
    title: "Senior Centre Volunteering",
    category: "Volunteering",
    age: "18-24",
    field: "Community Service",
    method: "Face-to-Face",
    price: "Free",
    time: "9am to 12pm",
    duration: "05/12/2026 to 07/12/2026",
    deadline: "01/12/2026 at 11:59PM",
    applicants: "18/40",
    description:
      "Support senior community members through social activities, assistance sessions, and meaningful conversations.",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80",
  },
  {
    id: 5,
    title: "Local Beach Clean-up",
    category: "Volunteering",
    age: "16-24",
    field: "Environmental Service",
    method: "Face-to-Face",
    price: "Free",
    time: "8am to 11am",
    duration: "09/12/2026",
    deadline: "06/12/2026 at 11:59PM",
    applicants: "42/60",
    description:
      "Help protect the environment by joining a beach cleanup activity with other young volunteers.",
    image:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80",
  },
  {
    id: 6,
    title: "High-school Study Session",
    category: "Volunteering",
    age: "16-22",
    field: "Education",
    method: "Face-to-Face",
    price: "Free",
    time: "5pm to 7pm",
    duration: "12/12/2026",
    deadline: "09/12/2026 at 11:59PM",
    applicants: "20/30",
    description:
      "Volunteer to support younger students with study skills, exam preparation, and academic confidence.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: 7,
    title: "Event Organization",
    category: "Volunteering",
    age: "18-24",
    field: "Events / Communication",
    method: "Face-to-Face",
    price: "Free",
    time: "2pm to 8pm",
    duration: "15/12/2026",
    deadline: "12/12/2026 at 11:59PM",
    applicants: "12/25",
    description:
      "Assist with organizing a youth event, including guest support, registration, and activity coordination.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    id: 8,
    title: "Animal Shelter Internship",
    category: "Internship",
    age: "18-24",
    field: "Animal Care",
    method: "Face-to-Face",
    price: "Free",
    time: "10am to 1pm",
    duration: "18/12/2026 to 22/12/2026",
    deadline: "14/12/2026 at 11:59PM",
    applicants: "9/20",
    description:
      "Learn about animal care, shelter support, and community responsibility through a guided internship experience.",
    image:
      "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=800&q=80",
  },
];

type Opportunity = (typeof opportunities)[0];

export default function OpportunitiesScreen() {
  const [showFilters, setShowFilters] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<Opportunity | null>(null);
  const [screenMode, setScreenMode] = useState<"discover" | "saved" | "details">(
    "discover"
  );

  const savedOpportunities = opportunities.filter((item) =>
    savedIds.includes(item.id)
  );

  function toggleSave(id: number) {
    setSavedIds((currentSaved) => {
      if (currentSaved.includes(id)) {
        return currentSaved.filter((savedId) => savedId !== id);
      }

      return [...currentSaved, id];
    });
  }

  function openDetails(item: Opportunity) {
    setSelectedOpportunity(item);
    setScreenMode("details");
  }

  function goBackToDiscover() {
    setSelectedOpportunity(null);
    setScreenMode("discover");
  }

  if (screenMode === "details" && selectedOpportunity) {
    return (
      <OpportunityDetails
        item={selectedOpportunity}
        isSaved={savedIds.includes(selectedOpportunity.id)}
        onSave={() => toggleSave(selectedOpportunity.id)}
        onBack={() => {
          setSelectedOpportunity(null);
          setScreenMode("discover");
        }}
      />
    );
  }

  if (screenMode === "saved") {
    return (
      <SavedOpportunities
        savedOpportunities={savedOpportunities}
        onBack={goBackToDiscover}
        onOpenDetails={openDetails}
        onUnsave={toggleSave}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="menu" size={32} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        {/* Page Title */}
        <Text style={styles.title}>Discover Opportunities</Text>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={18} color={COLORS.mutedText} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search activities, internships, workshops..."
            placeholderTextColor="#8B8B8B"
          />

          <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
            <Ionicons name="options-outline" size={24} color={COLORS.gold} />
          </TouchableOpacity>
        </View>

        {/* Location */}
        <View style={styles.locationRow}>
          <Ionicons name="location" size={14} color={COLORS.gold} />
          <Text style={styles.locationText}>UAE, Dubai • Deira</Text>
        </View>

        {/* Saved Opportunities Button */}
        <TouchableOpacity
          style={styles.savedTopButton}
          onPress={() => setScreenMode("saved")}
        >
          <Ionicons name="bookmark" size={16} color={COLORS.white} />
          <Text style={styles.savedTopButtonText}>
            Saved Opportunities ({savedOpportunities.length})
          </Text>
        </TouchableOpacity>

        {/* Filter dropdown */}
        {showFilters && (
          <View style={styles.filterBox}>
            {[
              "All",
              "Category",
              "Method",
              "Age",
              "Price",
              "Duration",
              "Field",
            ].map((item) => (
              <TouchableOpacity key={item} style={styles.filterButton}>
                <Text style={styles.filterText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Section 1 */}
        <Text style={styles.sectionTitle}>All Opportunities</Text>
        <Text style={styles.subTitle}>Curated Life & Career Experiences:</Text>

        <View style={styles.cardsPanel}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {opportunities.slice(0, 4).map((item) => (
              <OpportunityCard
                key={item.id}
                item={item}
                isSaved={savedIds.includes(item.id)}
                onSave={() => toggleSave(item.id)}
                onOpenDetails={() => openDetails(item)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Section 2 */}
        <Text style={styles.subSectionTitle}>
          Browse Opportunities & Experiences:
        </Text>

        <View style={styles.cardsPanel}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {opportunities.slice(4, 8).map((item) => (
              <OpportunityCard
                key={item.id}
                item={item}
                isSaved={savedIds.includes(item.id)}
                onSave={() => toggleSave(item.id)}
                onOpenDetails={() => openDetails(item)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Bottom compass button */}
        <TouchableOpacity style={styles.compassButton}>
          <Ionicons name="navigate" size={28} color={COLORS.darkBlue} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function OpportunityCard({
  item,
  isSaved,
  onSave,
  onOpenDetails,
}: {
  item: Opportunity;
  isSaved: boolean;
  onSave: () => void;
  onOpenDetails: () => void;
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      <Text style={styles.cardTitle}>{item.title}</Text>

      <Text style={styles.cardInfo}>Category: {item.category}</Text>
      <Text style={styles.cardInfo}>Age requirement: {item.age}</Text>

      <TouchableOpacity style={styles.detailsButton} onPress={onOpenDetails}>
        <Text style={styles.detailsButtonText}>View details</Text>
      </TouchableOpacity>

      <View style={styles.cardButtons}>
        <TouchableOpacity
          style={[styles.smallButton, isSaved && styles.savedButton]}
          onPress={onSave}
        >
          <Text style={styles.smallButtonText}>
            {isSaved ? "Saved" : "Save"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Not Interested</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function OpportunityDetails({
  item,
  isSaved,
  onSave,
  onBack,
}: {
  item: Opportunity;
  isSaved: boolean;
  onSave: () => void;
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="arrow-back" size={28} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <View style={styles.detailsHeaderRight}>
            <TouchableOpacity onPress={onSave}>
              <Ionicons
                name={isSaved ? "bookmark" : "bookmark-outline"}
                size={26}
                color={COLORS.gold}
              />
            </TouchableOpacity>

            <Ionicons name="menu" size={32} color={COLORS.darkBlue} />
          </View>
        </View>

        <Image source={{ uri: item.image }} style={styles.detailsImage} />

        <View style={styles.photoCounter}>
          <Text style={styles.photoCounterText}>6/7 photos</Text>
        </View>

        <Text style={styles.detailsTitle}>{item.title}:</Text>

        <Text style={styles.detailsDescription}>{item.description}</Text>

        <View style={styles.detailsInfoBox}>
          <InfoRow label="Age Requirement" value={item.age} />
          <InfoRow label="Time" value={item.time} />
          <InfoRow label="Duration" value={item.duration} />
          <InfoRow label="Application Deadline" value={item.deadline} />
          <InfoRow label="Field" value={item.field} />
          <InfoRow label="Method" value={item.method} />
          <InfoRow label="Price" value={item.price} />

          <Text style={styles.certificateText}>
            Certificate of Appreciation is provided.
          </Text>
        </View>

        <View style={styles.categoryRow}>
          <Text style={styles.categoryLabel}>Category:</Text>
          <View style={styles.categoryPill}>
            <Text style={styles.categoryPillText}>{item.category}</Text>
          </View>
        </View>

        <Text style={styles.applicantsLabel}>Applicants Needed:</Text>

        <View style={styles.progressOuter}>
          <View style={styles.progressInner} />
        </View>

        <Text style={styles.applicantsNumber}>{item.applicants}</Text>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mapButton}>
          <Ionicons name="map" size={18} color={COLORS.white} />
          <Text style={styles.mapButtonText}>View on Maps</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function SavedOpportunities({
  savedOpportunities,
  onBack,
  onOpenDetails,
  onUnsave,
}: {
  savedOpportunities: Opportunity[];
  onBack: () => void;
  onOpenDetails: (item: Opportunity) => void;
  onUnsave: (id: number) => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.savedContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="arrow-back" size={28} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="menu" size={32} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Saved Opportunities</Text>

        {savedOpportunities.length === 0 ? (
          <View style={styles.emptySavedBox}>
            <Ionicons name="bookmark-outline" size={42} color={COLORS.gold} />
            <Text style={styles.emptySavedTitle}>No saved opportunities yet</Text>
            <Text style={styles.emptySavedText}>
              Press Save on any opportunity to add it here.
            </Text>
          </View>
        ) : (
          savedOpportunities.map((item) => (
            <View key={item.id} style={styles.savedCard}>
              <Image source={{ uri: item.image }} style={styles.savedImage} />

              <View style={styles.savedContent}>
                <Text style={styles.savedTitle}>{item.title}</Text>
                <Text style={styles.savedInfo}>Category: {item.category}</Text>
                <Text style={styles.savedInfo}>Age requirement: {item.age}</Text>

                <View style={styles.savedActions}>
                  <TouchableOpacity
                    style={styles.savedActionButton}
                    onPress={() => onOpenDetails(item)}
                  >
                    <Text style={styles.savedActionText}>View details</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.savedActionButton}
                    onPress={() => onUnsave(item.id)}
                  >
                    <Text style={styles.savedActionText}>Unsave</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}

        <TouchableOpacity style={styles.doneButton} onPress={onBack}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Text style={styles.infoText}>
      <Text style={styles.infoLabel}>{label}: </Text>
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 40,
    backgroundColor: COLORS.cream,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.darkBlue,
    textAlign: "center",
    marginBottom: 14,
  },

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 1.5,
    borderRadius: 22,
    paddingHorizontal: 12,
    height: 38,
    marginBottom: 6,
  },

  searchInput: {
    flex: 1,
    fontSize: 12,
    color: COLORS.darkBlue,
    marginLeft: 6,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    marginBottom: 8,
  },

  locationText: {
    fontSize: 11,
    color: COLORS.gold,
    fontWeight: "700",
    marginLeft: 4,
  },

  savedTopButton: {
    backgroundColor: COLORS.deepBlue,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 18,
    paddingVertical: 9,
    paddingHorizontal: 14,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 10,
  },

  savedTopButtonText: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: 12,
  },

  filterBox: {
    position: "absolute",
    right: 22,
    top: 172,
    zIndex: 20,
    backgroundColor: COLORS.lightGold,
    borderRadius: 14,
    padding: 8,
    width: 116,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 5,
    elevation: 5,
  },

  filterButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 12,
    paddingVertical: 6,
    marginBottom: 5,
    alignItems: "center",
  },

  filterText: {
    color: COLORS.darkBlue,
    fontWeight: "800",
    fontSize: 11,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.darkBlue,
    marginTop: 6,
  },

  subTitle: {
    fontSize: 13,
    color: COLORS.darkBlue,
    fontWeight: "800",
    marginBottom: 8,
  },

  subSectionTitle: {
    fontSize: 15,
    color: COLORS.darkBlue,
    fontWeight: "900",
    marginTop: 16,
    marginBottom: 8,
  },

  cardsPanel: {
    backgroundColor: COLORS.deepBlue,
    borderRadius: 18,
    paddingVertical: 12,
    paddingLeft: 10,
    marginBottom: 4,
  },

  card: {
    width: 138,
    backgroundColor: COLORS.paleGold,
    borderColor: COLORS.gold,
    borderWidth: 3,
    borderRadius: 18,
    padding: 6,
    marginRight: 10,
    alignItems: "center",
  },

  cardImage: {
    width: "100%",
    height: 62,
    borderRadius: 12,
    marginBottom: 5,
  },

  cardTitle: {
    color: COLORS.darkBlue,
    fontWeight: "900",
    fontSize: 12,
    textAlign: "center",
    minHeight: 32,
  },

  cardInfo: {
    color: COLORS.darkBlue,
    fontSize: 8.5,
    fontWeight: "700",
    textAlign: "center",
  },

  detailsButton: {
    backgroundColor: COLORS.deepBlue,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 6,
  },

  detailsButtonText: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: "800",
  },

  cardButtons: {
    flexDirection: "row",
    gap: 4,
    marginTop: 5,
  },

  smallButton: {
    backgroundColor: COLORS.deepBlue,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  savedButton: {
    backgroundColor: COLORS.gold,
  },

  smallButtonText: {
    color: COLORS.white,
    fontSize: 7,
    fontWeight: "700",
  },

  compassButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },

  detailsContainer: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 40,
    backgroundColor: COLORS.cream,
  },

  detailsHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  detailsImage: {
    width: "100%",
    height: 185,
    borderRadius: 8,
    marginBottom: 4,
  },

  photoCounter: {
    alignSelf: "flex-end",
    marginBottom: 6,
  },

  photoCounterText: {
    fontSize: 10,
    color: COLORS.mutedText,
    fontWeight: "700",
  },

  detailsTitle: {
    fontSize: 25,
    color: COLORS.darkBlue,
    fontWeight: "900",
    marginBottom: 4,
  },

  detailsDescription: {
    color: COLORS.darkBlue,
    fontSize: 11,
    lineHeight: 16,
    marginBottom: 8,
  },

  detailsInfoBox: {
    backgroundColor: "#EFE1C4",
    borderColor: "#E2C77C",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },

  infoText: {
    fontSize: 12,
    color: COLORS.darkBlue,
    marginBottom: 4,
  },

  infoLabel: {
    fontWeight: "900",
  },

  certificateText: {
    color: COLORS.gold,
    fontWeight: "900",
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 5,
  },

  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },

  categoryLabel: {
    fontSize: 15,
    color: COLORS.darkBlue,
    fontWeight: "900",
  },

  categoryPill: {
    backgroundColor: COLORS.gold,
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 5,
  },

  categoryPillText: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: 11,
  },

  applicantsLabel: {
    fontSize: 15,
    color: COLORS.darkBlue,
    fontWeight: "900",
    marginBottom: 6,
  },

  progressOuter: {
    width: "100%",
    height: 14,
    borderWidth: 2,
    borderColor: COLORS.darkBlue,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 2,
  },

  progressInner: {
    height: "100%",
    width: "55%",
    backgroundColor: "#2B8DB3",
  },

  applicantsNumber: {
    alignSelf: "flex-end",
    color: COLORS.darkBlue,
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 18,
  },

  signUpButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: "center",
    marginHorizontal: 40,
    marginBottom: 12,
  },

  signUpButtonText: {
    color: COLORS.darkBlue,
    fontWeight: "900",
    fontSize: 20,
  },

  mapButton: {
    backgroundColor: "#2B8DB3",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  mapButtonText: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: 12,
  },

  savedContainer: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 40,
    backgroundColor: COLORS.cream,
  },

  savedCard: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 18,
    padding: 8,
    marginBottom: 12,
    alignItems: "center",
  },

  savedImage: {
    width: 125,
    height: 72,
    borderRadius: 12,
    marginRight: 10,
  },

  savedContent: {
    flex: 1,
  },

  savedTitle: {
    color: COLORS.darkBlue,
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 3,
  },

  savedInfo: {
    color: COLORS.darkBlue,
    fontSize: 9,
    fontWeight: "700",
  },

  savedActions: {
    flexDirection: "row",
    gap: 6,
    marginTop: 6,
  },

  savedActionButton: {
    backgroundColor: COLORS.deepBlue,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  savedActionText: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: "800",
  },

  emptySavedBox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 2,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginTop: 30,
  },

  emptySavedTitle: {
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
  },

  emptySavedText: {
    color: COLORS.mutedText,
    textAlign: "center",
    marginTop: 6,
  },

  doneButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 40,
  },

  doneButtonText: {
    color: COLORS.darkBlue,
    fontWeight: "900",
    fontSize: 20,
  },
});