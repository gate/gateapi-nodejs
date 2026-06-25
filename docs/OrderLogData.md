# OrderLogData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID | [optional] [default to undefined]
**logId** | **number** | logID | [optional] [default to undefined]
**symbol** | **string** | Trading pair of the order | [optional] [default to undefined]
**priceType** | **string** | Trade type (market&#x3D;market price, trigger&#x3D;trigger price) | [optional] [default to undefined]
**state** | **number** | Order status code (1&#x3D;placed, 2&#x3D;canceled, 3&#x3D;partially filled, 4&#x3D;filled, 5&#x3D;rejected) | [optional] [default to undefined]
**side** | **number** | Order side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**volume** | **string** | Order volume | [optional] [default to undefined]
**price** | **string** | Average fill price | [optional] [default to undefined]

## Enum: OrderLogData.PriceType

* `Market` (value: `'market'`)

* `Trigger` (value: `'trigger'`)


## Enum: OrderLogData.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


