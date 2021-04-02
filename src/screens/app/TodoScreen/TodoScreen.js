import React, { useCallback, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    marginVertical: 16,
    marginHorizontal: 24,
  },
  input: {
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    marginBottom: 16,
  },
  list: {
    padding: 24,
  },
  item: {
    flexDirection: 'row',
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#F7F7F7',
  },
  itemContent: {
    flex: 1,
  },
  deleteTextButton: {
    color: 'red',
  },
});

export function TodoScreen() {
  const [textValue, setTextValue] = useState('');
  const [list, setList] = useState([]);

  const onPress = useCallback(() => {
    setList(prevState => [...prevState, textValue]);
    setTextValue('');
  }, [textValue]);

  const onChangeText = useCallback(text => {
    setTextValue(text);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={textValue}
          style={styles.input}
          placeholder="type anything..."
          onChangeText={onChangeText}
        />
        <Button title="Add todo" onPress={onPress} />
      </View>
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.itemContent}>{item}</Text>
              <TouchableOpacity
                onPress={() => {
                  const newList = [...list];
                  newList.splice(index, 1);
                  setList(newList);
                }}>
                <Text style={styles.deleteTextButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
