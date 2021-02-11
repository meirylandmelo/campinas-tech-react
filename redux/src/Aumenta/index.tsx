import React from 'react';
import { useDispatch } from 'react-redux'

const Aumenta = () => {


  const dispatch = useDispatch()

  return (
    <div>
      
      <button 
        onClick={() => dispatch({ type: 'AUMENTA_VALOR'})}
      >
        <b>+</b>
      </button>

    </div>
  );
}

export default Aumenta;