import React, {useState, useEffect} from 'react'
import Post from './components/Post'
import Menu from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

// Fetching the data
// const postsList = fetch('http://127.0.0.1:8000/posts').then((response) => {})

const postsList = [
  {
    'title': 'My First blog post',
    'date_created': '2021-01-01',
    'body': 'This is the first post that i created, in reality im a dummy'
  },
  {
    'title': 'My Second blog post',
    'date_created': '2021-02-01',
    'body': 'This is the second post that i created, in reality im a dummy'
  },
  {
    'title': 'My Third blog post',
    'date_created': '2021-03-01',
    'body': 'This is the third post that i created, in reality im a dummy'
  },
]

function App() {
  return (
    <Menu/> 
  )
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     'http://127.0.0.1:8000/posts',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  //   .then(resp=>resp.json().then(resp=>setPosts(resp))).then(error=>console.log(error))
  // })

}

export default App
