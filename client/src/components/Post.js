import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import Comments from './Comments';

const PostContainer = styled.section`
    border: 1px solid black;
    border-radius: 5px;
    width: 800px;
    padding: 1%;
    margin: 2% auto;
    background-color: white;
    h2 {
        text-align: left;
        margin: 1% 2%
    }
    p {
        text-align: left;
        margin: 0 2%;
        font-size: 1.2rem
    }
`

const Post = ({ title, contents, id }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/posts/${id}/comments`)
            .then((response) => setComments(response.data))
            .catch((error) => console.error(error))
    }, [id])
    return (
        <PostContainer>
            <h2>{title}</h2>
            <p>{contents}</p>
            {comments.length
                ? <Comments comments={comments} />
                : undefined
            }
        </PostContainer>
    )
}

export default Post;