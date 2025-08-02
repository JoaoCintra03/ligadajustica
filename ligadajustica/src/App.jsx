import './global.css'

function App() {

  function alerta() {
    alert('vc me apertou')
  }
  return(
    <>
    <h1 className='titulo'>Hello Fk</h1>
    <button onClick={alerta}>Aperte me</button>
    </>
  )
}

export default App