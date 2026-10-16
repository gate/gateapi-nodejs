# PlaceDualStockInvestmentOrderParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planId** | **string** | Product ID | [default to undefined]
**amount** | **string** | Subscription amount | [default to undefined]
**text** | **string** | Order custom information. Users can set custom ID with this field. Custom fields must meet the following conditions:  1. Must start with &#x60;t-&#x60; 2. Excluding &#x60;t-&#x60;, length cannot exceed 28 bytes 3. Can only contain numbers, letters, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**hitSpot** | **number** | Whether to use the spot account to fund a buy-low (put) subscription. &#x60;1&#x60; selects the account; omitted or other values leave it unselected. | [optional] [default to undefined]
**hitStock** | **number** | Whether to use the stock account to fund a buy-low (put) subscription. &#x60;1&#x60; selects the account; omitted or other values leave it unselected. | [optional] [default to undefined]
**hitSimple** | **number** | Whether to use the Simple Earn account to fund a buy-low (put) subscription. &#x60;1&#x60; selects the account; omitted or other values leave it unselected. | [optional] [default to undefined]

## Enum: PlaceDualStockInvestmentOrderParams.HitSpot

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: PlaceDualStockInvestmentOrderParams.HitStock

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: PlaceDualStockInvestmentOrderParams.HitSimple

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


