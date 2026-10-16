# OrderHistoryListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**priceType** | **string** | Price type (market &#x3D; market order, limit &#x3D; limit order) | [optional] [default to undefined]
**status** | **number** | Order status. - 0: Unknown. - 1: New order; the order has been validated and is waiting to be processed. - 2: Partially filled. - 3: Filled. - 4: Canceled. - 5: Order rejected. - 6: Cancellation rejected. - 7: Order update succeeded. - 8: Order update rejected. | [optional] [default to undefined]
**statusDesc** | **string** | Order status description | [optional] [default to undefined]
**statusDetail** | [**OrderHistoryListItemStatusDetail**](OrderHistoryListItemStatusDetail.md) |  | [optional] [default to undefined]
**finishAs** | **number** | Order completion reason. - 0: Unknown. - 1: No quote found. - 2: No match found. - 3: Trigger price exceeded. - 4: Order value exceeds the limit. - 5: Unknown rejection. - 6: Unknown cancellation. - 7: Canceled by user. - 8: Canceled after the order time in force expired. - 9: Trading is not supported in the current session. - 13: Canceled due to corporate action. | [optional] [default to undefined]
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


## Enum: OrderHistoryListItem.Status

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)


## Enum: OrderHistoryListItem.FinishAs

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)

* `NUMBER_9` (value: `9`)

* `NUMBER_13` (value: `13`)


## Enum: OrderHistoryListItem.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: OrderHistoryListItem.TimeInForce

* `Day` (value: `'day'`)


