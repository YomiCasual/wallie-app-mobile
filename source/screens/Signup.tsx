import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  HStack,
  Text,
  Image as NativeImage,
  VStack,
  Input,
  Button,
  ScrollView,
} from "native-base";
import React from "react";
import { Image, ImageBackground } from "react-native";
import { icons, images, SIZES } from "../constants";
import { APP_ROUTES } from "../navigation/routes";
import { TextInput } from "../reusables";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <Box bg={"app.primary"} flex={1} px={8} py={8} width="full" safeArea>
      <Box mb={8}>
        <HStack space="3" alignItems="center">
          <Image
            source={icons.back}
            style={{
              width: 20,
              height: 20,
              tintColor: "white",
            }}
          />
          <Text fontFamily="mono" fontWeight="600" color="white">
            Sign up
          </Text>
        </HStack>
      </Box>
      <ScrollView width="full" borderWidth="0" borderColor="white" mt={8}>
        <Center mb={8}>
          <ImageBackground
            source={images.wallieLogo}
            style={{
              width: 200,
              height: 100,
            }}
          />
        </Center>
        <VStack space={8} width="full">
          <TextInput placeholder="Enter full Name" label="Full Name" />
          <TextInput
            placeholder="09033614885"
            label="Phone Number"
            type="phone"
          />
          <TextInput
            placeholder="Enter Password"
            label="Phone Number"
            type="password"
          />

          <Button
            onPress={() => {
              navigation.navigate(APP_ROUTES.APP as never);
            }}
            maxWidth={SIZES.width * 0.8}
            width={"full"}
            margin="auto"
            py={4}
            backgroundColor="app.black"
            borderRadius={10}
          >
            <Text fontWeight="bold" color="white" fontSize="md">
              Continue
            </Text>
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Signup;
