import React, {useState} from 'react'
import MostraGif from './components/MostraGif'
import './index.css'


function App() {
  const [showGif, setShowGif] = useState(false)

  const cliqueGif = () => {
    setShowGif(showGif ? false : true)
  } 

  return (
    <div className="App">
      <button onClick={cliqueGif}>Mostrar Gif</button> <br /> 
      {showGif && <MostraGif clique={cliqueGif} />}
    </div>
  );
}

export default App;
