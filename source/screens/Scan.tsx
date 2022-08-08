import React, { useEffect } from "react";
import { AppLayout } from "../reusables";

import { Camera } from "expo-camera";
import useCamera from "../hooks/useCamera";
import { PaymentMethods, ScanHeader } from "../components/scan";
import { useLayoutEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useState } from "react";
import { Box, Image } from "native-base";
import { icons, images } from "../constants";
import { Linking } from "react-native";

const Scan = () => {
  const { type, isFocused } = useCamera();

  return (
    <AppLayout hasBottomBar>
      {isFocused && (
        <Camera
          type={type}
          autoFocus={true}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onBarCodeScanned={async ({ data }) => {
            await Linking.canOpenURL(data);
            Linking.openURL(data);
          }}
        >
          <ScanHeader />
          <Box
            justifyContent="center"
            width="full"
            display="flex"
            alignItems="center"
          >
            <Image
              source={images.focus}
              width={"200px"}
              height={"300px"}
              alt="focus"
              resizeMode="contain"
            />
          </Box>
          <PaymentMethods />
        </Camera>
      )}
    </AppLayout>
  );
};

export default Scan;
