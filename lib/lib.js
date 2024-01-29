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
  return `Generate three multiple part date ideas in ${inputOptions.location} during the ${inputOptions.timeOfDay} for ${inputOptions.datelength} hours long with ${inputOptions.budget} budget and for one idea consider the keywords "${inputOptions.freeText}"`;
};

export const fetchAIResponse = async (prompt, debuggingMode=true) => {
  if(debuggingMode) {
    console.log(prompt);
    return;
  }
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a date ideas assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 500,
      model: "gpt-3.5-turbo",
    });
    console.log("test");
    console.log(completion);
    console.log('\n');
    console.log(completion.choices[0]);
    debugAlert('GPT Response', `${completion.choices[0]}`);
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