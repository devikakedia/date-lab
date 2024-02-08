import OpenAI from "openai";

export const openai = new OpenAI({ 
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY// import environment variable
});

export const inputOptions = {
  location: "",
  timeOfDay: ["Morning", "Afternoon", "Evening"],
  datelength: 0,
  budget: ["Free", "Cheap", "Moderate", "Expensive"],
  freeText: ""
};

export const generatePrompt = (inputOptions) => {
  return `Generate a date idea in ${inputOptions.location} during the ${inputOptions.timeOfDay} for total ${inputOptions.datelength} hours long with ${inputOptions.budget} budget and consider the keywords: "${inputOptions.freeText}". Under 130 words. make sub-bullets`;
};

export const fetchAIResponse = async (prompt, debuggingMode=true) => {
  if(debuggingMode) {
    console.log(prompt);
    return {prompt: prompt};
  }
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a date ideas assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 200,
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    console.log(completion.choices[0]);
    return completion.choices[0];
};

export const debugAlert = (heading, body) => {
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