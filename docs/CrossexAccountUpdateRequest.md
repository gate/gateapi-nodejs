# CrossexAccountUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**positionMode** | **string** | Futures position mode (SINGLE/DUAL) | [optional] [default to undefined]
**accountMode** | **string** | Account mode (CROSS_EXCHANGE/ISOLATED_EXCHANGE, default: CROSS_EXCHANGE) | [optional] [default to undefined]
**exchangeType** | **string** | Exchange (&#x60;BINANCE&#x60; / &#x60;OKX&#x60; / &#x60;GATE&#x60; / &#x60;BYBIT&#x60; / &#x60;KRAKEN&#x60; / &#x60;HYPERLIQUID&#x60; / &#x60;CROSSEX&#x60;). When account mode is &#x60;ISOLATED_EXCHANGE&#x60;, the exchange must be specified to adjust futures position mode. | [optional] [default to undefined]

