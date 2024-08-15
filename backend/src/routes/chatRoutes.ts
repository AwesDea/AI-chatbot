import express from 'express';
import { generateAIResponse } from '../services/aiServices';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Generate AI response 
    const reply = await generateAIResponse(message);

    res.json({ reply });
  } catch (error) {
    console.error('Error in chat route:', error);
    res.status(500).json({ error: 'An error occurred while processing your message', details: error.message });
  }
});

export default router;