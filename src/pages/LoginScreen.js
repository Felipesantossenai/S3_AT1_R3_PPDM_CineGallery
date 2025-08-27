import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { styles } from '../style/style';
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Input from '../components/Input';
import TextComp from '../components/TextComp';


export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.containerHome}
      source={require("../assets/images/NetflixBackgroudImage02.jpg")} blurRadius={0}
      resizeMode="cover">
      <View style={styles.container1}>

        <Input InfoPlaceholder={"Email Address"} password={false} />
        <Input InfoPlaceholder={"Password"} password={true} />

        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeMovies')}>
            <AntDesign name="login" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewSignUp}>
          <Text style={styles.txt}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={{ fontWeight: 'bold', color: "#DD1D23" }}>Sign Up</Text></Pressable>
        </View>
      </View>
    </ImageBackground >
  );
}
