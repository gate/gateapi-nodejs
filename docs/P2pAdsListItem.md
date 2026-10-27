# P2pAdsListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **number** | Serial number | [optional] [default to undefined]
**asset** | **string** | Cryptocurrency | [optional] [default to undefined]
**fiatUnit** | **string** | Fiat currency | [optional] [default to undefined]
**advNo** | **number** | Ad ID | [optional] [default to undefined]
**price** | **string** | Price | [optional] [default to undefined]
**surplusAmount** | **string** | Remaining tradable crypto quantity | [optional] [default to undefined]
**maxSingleTransAmount** | **string** | Maximum crypto size per trade. | [optional] [default to undefined]
**minSingleTransAmount** | **string** | Minimum crypto size per trade. | [optional] [default to undefined]
**fiatMinAmount** | **string** | Minimum fiat amount per order | [optional] [default to undefined]
**fiatMaxAmount** | **string** | Maximum fiat amount per order | [optional] [default to undefined]
**limitBasis** | **P2pAdsListItem.LimitBasis** | Trading limit unit. 0: crypto quantity, 1: fiat amount | [optional] [default to undefined]
**limitBasisText** | **P2pAdsListItem.LimitBasisText** | Trading limit unit label. crypto: crypto quantity, fiat: fiat amount | [optional] [default to undefined]
**tradeMethods** | [**Array<P2pAdsListTradeMethod>**](P2pAdsListTradeMethod.md) | Supported payment methods list | [optional] [default to undefined]
**nickName** | **string** | Advertiser Nickname | [optional] [default to undefined]

## Enum: P2pAdsListItem.LimitBasis

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: P2pAdsListItem.LimitBasisText

* `Crypto` (value: `'crypto'`)

* `Fiat` (value: `'fiat'`)


