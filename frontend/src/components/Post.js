import React from 'react';


const Post = (props) => {
  const { title, date_created, body } = props.post
  console.log(props);
  return (
    <article className='container'>
      <h2>{title}</h2>
      <h5>{date_created}</h5>
      <p>{body}</p>
    </article>
  )
}


export default Post;
