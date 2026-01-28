# FuturesUpdatePriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settle** | **string** | Settlement Currency (e.g., USDT, BTC) | [optional] [readonly] [default to undefined]
**orderId** | **string** | The order ID of the modified price-triggered order. This ID is returned upon successful creation of the price-triggered order. Note: This ID must be passed in both the request path and request body. | [default to undefined]
**size** | **number** | Modified Contract Quantity. Full Close: 0; Partial Close: Positive/Negative values indicate direction (consistent with the creation interface logic). | [optional] [default to undefined]
**price** | **string** | Represents the modified trading price. A value of 0 indicates a market order. | [optional] [default to undefined]
**triggerPrice** | **string** | Modified Trigger Price | [optional] [default to undefined]
**priceType** | **number** | Reference price type. 0 - Latest trade price, 1 - Mark price, 2 - Index price | [optional] [default to undefined]
**autoSize** | **string** | One-way Mode: auto_size is not required Hedge Mode partial closing (size≠0): auto_size is not required Hedge Mode full closing (size&#x3D;0): auto_size must be set, close_long for closing long positions, close_short for closing short positions | [optional] [default to undefined]
**close** | **boolean** | In One-way Mode, when closing all positions, this must be set to true to perform the closing operation When partially closing positions in One-way Mode or Hedge Mode, you can omit close or set close&#x3D;false | [optional] [default to undefined]

## Enum: FuturesUpdatePriceTriggeredOrder.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


