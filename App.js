import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input, ButtonGroup } from '@rneui/themed'
//import OpenAI from "openai";
import Slider from '@react-native-community/slider';

//const openai = new OpenAI();

const inputOptions = {
  location: "",
  timeOfDay: ["Morning", "Afternoon", "Evening"],
  datelength: 0,
  budget: ["Free", "Cheap", "Moderate", "Expensive"],
  freeText: ""
};

const generatePrompt = (inputOptions) => {
  return `ChatGPT, give me three date ideas for ${inputOptions.location}. This date will be happening in the
   ${inputOptions.timeOfDay} for approximately ${inputOptions.datelength} hours long. The budget of the date 
   should be ${inputOptions.budget}. For one of the three ideas, consider the following additional context, information,
   preferences, or keywords for generating the date idea: "${inputOptions.freeText}"`;
};

const fetchAIResponse = async (prompt, debuggingMode=true) => {
  if(debuggingMode) {
    console.log(prompt);
    return;
  }
  /*  const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);*/
};

const debugAlert = (heading, body) => {
  Alert.alert(`${heading}`, `${body}`, [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

export default function App() {
  const [location, setLocation] = useState('');
  const [timeOfDayIndex, setTimeOfDayIndex] = useState(0);
  const [datelength, setDateLength] = useState(0);
  const [budgetIndex, setBudgetIndex] = useState(0); 
  const [freeText, setFreeText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Date Lab v1.0</Text>
      {/** Location */}
      <Input
        onChangeText={newLocation => setLocation(newLocation)}
        label={"Location"}
      />
      {/** Time Of Day */}
      <ButtonGroup
        buttons={inputOptions.timeOfDay}
        label = {'Time of Day'}
        selectedIndex={timeOfDayIndex}
        onPress={(value) => {
          setTimeOfDayIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      {/** Length */}
      <Text>Date Length</Text>
      <Slider
        style={{width: 350, height: 40}}
        value={datelength}
        minimumValue={0}
        maximumValue={12}
        step={0.5}
        onValueChange={(newDateLength) => setDateLength(newDateLength)}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />
      <Text style={{ padding: 10 }}>{datelength} Hours</Text>
      {/** Budget */}
      <ButtonGroup
        buttons={inputOptions.budget}
        label = {'Budget'}
        selectedIndex={budgetIndex}
        onPress={(value) => {
          setBudgetIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      {/** Free Text */}
      <Input
        onChangeText={newFreeText => setFreeText(newFreeText)}
        label={"Any preferences, interests, or suggestions?"}
      />
      {/** Submit */}
      <Button
        title="Submit Form"
        onPress={() => console.log(fetchAIResponse(generatePrompt({
          location: location,
          timeOfDay: inputOptions.timeOfDay[timeOfDayIndex],
          datelength: datelength,
          budget: inputOptions.budget[budgetIndex],
          freeText: freeText 
        })))}
      />

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
});
