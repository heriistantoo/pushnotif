import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { showNotification, handleScheduleNotification, handleCancel } from './src/notification.android';

const App = ()=>{
  return(
    <View style={styles.container}>
      <Text>Push Notification Bismillah</Text>

      <TouchableOpacity activeOpacity={0.6} onPress={() => showNotification('hello','message')}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click me to get notification</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} onPress={() => handleScheduleNotification('hello', 'message after 3 sec')}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click me to get notification after 3 sec</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} onPress={handleCancel}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click me to cancel all notification</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 24,
    marginTop: 10,
  },
  buttonTitle: {
    color: 'white',
  },  
});