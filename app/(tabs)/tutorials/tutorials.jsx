// app/tutorials/index.js
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import GroupActivities from "./groupActivities";
import IndividualActivities from "./individualActivities";

export default function Tutorials() {
  const [tab, setTab] = useState("group");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tutoriais</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, tab === "group" && styles.activeTab]}
          onPress={() => setTab("group")}
        >
          <Text style={tab === "group" ? styles.activeText : styles.tabText}>
            Atividades em Grupo
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, tab === "individual" && styles.activeTab]}
          onPress={() => setTab("individual")}
        >
          <Text
            style={tab === "individual" ? styles.activeText : styles.tabText}
          >
            Atividades individuais
          </Text>
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        {tab === "group" ? <GroupActivities /> : <IndividualActivities />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 14,
    color: "#555",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#ff007f",
  },
  activeText: {
    color: "#ff007f",
    fontWeight: "bold",
  },
});
