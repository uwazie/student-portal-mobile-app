import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!matricule || !password) {
      Alert.alert("Error", "Please enter your matriculation number and password.");
      return;
    }

    // Temporary login
    router.replace("/dashboard");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        CATUC Student Portal
      </Text>

      <Text style={styles.subtitle}>
        Catholic University of Cameroon
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Matriculation Number"
        value={matricule}
        onChangeText={setMatricule}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 40,
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#1b5e20",
    padding: 16,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});