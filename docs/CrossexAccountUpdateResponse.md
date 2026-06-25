# CrossexAccountUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**positionMode** | **string** | Requested futures position mode to modify (SINGLE/DUAL) | [optional] [default to undefined]
**accountMode** | **string** | Requested account mode to modify (CROSS_EXCHANGE/ISOLATED_EXCHANGE, default: CROSS_EXCHANGE) | [optional] [default to undefined]
**exchangeType** | **string** | Exchange targeted by the requested change (&#x60;BINANCE&#x60; / &#x60;OKX&#x60; / &#x60;GATE&#x60; / &#x60;BYBIT&#x60; / &#x60;KRAKEN&#x60; / &#x60;HYPERLIQUID&#x60; / &#x60;CROSSEX&#x60;). When account mode is &#x60;ISOLATED_EXCHANGE&#x60;, the exchange must be specified to change futures position mode. | [optional] [default to undefined]

