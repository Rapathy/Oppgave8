import { useEffect, useState } from 'react'
import { getMovie } from '../lib/services/movieService'

export default function MoviesPage({}) {
  const [movie, setMovie] = useState([])

  const getMovieData = async () => {
    const movies = await getMovie([])
    setMovie(movies)
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <div className="-2 mx-auto mt-6 max-w-sm border p-6">
      <section>
        {movie.map((film) => (
          <h1>{film.title}</h1>
        ))}
      </section>
    </div>
  )
}
