import { Text } from 'react-native';

export default function TextComp({ txt, estilo }) {
  return (
    <Text style={estilo}>{txt}</Text>
  );
}
