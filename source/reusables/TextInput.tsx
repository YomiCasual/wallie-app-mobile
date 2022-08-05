import { VStack, Text, Input, Button, HStack } from "native-base";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import React from "react";
import { Image } from "react-native";
import { icons } from "../constants";

export const TextInput = ({
  label,
  type = "text",
  ...rest
}: {
  label?: string;
  type?: "text" | "phone" | "password";
} & IInputProps) => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const passwordStyle = {
    InputRightElement: (
      <Button onPress={handleClick} variant="unstyled">
        <Image
          source={!show ? icons.eye : icons.disable_eye}
          style={{ width: 20, height: 20, tintColor: "white" }}
        />
      </Button>
    ),
  };

  return (
    <VStack width="full">
      {label && (
        <Text fontWeight="normal" fontSize="sm" color="white">
          {label}
        </Text>
      )}
      <HStack width="full" space={8}>
        {/* {type === "phone" && <Input variant="underlined" />} */}
        <Input
          variant="underlined"
          color={"white"}
          width="full"
          fontSize="md"
          type={show ? "text" : type}
          placeholderTextColor="rgba(225,225,225,0.8)"
          borderBottomColor="white"
          {...rest}
          {...(type === "password" ? passwordStyle : {})}
        />
      </HStack>
    </VStack>
  );
};
