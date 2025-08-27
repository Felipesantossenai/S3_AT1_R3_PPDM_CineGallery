import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { styles } from '../style/style';
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaskedTextInput } from 'react-native-mask-text';

export default function SignUp() {
  const navigation = useNavigation();
  return (

    <ImageBackground style={styles.containerHome} blurRadius={0}
      source={require("../assets/images/NetflixBackgroudImage02.jpg")}
      resizeMode="cover">
      <View style={styles.containerSignUp}>
        <Text style={{
          fontSize: 28,
          top: 5,
          fontStyle: 'italic',
          marginBottom: 28,
          alignSelf: 'center',
          color: 'white',
        }}>Welcome, Register and have access to a diverse catalog of films and series</Text>

        <TextInput
          placeholder="name"
          value={Text}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />

        <FontAwesome name="credit-card" size={35} color="white" />
        <TextInput
          placeholder="Credit card holder name"
          style={styles.input}
          autoCapitalize="words"
        />

        {/* <MaskedTextInput
          mask="1234 5678 8765 4321"
          placeholder="Card number"
          style={styles.input}
          keyboardType='numeric'
        />

        <MaskedTextInput
          mask="12/34"
          placeholder="Expiration date"
          style={styles.input}
          keyboardType='numeric'
        />

        <TextInput
          placeholder="Security code (CVV)"
          style={styles.input}
          keyboardType='numeric'
          secureTextEntry
          maxLength={4}
        />

        <MaskedTextInput
          mask="123.456.789-10"
          placeholder="CPF"
          style={styles.input}
          keyboardType='numeric'
        /> */}


        <View style={styles.iconBotton}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeMovies')}>
            <AntDesign name="logout" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewSignUp}>
          <Text style={styles.txt}>Already have an Account?</Text>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}><Text style={{ fontWeight: 'bold', color: "#DD1D23" }}>Sign In</Text></Pressable>
        </View>

      </View>

    </ImageBackground>
  );
}
