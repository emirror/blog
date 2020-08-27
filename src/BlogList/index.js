import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BlogCard from './BlogCard';
import {BlogListStyle} from './blogListStyle';


function BlogList() {
    const [posts, setPosts] = useState([]);

    const exactUserId = posts.filter(post => {
        return post.userId === 10
    })

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                res => {
                    if (res.status == 200) {
                        setPosts(res.data)
                        // console.log(posts) why post are undefined here?

                    }
                }
            );
    }, [])
    return (
        <React.Fragment>

            <h1>All Blog Posts</h1>
            <BlogListStyle>
                {

                    exactUserId.map(post => {
                        return <BlogCard key={post.id} postContent={post} />
                    })
                }
            </BlogListStyle>
        </React.Fragment>
    )
}

export default BlogList;