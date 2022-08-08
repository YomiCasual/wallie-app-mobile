import { Box, Center, HStack, Image, Text } from "native-base";
import React from "react";

import { TouchableOpacity } from "react-native";
import { PAYMENT_METHOD_LIST } from "../home/constants";

const PaymentMethods = () => {
  return (
    <Box height={200} bgColor="white" width={"full"} roundedTop="2xl" p={6}>
      <Text fontWeight="bold" fontSize="md">
        Another payment methods
      </Text>
      <HStack mt={3} px={2} py={2}>
        {PAYMENT_METHOD_LIST.map(({ id, icon, title, bgColor, iconColor }) => (
          <TouchableOpacity
            style={{
              width: "50%",
            }}
          >
            <HStack space={2} alignItems="center">
              <Box
                height={"30px"}
                width={"30px"}
                borderRadius={"md"}
                justifyContent="center"
                alignItems="center"
                bgColor={bgColor}
              >
                <Image
                  source={icon}
                  alt="icon"
                  width="15px"
                  height="15px"
                  tintColor={iconColor}
                />
              </Box>
              <Text lineHeight="16px" textAlign="center" fontWeight="normal">
                {title}
              </Text>
            </HStack>
          </TouchableOpacity>
        ))}
      </HStack>
    </Box>
  );
};

export default PaymentMethods;
