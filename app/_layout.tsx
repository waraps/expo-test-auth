// app/_layout.tsx
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  console.log(segments);

  useEffect(() => {
    if (!isLoading) {
      const inAuthGroup = segments[0] === "(auth)";

      if (user && inAuthGroup) {
        // Si el usuario está autenticado y está en el grupo (auth), redirige a la aplicación
        router.replace("/(tabs)");
        SplashScreen.hideAsync();
      } else if (!user && !inAuthGroup) {
        // Si el usuario no está autenticado y está en una ruta protegida, redirige al landing
        router.replace("/(auth)/landing"); // ¡CAMBIO AQUÍ!
        SplashScreen.hideAsync();
      } else {
        // Oculta el splash screen si no hay redirección inminente o si el estado ya está establecido
        SplashScreen.hideAsync();
      }
    }
  }, [user, isLoading, segments]);

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
