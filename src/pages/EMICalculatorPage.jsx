import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EMICalculatorPage = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [propertyPrice, downPaymentPercent, interestRate, loanTenure]);

  const calculateEMI = () => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const principal = propertyPrice - downPayment;
    setLoanAmount(principal);
    
    const monthlyRate = interestRate / 100 / 12;
    const months = loanTenure * 12;
    
    if (principal > 0 && monthlyRate > 0) {
      const emiValue = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
      const total = emiValue * months;
      const interest = total - principal;
      
      setEmi(Math.round(emiValue));
      setTotalPayment(Math.round(total));
      setTotalInterest(Math.round(interest));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  };

  const formatPrice = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} Lakhs`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">EMI Calculator</h1>
          <p className="text-gray-500">Plan your home loan with our easy EMI calculator</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-5">Loan Details</h3>
            
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Property Price</label>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a45e]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">₹1L</span>
                <span className="text-sm font-semibold text-[#c8a45e]">{formatPrice(propertyPrice)}</span>
                <span className="text-xs text-gray-500">₹5Cr</span>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Down Payment ({downPaymentPercent}%)</label>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a45e]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">10%</span>
                <span className="text-sm font-semibold text-[#c8a45e]">{formatPrice((propertyPrice * downPaymentPercent) / 100)}</span>
                <span className="text-xs text-gray-500">50%</span>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Interest Rate (% p.a.)</label>
              <input
                type="range"
                min="6"
                max="15"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a45e]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">6%</span>
                <span className="text-sm font-semibold text-[#c8a45e]">{interestRate}%</span>
                <span className="text-xs text-gray-500">15%</span>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Loan Tenure (Years)</label>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a45e]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">5 yrs</span>
                <span className="text-sm font-semibold text-[#c8a45e]">{loanTenure} years</span>
                <span className="text-xs text-gray-500">30 yrs</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-[#0a192f] to-[#1e2a3a] rounded-xl shadow-md p-6 text-white">
            <h3 className="text-xl font-bold text-center mb-5">Your Loan Summary</h3>
            
            <div className="text-center mb-6">
              <p className="text-gray-300 text-sm mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-[#c8a45e]">{formatPrice(emi)}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300 text-sm">Loan Amount:</span>
                <span className="font-semibold">{formatPrice(loanAmount)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300 text-sm">Total Interest:</span>
                <span className="font-semibold text-orange-300">{formatPrice(totalInterest)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-300 text-sm">Total Payment:</span>
                <span className="font-semibold text-[#c8a45e]">{formatPrice(totalPayment)}</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center mt-5 pt-3 border-t border-white/10">
              *EMI calculations are estimates. Actual rates may vary by lender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculatorPage;