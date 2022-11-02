import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// npx expo install expo-checkbox

export default function App() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Checkbox style={styles.checkbox} color="#00FF00" value={isChecked} onValueChange={setChecked} />
        <Text>My Option</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    margin: 8
  }
});
