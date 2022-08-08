import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";

const useCamera = () => {
  const route = useRoute();
  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState<"back" | "front">("back");

  useEffect(() => {
    if (isFocused) {
      console.log("calling from effect");
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }
  }, [isFocused]);

  return {
    hasPermission,
    type,
    isFocused,
  };
};

export default useCamera;
