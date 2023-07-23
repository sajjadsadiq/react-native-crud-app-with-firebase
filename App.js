import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Create from "./src/screens/Create";
import Edit from "./src/screens/Edit";
import SingIn from "./src/screens/SingIn";
import SingUp from "./src/screens/SingUp";
// import SingUp from "./src/screens/SingUp";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
      background: "#fff"
  }
}

const Stack = createNativeStackNavigator();

const App = () => {
  const user = false; // user not authenticated
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Edit" component={Edit} />
          </>
        ) : (
          <>
            <Stack.Screen name="SingIn" component={SingIn} />
            <Stack.Screen name="SingUp" component={SingUp} />
            {/* <Stack.Screen name="SingUp" component={SingUp} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
