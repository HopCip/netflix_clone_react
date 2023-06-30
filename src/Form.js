import React from 'react'

function Form({ setSearchingText }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Hľadať film"
        onChange={(e) => {
          setSearchingText(e.target.value)
        }}
      ></input>
    </form>
  )
}

export default Form
