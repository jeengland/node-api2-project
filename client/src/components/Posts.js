import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:4000/api/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        posts.map((post) => {
            return (
                <Post key={post.id} title={post.title} contents={post.contents} id={post.id} />
            )
        })
    )
}

export default Posts;