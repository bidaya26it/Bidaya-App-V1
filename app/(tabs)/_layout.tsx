import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
export default function TabLayout() {
  
  const colorScheme = useColorScheme();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
/>
       <Tabs.Screen
  name="profile"
  options={{
    title: "Profile",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" size={size} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="cv"
  options={{
    title: "CV",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="document-text" size={size} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="goals"
  options={{
    title: "Goals",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="flag" size={size} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="timeline"
  options={{
    title: "Timeline",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="map" size={size} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="compass"
  options={{
    title: "Compass",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="compass" size={size} color={color} />
    ),
  }}
/>
      
    </Tabs>
  );
}
