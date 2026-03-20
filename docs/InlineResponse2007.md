# InlineResponse2007

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Response Code. &#x60;0&#x60; &#x3D; Success; &#x60;2002&#x60; &#x3D; User not logged in; &#x60;50105&#x60; &#x3D; Input parameter validation failed | [optional] [default to undefined]
**label** | **string** | Error identifier code. Empty string on success, machine-readable error label on error | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**data** | [**InlineResponse2007Data**](InlineResponse2007Data.md) |  | [optional] [default to undefined]

## Enum: InlineResponse2007.Code

* `NUMBER_0` (value: `0`)

* `NUMBER_2002` (value: `2002`)

* `NUMBER_50105` (value: `50105`)


