import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { BookedScreen } from "../screens/BookedScreen";
import { navigatorOptions } from "./options";

const Stack = createStackNavigator();

export function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={navigatorOptions}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={({navigation}) => ({
          title: "My posts",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="take photo"
                iconName="ios-camera"
                onPress={() => navigation.push('Create')}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="toggle drawer"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Your post from ${new Date(
            route.params.date
          ).toLocaleDateString()}`,
          headerRight: () => {
            const icon = route.params.booked ? "ios-star" : "ios-star-outline";
            return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="take photo"
                  iconName={icon}
                  onPress={route.params.toggleHandler}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
}
