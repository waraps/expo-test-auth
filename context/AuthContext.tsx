// context/AuthContext.tsx
import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: any | null; // Puedes tipar esto con más detalle según tu modelo de usuario
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Para manejar el estado de carga inicial

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        const storedUser = await SecureStore.getItemAsync("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error loading user from secure store:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const signIn = async (username: string, password: string) => {
    // Aquí iría tu lógica de autenticación real (llamada a API, Firebase, etc.)
    setIsLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        const dummyUser = {
          id: "1",
          username: username,
          email: `${username}@example.com`,
        };
        setUser(dummyUser);
        await SecureStore.setItemAsync("user", JSON.stringify(dummyUser));
        setIsLoading(false);
        resolve();
      }, 1000); // Simula una llamada a la API
    });
  };

  const signOut = async () => {
    setIsLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        setUser(null);
        await SecureStore.deleteItemAsync("user");
        setIsLoading(false);
        resolve();
      }, 500); // Simula una llamada a la API
    });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
