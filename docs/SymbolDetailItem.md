# SymbolDetailItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** |  | [optional] [default to undefined]
**exchange** | **string** | Exchange, supports us, hk, and kr | [optional] [default to undefined]
**exchangeDesc** | **string** |  | [optional] [default to undefined]
**quoteCurrency** | **string** |  | [optional] [default to undefined]
**quoteCurrencyPrecision** | **number** |  | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**settlementCurrency** | **string** |  | [optional] [default to undefined]
**maxOrderVolume** | **string** |  | [optional] [default to undefined]
**stepOrderVolume** | **string** |  | [optional] [default to undefined]
**minOrderVolume** | **string** |  | [optional] [default to undefined]
**pricePrecision** | **number** | Price precision | [optional] [default to undefined]
**volumePrecision** | **number** |  | [optional] [default to undefined]
**isIpo** | **boolean** |  | [optional] [default to undefined]
**ipoPrice** | **string** |  | [optional] [default to undefined]
**priceProtection** | **string** |  | [optional] [default to undefined]
**sellPriceProtection** | **string** |  | [optional] [default to undefined]
**buyPriceProtection** | **string** |  | [optional] [default to undefined]
**slippageRate** | **string** |  | [optional] [default to undefined]
**commissionRate** | **string** | Fee Rate | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. - closed: Market closed. - gt_lp: GT LP session. | [optional] [default to undefined]
**tradeMode** | **number** | Current session trading mode. - 0: Trading disabled. - 1: Buy only. - 2: Sell only. - 4: Buy and sell supported. | [optional] [default to undefined]
**orderFillTiming** | **number** | Order fill timing (1&#x3D;immediate, 2&#x3D;after pre-market opens, 3&#x3D;after regular session opens) | [optional] [default to undefined]
**symbolDescs** | [**Array&lt;SymbolDetailItemSymbolDescs&gt;**](SymbolDetailItemSymbolDescs.md) |  | [optional] [default to undefined]
**iconLink** | **string** |  | [optional] [default to undefined]

## Enum: SymbolDetailItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)


## Enum: SymbolDetailItem.TradeStatus

* `PreMarket` (value: `'pre_market'`)

* `Open` (value: `'open'`)

* `PostMarket` (value: `'post_market'`)

* `Closed` (value: `'closed'`)

* `GtLp` (value: `'gt_lp'`)


## Enum: SymbolDetailItem.TradeMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_4` (value: `4`)


## Enum: SymbolDetailItem.OrderFillTiming

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


