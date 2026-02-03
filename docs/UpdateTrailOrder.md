# UpdateTrailOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order ID | [default to undefined]
**amount** | **string** | Total trading quantity in contracts, positive for buy, negative for sell, 0 means no modification | [optional] [default to undefined]
**activationPrice** | **string** | Activation price, 0 means trigger immediately, empty means no modification | [optional] [default to undefined]
**isGteStr** | **string** | true: activate when market price &gt;&#x3D; activation price, false: &lt;&#x3D; activation price, empty means no modification | [optional] [default to undefined]
**priceType** | **number** | Activation price type, not provided or 0 means no modification, 1-latest price, 2-index price, 3-mark price | [optional] [default to undefined]
**priceOffset** | **string** | Callback ratio or price distance, e.g., &#x60;0.1&#x60; or &#x60;0.1%&#x60;; empty means no modification | [optional] [default to undefined]

## Enum: UpdateTrailOrder.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


