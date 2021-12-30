import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  const [questions, setQuestions] = useState(data)
  return <h2>Questions and Answers Preoject setup</h2>
}
export default App
