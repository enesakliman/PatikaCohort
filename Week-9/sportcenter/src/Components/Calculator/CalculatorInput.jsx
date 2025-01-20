const CalculatorInput = ({ height, setHeight, weight, setWeight, onCalculate }) => {
    return (
      <div className="calculator-content flex flex-col mt-10">
        <h3 className="text-4xl font-black text-darkBlue py-3">BMI Calculator</h3>
        <p className="text-xl font-semibold mb-4 text-textGray">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, perferendis! Fugit accusantium itaque ullam, officiis sit similique sunt voluptatem molestiae.
        </p>
        <p className="text-xl font-semibold mb-4 text-textGray">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, perferendis! Fugit accusantium itaque ullam, officiis sit similique sunt voluptatem molestiae.
        </p>
        <div>
          {/* Boy Input */}
          <input
            type="number"
            name="height"
            id="c-height"
            min="0"
            max="250"
            placeholder="Your Height"
            className="rounded p-1.5 w-1/3"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onInput={onCalculate}
          />
          <label htmlFor="height"> cm</label>
          {/* Kilo Input */}
          <input
            type="number"
            name="weight"
            id="c-weight"
            min="0"
            max="250"
            placeholder="Your Weight"
            className="rounded p-1.5 w-1/3"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onInput={onCalculate}
          />
          <label htmlFor="weight"> kg</label>
        </div>
      </div>
    );
  };
  
  export default CalculatorInput;
  