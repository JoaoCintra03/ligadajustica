import './styles/global.css'
import { Header } from './components/Header'
import { useCallback, useEffect, useState } from 'react'

function App() {

  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('Buscar produtos no backend')
  }, [contador])

function somar () {
  
   setContador  (contador + 1)

  console.log(contador)
}

  const alerta = useCallback (() => {
    alert(`Contador ${contador}`)
    console.log(corTitulo)
  }, [])
  return(
    <>
    {
      contador < 5 && (
         <Header />
      )
    }
    <h1>Contador {contador}</h1>
    <h1 style={{
      backgroundColor: 'yellow',
      color:'green'
    }}>
      Brinfu faça seu cadastro na aula do marco e y
    </h1>
    <button onClick={alerta}>Aperte me</button>
    <button onClick={somar}>Somar cliques</button>
    </>
  )
}

export default App