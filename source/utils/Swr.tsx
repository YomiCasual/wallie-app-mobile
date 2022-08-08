/* eslint-disable @typescript-eslint/no-explicit-any */
import { SWRConfig } from "swr";
import { ReactNode } from "react";
import axios from "axios";
import { AppState } from "react-native";

/** Wrap with SWR Config provider */
const SwrProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  // Get request method

  // Construct Swr fetcher
  const fetcher = (...url: any) => {
    const requests = (singleUrl: string) =>
      axios.get(singleUrl).then((res) => res.data);
    if (url.length > 1) {
      return Promise.all(url.map(requests));
    }
    return axios.get(url[0]).then((res) => res.data);
  };

  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 60000,
        revalidateOnFocus: true,
        revalidateIfStale: true,
        revalidateOnReconnect: true,
        refreshWhenHidden: true,
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = (nextAppState) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };

          // Subscribe to the app state change events
          const subscription = AppState.addEventListener(
            "change",
            onAppStateChange
          );

          return () => {
            (subscription as any)?.remove();
          };
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrProvider;
