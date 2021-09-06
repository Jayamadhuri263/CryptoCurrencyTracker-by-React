import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props

  return (
    <li className="li-item-container">
      <div className="container">
        <img
          className="logo"
          src={cryptoCurrencyData.currencyLogoUrl}
          alt={cryptoCurrencyData.currencyName}
        />
        <p className="name">{cryptoCurrencyData.currencyName}</p>
      </div>
      <div className="values-container">
        <p className="currency-value">{cryptoCurrencyData.usdValue}</p>
        <p className="currency-value">{cryptoCurrencyData.euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
