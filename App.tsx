import React from "react";
import { SWRConfig } from "swr";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View,
} from "native-base";
import { useFonts } from "expo-font";
import { appFonts, baseAppTheme } from "./source/constants";
import { LogBox } from "react-native";
import CreateAppNavigation from "./source/navigation";
import SwrProvider from "./source/utils/Swr";
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ ...baseAppTheme });
// type MyThemeType = typeof theme;

// declare module "native-base" {
//   interface ICustomTheme extends MyThemeType {}
// }

export default function App() {
  const [loaded] = useFonts({
    ...appFonts,
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={baseAppTheme}>
      <SwrProvider>
        <Box fontFamily="mono" flex="1">
          <CreateAppNavigation />
        </Box>
      </SwrProvider>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
