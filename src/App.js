import Input from './components/Input';
import Button from './components/Button';
import './styles.css';
import { useState } from 'react';

export default function App() {

  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev} ${number}`)
  }

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  }

  const handleSumNumbers = () => {

    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleMinusNumbers = () => {

    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleMultiNumbers = () => {

    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('x');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleDivNumbers = () => {

    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleEquals = () => {

    if (firstNumber !== '' && operation !== '' && currentNumber !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="Container">
      <div className="Content">

        <Input value={currentNumber} />

        <div className="Row">
          <Button label="C" onClick={() => handleClear()} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="x" onClick={handleMultiNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
        </div>

        <div className="Row">
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="=" onClick={handleEquals} />
        </div>

        <div className="Row">
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleSumNumbers()} />
        </div>

        <div className="Row">
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </div>


      </div>
    </div>
  );
}


