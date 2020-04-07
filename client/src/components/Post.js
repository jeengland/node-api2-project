import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments';

const Post = ({ title, contents, id }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/posts/${id}/comments`)
            .then((response) => setComments(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <div>
            <h2>{title}</h2>
            <p>{contents}</p>
            { comments.length
                ? <Comments comments={comments} />
                : undefined
            }
        </div>
    )
}

export default Post;