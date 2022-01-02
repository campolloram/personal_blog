import React from 'react';
import Post from './Post.js';
import axios from 'axios';
  

function Posts() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/posts')
        .then(resp => {
            setPosts(resp.data)
        })
    }, [])

    return (
        <div>
            <ul>
            {posts.map(_post => (
                <li> <Post key={_post.id} post={_post}></Post> </li>
            ))}
            </ul>
        </div>
    )
}


export default Posts;
