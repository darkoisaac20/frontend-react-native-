import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () =>{
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };


  return (
    <ScrollView>
    <View style={styles.screen} >
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value = {enteredGoal}
        />
        <Button title="ADD"  onPress={addGoalHandler}/>
      </View>   
      <ScrollView >
      {courseGoals.map((goal) => 
              <View  key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
              </View>
        )}
      </ScrollView>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   screen:{
     padding:50
   },

   input: {
    width:'80%',
     borderColor: 'black', 
     borderWidth: 1,
     padding:7
   },

   inputContainer: {
     flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    listItem:{
      backgroundColor: '#ccc',
      borderColor: 'black',
      padding: 10,
      marginVertical: 10,
      borderWidth: 1
    }
});
