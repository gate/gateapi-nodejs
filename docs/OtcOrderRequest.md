# OtcOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | BUY for on-ramp, SELL for off-ramp | [default to undefined]
**side** | **string** | Quote direction returned by the quote API (used for order validation) | [default to undefined]
**cryptoCurrency** | **string** | Cryptocurrency (supported currencies can be queried from the OTC web fiat quote page) | [default to undefined]
**fiatCurrency** | **string** | Fiat currency (supported currencies can be queried from the OTC web fiat quote page) | [default to undefined]
**cryptoAmount** | **string** | Amount of cryptocurrency | [default to undefined]
**fiatAmount** | **string** | Fiat amount | [default to undefined]
**promotionCode** | **string** | Promotion code | [optional] [default to undefined]
**quoteToken** | **string** | Parameter returned by the quote API | [default to undefined]
**bankId** | **string** | The bank card ID used for placing the order; select it from the list returned by &#x60;GET /otc/bank_list&#x60; (or &#x60;GET /otc/bank/list&#x60;); the default card has &#x60;is_default&#x3D;1&#x60; | [default to undefined]

