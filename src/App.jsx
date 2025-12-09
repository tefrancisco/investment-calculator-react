import { useState } from 'react'
import Header from './components/Header.jsx'
import TableRow from './components/TableRow.jsx'
import Input from './components/Input.jsx'
import { calculateInvestmentResults, formatter } from './util/investment.js'

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  let annualData = calculateInvestmentResults(investmentData)

  function handleUserInput(event, par) {
    setInvestmentData((prevData) => {
      const updatedData = { ...prevData }

      switch(par) {
        case 'initialInv':
          updatedData.initialInvestment = Number(event.target.value)
          break;
        case 'anualInv':
          updatedData.annualInvestment = Number(event.target.value)
          break;
        case 'expectedRet':
          updatedData.expectedReturn = Number(event.target.value)
          break;
        case 'duration':
          updatedData.duration = Number(event.target.value)
          break;
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

          <Input label="Initial investment" value={investmentData.initialInvestment} onChangeFunction={() => handleUserInput(event, 'initialInv')} />

          <Input label="Annual investment" value={investmentData.annualInvestment} onChangeFunction={() => handleUserInput(event, 'anualInv')} />

        </div>
        <div className="input-group">

          <Input label="Expected return" value={investmentData.expectedReturn} onChangeFunction={() => handleUserInput(event, 'expectedRet')} />

          <Input label="Duration" value={investmentData.duration} onChangeFunction={() => handleUserInput(event, 'duration')} />

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
