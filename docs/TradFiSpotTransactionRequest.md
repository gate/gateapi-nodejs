# TradFiSpotTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | Asset, USDT only | [default to undefined]
**change** | **string** | Change amount | [default to undefined]
**type** | **string** | Transaction type (deposit&#x3D;deposit, withdraw&#x3D;withdrawal) | [default to undefined]
**refId** | **string** | Business idempotent ID | [default to undefined]

## Enum: TradFiSpotTransactionRequest.Asset

* `USDT` (value: `'USDT'`)


## Enum: TradFiSpotTransactionRequest.Type

* `Deposit` (value: `'deposit'`)

* `Withdraw` (value: `'withdraw'`)


