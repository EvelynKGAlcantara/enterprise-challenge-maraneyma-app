import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Telas de fluxo inicial */}
      <Stack.Screen name="index" />
      <Stack.Screen name="onBoarding" />
      <Stack.Screen name="signupScreen" />
      <Stack.Screen name="loginScreen" />

      {/* Tabs ficam em um subdiretório chamado (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
