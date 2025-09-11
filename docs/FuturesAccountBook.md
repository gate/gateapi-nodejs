# FuturesAccountBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Change time | [optional] [default to undefined]
**change** | **string** | Change amount | [optional] [default to undefined]
**balance** | **string** | Balance after change | [optional] [default to undefined]
**type** | **string** | Change types:  - dnw: Deposit and withdrawal - pnl: Profit and loss from position reduction - fee: Trading fees - refr: Referrer rebates - fund: Funding fees - point_dnw: Point card deposit and withdrawal - point_fee: Point card trading fees - point_refr: Point card referrer rebates - bonus_offset: Trial fund deduction | [optional] [default to undefined]
**text** | **string** | Comment | [optional] [default to undefined]
**contract** | **string** | Futures contract, the field is only available for data after 2023-10-30 | [optional] [default to undefined]
**tradeId** | **string** | trade id | [optional] [default to undefined]
**id** | **string** | Account change record ID | [optional] [default to undefined]

## Enum: FuturesAccountBook.Type

* `Dnw` (value: `'dnw'`)

* `Pnl` (value: `'pnl'`)

* `Fee` (value: `'fee'`)

* `Refr` (value: `'refr'`)

* `Fund` (value: `'fund'`)

* `PointDnw` (value: `'point_dnw'`)

* `PointFee` (value: `'point_fee'`)

* `PointRefr` (value: `'point_refr'`)

* `BonusOffset` (value: `'bonus_offset'`)


