# OrderHistoryListDataList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Currency pair | [optional] [default to undefined]
**symbolDesc** | **string** | Trading symbol description | [optional] [default to undefined]
**priceType** | **string** | Trade type (market&#x3D;market price, trigger&#x3D;trigger price) | [optional] [default to undefined]
**orderOptType** | **number** | Order operation type (1&#x3D;sell, 2&#x3D;buy, 3&#x3D;close long, 4&#x3D;close short, 5&#x3D;force close long, 6&#x3D;force close short) | [optional] [default to undefined]
**state** | **number** | Order status code | [optional] [default to undefined]
**stateDesc** | **string** | Order status description | [optional] [default to undefined]
**side** | **number** | Order side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**volume** | **string** | Order volume | [optional] [default to undefined]
**fillVolume** | **string** | Trading size | [optional] [default to undefined]
**closePnl** | **string** | Close Position P&amp;L | [optional] [default to undefined]
**price** | **string** | Average fill price | [optional] [default to undefined]
**triggerPrice** | **string** | Trigger price | [optional] [default to undefined]
**priceTp** | **string** | Take profit price | [optional] [default to undefined]
**priceSl** | **string** | Stop loss price | [optional] [default to undefined]
**timeSetup** | **number** | Order time (Unix timestamp in seconds) | [optional] [default to undefined]
**timeDone** | **number** | End time (Unix timestamp in seconds) | [optional] [default to undefined]

## Enum: OrderHistoryListDataList.PriceType

* `Market` (value: `'market'`)

* `Trigger` (value: `'trigger'`)


## Enum: OrderHistoryListDataList.OrderOptType

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)


## Enum: OrderHistoryListDataList.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


