# FuturesUpdatePriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settle** | **string** | Settlement Currency (e.g., USDT, BTC) | [optional] [readonly] [default to undefined]
**orderId** | **number** | ID of the Pending Take-Profit/Stop-Loss Trigger Order | [optional] [readonly] [default to undefined]
**contact** | **string** | The order ID of the modified price-triggered order. This ID is returned upon successful creation of the price-triggered order. Note: This ID must be passed in both the request path and request body. | [optional] [default to undefined]
**size** | **number** | Modified Contract Quantity. Full Close: 0; Partial Close: Positive/Negative values indicate direction (consistent with the creation interface logic). | [optional] [default to undefined]
**price** | **string** | Represents the modified trading price. A value of 0 indicates a market order. | [optional] [default to undefined]
**triggerPrice** | **string** | Modified Trigger Price | [optional] [default to undefined]
**priceType** | **number** | Reference price type. 0 - Latest trade price, 1 - Mark price, 2 - Index price | [optional] [default to undefined]
**autoSize** | **string** | 单仓模式不需设置auto_size 双仓模式部分平仓(size≠0)时，不需设置auto_size 双仓模式全部平仓(size&#x3D;0)时，必须设置auto_size，close_long 平多头， close_short 平空头 | [optional] [default to undefined]

## Enum: FuturesUpdatePriceTriggeredOrder.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


