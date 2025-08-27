import { TextInput } from "react-native";
import { styles } from '../style/style';

export default function Input({ InfoPlaceholder, password }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={InfoPlaceholder}
      placeholderTextColor={"black"}
      secureTextEntry={password} />
  );
}
