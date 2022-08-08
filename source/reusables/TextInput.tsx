import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  Select,
  Box,
  Flex,
  Actionsheet,
  useDisclose,
  ScrollView,
  Modal as NModal,
  Heading,
  FlatList,
} from "native-base";
import useSWR from "swr";

import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import React from "react";
import { Image } from "native-base";
import { icons, images, SIZES } from "../constants";
import { Pressable, Modal, TouchableOpacity } from "react-native";
import { useMemo } from "react";
import { useState } from "react";

const countriesUrl = "https://restcountries.com/v3.1/all";

export const TextInput = ({
  label,
  type = "text",
  ...rest
}: {
  label?: string;
  type?: "text" | "phone" | "password";
} & IInputProps) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const { data } = useSWR(type === "phone" ? countriesUrl : null);
  const [selectedState, setSelectedState] = React.useState<Record<string, any>>(
    {}
  );

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (text: any, states) => {
    const filtered = states.filter((country) =>
      country.name.toLowerCase().includes(text.toLowerCase())
    );
    return filtered;
  };

  const mappedData = useMemo(() => {
    let states = (data || []).map((cu) => {
      return {
        callingCode: `${cu?.idd?.root}${(cu?.idd?.suffixes || [])[0]}`,
        name: cu?.name?.common,
        code: `${cu?.cca2}`,
        flag: cu?.flag,
      };
    });

    setSelectedState(states[0]);

    if (filterValue && data) {
      states = handleFilter(filterValue, states);
    }

    return states;
  }, [data, filterValue]);

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const passwordStyle = {
    InputRightElement: (
      <Button onPress={handleClick} variant="unstyled">
        <Image
          source={!show ? icons.eye : icons.disable_eye}
          style={{ width: 20, height: 20, tintColor: "white" }}
          alt="eye-icon"
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
      <HStack width="full" space={4} alignItems="flex-end">
        {type === "phone" && (
          <TouchableOpacity
            onPress={() => {
              onOpen();
            }}
          >
            <HStack
              direction="row"
              borderBottomColor="white"
              borderBottomWidth="1"
              alignItems="center"
              py={2}
              space={1}
              width="full"
              maxWidth="100px"
            >
              <Image
                alt="dropdonw-icon"
                source={icons.down}
                width="10px"
                height="10px"
                resizeMode="contain"
                tintColor="white"
              />
              {selectedState && (
                <>
                  <Text color="white">{selectedState.flag} </Text>
                  <Text color="white">
                    {selectedState.code} {selectedState.callingCode}{" "}
                  </Text>
                </>
              )}
            </HStack>
          </TouchableOpacity>
        )}
        <Input
          variant="underlined"
          color={"white"}
          width="full"
          fontSize="md"
          placeholderTextColor="rgba(225,225,225,0.8)"
          borderBottomColor="white"
          secureTextEntry={type === "password" && !show}
          {...rest}
          {...(type === "password" ? passwordStyle : {})}
        />
      </HStack>

      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <Box
          position="relative"
          flex="1"
          borderWidth={8}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="300px"
            position={"relative"}
            rounded="lg"
            zIndex={99}
            height={SIZES.height * 0.6}
            shadow={3}
            bgColor="white"
          >
            <Box
              px={3}
              py={3}
              borderBottomColor="app.darkgray"
              borderBottomWidth={1}
              mb={2}
            >
              <Text fontSize="xl" fontWeight="bold">
                Countries
              </Text>
              <Input
                mt={3}
                onChangeText={(text) => setFilterValue(text)}
                value={filterValue}
              />
            </Box>
            <FlatList
              data={mappedData}
              renderItem={({ item }: { item: Record<string, any> }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedState(item);
                    onClose();
                  }}
                >
                  <HStack
                    space={2}
                    py={3}
                    borderBottomColor="app.darkgray"
                    borderBottomWidth="1"
                    px={4}
                  >
                    <Text>{item.flag}</Text>
                    <Text>
                      {item.name} ({item.callingCode})
                    </Text>
                  </HStack>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.name}
              style={{}}
            />
          </Box>
          <TouchableOpacity
            onPress={onClose}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 80,
            }}
          ></TouchableOpacity>
        </Box>
      </Modal>
    </VStack>
  );
};
