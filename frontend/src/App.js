import React, {useState, useEffect} from 'react'
import Posts from './components/Posts'
import Menu from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

// Fetching the data
// const postsList = fetch('http://127.0.0.1:8000/posts').then((response) => {})


function App() {
  return (
    <div>
      <Menu/>
      <Posts/>
    </div>
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
