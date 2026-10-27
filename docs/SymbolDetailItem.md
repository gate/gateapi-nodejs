# SymbolDetailItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **SymbolDetailItem.Exchange** | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
**exchangeDesc** | **string** | Exchange description | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**quoteCurrencyPrecision** | **number** | Quote currency precision | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**symbolDesc** | **string** | Symbol description | [optional] [default to undefined]
**category** | **SymbolDetailItem.Category** | Symbol category. - CS: Common stock. - ETF: Exchange-traded funds. - ADRC, ADR: Depositary receipts for foreign companies listed in the U.S. - ETV: Exchange-traded products. - PFD: Preferred stock. - ETS: Exchange-traded securities. - ETN: Exchange-traded notes. - FUND: Funds. | [optional] [default to undefined]
**assetType** | **SymbolDetailItem.AssetType** | Asset type. - STOCK: Stock. - ETF: Exchange-traded fund. | [optional] [default to undefined]
**settlementCurrency** | **string** | Settlement currency | [optional] [default to undefined]
**maxOrderVolume** | **string** | Maximum order quantity | [optional] [default to undefined]
**stepOrderVolume** | **string** | Order step size | [optional] [default to undefined]
**minOrderVolume** | **string** | Minimum order quantity | [optional] [default to undefined]
**pricePrecision** | **number** | Price precision | [optional] [default to undefined]
**volumePrecision** | **number** | Quantity precision | [optional] [default to undefined]
**isIpo** | **boolean** | Whether it is an IPO symbol | [optional] [default to undefined]
**ipoPrice** | **string** | IPO price | [optional] [default to undefined]
**priceProtection** | **string** | Price protection range | [optional] [default to undefined]
**sellPriceProtection** | **string** | Sell price protection rate | [optional] [default to undefined]
**buyPriceProtection** | **string** | Buy price protection rate | [optional] [default to undefined]
**slippageRate** | **string** | Slippage | [optional] [default to undefined]
**commissionRate** | **string** | Fee Rate | [optional] [default to undefined]
**tradeStatus** | **SymbolDetailItem.TradeStatus** | Trading status. - pre_market: Pre-market. - open: Regular trading session. - post_market: Post-market. | [optional] [default to undefined]
**tradeMode** | **SymbolDetailItem.TradeMode** | Current session trading mode. - 0: Trading disabled. - 1: Buy only. - 2: Sell only. - 4: Buy and sell supported. - 5: Trading suspended. - 6: Trading suspended. - 7: Trading suspended. - 8: Trading suspended. | [optional] [default to undefined]
**orderFillTiming** | **SymbolDetailItem.OrderFillTiming** | Order fill timing (1&#x3D;immediate, 2&#x3D;after pre-market opens, 3&#x3D;after regular session opens) | [optional] [default to undefined]
**symbolDescs** | [**Array<SymbolDetailItemSymbolDescs>**](SymbolDetailItemSymbolDescs.md) | Multilingual symbol description | [optional] [default to undefined]
**iconLink** | **string** | Icon URL | [optional] [default to undefined]

## Enum: SymbolDetailItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)

* `Jp` (value: `'jp'`)


## Enum: SymbolDetailItem.Category

* `CS` (value: `'CS'`)

* `ETF` (value: `'ETF'`)

* `ADRC` (value: `'ADRC'`)

* `ADR` (value: `'ADR'`)

* `ETV` (value: `'ETV'`)

* `PFD` (value: `'PFD'`)

* `ETS` (value: `'ETS'`)

* `ETN` (value: `'ETN'`)

* `FUND` (value: `'FUND'`)


## Enum: SymbolDetailItem.AssetType

* `STOCK` (value: `'STOCK'`)

* `ETF` (value: `'ETF'`)


## Enum: SymbolDetailItem.TradeStatus

* `PreMarket` (value: `'pre_market'`)

* `Open` (value: `'open'`)

* `PostMarket` (value: `'post_market'`)


## Enum: SymbolDetailItem.TradeMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)


## Enum: SymbolDetailItem.OrderFillTiming

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


