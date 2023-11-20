import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
    message: '',
  }

  updateBalance = value => {
    const {balance} = this.state

    // Check if the balance is sufficient
    if (balance === 0) {
      this.setState({
        message: 'You Account running out of balance.',
      })
    } else if (balance < value) {
      this.setState({
        message:
          'You do not have sufficient balance. Please select less amount.',
      })
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - value,
        message: '',
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance, message} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          {message && <p className="insufficient-balance">{message}</p>}
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
