// services/gptService.js
const axios = require('axios');

exports.generateStory = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const response = await axios.post(
    endpoint,
    {
      model: "gpt-4",
      messages: [{ role: "user", content: `Convierte este recuerdo en una historia emotiva: ${prompt}` }],
      max_tokens: 400
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].message.content;
};