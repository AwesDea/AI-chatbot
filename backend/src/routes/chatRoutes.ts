import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    // TODO: Integrate with AI service here
    const reply = `Echo: ${message}`;

    res.json({ reply });
  } catch (error) {
    console.error('Error in chat route:', error);
    res.status(500).json({ error: 'An error occurred while processing your message' });
  }
});

export default router;