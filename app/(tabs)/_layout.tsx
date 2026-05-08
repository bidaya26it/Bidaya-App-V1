<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
=======
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
>>>>>>> feature/subscription

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="blueprint-intro"
        options={{
          title: "Blueprint",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="opportunities"
        options={{
          title: "Opportunities",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
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

      <Tabs.Screen
        name="subscription"
        options={{
          title: "Plans",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="diamond" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="signup-step-1"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="signup-step-2"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="blueprint-question"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="modal"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
  name="subscription"
  options={{
    title: "Plans",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="diamond" size={size} color={color} />
    ),
  }}
/>
    </Tabs>
  );
}