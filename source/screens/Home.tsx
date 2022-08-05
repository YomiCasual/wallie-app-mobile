import {
  Box,
  Center,
  Container,
  Hidden,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Image } from "react-native";
import { BottomBar, Features, Navbar, SpecialPromo } from "../components/home";
import { images, SIZES } from "../constants";
import { AppLayout } from "../reusables";

const Home = () => {
  return (
    <AppLayout hasBottomBar>
      <Box width={SIZES.width * 0.85} bgColor="white" mx="auto">
        <Navbar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box
            mt={4}
            mb={8}
            overflow="hidden"
            style={{
              height: 120,
              borderRadius: 20,
            }}
          >
            <Image
              source={images.banner}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
            />
          </Box>
          <Features />
          <SpecialPromo />
        </ScrollView>
      </Box>
    </AppLayout>
  );
};

export default Home;
