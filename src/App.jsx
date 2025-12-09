import { useState } from 'react'
import Header from './components/Header.jsx'
import TableRow from './components/TableRow.jsx'
import { calculateInvestmentResults, formatter } from './util/investment.js'

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  let annualData = calculateInvestmentResults(investmentData)
  console.log(annualData)

  console.log(investmentData)

  function handleUserInput(event, par) {
    setInvestmentData((prevData) => {
      const updatedData = { ...prevData }

      if(par === 'initialInv') {
        updatedData.initialInvestment = Number(event.target.value)
      }

      else if(par === 'anualInv') {
        updatedData.annualInvestment = Number(event.target.value)
      }

      else if(par === 'expectedRet') {
        updatedData.expectedReturn = Number(event.target.value)
      }

      else if(par === 'duration') {
        updatedData.duration = Number(event.target.value)
      }

      return updatedData;
    })
  }

  return (
    <>
      <Header>
        <img src="/investment-calculator-logo.png" alt="" />
        <h1>React Investment Calculator</h1>
      </Header>

      <section id="user-input">
        <div className="input-group">
          <label htmlFor="">Initial investment</label>
          <input type="number" value={investmentData.initialInvestment} onChange={() => handleUserInput(event, 'initialInv')} />
          <label htmlFor="">Annual investment</label>
          <input type="number" value={investmentData.annualInvestment} onChange={() => handleUserInput(event, 'anualInv')} />
        </div>
        <div className="input-group">
          <label htmlFor="">Expected return</label>
          <input type="number" value={investmentData.expectedReturn} onChange={() => handleUserInput(event, 'expectedRet')} />
          <label htmlFor="">Duration</label>
          <input type="number" value={investmentData.duration} onChange={() => handleUserInput(event, 'duration')} />
        </div>
      </section>

      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {annualData.map((obj) => <TableRow key={obj.year} {...obj} />)}
        </tbody>
      </table>
    </>
  )
}

export default App
