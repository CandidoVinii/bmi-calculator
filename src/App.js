import React, { useState } from 'react';
import './index.css'

function App() {
  //estado

  const {peso, setPeso} = useState(0);
  const {altura, setAltura} = useState(0);
  const {bmi, setBmi} = useState('');
  const {message, setMessage} = useState('');

  let imgSrc = '';

  let calcaBmi = (event) => {
    event.preventDefault();

    if (peso === 0 || altura === 0) {
      alert('Por favor insira os valores de peso e altura');
    
    } else {
      let bmi = (peso / (altura * altura));
      setBmi(bmi.toFixed(2));
    }
  }


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