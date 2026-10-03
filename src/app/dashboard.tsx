import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          CATUC Student Portal
        </Text>

        <Text style={styles.headerSubtitle}>
          Welcome, Emmanuel
        </Text>
      </View>

      <View style={styles.studentCard}>
        <Text style={styles.studentName}>
          Emmanuel Uwazie
        </Text>

        <Text>
          Matriculation No: 380423
        </Text>

        <Text>
          Programme: BSc Computer Science
        </Text>

        <Text>
          Level: 300
        </Text>
      </View>

      <View style={styles.grid}>

        <MenuButton
          title="Courses"
          onPress={() => router.push("/courses")}
        />

        <MenuButton
          title="Results"
          onPress={() => router.push("/results")}
        />

        <MenuButton
          title="Fees"
          onPress={() => router.push("/fees")}
        />

        <MenuButton
          title="Timetable"
          onPress={() => router.push("/timetable")}
        />

        <MenuButton
          title="Profile"
          onPress={() => router.push("/profile")}
        />

      </View>

    </ScrollView>
  );
}

function MenuButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={onPress}
    >
      <Text style={styles.menuText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    backgroundColor: "#1b5e20",
    padding: 25,
  },

  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "white",
    marginTop: 8,
  },

  studentCard: {
    backgroundColor: "white",
    margin: 15,
    padding: 20,
    borderRadius: 12,
  },

  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  menuButton: {
    width: "42%",
    backgroundColor: "white",
    margin: 10,
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },

  menuText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});