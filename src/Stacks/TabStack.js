import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreen } from "./Stack";
import { BookedScreen } from "../screens/BookedScreen";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostScreen } from "../screens/PostScreen";
import { Platform } from "react-native";
import { navigatorOptions, toggleDrawerOptions } from "./options";
import { CreateScreen } from "../screens/CreateScreen";
import { AboutScreen } from "../screens/AboutScreen";

const Stack = createStackNavigator();
const Create = createStackNavigator();
const About = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BookedStack = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Booked"
        component={BookedScreen}
        options={({ navigation }) => toggleDrawerOptions(navigation)}
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
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor={
        Platform.OS === "android" ? THEME.WHITE_COLOR : THEME.MAIN_COLOR
      }
      barStyle={{
        backgroundColor:
          Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
      }}
      shifting={true}
    >
      <Tab.Screen
        name="Main"
        component={StackScreen}
        options={{
          tabBarIcon: (info) => (
            <Ionicons name="ios-albums" color={info.color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={BookedStack}
        options={{
          tabBarLabel: "Booked",
          tabBarIcon: (info) => (
            <Ionicons name="ios-star" color={info.color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyCreate() {
  return (
    <Create.Navigator screenOptions={navigatorOptions}>
      <Create.Screen
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => toggleDrawerOptions(navigation)}
      />
    </Create.Navigator>
  );
}

function MyAbout() {
  return (
    <About.Navigator screenOptions={navigatorOptions}>
      <About.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => toggleDrawerOptions(navigation)}
      />
    </About.Navigator>
  );
}

export function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerType="slide" drawerContentOptions={{activeTintColor: THEME.MAIN_COLOR}} >
      <Drawer.Screen
        name="Main"
        component={MyTabs}
        options={{
          drawerLabel: "Main page", 
          drawerIcon: () => (<MaterialCommunityIcons name="home-variant" size={24} />)
        }}
      />
      <Drawer.Screen
        name="Create"
        component={MyCreate}
        options={() => ({
          drawerLabel: "Create new post",
          drawerIcon: () => (<Ionicons name="ios-create" size={24} />)
        })}
      />
      <Drawer.Screen
        name="About"
        component={MyAbout}
        options={{
          drawerLabel: "About app",
          drawerIcon: () => (<Fontisto name="question" size={24} />)
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
