import React from 'react';
import '../styles/Post.css'


const Post = (props) => {
  const { title, date_created, body } = props.post
  console.log(props);
  return (
    <article className="container-menu">
      <h2 className="PostTitle"> { title } </h2>
      <h5> { date_created } </h5>
      <p> { body } </p>
    </article>
  )
}


export default Post;
