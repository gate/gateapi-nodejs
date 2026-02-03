# TrailOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order ID | [optional] [readonly] [default to undefined]
**userId** | **number** | User ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**contract** | **string** | Contract name | [optional] [default to undefined]
**settle** | **string** | Settle currency | [optional] [default to undefined]
**amount** | **string** | Trading quantity in contracts, positive for buy, negative for sell | [optional] [default to undefined]
**isGte** | **boolean** | true: activate when market price &gt;&#x3D; activation price, false: &lt;&#x3D; activation price | [optional] [default to undefined]
**activationPrice** | **string** | Activation price, 0 means trigger immediately | [optional] [default to undefined]
**priceType** | **number** | Activation price type: 0-unknown, 1-latest price, 2-index price, 3-mark price | [optional] [default to undefined]
**priceOffset** | **string** | Callback ratio or price distance, e.g., &#x60;0.1&#x60; or &#x60;0.1%&#x60; | [optional] [default to undefined]
**text** | **string** | Custom field | [optional] [default to undefined]
**reduceOnly** | **boolean** | Reduce Position Only | [optional] [default to undefined]
**positionRelated** | **boolean** | Whether bound to position | [optional] [default to undefined]
**createdAt** | **number** | Created time | [optional] [readonly] [default to undefined]
**activatedAt** | **number** | Activation time | [optional] [readonly] [default to undefined]
**finishedAt** | **number** | End time | [optional] [readonly] [default to undefined]
**createTime** | **number** | Created time | [optional] [readonly] [default to undefined]
**activeTime** | **number** | Activation time | [optional] [readonly] [default to undefined]
**finishTime** | **number** | End time | [optional] [readonly] [default to undefined]
**reason** | **string** | End reason | [optional] [readonly] [default to undefined]
**suborderText** | **string** | Sub-order text field | [optional] [readonly] [default to undefined]
**isDualMode** | **boolean** | Whether dual position mode when creating order | [optional] [readonly] [default to undefined]
**triggerPrice** | **string** | Trigger price | [optional] [readonly] [default to undefined]
**suborderId** | **number** | Sub-order ID | [optional] [readonly] [default to undefined]
**sideLabel** | **string** | Order direction label: long/short/open long/open short/close long/close short | [optional] [readonly] [default to undefined]
**originalStatus** | **number** | Order status | [optional] [readonly] [default to undefined]
**status** | **string** | Simplified order status: open/finished | [optional] [readonly] [default to undefined]
**positionSideOutput** | **string** | Same as side_label, client requires consistency with other order types | [optional] [readonly] [default to undefined]
**updatedAt** | **number** | Update time | [optional] [readonly] [default to undefined]
**extremumPrice** | **string** | Extremum price | [optional] [readonly] [default to undefined]
**statusCode** | **string** | Status code value | [optional] [readonly] [default to undefined]
**createdAtPrecise** | **string** | Creation time (high precision, seconds.microseconds format) | [optional] [readonly] [default to undefined]
**finishedAtPrecise** | **string** | End time (high precision, seconds.microseconds format) | [optional] [readonly] [default to undefined]
**activatedAtPrecise** | **string** | Activation time (high precision, seconds.microseconds format) | [optional] [readonly] [default to undefined]
**statusLabel** | **string** | Status internationalization label (translated status text) | [optional] [readonly] [default to undefined]
**posMarginMode** | **string** | Position margin mode: isolated/cross | [optional] [readonly] [default to undefined]
**positionMode** | **string** | Position mode: single, dual, and dual_plus | [optional] [readonly] [default to undefined]
**errorLabel** | **string** | Error label | [optional] [readonly] [default to undefined]
**leverage** | **string** | leverage | [optional] [readonly] [default to undefined]

## Enum: TrailOrder.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


## Enum: TrailOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)


