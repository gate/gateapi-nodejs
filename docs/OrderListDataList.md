# OrderListDataList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Currency pair | [optional] [default to undefined]
**symbolDesc** | **string** | Trading symbol description | [optional] [default to undefined]
**priceType** | **string** | Trade type (market&#x3D;market price, trigger&#x3D;trigger price) | [optional] [default to undefined]
**state** | **number** | Order status code | [optional] [default to undefined]
**stateDesc** | **string** | Order status description | [optional] [default to undefined]
**finished** | **number** | Is completed (0&#x3D;shown in active order list, 1&#x3D;not shown in active list) | [optional] [default to undefined]
**side** | **number** | Order side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**volume** | **string** | Order volume | [optional] [default to undefined]
**price** | **string** | Trigger price | [optional] [default to undefined]
**priceTp** | **string** | Take profit price | [optional] [default to undefined]
**priceSl** | **string** | Stop loss price | [optional] [default to undefined]
**timeSetup** | **number** | Order time (Unix timestamp in seconds) | [optional] [default to undefined]

## Enum: OrderListDataList.PriceType

* `Market` (value: `'market'`)

* `Trigger` (value: `'trigger'`)


## Enum: OrderListDataList.Finished

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: OrderListDataList.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


