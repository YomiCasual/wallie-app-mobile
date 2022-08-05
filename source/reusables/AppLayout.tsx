import { useRoute } from "@react-navigation/native";
import { Box } from "native-base";
import React, { ComponentType } from "react";
import { BottomBar } from "../components/home";

export const AppLayout = ({
  hasBottomBar = false,
  children,
  ...rest
}: {
  hasBottomBar?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Box bgColor="white" flex="1" safeArea>
      {children}
      {/* {hasBottomBar && <BottomBar />} */}
    </Box>
  );
};
