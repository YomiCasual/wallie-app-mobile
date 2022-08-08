import React from "react";
import { Box, Flex, VStack, Text, Image, Button } from "native-base";
import { FEATURES_LIST } from "./constants";
import { TouchableOpacity } from "react-native";

const Features = () => {
  return (
    <VStack space="1">
      <Text fontSize="lg" fontWeight="bold">
        Features
      </Text>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {FEATURES_LIST.map(({ id, icon, title, bgColor, iconColor }) => (
          <Box key={id} mx={2} my={3}>
            <VStack maxWidth="20" width={"50px"}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 20,
                  backgroundColor: bgColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icon}
                  alt="icon"
                  width="20px"
                  height="20px"
                  tintColor={iconColor}
                />
              </TouchableOpacity>
              <Text
                lineHeight="16px"
                mt={2}
                textAlign="center"
                fontWeight="normal"
              >
                {title}
              </Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </VStack>
  );
};

export default Features;
