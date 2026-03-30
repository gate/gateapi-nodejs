# FuturesUpdatePriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settle** | **string** | Settlement Currency (e.g., USDT, BTC) | [optional] [default to undefined]
**orderId** | **number** | ID of the Pending Take-Profit/Stop-Loss Trigger Order | [default to undefined]
**size** | **number** | Modified Contract Quantity. Full Close: 0; Partial Close: Positive/Negative values indicate direction (consistent with the creation interface logic). | [optional] [default to undefined]
**amount** | **string** | Same as &#x60;size&#x60;; used for decimal contract size. When both &#x60;size&#x60; and &#x60;amount&#x60; are provided, &#x60;amount&#x60; takes precedence. | [optional] [default to undefined]
**price** | **string** | Represents the modified trading price. A value of 0 indicates a market order. | [optional] [default to undefined]
**triggerPrice** | **string** | Modified Trigger Price | [optional] [default to undefined]
**priceType** | **number** | Reference price type. 0 - Latest trade price, 1 - Mark price, 2 - Index price | [optional] [default to undefined]
**autoSize** | **string** | One-way Mode: auto_size is not required Hedge Mode partial closing (size≠0): auto_size is not required Hedge Mode full closing (size&#x3D;0): auto_size must be set, close_long for closing long positions, close_short for closing short positions | [optional] [default to undefined]
**close** | **boolean** | When fully closing a position in single-position mode, close must be set to true to execute the close operation. When partially closing a position in single-position mode or in dual-position mode, close can be left unset or set to false. | [optional] [default to undefined]

## Enum: FuturesUpdatePriceTriggeredOrder.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


