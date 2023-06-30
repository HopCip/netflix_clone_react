import React from 'react'

const Footer = ({ setFilteredMovies, allMovies }) => {
  return (
    <div>
      <button
        className="reset_movies_btn"
        onClick={() => {
          setFilteredMovies(allMovies)
        }}
      >
        Resetuj Filmy
      </button>
    </div>
  )
}

export default Footer
