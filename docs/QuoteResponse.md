# QuoteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteId** | **string** | Quote ID for order placement, valid for 1 minute | [optional] [default to undefined]
**minAmount** | **string** | Minimum order size | [optional] [default to undefined]
**maxAmount** | **string** | Maximum order size | [optional] [default to undefined]
**price** | **string** | Token Price (USDT-based) | [optional] [default to undefined]
**slippage** | **string** | Slippage | [optional] [default to undefined]
**estimateGasFeeAmountUsdt** | **string** | Estimated Gas Fee (USDT-based) | [optional] [default to undefined]
**orderFee** | **string** | Trading fee | [optional] [default to undefined]
**targetTokenMinAmount** | **string** | Minimum received amount | [optional] [default to undefined]
**targetTokenMaxAmount** | **string** | Maximum received amount | [optional] [default to undefined]
**errorType** | **number** | Failure Type - &#x60;0&#x60; : Success - &#x60;1&#x60; : Exceeds maximum value - &#x60;2&#x60; : Below minimum value | [optional] [default to undefined]

