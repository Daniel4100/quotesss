import { useState } from 'react'
import quotes from './json/quotes.json'
import './App.css'
import Quote from './components/quote'

const arrayColors = ['#504903', '#C1C249', '#CC299E', '#A9992F', '#CEE3EF', '#3D617E', '#1FFD9D', '#12D0C0', '#6DA27B', '#0CC4EB', '#8755F3', '#37D10B', '#8B3569', '#187DEE', '#BA3717', '#5EFFED', '#5E0202', '#F81975', '#E7013D', '#EA41EC', '#653681', '#89524A', '#41E3D6', '#E91B4E', '#3F29DB', '#ADD29A', '#8A81E4', '#71B9E6', '#9E578D', '#7FC4FD', '#087ED9', '#71FCC0', '#964F90', '#1F5351' , '#D7B764', '#7383B8', '#66D3D4', '#2607BC', '#D2915D', '#4F94FE', '#94C8DA', '#603172', '#6DDCC0', '#F56698', '#EAFE4E', '#02ABC5']

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const index = createNumberRandom(array)
    return array[index]
  }

  // let numberRandomQuote= createNumberRandom(quotes)
  // let numberRandomColors = createNumberRandom(arrayColors)

  const [quoteRandom, setUserRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setCorlorRandom] = useState(getElementRandom(arrayColors))


const clickButton = () => {
  setUserRandom(getElementRandom(quotes))
  setCorlorRandom(getElementRandom(arrayColors))
}

  const quoteStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={quoteStyle} className="App">
      <Quote 
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App
