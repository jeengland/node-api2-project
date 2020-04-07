import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import Post from './Post';

const PostsContainer = styled.main`
    background-color: pink;
    margin: 0 auto;
    width: 1000px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:4000/api/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <PostsContainer>
            {posts.map((post) => {
                return (
                    <Post key={post.id} title={post.title} contents={post.contents} id={post.id} />
                    )
                })}
        </PostsContainer>
    )
}

export default Posts;