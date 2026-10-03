import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="login"
        options={{ title: "Login" }}
      />

      <Stack.Screen
        name="dashboard"
        options={{ title: "Dashboard" }}
      />

      <Stack.Screen
        name="courses"
        options={{ title: "Courses" }}
      />

      <Stack.Screen
        name="results"
        options={{ title: "Results" }}
      />

      <Stack.Screen
        name="fees"
        options={{ title: "Fees" }}
      />

      <Stack.Screen
        name="timetable"
        options={{ title: "Timetable" }}
      />

      <Stack.Screen
        name="profile"
        options={{ title: "Profile" }}
      />
    </Stack>
  );
}