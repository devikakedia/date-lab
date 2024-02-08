import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Button } from '@rneui/themed'
import { introPageStyle } from '../lib/styles';
import {
  useFonts,
  Roboto_400Regular,
} from "@expo-google-fonts/dev";
import animation from '../assets/images/laboutput.gif';


export function IntroPage(props) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  } else {
    return (
      <View style={introPageStyle.container}>
        <Text style={{ fontFamily: "Roboto_400Regular", fontWeight: "bold", fontSize: 40 }}>The Date Lab</Text>
        {/** Get A Date */}
        <Image
          style={{ width: 300, height: 300 }}
          source={animation}
        />
        <Button
              title="Get Started"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(153, 50, 204, 1)',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,

              }}
              titleStyle={{
                fontFamily: "Roboto_400Regular",
                fontSize: 17,
                fontWeight: 'bold',
              }}
              containerStyle={{
                marginHorizontal: 60,
                height: 60,
                width: 270,
                marginVertical: 10,
              }}
              onPress={() => props.setParentPage('dateInputPage')}
              />
        <StatusBar style="auto" />
      </View>
    );
  }
}
