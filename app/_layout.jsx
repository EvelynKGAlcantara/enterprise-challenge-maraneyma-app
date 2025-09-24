import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts, SofiaSans_400Regular } from "@expo-google-fonts/sofia-sans";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SofiaSans_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onBoarding" />
      <Stack.Screen name="signupScreen" />
      <Stack.Screen name="loginScreen" />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
