import { useState, useEffect, useCallback } from 'react';

const EMICalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Wrap calculateEMI in useCallback to prevent unnecessary re-renders
  const calculateEMI = useCallback(() => {
    // Calculate loan amount after down payment
    const downPaymentAmount = (propertyPrice * downPayment) / 100;
    const loanAmount = propertyPrice - downPaymentAmount;
    
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    // Number of months
    const months = loanTenure * 12;
    
    if (loanAmount > 0 && monthlyRate > 0) {
      // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
      const emiValue = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalPayable = emiValue * months;
      const totalInterestPayable = totalPayable - loanAmount;
      
      setEmi(Math.round(emiValue));
      setTotalPayment(Math.round(totalPayable));
      setTotalInterest(Math.round(totalInterestPayable));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [propertyPrice, downPayment, interestRate, loanTenure]); // Dependencies

  // Calculate EMI when inputs change
  useEffect(() => {
    calculateEMI();
  }, [calculateEMI]); // Now calculateEMI is a dependency

  // Format currency in Indian Rupees
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary">🏠 EMI Calculator</h3>
        <p className="text-gray-500 text-sm">Calculate your monthly home loan EMI</p>
      </div>
      
      <div className="space-y-5">
        {/* Property Price */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-medium">Property Price</label>
            <span className="text-primary font-bold">{formatCurrency(propertyPrice)}</span>
          </div>
          <input
            type="range"
            min="1000000"
            max="50000000"
            step="500000"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>₹10 Lakhs</span>
            <span>₹1 Cr</span>
            <span>₹5 Cr</span>
          </div>
        </div>
        
        {/* Down Payment */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-medium">Down Payment</label>
            <span className="text-primary font-bold">{downPayment}% (₹{(propertyPrice * downPayment / 100 / 100000).toFixed(1)} Lakhs)</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>10%</span>
            <span>20%</span>
            <span>30%</span>
            <span>40%</span>
            <span>50%</span>
          </div>
        </div>
        
        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-medium">Interest Rate (% p.a.)</label>
            <span className="text-primary font-bold">{interestRate}%</span>
          </div>
          <input
            type="range"
            min="6"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>6%</span>
            <span>8%</span>
            <span>10%</span>
            <span>12%</span>
            <span>15%</span>
          </div>
        </div>
        
        {/* Loan Tenure */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-medium">Loan Tenure</label>
            <span className="text-primary font-bold">{loanTenure} years</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>5 yrs</span>
            <span>10 yrs</span>
            <span>15 yrs</span>
            <span>20 yrs</span>
            <span>30 yrs</span>
          </div>
        </div>
        
        {/* Results */}
        <div className="mt-6 pt-4 border-t-2 border-primary">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-primary bg-opacity-10 rounded-lg p-3">
              <p className="text-gray-600 text-xs">Monthly EMI</p>
              <p className="text-primary font-bold text-lg">{formatCurrency(emi)}</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3">
              <p className="text-gray-600 text-xs">Total Interest</p>
              <p className="text-orange-600 font-bold text-lg">{formatCurrency(totalInterest)}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-gray-600 text-xs">Total Payment</p>
              <p className="text-green-600 font-bold text-lg">{formatCurrency(totalPayment)}</p>
            </div>
          </div>
        </div>
        
        {/* Loan Summary */}
        <div className="bg-gray-100 rounded-lg p-3 text-center">
          <p className="text-gray-600 text-xs">
            Loan Amount: <span className="font-semibold">{formatCurrency(propertyPrice - (propertyPrice * downPayment / 100))}</span>
          </p>
        </div>
      </div>
      
      <p className="text-xs text-gray-400 text-center mt-4">
        *EMI calculations are estimates. Actual rates may vary by lender.
      </p>
    </div>
  );
};

export default EMICalculator;