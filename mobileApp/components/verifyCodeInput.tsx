import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";

export const VerifyCodeInput = () => {
  const [verifycode, setverifycode] = useState(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleVerifyCodeChange = (value: string, index: number) => {
    const newverifycode = [...verifycode];
    newverifycode[index] = value;
    setverifycode(newverifycode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !verifycode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3].map((index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) inputRefs.current[index] = ref;
          }}
          style={styles.input}
          maxLength={1}
          keyboardType='number-pad'
          onChangeText={(value) => handleVerifyCodeChange(value, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          value={verifycode[index]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },
  input: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 9,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#F9FAFB",
  },
});
