import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TodoScreen } from './src/screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <TodoScreen />
    </View>
  );
};

export default App;
