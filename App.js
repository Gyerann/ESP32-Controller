import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleOnPress = async () => {
    const url = isOn ? 'http://192.168.0.29/led2off' : 'http://192.168.0.29/led2on';
    await fetch(url);
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <Text>
         Toggle LED
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonText}>{isOn ? 'OFF' : 'ON'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
