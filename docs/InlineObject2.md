# InlineObject2

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
**bankId** | **string** | Bank card ID used for the order (retrieved via the default bank card API) | [default to undefined]

