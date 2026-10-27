# CouponDetailExtraItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **CouponDetailExtraItem.Type** | Display type. &#x60;string&#x60; &#x3D; plain text; &#x60;timestamp&#x60; &#x3D; Unix timestamp (frontend formats as date); &#x60;day&#x60; &#x3D; number of days (integer); &#x60;hour&#x60; &#x3D; number of hours (integer); &#x60;status&#x60; &#x3D; status enum value; &#x60;btn&#x60; &#x3D; button with redirect (value is button label) | [optional] [default to undefined]
**key** | **string** | Label Text (already i18n translated) | [optional] [default to undefined]
**value** | [**string | number**](string | number.md) | Value. Integer when type is timestamp/day/hour; string otherwise | [optional] [default to undefined]

## Enum: CouponDetailExtraItem.Type

* `String` (value: `'string'`)

* `Timestamp` (value: `'timestamp'`)

* `Day` (value: `'day'`)

* `Hour` (value: `'hour'`)

* `Status` (value: `'status'`)

* `Btn` (value: `'btn'`)


