import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed'
import { introPageStyle } from '../lib/styles';

export function IntroPage(props) {

  return (
    <View style={introPageStyle.container}>
      <Text>Date Lab v1.0 - Intro</Text>
      {/** Get A Date */}
      <Button
        title="Let's Generate A Date!"
        onPress={() => props.setParentPage('dateInputPage')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
