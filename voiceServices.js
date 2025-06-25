// services/voiceService.js
const axios = require('axios');

exports.generateVoice = async (text) => {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;
  const endpoint = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const response = await axios.post(
    endpoint,
    {
      text,
      voice_settings: { stability: 0.75, similarity_boost: 0.75 }
    },
    {
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    }
  );

  // Aquí deberías subir el archivo a S3 o Cloudinary y devolver la URL
  // Por ahora, guardamos como base64 temporal (ejemplo educativo)
  const audioBase64 = Buffer.from(response.data, 'binary').toString('base64');
  return `data:audio/mpeg;base64,${audioBase64}`;
};
