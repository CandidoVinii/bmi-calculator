import React, { useState } from 'react';
import './index.css'

function App() {
  //estado

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcaBmi = (event) => {
    event.preventDefault();

    if (peso === 0 || altura === 0) {
      alert('Por favor insira os valores de peso e altura');
    
    } else {
      let bmi = (peso / (altura * altura))
      setBmi(bmi.toFixed(2))

      if (bmi < 17) {
        setMessage ('Abaixo do peso');
      } else if (bmi > 18.5 && bmi < 24.9) {
        setMessage ('Peso ideal');
      } else if (bmi > 25 && bmi < 29.99) {
        setMessage ('Acima do peso');
      }
    }
  }
  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='container'>
        <h2 className='center'>BMI calculator</h2>
        <form onSubmit={calcaBmi}>
          <div>
            <label>Peso (KG)</label>
            <input value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
          <div>
            <label>Altura</label>
            <input value={altura} onChange={(event) => setAltura(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Recarrega</button>
          </div>
        </form>
        <div className='center'>
          <h3>Seu BMI é: {bmi} </h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
        </div>
      </div>
    </div>
  );
}

export default App;