import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F7F9F8",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#EB2F96",
        tabBarInactiveTintColor: "#7B7B7B",
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                width: 80,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Home
              </Text>
              <Ionicons name="home-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tutorials"
        options={{
          title: "Tutoriais",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center", width: 80 }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Tutoriais
              </Text>
              <Ionicons name="book-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="championship"
        options={{
          title: "Campeonato",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center", width: 80 }}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Campeonato
              </Text>
              <Ionicons name="trophy-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: "Ranking",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center", width: 80 }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Ranking
              </Text>
              <Ionicons name="podium-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
