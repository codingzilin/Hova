import React from "react";
import EntryProgress from "@/components/progress";
import { View } from "react-native";
import { Stack } from "expo-router";

const PhoneNumberEntry: React.FC = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <EntryProgress />
    </View>
  );
};

export default PhoneNumberEntry;
