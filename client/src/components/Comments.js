import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const CommentsContainer = styled.div`
    h3 {
        text-align: left;
        margin: 4% 2% 1%;
        font-size: 1.1rem;
    }
    p {
        font-size: 1rem;
        margin-top: 1%;
        span {
            font-weight: bold;
            color: blue;
            margin-right: 5px;
        }
    }
`

const Comments = ({ comments }) => {
    const [usernames, setUsernames] = useState([]);
    useEffect(() => {
        axios.get(`http://names.drycodes.com/${comments.length}`)
            .then((response) => setUsernames(response.data))
    }, [comments])
    return (
        <CommentsContainer>
            <h3>Comments</h3>
            {comments.map((comment, index) => {
                return (
                    <p key={comment.id}><span>{usernames[index]}</span>{comment.text}</p>
                )
            })}
        </CommentsContainer>
    )
}

export default Comments;