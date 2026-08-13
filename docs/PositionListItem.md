# PositionListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange, supports us, hk, and kr | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**quoteCurrencyPrecision** | **number** | Quote currency precision | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. - closed: Market closed. - gt_lp: GT LP session. | [optional] [default to undefined]
**symbolDesc** | **string** |  | [optional] [default to undefined]
**positionPnl** | **string** | Position P&amp;L | [optional] [default to undefined]
**todayPnl** | **string** | Today\&#39;s P&amp;L | [optional] [default to undefined]
**pnlRate** | **string** | Yield | [optional] [default to undefined]
**todaySellAmount** | **string** | Today\&#39;s sales amount | [optional] [default to undefined]
**todayBuyAmount** | **string** | Today\&#39;s purchase amount | [optional] [default to undefined]
**todaySellVolume** | **string** | Today\&#39;s sell volume | [optional] [default to undefined]
**todayBuyVolume** | **string** | Today\&#39;s buy volume | [optional] [default to undefined]
**yesterdayVolume** | **string** | Previous close position quantity | [optional] [default to undefined]
**volume** | **string** | Position quantity | [optional] [default to undefined]
**available** | **string** | Available position quantity | [optional] [default to undefined]
**transferOutPendingQty** | **string** | Stock transfer in progress quantity | [optional] [default to undefined]
**avgCostPrice** | **string** | Cost price | [optional] [default to undefined]
**dilutedCostPrice** | **string** | Diluted cost price | [optional] [default to undefined]
**lastPrice** | **string** | Latest price | [optional] [default to undefined]
**extendedLastPrice** | **string** | Extended hours latest price | [optional] [default to undefined]
**maxOrderVolume** | **string** |  | [optional] [default to undefined]
**stepOrderVolume** | **string** |  | [optional] [default to undefined]
**minOrderVolume** | **string** |  | [optional] [default to undefined]
**pricePrecision** | **number** |  | [optional] [default to undefined]
**priceProtection** | **string** |  | [optional] [default to undefined]
**sellPriceProtection** | **string** |  | [optional] [default to undefined]
**buyPriceProtection** | **string** |  | [optional] [default to undefined]
**commissionRate** | **string** | Fee Rate | [optional] [default to undefined]
**slippageRate** | **string** |  | [optional] [default to undefined]

## Enum: PositionListItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)


## Enum: PositionListItem.TradeStatus

* `PreMarket` (value: `'pre_market'`)

* `Open` (value: `'open'`)

* `PostMarket` (value: `'post_market'`)

* `Closed` (value: `'closed'`)

* `GtLp` (value: `'gt_lp'`)


