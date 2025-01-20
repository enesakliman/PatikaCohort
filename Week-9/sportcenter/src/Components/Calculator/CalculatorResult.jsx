import bmiImage from '../../assets/bmi-index.jpg';

const CalculatorResult = ({ bmi, position }) => {
    return (
      <div className="calculator-result flex flex-col items-center">
        <h6 className="text-2xl font-semibold">
          Your BMI <span id="bmi-span">{bmi}</span>
        </h6>
        <div className="bmi-scroll relative">
          <img src={bmiImage} alt="BMI Index" />
          <div
            className={`scroll-icon absolute bg-orange transition-all ${
              !bmi ? 'hidden' : ''
            }`}
            style={{ left: `${position}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default CalculatorResult;
  