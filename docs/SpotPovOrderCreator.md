# SpotPovOrderCreator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [default to undefined]
**side** | **SpotPovOrderCreator.Side** | Buy or sell order | [default to undefined]
**amount** | **string** | Trade amount | [default to undefined]
**participationRate** | **number** | Target participation rate as a percentage. Valid values: 5, 10, 20, and 40 | [default to undefined]
**ttl** | **string** | Time to live. Valid values: 1h, 6h, 12h, 1d, 2d, 3d, 4d, 5d, 6d, and 7d | [default to undefined]
**limitPrice** | **string** | Limit price. If omitted, the market price is used | [optional] [default to undefined]
**triggerPrice** | **string** | Trigger price. If omitted, the order is triggered immediately | [optional] [default to undefined]
**text** | **string** | Order custom information. Users can set custom ID with this field. Custom fields must meet the following conditions:  1. Must start with &#x60;t-&#x60; 2. Excluding &#x60;t-&#x60;, length cannot exceed 28 bytes 3. Can only contain numbers, letters, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]

## Enum: SpotPovOrderCreator.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


