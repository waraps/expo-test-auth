// app/(app)/profile.tsx
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext"; // Ajusta la ruta

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Perfil</Text>
      {user ? (
        <>
          <Text>ID: {user.id}</Text>
          <Text>Usuario: {user.username}</Text>
          <Text>Email: {user.email}</Text>
        </>
      ) : (
        <Text>No hay información de usuario disponible.</Text>
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
});
