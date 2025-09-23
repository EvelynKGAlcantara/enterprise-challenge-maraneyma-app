import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          height: 80,
          alignItems: "center",
          alignContent: "center",
          flexDirection: "row",
        },
        tabBarActiveTintColor: "#ff007f",
        tabBarInactiveTintColor: "#555",
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "homeScreen",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tutorials/tutorials"
        options={{
          title: "Tutoriais",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="championship"
        options={{
          title: "Campeonato",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: "Ranking",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="podium-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
