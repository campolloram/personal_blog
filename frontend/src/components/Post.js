import React from 'react'


const Post = ({title, date_created, date_updated, body}) => {
  console.log(title)
  return (
    <div>
      <h2>{title}</h2>
      <h5>{date_created}</h5>
      <p>{body}</p>
    </div>
  )
}


export default Post;
