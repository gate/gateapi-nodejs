# PlaceOrderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**status** | **number** | Order Status - &#x60;0&#x60; : All - &#x60;1&#x60; : Processing - &#x60;2&#x60; : Successful - &#x60;3&#x60; : Failed - &#x60;4&#x60; : Cancelled - &#x60;5&#x60; : Buy order placed but transfer not completed - &#x60;6&#x60; : Order cancelled but transfer not completed | [optional] [default to undefined]
**side** | **string** | Buy or sell orders - buy - sell | [optional] [default to undefined]
**gasMode** | **string** | Trading mode affects slippage selection - &#x60;speed&#x60; : Smart mode - &#x60;custom&#x60; : Custom mode, uses &#x60;slippage&#x60; parameter | [optional] [default to undefined]
**createTime** | **number** | Creation timestamp | [optional] [default to undefined]
**amount** | **string** | Trade Quantity - &#x60;side&#x60; : &#x60;buy&#x60; refers to the quote currency, i.e., &#x60;USDT&#x60; - &#x60;side&#x60; : &#x60;sell&#x60; refers to the base currency | [optional] [default to undefined]
**tokenAddress** | **string** | Token contract address | [optional] [default to undefined]
**chain** | **string** | Blockchain name | [optional] [default to undefined]

