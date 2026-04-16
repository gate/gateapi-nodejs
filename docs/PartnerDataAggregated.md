# PartnerDataAggregated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rebateAmount** | **string** | 返佣金额，字符串格式保证精度  最多保留 6 位小数，去除尾零 | [default to undefined]
**tradeVolume** | **string** | 交易量，字符串格式保证精度  最多保留 6 位小数，去除尾零 | [default to undefined]
**netFee** | **string** | 净手续费，字符串格式保证精度  最多保留 6 位小数，去除尾零 | [default to undefined]
**customerCount** | **number** | Customer count (invited users) | [default to undefined]
**tradingUserCount** | **string** | 交易人数，字符串形式（与线上 JSON 序列化一致）  仅在 business_type&#x3D;0（全部）时返回具体数值，其他业务类型返回 null | [default to undefined]
**timeRangeDesc** | **string** | Time range description | [default to undefined]
**businessType** | **number** | Business Type | [default to undefined]
**businessTypeDesc** | **string** | Business type description. Allowed values: All, Spot, Futures, Alpha, Web3, Perps (DEX), Exchange All, Web3 All, TradFi | [default to undefined]

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


