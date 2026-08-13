# OrderHistoryListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** |  | [optional] [default to undefined]
**symbol** | **string** |  | [optional] [default to undefined]
**exchange** | **string** | Exchange, supports us, hk, and kr | [optional] [default to undefined]
**quoteCurrency** | **string** |  | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** |  | [optional] [default to undefined]
**priceType** | **string** | Price type (market &#x3D; market order, limit &#x3D; limit order) | [optional] [default to undefined]
**status** | **number** | Order status | [optional] [default to undefined]
**statusDesc** | **string** | Order status description | [optional] [default to undefined]
**statusDetail** | [**OrderHistoryListItemStatusDetail**](OrderHistoryListItemStatusDetail.md) |  | [optional] [default to undefined]
**finishAs** | **number** | Order completion reason | [optional] [default to undefined]
**side** | **number** | Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**timeInForce** | **string** | Time in force. - day: Day order. | [optional] [default to undefined]
**volume** | **string** |  | [optional] [default to undefined]
**fillVolume** | **string** |  | [optional] [default to undefined]
**price** | **string** |  | [optional] [default to undefined]
**avgFillPrice** | **string** |  | [optional] [default to undefined]
**commission** | **string** | fee | [optional] [default to undefined]
**timeSetup** | **number** |  | [optional] [default to undefined]
**timeDone** | **number** |  | [optional] [default to undefined]

## Enum: OrderHistoryListItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)


## Enum: OrderHistoryListItem.PriceType

* `Market` (value: `'market'`)

* `Limit` (value: `'limit'`)


## Enum: OrderHistoryListItem.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: OrderHistoryListItem.TimeInForce

* `Day` (value: `'day'`)


