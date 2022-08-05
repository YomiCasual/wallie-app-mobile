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

const SpecialPromo = () => {
  return (
    <VStack space="4">
      <Text fontSize="lg" fontWeight="bold">
        SpecialPromo
      </Text>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {[1, 2].map((item) => (
          <Pressable
            key={item}
            borderRadius={"10px"}
            width="45%"
            shadow={4}
            bgColor="white"
            overflow="hidden"
            pb="4"
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
          </Pressable>
        ))}
      </Flex>
    </VStack>
  );
};

export default SpecialPromo;
