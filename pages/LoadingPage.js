import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed'
import { loadingPageStyle } from '../lib/styles';

export function LoadingPage(props) {

  return (
    <View style={loadingPageStyle.container}>
      <Text>Date Lab v1.0 - Loading</Text>
      {/** Get A Date */}
      <Button
        title="Let's Generate A Date!"
        onPress={() => props.setParentPage('dateInputPage')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
