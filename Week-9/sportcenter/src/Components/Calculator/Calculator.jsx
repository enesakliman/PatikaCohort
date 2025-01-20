import React, { useState } from 'react';
import Container from '../Container/Container';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';

const Calculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [position, setPosition] = useState(0);

  const calculateBMI = () => {
    
    const heightM = parseFloat(height) / 100; 
    const weightKG = parseFloat(weight); 
  

    if (!heightM || heightM <= 0 || !weightKG || weightKG <= 0) {
      setBMI('');
      setPosition(0);
      return;
    }
    console.log(height, weight);
    console.log(heightM, weightKG);

    const bmiValue = weightKG / (heightM * heightM);
    setBMI(bmiValue.toFixed(2));
  

    let calculatedPosition = 0;
    if (bmiValue < 18.5) {
      calculatedPosition = 10; 
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      calculatedPosition = 30; 
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      calculatedPosition = 50; 
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
      calculatedPosition = 70; 
    } else if (bmiValue >= 35) {
      calculatedPosition = 90; 
    }
  
    
    setPosition(calculatedPosition);
  };
  

  return (
    <section id="calculator" className="h-auto py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CalculatorInput
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
            onCalculate={calculateBMI}
          />
          <CalculatorResult bmi={bmi} position={position} />
        </div>
        </Container>
    </section>
  );
};

export default Calculator;
