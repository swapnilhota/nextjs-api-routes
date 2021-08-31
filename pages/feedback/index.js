import React from 'react'
import fs from 'fs';
import path from 'path';

const FeedbackPage = (props) => {
    return (
        <ul>
            {props.feedbackItems.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export const getStaticProps = async () => {
    //runs in server
    //similar logic as in handler in _api
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return {
        props: {
            feedbackItems: data,
        }
    }
}

export default FeedbackPage
