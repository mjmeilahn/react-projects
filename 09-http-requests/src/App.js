
import React, { useState, useEffect, useCallback } from 'react'
import MoviesList from './components/MoviesList'
import AddMovie from './components/AddMovie'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovies = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch('https://swapi.dev/api/films')
      if (!res.ok) {
        throw new Error('Invalid HTTP Request URL.')
      }

      const data = await res.json()
      const reformatMovies = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
      })
      setMovies(reformatMovies)
    }
    catch (e) {
      console.error(e.message)
      setError(e.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const addMovieHandler = movie => {
    console.log(movie)
  }

  let content = <p>Found no movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies}/>
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  )
}

export default App
