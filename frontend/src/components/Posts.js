import React from 'react';
import Post from './Post.js';


const postsList = [
    {
        id: 1,
        title: 'My First blog post',
        date_created: '2021-01-01',
        body: 'This is the first post that i created, in reality im a dummy'
    },
    {
        id: 2,
        title: 'My Second blog post',
        date_created: '2021-01-01',
        body: 'This is the first post that i created, in reality im a dummy'
    },
    {
        id: 3,
        title: 'My Third blog post',
        date_created: '2021-01-01',
        body: 'This is the first post that i created, in reality im a dummy'
    }
  ]

function Posts() {
    return (
        <div>
            {postsList.map((_post) => {
                return <Post key={_post.id} post={_post}></Post>;
            })}
        </div>
    )
}

export default Posts;
