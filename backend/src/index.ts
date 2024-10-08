import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/chat', chatRoutes);

app.get('/', (req, res) => {
  res.send('Chatbot API is running');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});