import React from "react";
import { Button, Progress } from "tamagui";

export default function EntryProgress() {
  return (
    <Progress value={50}>
      <Progress.Indicator />
    </Progress>
  );
}
