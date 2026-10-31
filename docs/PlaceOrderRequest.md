# PlaceOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Alpha currency ID, for example USDS02b5a8dd2f59a098, not the display symbol USDS. First call GET /alpha/currencies without currency, match the token by name, chain and address, and use the returned currency field. Paginate with page and limit. | [default to undefined]
**side** | **string** | Buy or sell orders - buy - sell | [default to undefined]
**amount** | **string** | Trade Quantity - &#x60;side&#x60; : &#x60;buy&#x60; refers to the quote currency, i.e., &#x60;USDT&#x60; - &#x60;side&#x60; : &#x60;sell&#x60; refers to the base currency | [default to undefined]
**gasMode** | **string** | Trading mode affects slippage selection - &#x60;speed&#x60; : Smart mode - &#x60;custom&#x60; : Custom mode, uses &#x60;slippage&#x60; parameter | [default to undefined]
**slippage** | **string** | Slippage tolerance (10 means 10% tolerance) | [optional] [default to undefined]
**quoteId** | **string** | Quote ID returned from quotation API | [default to undefined]

