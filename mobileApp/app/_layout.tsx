// app/_layout.tsx
import config from "@/tamagui.config";
import { Stack } from "expo-router";
import { TamaguiProvider, Theme } from "tamagui";

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Theme name='light'>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </Theme>
    </TamaguiProvider>
  );
}
