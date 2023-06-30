import React from 'react'
import { useState } from 'react'

function Movie({ removeMovie, id, image, title, age, tags, description }) {
  const [readMore, setReadMore] = useState(false)
  return (
    <article key={id} className="one_movie">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{age}</p>
      <p>{tags}</p>
      <p>
        {readMore ? description : `${description.substring(0, 225)}...`}
        <button
          className="read_more_btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'ukáž menej' : '  čítaj viac'}
        </button>
      </p>
      <button
        className="delete_movie_btn"
        onClick={() => {
          removeMovie(id)
        }}
      >
        ODSTRÁNIŤ
      </button>
    </article>
  )
}

export default Movie
