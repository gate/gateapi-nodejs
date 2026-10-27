# OrderListDataList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **bigint** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Currency pair | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**priceType** | **OrderListDataList.PriceType** | Trade type (market&#x3D;market price, trigger&#x3D;trigger price) | [optional] [default to undefined]
**state** | **number** | Order status code | [optional] [default to undefined]
**stateDesc** | **string** | Order status description | [optional] [default to undefined]
**finished** | **OrderListDataList.Finished** | Is completed (0&#x3D;shown in active order list, 1&#x3D;not shown in active list) | [optional] [default to undefined]
**side** | **OrderListDataList.Side** | Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**volume** | **string** | Order quantity | [optional] [default to undefined]
**price** | **string** | Trigger price | [optional] [default to undefined]
**priceTp** | **string** | Take profit price | [optional] [default to undefined]
**priceSl** | **string** | Stop loss price | [optional] [default to undefined]
**timeSetup** | **number &#124; bigint** | Order time (Unix timestamp in seconds) | [optional] [default to undefined]

## Enum: OrderListDataList.PriceType

* `Market` (value: `'market'`)

* `Trigger` (value: `'trigger'`)


## Enum: OrderListDataList.Finished

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: OrderListDataList.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


