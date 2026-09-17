# OrderListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange, supports us, hk, kr, and jp | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. - closed: Market closed. - gt_lp: GT LP session. | [optional] [default to undefined]
**tradeMode** | **number** | Current session trading mode. - 0: Trading disabled. - 1: Buy only. - 2: Sell only. - 4: Buy and sell supported. | [optional] [default to undefined]
**priceType** | **string** | Price type (market &#x3D; market order, limit &#x3D; limit order) | [optional] [default to undefined]
**side** | **number** | Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**status** | **number** | Order status | [optional] [default to undefined]
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

* `Closed` (value: `'closed'`)

* `GtLp` (value: `'gt_lp'`)


## Enum: OrderListItem.TradeMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_4` (value: `4`)


## Enum: OrderListItem.PriceType

* `Market` (value: `'market'`)

* `Limit` (value: `'limit'`)


## Enum: OrderListItem.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


