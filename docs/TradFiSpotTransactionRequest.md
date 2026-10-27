# TradFiSpotTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **TradFiSpotTransactionRequest.Asset** | Asset, USDT only | [default to undefined]
**change** | **string** | Change amount, must be greater than 0 | [default to undefined]
**type** | **TradFiSpotTransactionRequest.Type** | Transaction type. deposit transfers funds from the spot account to the stock account; withdraw transfers funds from the stock account to the spot account. | [default to undefined]
**refId** | **string** | Business idempotent ID | [default to undefined]

## Enum: TradFiSpotTransactionRequest.Asset

* `USDT` (value: `'USDT'`)


## Enum: TradFiSpotTransactionRequest.Type

* `Deposit` (value: `'deposit'`)

* `Withdraw` (value: `'withdraw'`)


