import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const API_KEY='2535d346a0b2d61ad9125dff5caec902'

function App() {
  const [movies, setMovies] = useState([])
  const [query,setQuery]=useState("")

  const Getmovies=async ()=>{
    const response=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
    setMovies(response.data.results)
  }

  return (
    <>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>

      <button onClick={Getmovies}>clickme</button>
      {movies.map((movie)=>(

        <div key={movie.id}>
        <img src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`} alt="pic" />

        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        </div>
        ))}


      
    </>
  )
}

export default App
