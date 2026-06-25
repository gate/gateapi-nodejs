# CreateChaseOrderReq

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Contract name; server-side converted to uppercase | [default to undefined]
**settle** | **string** | Settle currency, overridden by the path parameter and converted to lowercase | [optional] [default to undefined]
**amount** | **string** | Total order size in contracts, decimal string. Positive for buy, negative for sell. Cannot be 0 | [default to undefined]
**priceLimit** | **string** | 最高追逐价，合法十进制字符串；未设置限价时请传 \&quot;0\&quot; | [default to undefined]
**offsetLimit** | **string** | Maximum chasing distance from the best price, mutually exclusive with price_limit | [optional] [default to undefined]
**reduceOnly** | **boolean** | Whether reduce only | [optional] [default to undefined]
**text** | **string** | Optional custom tag | [optional] [default to undefined]
**isDualMode** | **boolean** | Whether dual-position mode is enabled | [optional] [default to undefined]
**priceType** | **number** | Price type: 1 best bid/ask, 2 distance from best bid/ask | [optional] [default to undefined]
**priceGapType** | **number** | Used when price_type &#x3D;&#x3D; 2: 1 absolute price gap, 2 percentage | [optional] [default to undefined]
**priceGapValue** | **string** | Price gap value paired with price_gap_type | [optional] [default to undefined]
**posMarginMode** | **string** | Position margin mode, e.g. isolated or cross | [optional] [default to undefined]
**positionMode** | **string** | Position mode (e.g. single, dual, dual_plus) | [optional] [default to undefined]

