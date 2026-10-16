# SymbolListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
**exchangeDesc** | **string** | Exchange description | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**quoteCurrencyPrecision** | **number** | Quote currency precision | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**category** | **string** | Symbol category. - CS: Common stock. - ETF: Exchange-traded funds. - ADRC, ADR: Depositary receipts for foreign companies listed in the U.S. - ETV: Exchange-traded products. - PFD: Preferred stock. - ETS: Exchange-traded securities. - ETN: Exchange-traded notes. - FUND: Funds. | [optional] [default to undefined]
**assetType** | **string** | Asset type. - STOCK: Stock. - ETF: Exchange-traded fund. | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. | [optional] [default to undefined]
**tradeMode** | **number** | Current session trading mode. - 0: Trading disabled. - 1: Buy only. - 2: Sell only. - 4: Buy and sell supported. - 5: Trading suspended. - 6: Trading suspended. - 7: Trading suspended. - 8: Trading suspended. | [optional] [default to undefined]
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

* `Jp` (value: `'jp'`)


## Enum: SymbolListItem.Category

* `CS` (value: `'CS'`)

* `ETF` (value: `'ETF'`)

* `ADRC` (value: `'ADRC'`)

* `ADR` (value: `'ADR'`)

* `ETV` (value: `'ETV'`)

* `PFD` (value: `'PFD'`)

* `ETS` (value: `'ETS'`)

* `ETN` (value: `'ETN'`)

* `FUND` (value: `'FUND'`)


## Enum: SymbolListItem.AssetType

* `STOCK` (value: `'STOCK'`)

* `ETF` (value: `'ETF'`)


## Enum: SymbolListItem.TradeStatus

* `PreMarket` (value: `'pre_market'`)

* `Open` (value: `'open'`)

* `PostMarket` (value: `'post_market'`)


## Enum: SymbolListItem.TradeMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)


## Enum: SymbolListItem.OrderFillTiming

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


