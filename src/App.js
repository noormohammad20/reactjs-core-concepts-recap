import './App.css'
import { useEffect, useState } from 'react'

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="noakhali" special="vibag"></District>
      <District name="bramonbaria" special="jodda"></District>
      <District name="kumilla" special="moyna and moti"></District>

    </div>
  )
}

function LoadPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts:{posts.length} </h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
const Post = (props) => {
  return (
    <div style={{ backgroundColor: 'lightgray', margin: '20px', border: '5px solid salmon' }}>
      <h2>{props.title}</h2>
      <p>{props.body}
      </p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightblue',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px'
}

function District(props) {
  const [power, setPower] = useState(1)
  const boostPower = () => {
    setPower(power * 2)
  }
  return (
    <div style={districtStyle}>
      <h2>name:{props.name} </h2>
      <p>specialty: {props.bivag}</p>
      <h4>power:{power} </h4>
      <button onClick={boostPower}>boost the power </button>
    </div>
  )
}

export default App
