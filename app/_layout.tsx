import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function _Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{ presentation: "modal" }}
      />
    </Stack>
  );
}
