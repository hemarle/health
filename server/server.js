import  express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';
const app = express();
const port = process.env.PORT || 5000;

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});
app.use(express.json());

app.post('/chat', async (req, res) => {
	try {
        const userMessage = req.body.message; 
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
        });
        const botReply = chatCompletion.choices[0].message.content
        res.json({ reply: botReply });

	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

// Handle React routing, return all requests to React app
app.get('/api', (req, res) => {
	// res.sendFile(path.join(__dirname, 'build', 'index.html'));
	res.json('working');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
