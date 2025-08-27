import { ImageBackground, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { style } from "../style/style";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style/style";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.containerHome}
      source={require("../assets/images/NetflixBackgroundImage.jpg")}>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.txt}>Login With Email</Text>
      </TouchableOpacity>

      <View style={styles.viewSignUp}>
        <Text style={styles.txt}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={{ fontWeight: 'bold', color: "#DD1D23" }}>Sign Up</Text></Pressable>
      </View>

      <StatusBar hidden />
    </ImageBackground >
  )


}
