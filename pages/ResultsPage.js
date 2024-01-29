import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed'
import { resultsPageStyle } from '../lib/styles';

export function ResultsPage(props) {

  return (
    <View style={resultsPageStyle.container}>
      <Text>Date Lab v1.0 - Results</Text>
      {/** Get A Date */}
      <Button
        title="Let's Generate A Date!"
        onPress={() => props.setParentPage('dateInputPage')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
