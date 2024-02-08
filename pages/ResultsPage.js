import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import { resultsPageStyle } from '../lib/styles';
import { fetchAIResponse } from '../lib/lib';
import animation from '../assets/images/laboutput.gif';

export function ResultsPage(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(
        () => {
            async function fetchData() {
            try {
                setLoading(true);
                const data = await fetchAIResponse(props.payload, false);
                setData(data);
                // switch loading to false after fetch is complete
                setLoading(false);
            } catch (error) {
                // add error handling here
                setLoading(false);
                console.log(error);
            }
        }
        fetchData();
    }, []);

  if(loading) return (
    <View style={resultsPageStyle.container}>
        <Text>Loading...</Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={animation}
        />
        <StatusBar style="auto" />
    </View>
  );

  if (!data) return (
    <View style={resultsPageStyle.container}>
        <Text>Data not available</Text>
        <StatusBar style="auto" />
    </View>
  );  
  return (
    <View style={resultsPageStyle.container}>
      <Text>Date Lab v1.0 - Results</Text>
      <Text tyle={resultsPageStyle.dateResults}> {data.message.content} </Text>
      <StatusBar style="auto" />
    </View>
  );
}
