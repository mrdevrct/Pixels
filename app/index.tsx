import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />

      {/* linear gradient */}
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        {/* contentt */}
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            Pixel
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchline}
          >
            Every Pixel Tells a Story
          </Animated.Text>

          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable
              style={styles.startButton}
              onPress={() => router.push("/home")}
            >
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  } as ImageStyle,

  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  } as ViewStyle,

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  } as ViewStyle,

  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: "700",
  } as TextStyle,

  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: "500",
  } as TextStyle,

  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
  } as ViewStyle,

  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: "500",
    letterSpacing: 1,
  } as TextStyle,
});

export default WelcomeScreen;
