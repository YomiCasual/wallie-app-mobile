import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  Button,
  PresenceTransition,
} from "native-base";
import { BOTTOM_BAR_LIST, FEATURES_LIST } from "./constants";
import { SIZES } from "../../constants";
import { Animated } from "react-native";
import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { APP_ROUTES } from "../../navigation/routes";

const BottomBar = ({ state, descriptors, navigation }) => {
  const [topValue, setTopValue] = useState(new Animated.Value(0));

  const animateTop = () => {
    Animated.timing(topValue, {
      toValue: -30,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateTop();
  }, [state.index]);

  return (
    <Box
      bgColor="#ffffff"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      zIndex="99"
      paddingBottom="4"
    >
      <Flex
        maxWidth={SIZES.width * 0.85}
        mx="auto"
        width="full"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Animated.View
              key={route.key}
              style={[
                {
                  transform: [
                    {
                      translateY: isFocused ? topValue : 0,
                    },
                  ],
                },
              ]}
            >
              <Box
                position="relative"
                height={isFocused ? "60px" : "50px"}
                width={isFocused ? "60px" : "50px"}
              >
                <Button
                  onPress={() => {
                    onPress();
                    setTopValue(new Animated.Value(0));
                  }}
                  onLongPress={onLongPress}
                  variant="unstyled"
                  bgColor={isFocused ? "app.primary" : "transparent"}
                  justifyContent="center"
                  alignItems="center"
                  width="full"
                  height="full"
                  rounded="full"
                  position={isFocused ? "absolute" : "relative"}
                  left={isFocused ? "0" : 0}
                  borderColor={isFocused ? "app.lightGreen" : "transparent"}
                  borderWidth={isFocused ? 5 : 0}
                >
                  <Image
                    source={icon}
                    alt="icon"
                    width="18px"
                    height="18px"
                    tintColor={isFocused ? "white" : "black"}
                  />
                </Button>
              </Box>
            </Animated.View>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BottomBar;
