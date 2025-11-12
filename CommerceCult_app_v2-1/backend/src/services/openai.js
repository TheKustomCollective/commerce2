const axios = require('axios');
const { OPENAI_API_KEY } = process.env;

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

const generateResponse = async (prompt) => {
    try {
        const response = await openai.post('/chat/completions', {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        throw error;
    }
};

module.exports = {
    generateResponse,
};