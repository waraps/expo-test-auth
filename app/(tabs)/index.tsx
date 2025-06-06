// app/(app)/index.tsx
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext"; // Ajusta la ruta

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ¡Bienvenido, {user?.username || "Usuario"}!
      </Text>
      <Text>Esta es la pantalla de inicio de tu aplicación.</Text>
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
});
