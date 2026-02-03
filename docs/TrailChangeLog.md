# TrailChangeLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updatedAt** | **number** | Update time | [optional] [readonly] [default to undefined]
**amount** | **string** | Trading quantity in contracts, positive for buy, negative for sell | [optional] [readonly] [default to undefined]
**isGte** | **boolean** | true: activate when market price &gt;&#x3D; activation price, false: &lt;&#x3D; activation price | [optional] [readonly] [default to undefined]
**activationPrice** | **string** | Activation price, 0 means trigger immediately | [optional] [readonly] [default to undefined]
**priceType** | **number** | Activation price type: 0-unknown, 1-latest price, 2-index price, 3-mark price | [optional] [readonly] [default to undefined]
**priceOffset** | **string** | Callback ratio or price distance, e.g., &#x60;0.1&#x60; or &#x60;0.1%&#x60; | [optional] [readonly] [default to undefined]
**isCreate** | **boolean** | true - order creation, false - order modification | [optional] [readonly] [default to undefined]

## Enum: TrailChangeLog.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


