import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50, flexDirection: 'row', height: 300, weight: '80%', justifyContent: 'space-between', alignItems: 'stretch'}} >
      <View style={{
        backgroundColor: 'red',
        flex: 2,
        justifyContent: 'center',
        alignItems:'center'

      }}
      >
        <Text>1</Text>

      </View>

      <View style={{
        backgroundColor: 'blue',
        flex: 3,
        justifyContent: 'center',
        alignItems:'center'

      }}
      >
        <Text>2</Text>

      </View>

      <View style={{
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'

      }}
      >
        <Text>3</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   
  
});
