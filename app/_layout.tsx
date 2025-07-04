import { Stack } from "expo-router";
import "../global.css"

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;