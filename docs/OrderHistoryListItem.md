# OrderHistoryListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange, supports us, hk, kr, and jp | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**priceType** | **string** | Price type (market &#x3D; market order, limit &#x3D; limit order) | [optional] [default to undefined]
**status** | **number** | Order status | [optional] [default to undefined]
**statusDesc** | **string** | Order status description | [optional] [default to undefined]
**statusDetail** | [**OrderHistoryListItemStatusDetail**](OrderHistoryListItemStatusDetail.md) |  | [optional] [default to undefined]
**finishAs** | **number** | Order completion reason | [optional] [default to undefined]
**side** | **number** | Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**timeInForce** | **string** | Time in force. - day: Day order. | [optional] [default to undefined]
**volume** | **string** | Order quantity | [optional] [default to undefined]
**fillVolume** | **string** | Trading size | [optional] [default to undefined]
**price** | **string** | Order price | [optional] [default to undefined]
**avgFillPrice** | **string** | Average fill price | [optional] [default to undefined]
**commission** | **string** | fee | [optional] [default to undefined]
**timeSetup** | **number** | Order creation time (Unix timestamp, seconds) | [optional] [default to undefined]
**timeDone** | **number** | Order completion time (Unix timestamp in seconds) | [optional] [default to undefined]

## Enum: OrderHistoryListItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)

* `Jp` (value: `'jp'`)


## Enum: OrderHistoryListItem.PriceType

* `Market` (value: `'market'`)

* `Limit` (value: `'limit'`)


## Enum: OrderHistoryListItem.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: OrderHistoryListItem.TimeInForce

* `Day` (value: `'day'`)


