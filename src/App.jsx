import './App.css'
import { useState, useEffect} from 'react'
import ListCharacters from './components/listCharacters'


function App() {
  const [data,setDate] = useState([])
  

  useEffect(() => {
    async function fetchData() {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setDate(data.results)
    }
    fetchData()
  }, []) 
  
  return (
    <>
    <main className='main'>
      <div className='contentTitle'>
        <h1  className='titleMain'>The Rick And Morty API</h1>
      </div>
      
      <ListCharacters list={data}/>

      <footer className='footer'>
        <b>Consumindo API rick and morty, com react</b>
        <p>
          Desenvolvido por: <a href="https://github.com/henriqueez7" target="_blank">Pedro Henrique</a>
        </p>
      </footer>
    </main>
      
    </>
  )
}

export default App
