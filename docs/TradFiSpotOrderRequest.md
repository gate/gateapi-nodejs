# TradFiSpotOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume** | **string** | Order quantity | [default to undefined]
**symbol** | **string** | Symbol | [default to undefined]
**side** | **number** | Side (1&#x3D;sell, 2&#x3D;buy) | [default to undefined]
**priceType** | **string** | Price type (market &#x3D; market order, limit &#x3D; limit order) | [default to undefined]
**tradingSession** | **string** | Trading session. Limit orders support only all, while market orders support only regular. | [default to undefined]
**timeInForce** | **string** | Time in force. - day: Day order. | [default to undefined]
**price** | **string** | Order price, used for limit orders | [optional] [default to undefined]
**clientOrderId** | **string** | Client-defined order ID | [optional] [default to undefined]

## Enum: TradFiSpotOrderRequest.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: TradFiSpotOrderRequest.PriceType

* `Market` (value: `'market'`)

* `Limit` (value: `'limit'`)


## Enum: TradFiSpotOrderRequest.TradingSession

* `Regular` (value: `'regular'`)

* `All` (value: `'all'`)


## Enum: TradFiSpotOrderRequest.TimeInForce

* `Day` (value: `'day'`)


