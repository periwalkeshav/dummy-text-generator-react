import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let number = parseInt(count)
    if (count <= 0) {
      number = 1
    }
    if (count > 13) {
      number = 13
    }
    setText(data.slice(0, number))
  }
  const handleChange = (e) => {
    if (e.target.value < 0) {
      // alert('Value cannot be negative')
      e.target.value = 0
    }
    setCount(e.target.value)
  }
  return (
    <section className='section-center'>
      <h3>Dummy Text Generator</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='number'>Paragraphs: </label>
        <input
          type='number'
          name='amount'
          id='number'
          value={count}
          onChange={handleChange}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
      <footer>
        <p className='text-bottom'>* Currently there are only 13 paragraphs stored.</p>
      </footer>
    </section>
  )
}

export default App
