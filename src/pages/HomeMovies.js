import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

import LottieView from 'lottie-react-native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItem } from '../components/AsyncStorage';

const { width, height } = Dimensions.get("window")

export default function HomeMovies() {
  const navigation = useNavigation()

  const handleReset = async () => {
    await removeItem('onboarded')
    navigation.push('Onboarding');

  }

  const hanldeMovie = async () => {
    navigation.navigate("MoviesScreen")
  }

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={require("../assets/images/NetflixBackgroundImage.jpg")}
        style={styles.Backgrond} />
      <ImageBackground />

      <Text style={styles.text}></Text>
      <TouchableOpacity onPress={hanldeMovie} style={styles.ButtonCatalog}>
        <Text>See our Catalog</Text>

        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text>Reset</Text>
        </TouchableOpacity>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: "#DD1D23",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderRadius: 10,
  },

  ButtonCatalog: {
    backgroundColor: "#DD1D23",
    borderRadius: 10,
    gap: 15,
  },

  text: {
    fontSize: width * 0.09,
    marginBottom: 20
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  lottie: {
    width: width * 0.9,
    height: width
  },

  Backgrond: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignContent: "center",
    alignItems: "center",

  },
});
