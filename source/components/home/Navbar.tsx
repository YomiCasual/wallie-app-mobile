import { Box, Flex, HStack, Text, VStack } from "native-base";
import React from "react";
import { Image } from "react-native";
import { icons } from "../../constants";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center" my={4}>
      <VStack>
        <Text fontFamily="mono" fontSize="2xl" fontWeight="bold">
          Hello!
        </Text>
        <Text color="app.darkgray" fontSize="sm">
          Jimmy Sulivan!
        </Text>
      </VStack>
      <Box
        width={39}
        height={39}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Image
          source={icons.bell}
          style={{
            height: 20,
            width: 20,
          }}
        />
        <Box
          bgColor="app.red"
          width={2}
          height={2}
          position="absolute"
          right="0"
          top="0"
          rounded="full"
        ></Box>
      </Box>
    </HStack>
  );
};

export default Navbar;
