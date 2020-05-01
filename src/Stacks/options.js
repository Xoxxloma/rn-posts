import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export const navigatorOptions = {
  headerTintColor:
    Platform.OS === "android" ? THEME.WHITE_COLOR : THEME.MAIN_COLOR,
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export const toggleDrawerOptions = (navigation) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="toggle drawer"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
