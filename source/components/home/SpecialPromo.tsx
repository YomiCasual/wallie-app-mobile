import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  Button,
  Pressable,
  AspectRatio,
} from "native-base";
import { FEATURES_LIST } from "./constants";
import { icons, images } from "../../constants";
import { TouchableOpacity } from "react-native";

const SpecialPromo = () => {
  return (
    <VStack space="4">
      <Text fontSize="lg" fontWeight="bold">
        SpecialPromo
      </Text>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {[1, 2, 3, 4].map((item) => (
          <TouchableOpacity
            key={item}
            style={{
              borderRadius: 10,
              width: "45%",
              backgroundColor: "white",
              overflow: "hidden",
              marginBottom: 30,
            }}
            // borderRadius={"10px"}
            // width="45%"
            // shadow={4}
            // bgColor="white"
            // overflow="hidden"
            // pb="4"
          >
            <Image
              width="full"
              height="90px"
              source={images.promoBanner}
              resizeMode="cover"
              alt="icon"
            />
            <VStack px={2} mt={2}>
              <Text lineHeight="16px" mt={2} fontWeight="bold">
                Bonus Cashback
              </Text>
              <Text
                lineHeight="16px"
                mt={2}
                fontWeight="light"
                color="app.darkgray"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </VStack>
          </TouchableOpacity>
        ))}
      </Flex>
    </VStack>
  );
};

export default SpecialPromo;
