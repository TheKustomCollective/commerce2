// backend/src/routes/api.js

import express from 'express';
import { getAIResponse } from '../controllers/aiController';

const router = express.Router();

// Define the API route for AI responses
router.post('/ai', getAIResponse);

export default router;