import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SinglePost } from './style'
import Axios from 'axios';

function BlogItem(props) {
    const [postItem, setPostItem] = useState([])
    const {
        match: {
            params: {
                uniqueParamFromPath
            }
        }
    } = props
    console.log(postItem)
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${uniqueParamFromPath}`)
            .then(res => setPostItem(res.data))
    }, [uniqueParamFromPath]);

    return (
        <SinglePost id="one-post">
            {
                <div>
                    <h1>{postItem.title}</h1>
                    <p>{postItem.body}</p>
                </div>
            }

            {
                postItem.id > 91 ? (
                    <div className="prev-next">
                        <Link to={`/blog/${parseInt(postItem.id) - 1}`}> &lt; Previous Post</Link>
                        <Link to={`/`} className="view-all">View All Posts</Link>
                        <Link to={`/blog/${parseInt(postItem.id) + 1}`}>Next Post &gt;</Link>
                    </div>
                ) : (
                        <div className="prev-next">
                            <Link to={`/blog/${parseInt(postItem.id) + 1}`}>Next Post</Link>
                        </div>
                    )
            }


        </SinglePost>
    )
}

export default BlogItem;