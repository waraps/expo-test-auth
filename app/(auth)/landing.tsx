// app/(auth)/landing.tsx
import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a nuestra App</Text>
      <Text style={styles.subtitle}>Tu experiencia comienza aquí.</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Sesión"
          onPress={() => router.push("/(auth)/sign-in")}
        />
        <Button
          title="Registrarse"
          onPress={() => router.push("/(auth)/sign-up")} // Asume que tienes una pantalla sign-up
          color="#007bff" // Puedes cambiar el color para diferenciar
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#666",
  },
  buttonContainer: {
    width: "80%",
    gap: 15, // Espacio entre botones
  },
});
