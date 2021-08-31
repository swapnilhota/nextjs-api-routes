import React, { useState } from 'react'
import fs from 'fs';
import path from 'path';

const FeedbackPage = (props) => {

    const [feedbackData, setFeedbackData] = useState();

    const loadFeedbackHandler = (id) => {
        fetch(`/api/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFeedbackData(data.feedback);
            })
    }

    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {props.feedbackItems.map((item) => (
                    <li key={item.id}>
                        {item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export const getStaticProps = async () => {
    //runs in server
    //similar logic as in handler in api
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
