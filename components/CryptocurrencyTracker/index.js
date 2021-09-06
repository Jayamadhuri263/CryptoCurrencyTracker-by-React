import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrenciesTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCrypto()
  }

  getCrypto = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      currencyLogoUrl: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoData={cryptoData} />
        )}
      </div>
    )
  }
}
export default CryptocurrenciesTracker
