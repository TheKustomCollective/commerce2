// aiController.js

const OpenAIService = require('../services/openai');

exports.getAIResponse = async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await OpenAIService.getResponse(prompt);
        res.json({ response });
    } catch (error) {
        console.error('Error fetching AI response:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};