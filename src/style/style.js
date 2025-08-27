import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  containerSignUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: '#DD1D23',
    width: "80%",
    padding: 10,
    alignItems: "center",
    marginTop: 200,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 5,
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold"
  },
  viewSignUp: {
    flexDirection: "row",
    gap: 8,
    alignSelf: 'center',
  },
  txt: {
    color: "#fff"
  },
  input: {
    height: 50,
    color: 'Black',
    backgroundColor: 'white',
    width: 250,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 17,
    borderColor: '',
    borderWidth: 2,
  },
  sign: {
    color: '#e5dac9',
    fontSize: 20,
    top: 20
  },
  icon: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    marginBottom: 5,
    alignSelf: 'center',
    color: '#919890',
  },
  txtSignIn: {
    fontSize: 25,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#919890'
  },
  buttonCatalog: {
    fontSize: 25,
    color: '#DD1D23'
  },

  resetButton: {
    fontSize: 25,
    color: '#DD1D23'
  }
});

