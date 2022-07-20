import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { selectCount } from '../store/counterSlice';
import { selectTheme } from '../store/themeSlice';

export default function TabTwoScreen() {
  const count = useSelector(selectCount);
  const mode = useSelector(selectTheme);
  const bgColor = mode === 'light' ? 'white' : 'black';
  const textColor = mode === 'light' ? 'black' : 'white';
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
