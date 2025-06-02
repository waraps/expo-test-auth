// app/(auth)/sign-up.tsx
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// Asume que tu AuthContext tiene una función para registrarse, por ejemplo, `signUp`
import { useAuth } from "../../context/AuthContext"; // Ajusta la ruta

export default function SignUpScreen() {
  const { /* signUp, */ isLoading } = useAuth(); // Descomenta signUp cuando lo tengas
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (email && username && password) {
      // await signUp(email, username, password); // Llama a tu función de registro
      alert("Funcionalidad de registro pendiente..."); // Solo para demostración
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isLoading ? "Registrando..." : "Crear Cuenta"}
        onPress={handleSignUp}
        disabled={isLoading}
      />
      {isLoading && (
        <ActivityIndicator
          size="small"
          color="#0000ff"
          style={styles.spinner}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  spinner: {
    marginTop: 20,
  },
});
