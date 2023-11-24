import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

// modified code on 24-Nov-2023

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App
