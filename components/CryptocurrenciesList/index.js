import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesNav = () => (
    <div className="list-nav">
      <p className="list-heading">Coin Type</p>
      <div className="card">
        <p className="value-heading">USD</p>
        <p className="value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesDisplay = () => {
    const {cryptoData} = this.props

    return (
      <div className="list-container">
        {this.renderCryptoCurrenciesNav()}
        <ul className="list-card">
          {cryptoData.map(each => (
            <CryptocurrencyItem key={each.id} cryptoCurrencyData={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
        />
        {this.renderCryptoCurrenciesDisplay()}
      </div>
    )
  }
}

export default CryptocurrenciesList
