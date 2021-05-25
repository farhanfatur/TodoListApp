import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoItem({item, handlePress}) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <View style={styles.item}>
        <Icon name="trash" size={20} color="#333" />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});
