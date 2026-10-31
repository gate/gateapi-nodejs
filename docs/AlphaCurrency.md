# AlphaCurrency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Alpha currency ID, for example USDS02b5a8dd2f59a098; use it as the currency parameter in Alpha APIs, not the display symbol USDS. | [optional] [default to undefined]
**name** | **string** | Display name or symbol, for example USDS; it cannot replace the currency field as the Alpha currency ID. | [optional] [default to undefined]
**chain** | **string** | The main chain corresponding to the coin | [optional] [default to undefined]
**address** | **string** | Contract Address | [optional] [default to undefined]
**amountPrecision** | **number** | Quantity precision | [optional] [default to undefined]
**precision** | **number** | Price precision | [optional] [default to undefined]
**status** | **number** | Currency Trading Status - &#x60;1&#x60; : Normal trading - &#x60;2&#x60; : Suspended trading - &#x60;3&#x60; : Delisted | [optional] [default to undefined]

