# PartnerDataAggregated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rebateAmount** | **string** | Rebate amount as a string for precision. Up to 6 decimal places; trailing zeros removed. | [default to undefined]
**tradeVolume** | **string** | Trading volume as a string for precision. Up to 6 decimal places; trailing zeros removed. | [default to undefined]
**netFee** | **string** | Net fee as a string for precision. Up to 6 decimal places; trailing zeros removed. | [default to undefined]
**customerCount** | **number** | Customer count (invited users) | [default to undefined]
**tradingUserCount** | **string** | Transaction participant count​ (string format, consistent with online JSON serialization) only returns a specific value when business_type&#x3D;0(all), and returns nullfor other business types. | [default to undefined]
**timeRangeDesc** | **string** | Time range description | [default to undefined]
**businessType** | **number** | Business Type | [default to undefined]
**businessTypeDesc** | **string** | Business type description; allowed values: All, Spot, Futures, Alpha, Web3, Perps (DEX), Exchange All, Web3 All, TradFi | [default to undefined]

## Enum: PartnerDataAggregated.BusinessType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)

* `NUMBER_6` (value: `6`)

* `NUMBER_7` (value: `7`)

* `NUMBER_8` (value: `8`)


