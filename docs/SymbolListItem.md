# SymbolListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange, supports us, hk, and kr | [optional] [default to undefined]
**exchangeDesc** | **string** | Exchange description | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**quoteCurrencyPrecision** | **number** | Quote currency precision | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**category** | **string** | Category | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. - closed: Market closed. - gt_lp: GT LP session. | [optional] [default to undefined]
**tradeMode** | **number** | Current session trading mode. - 0: Trading disabled. - 1: Buy only. - 2: Sell only. - 4: Buy and sell supported. | [optional] [default to undefined]
**orderFillTiming** | **number** | Order fill timing (1&#x3D;immediate, 2&#x3D;after pre-market opens, 3&#x3D;after regular session opens) | [optional] [default to undefined]
**iconLink** | **string** | Icon URL | [optional] [default to undefined]
**quoteCurrencySymbol** | **string** | Quote currency symbol | [optional] [default to undefined]
**pricePrecision** | **number** | Price precision | [optional] [default to undefined]
**volumePrecision** | **number** | Quantity precision | [optional] [default to undefined]
**isIpo** | **boolean** | Whether it is an IPO symbol | [optional] [default to undefined]
**ipoPrice** | **string** | IPO price | [optional] [default to undefined]
**sellPriceProtection** | **string** | Sell price protection rate | [optional] [default to undefined]
**buyPriceProtection** | **string** | Buy price protection rate | [optional] [default to undefined]
**symbolDescs** | [**Array&lt;I18nTxt&gt;**](I18nTxt.md) | Multilingual symbol description | [optional] [default to undefined]

## Enum: SymbolListItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)


## Enum: SymbolListItem.TradeStatus

* `PreMarket` (value: `'pre_market'`)

* `Open` (value: `'open'`)

* `PostMarket` (value: `'post_market'`)

* `Closed` (value: `'closed'`)

* `GtLp` (value: `'gt_lp'`)


## Enum: SymbolListItem.TradeMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_4` (value: `4`)


## Enum: SymbolListItem.OrderFillTiming

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


