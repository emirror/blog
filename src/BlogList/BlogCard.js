import React from 'react';
import { Link } from 'react-router-dom';
function BlogCard(props) {
    return (
        <div>
            <h3>{props.postContent.title}</h3>
            <p>{props.postContent.body}</p>
            <Link to={`/blog/${props.postContent.id}`}>
                <span>Read more ...</span>
            </Link>
        </div>
    )
}

export default BlogCard;