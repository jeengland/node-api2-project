import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:4000/api/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        null
    )
}

export default Posts;