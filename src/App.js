import allMovies from './data'
import Navbar from './Navbar'
import Form from './Form'
import Movies from './Movies'
import Footer from './Footer'
import { useState, useEffect } from 'react'

const App = () => {
  const [searchingText, setSearchingText] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    let moviesAfterFilter = allMovies.filter((oneMovie) => {
      return oneMovie.title
        .toLocaleLowerCase()
        .includes(searchingText.toLocaleLowerCase())
    })
    setFilteredMovies(moviesAfterFilter)
  }, [searchingText])

  let removeMovie = (id) => {
    const newMovieArray = filteredMovies.filter((movie) => movie.id !== id)
    setFilteredMovies(newMovieArray)
  }

  return (
    <>
      <Navbar />
      <div className="movies_box">
        <Form setSearchingText={setSearchingText} />
        <Movies filteredMovies={filteredMovies} removeMovie={removeMovie} />
        <Footer setFilteredMovies={setFilteredMovies} allMovies={allMovies} />
      </div>
    </>
  )
}
export default App
