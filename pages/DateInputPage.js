import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button, Input, ButtonGroup } from '@rneui/themed'
import Slider from '@react-native-community/slider';
import { generatePrompt, fetchAIResponse, inputOptions, debugAlert } from '../lib/lib';
import { dateInputPageStyle } from '../lib/styles';

export function DateInputPage(props) {
  const [location, setLocation] = useState('');
  const [timeOfDayIndex, setTimeOfDayIndex] = useState(0);
  const [datelength, setDateLength] = useState(0);
  const [budgetIndex, setBudgetIndex] = useState(0); 
  const [freeText, setFreeText] = useState('');

  return (
    <View style={dateInputPageStyle.container}>
      <Text>Date Lab v1.0 - Date Input</Text>
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
        onPress={() => fetchAIResponse(generatePrompt({
          location: location,
          timeOfDay: inputOptions.timeOfDay[timeOfDayIndex],
          datelength: datelength,
          budget: inputOptions.budget[budgetIndex],
          freeText: freeText 
        }), false)}
      />

      <StatusBar style="auto" />
    </View>
  );
}
