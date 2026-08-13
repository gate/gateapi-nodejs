# OtcOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | BUY for on-ramp, SELL for off-ramp | [default to undefined]
**side** | **string** | The side returned by the quote endpoint (used for order validation). For backward compatibility, &#x60;FIAT&#x60;/&#x60;CRYPTO&#x60; or &#x60;PAY&#x60;/&#x60;GET&#x60; are accepted; new integrations should use the value returned by the quote response. | [default to undefined]
**cryptoCurrency** | **string** | Cryptocurrency (supported currencies can be queried from the OTC web fiat quote page) | [default to undefined]
**fiatCurrency** | **string** | Fiat currency (supported currencies can be queried from the OTC web fiat quote page) | [default to undefined]
**cryptoAmount** | **string** | Amount of cryptocurrency | [default to undefined]
**fiatAmount** | **string** | Fiat amount | [default to undefined]
**promotionCode** | **string** | Promotion code | [optional] [default to undefined]
**quoteToken** | **string** | Parameter returned by the quote API | [default to undefined]
**bankId** | **string** | Bank card ID used to place the order. Select one from the list returned by &#x60;GET /otc/bank/list&#x60;; the default card has &#x60;is_default&#x3D;1&#x60;. | [default to undefined]

