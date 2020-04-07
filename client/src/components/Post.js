import React from 'react';

const Post = ({ title, contents, id }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{contents}</p>
        </div>
    )
}

export default Post;