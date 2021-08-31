import fs from 'fs';
import path from 'path';

function handler(req, res) {
    const feedbackId = req.query.feedbackId;

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    const selectedFeedback = data.find((item) => item.id === feedbackId);

    res.status(200).json({ feedback: selectedFeedback });
}

export default handler;