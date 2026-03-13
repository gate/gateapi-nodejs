# TradFiOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Order price | [default to undefined]
**priceType** | **string** | Price type (trigger&#x3D;trigger price, market&#x3D;market price) | [default to undefined]
**side** | **number** | Order side (1&#x3D;sell, 2&#x3D;buy) | [default to undefined]
**symbol** | **string** | Trading symbol code | [default to undefined]
**volume** | **string** | Order volume | [default to undefined]
**priceTp** | **string** | Take profit price (optional) | [optional] [default to undefined]
**priceSl** | **string** | Stop loss price (optional) | [optional] [default to undefined]

## Enum: TradFiOrderRequest.PriceType

* `Trigger` (value: `'trigger'`)

* `Market` (value: `'market'`)


## Enum: TradFiOrderRequest.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


