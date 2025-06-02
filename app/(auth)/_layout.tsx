// app/(auth)/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="landing" options={{ headerShown: false }} />{" "}
      {/* Ocultamos el header */}
      <Stack.Screen name="sign-in" options={{ title: "Iniciar Sesión" }} />
      <Stack.Screen name="sign-up" options={{ title: "Crear Cuenta" }} />{" "}
      {/* Si tienes sign-up */}
    </Stack>
  );
}
