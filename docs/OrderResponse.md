# OrderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**txHash** | **string** | Transaction Hash | [optional] [default to undefined]
**side** | **string** | Buy or sell orders - buy - sell | [optional] [default to undefined]
**usdtAmount** | **string** | Amount (USDT) | [optional] [default to undefined]
**currency** | **string** | Token | [optional] [default to undefined]
**currencyAmount** | **string** | Token amount | [optional] [default to undefined]
**status** | **number** | Order Status - &#x60;0&#x60; : All - &#x60;1&#x60; : Processing - &#x60;2&#x60; : Successful - &#x60;3&#x60; : Failed - &#x60;4&#x60; : Cancelled - &#x60;5&#x60; : Buy order placed but transfer not completed - &#x60;6&#x60; : Order cancelled but transfer not completed | [optional] [default to undefined]
**gasMode** | **string** | Trading mode affects slippage selection - &#x60;speed&#x60; : Smart mode - &#x60;custom&#x60; : Custom mode, uses &#x60;slippage&#x60; parameter | [optional] [default to undefined]
**chain** | **string** | Blockchain | [optional] [default to undefined]
**gasFee** | **string** | Gas Fee (USDT-based) | [optional] [default to undefined]
**transactionFee** | **string** | Trading Fee (USDT-based) | [optional] [default to undefined]
**failedReason** | **string** | Failure reason (if applicable) | [optional] [default to undefined]
**createTime** | **number** | Creation timestamp | [optional] [default to undefined]

