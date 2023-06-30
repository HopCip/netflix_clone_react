import React from 'react'
import Movie from './Movie'

function Movies({ filteredMovies, removeMovie }) {
  return (
    <div className="all_movies">
      {filteredMovies.map((oneMovie) => {
        return (
          <Movie
            filteredMovies={filteredMovies}
            removeMovie={removeMovie}
            key={oneMovie.id}
            {...oneMovie}
          />
        )
      })}
    </div>
  )
}

export default Movies
