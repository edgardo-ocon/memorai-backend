// services/imageService.js
const axios = require('axios');

exports.generateImage = async (prompt) => {
  const endpoint = 'https://api.openai.com/v1/images/generations';
  const apiKey = process.env.OPENAI_API_KEY;

  const response = await axios.post(
    endpoint,
    {
      prompt: `Genera una imagen emotiva basada en este recuerdo: ${prompt}`,
      n: 1,
      size: "1024x1024"
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.data[0].url;
};
