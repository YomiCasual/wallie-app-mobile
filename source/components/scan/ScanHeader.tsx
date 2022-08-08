import { Box, Center, HStack, Image, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "../../constants";

const Scan = () => {
  return (
    <HStack
      bgColor="rgba(225,225,225,0.2)"
      mt={8}
      py={3}
      justifyContent="space-between"
      alignItems="center"
      px={4}
      rounded={"lg"}
    >
      <TouchableOpacity>
        <Image
          source={icons.close}
          alt="close"
          width={"12px"}
          height={"12px"}
          tintColor={"white"}
        />
      </TouchableOpacity>
      <Text color="white">Scan for payment</Text>
      <TouchableOpacity>
        <Box
          width={"30px"}
          height={"30px"}
          justifyContent="center"
          alignItems="center"
          bgColor="rgba(225,225,225,0.6)"
          borderRadius="lg"
        >
          <Image
            source={icons.info}
            alt="close"
            width={"15px"}
            height={"15px"}
            resizeMode="contain"
            tintColor={"white"}
          />
        </Box>
      </TouchableOpacity>
    </HStack>
  );
};

export default Scan;
