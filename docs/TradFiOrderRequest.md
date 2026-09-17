# TradFiOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Order price | [default to undefined]
**priceType** | **string** | Price type (trigger&#x3D;trigger price, market&#x3D;market price) | [default to undefined]
**side** | **number** | Side (1&#x3D;sell, 2&#x3D;buy) | [default to undefined]
**symbol** | **string** | Base trading symbol code | [default to undefined]
**volume** | **string** | Order quantity | [default to undefined]
**priceTp** | **string** | Take profit price (optional) | [optional] [default to undefined]
**priceSl** | **string** | Stop loss price (optional) | [optional] [default to undefined]
**leverage** | **number** | Leverage multiplier (must be one of the leverage multipliers allowed for the symbol in the trading symbol details response) | [optional] [default to undefined]

## Enum: TradFiOrderRequest.PriceType

* `Trigger` (value: `'trigger'`)

* `Market` (value: `'market'`)


## Enum: TradFiOrderRequest.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


