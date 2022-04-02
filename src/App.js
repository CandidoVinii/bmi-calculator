import React, { useState } from 'react';
import './index.css'

function App() {
  //estado

  const {peso, setPeso} = useState(0);
  const {altura, setAltura} = useState(0);
  const {bmi, setBmi} = useState('');
  const {message, setMessage} = useState('');

  let imgSrc = '';


  return (
    <div className="App">
      <div className='container'>
        <h2 className='center'>BMI calculator</h2>
        <form>
          <div>
            <label>Peso</label>
            <input value={peso} />
          </div>
          <div>
            <label>Altura</label>
            <input value={altura} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit'>Submit</button>
          </div>
        </form>
        <div className='center'>
          <h3>Seu BMI é: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc}></img>
        </div>
      </div>
    </div>
  );
}

export default App;