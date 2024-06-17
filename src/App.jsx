import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handlePasswordLengthChange = (e) => {
    const length = parseInt(e.target.value);
    setPasswordLength(length);
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;

    switch (checkboxName) {
      case 'uppercase':
        setIncludeUppercase(isChecked);
        break;
      case 'lowercase':
        setIncludeLowercase(isChecked);
        break;
      case 'numbers':
        setIncludeNumbers(isChecked);
        break;
      case 'symbols':
        setIncludeSymbols(isChecked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Generador de Contraseñas Seguras</h1>
      <div className="password-container">
        <input
          type="number"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
          min="4"
          max="50"
          step="1"
        />
        <button onClick={generatePassword}>Generar Contraseña</button>
      </div>
      <div className="checkbox-container">
        <label>
          <input
            className='checky'
            type="checkbox"
            name="uppercase"
            checked={includeUppercase}
            onChange={handleCheckboxChange}
          />
          Incluir mayúsculas
        </label>
        <label>
          <input
            className='checky'
            type="checkbox"
            name="lowercase"
            checked={includeLowercase}
            onChange={handleCheckboxChange}
          />
          Incluir minúsculas
        </label>
        <label>
          <input
            className='checky'
            type="checkbox"
            name="numbers"
            checked={includeNumbers}
            onChange={handleCheckboxChange}
          />
          Incluir números
        </label>
        <label>
          <input
            className='checky'
            type="checkbox"
            name="symbols"
            checked={includeSymbols}
            onChange={handleCheckboxChange}
          />
          Incluir símbolos
        </label>
      </div>
      <div className="password-display">
        <input type="text" value={password} readOnly />
        <button onClick={() => navigator.clipboard.writeText(password)}>
          Copiar al Portapapeles
        </button>
      </div>
    </div>
  );
}

export default App;
