import React from "react";
import { Box, Flex, VStack, Text, Image, Button } from "native-base";
import { FEATURES_LIST } from "./constants";

const Features = () => {
  return (
    <VStack space="1">
      <Text fontSize="lg" fontWeight="bold">
        Features
      </Text>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {FEATURES_LIST.map(({ id, icon, title, bgColor, iconColor }) => (
          <Box key={id} mx={2} my={3}>
            <VStack maxWidth="20">
              <Button
                variant="unstyled"
                height={"50px"}
                width={"50px"}
                bgColor={bgColor}
                justifyContent="center"
                alignItems="center"
                borderRadius={"20px"}
              >
                <Image
                  source={icon}
                  alt="icon"
                  width="20px"
                  height="20px"
                  tintColor={iconColor}
                />
              </Button>
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
