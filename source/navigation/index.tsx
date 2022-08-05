import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AUTH_SCREEN_LIST, TAB_SCREENS } from "./constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomBar } from "../components/home";
import { APP_ROUTES } from "./routes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const buildStack = (stacks) => {
  const StackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_ROUTES.SIGNUP}
      >
        {stacks.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    );
  };
  return StackScreen;
};

const buildTabStack = (tabStack) => {
  const TabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: "below-icon",
        }}
        tabBar={(props) => <BottomBar {...props} />}
      >
        {tabStack.map((item) => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
              tabBarIcon: item.icon,
            }}
          />
        ))}
      </Tab.Navigator>
    );
  };
  return TabScreen;
};

const TabScreens = buildTabStack(TAB_SCREENS);

const AuthNavigation = buildStack(AUTH_SCREEN_LIST);

const CreateAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_ROUTES.AUTH}
      >
        <Stack.Screen name={APP_ROUTES.AUTH} component={AuthNavigation} />
        <Stack.Screen name={APP_ROUTES.APP} component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CreateAppNavigation;
