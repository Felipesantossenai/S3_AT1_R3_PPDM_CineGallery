import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../pages/OnboardingScreen";
import HomeScreen from "../pages/HomeScreen"
import LoginScreen from "../pages/LoginScreen";
import SignUp from "../pages/SignUpScreen";
import HomeMovies from "../pages/HomeMovies";
import MoviesScreen from "../pages/MoviesScreen";

import { getItem } from "../components/AsyncStorage";

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  const [showOboarding, setShowOnboarding] = useState(null)

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, [])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded')

    // onboarded == "1"
    // onboarded === 1
    if (onboarded == 1) {
      setShowOnboarding(false)
    } else {
      setShowOnboarding(true)
    }
  }

  if (showOboarding === null) {
    return null
  }

  if (showOboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HomeMovies"
            component={HomeMovies}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MoviesScreen"
            component={MoviesScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HomeMovies"
            component={HomeMovies}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MoviesScreen"
            component={MoviesScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
