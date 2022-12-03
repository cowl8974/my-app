import React, { useState } from 'react';



function Calculator() {
  // use the useState hook to create state variables
  // for the initial investment, the rate of return,
  // and the number of years
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [rateOfReturn, setRateOfReturn] = useState(0);
  const [years, setYears] = useState(0);

  // calculate the ROI based on the inputs
  const roi = initialInvestment * (rateOfReturn / 100) * years;

  return (
    <div>
      <h1>Return on Investment Calculator</h1>

      <div>
        <label>
          Initial Investment:
          <input
            type="number"
            value={initialInvestment}
            onChange={e => setInitialInvestment(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Rate of Return (%):
          <input
            type="number"
            value={rateOfReturn}
            onChange={e => setRateOfReturn(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Years:
          <input
            type="number"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </label>
      </div>

      {/* add a new element to display the calculated ROI */}
      <h2>ROI: ${roi.toFixed(2)}</h2>
    </div>
  );
}



export default Calculator;

