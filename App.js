/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

function App() {
  const [name, setName] = useState('Farhan');
  const [age, setAge] = useState(0);
  const [person, setPerson] = useState({name: 'Mario', age: 40});
  const [people, setPeople] = useState([
    {name: 'Farhan', key: 1},
    {name: 'Yasa A', key: 2},
    {name: 'Nabila', key: 3},
    {name: 'Andre', key: 4},
    {name: 'Noval', key: 5},
    {name: 'Dyah', key: 6},
  ]);

  const updateState = () => {
    setName('Fatur');
  };

  const handlePress = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3) {
      setPeople((prevPeople) => {
        return [
          {name: text, key: Math.random().toString()},
          ...prevPeople,
        ];
      });
    }else {
      Alert.alert('OOPPSSS!', 'Todos must be longer 3 character', [
        {text: 'Understood'}
      ]);
    }
    
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={people}
              renderItem={({item}) => (
                <TodoItem item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    // alignItems: 'flex-start',
  },
  box: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  body: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: '#0000cd',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    margin: 10,
    width: 200,
  },
});

export default App;
