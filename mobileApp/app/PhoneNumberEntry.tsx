import React from "react";
import EntryProgress from "@/components/progress";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { router, Stack } from "expo-router";
import { TamaguiProvider, Theme } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import { PhoneInput } from "@/components/phoneInput";

const { width } = Dimensions.get("window");

const PhoneNumberEntry: React.FC = () => {
  const handleContinue = () => {
    router.push("/VerifyPage");
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View style={styles.root}>
        <StatusBar barStyle='light-content' backgroundColor='#FFFFFF' />
        <View style={styles.container}>
          <Stack.Screen options={{ headerShown: false }} />
          <Theme name='light'>
            <EntryProgress />
          </Theme>

          <View style={styles.headerSection}>
            <Text style={styles.title}>Enter your phone number</Text>
            <Text style={styles.subtitle}>
              You will receive a code to confirm your identity.
            </Text>
          </View>

          <View style={styles.phoneInputSection}>
            <Theme name='light'>
              <PhoneInput />
            </Theme>
          </View>

          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TamaguiProvider>
  );
};

export default PhoneNumberEntry;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingTop: 60,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#414141",
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#6F6F6F",
  },
  headerSection: {
    marginTop: 40,
    paddingHorizontal: 15,
    gap: 15,
  },
  phoneInputSection: {
    paddingTop: 100,
  },
  button: {
    backgroundColor: "#0162F1",
    borderRadius: 40,
    padding: 15,
    marginBottom: 10,
    width: width * 0.7,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Poppins",
  },
  buttonSection: {
    margin: 200,
  },
});
