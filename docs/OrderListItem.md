# OrderListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. | [optional] [default to undefined]
**tradeMode** | **number** | Current session trading mode. - 0: Trading disabled. - 1: Buy only. - 2: Sell only. - 4: Buy and sell supported. - 5: Trading suspended. - 6: Trading suspended. - 7: Trading suspended. - 8: Trading suspended. | [optional] [default to undefined]
**priceType** | **string** | Price type (market &#x3D; market order, limit &#x3D; limit order) | [optional] [default to undefined]
**side** | **number** | Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**status** | **number** | Order status. - 0: Unknown. - 1: New order; the order has been validated and is waiting to be processed. - 2: Partially filled. - 3: Filled. - 4: Canceled. - 5: Order rejected. - 6: Cancellation rejected. - 7: Order update succeeded. - 8: Order update rejected. | [optional] [default to undefined]
**volume** | **string** | Order quantity | [optional] [default to undefined]
**fillVolume** | **string** | Trading size | [optional] [default to undefined]
**price** | **string** | Order price | [optional] [default to undefined]
**timeSetup** | **number** | Order creation time (Unix timestamp, seconds) | [optional] [default to undefined]
**timeUpdate** | **number** | Order update time (Unix timestamp, seconds) | [optional] [default to undefined]
**maxOrderVolume** | **string** | Maximum order quantity | [optional] [default to undefined]
**stepOrderVolume** | **string** | Order step size | [optional] [default to undefined]
**minOrderVolume** | **string** | Minimum order quantity | [optional] [default to undefined]
**pricePrecision** | **number** | Price precision | [optional] [default to undefined]
**priceProtection** | **string** | Price protection range | [optional] [default to undefined]
**sellPriceProtection** | **string** | Sell price protection rate | [optional] [default to undefined]
**buyPriceProtection** | **string** | Buy price protection rate | [optional] [default to undefined]
**commissionRate** | **string** | Fee Rate | [optional] [default to undefined]
**slippageRate** | **string** | Slippage | [optional] [default to undefined]

## Enum: OrderListItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)

* `Jp` (value: `'jp'`)


## Enum: OrderListItem.TradeStatus

* `PreMarket` (value: `'pre_market'`)

* `Open` (value: `'open'`)

* `PostMarket` (value: `'post_market'`)


## Enum: OrderListItem.TradeMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)


## Enum: OrderListItem.PriceType

* `Market` (value: `'market'`)

* `Limit` (value: `'limit'`)


## Enum: OrderListItem.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: OrderListItem.Status

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)


