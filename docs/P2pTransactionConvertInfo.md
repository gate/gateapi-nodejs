# P2pTransactionConvertInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**convertType** | **string** | Flash swap target currency | [optional] [default to undefined]
**convertStatus** | **string** | Flash swap order status | [optional] [default to undefined]
**preRate** | **string** | Expected price when placing order | [optional] [default to undefined]
**rate** | **string** | Execution price | [optional] [default to undefined]
**preFiatRate** | **string** | Expected fiat price when placing order | [optional] [default to undefined]
**fiatRate** | **string** | Fiat price at execution | [optional] [default to undefined]
**amount** | **string** | Size | [optional] [default to undefined]
**convertAmount** | **string** | Swap Amount | [optional] [default to undefined]
**slippage** | **string** | Slippage calculation: slippage &#x3D; (expected price when placing order - real-time price during auto swap) / expected price when placing order | [optional] [default to undefined]
**status** | **string** | Flash swap order display status | [optional] [default to undefined]

