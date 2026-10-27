# CrossexIsolatedMarginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Hyperliquid futures trading pair | [default to undefined]
**margin** | **string** | Margin adjustment amount. Positive values increase margin, while negative values decrease margin. Values with more than two decimal places are truncated to two decimal places | [default to undefined]
**positionSide** | **CrossexIsolatedMarginRequest.PositionSide** | Position side (NONE/LONG/SHORT). Defaults to NONE for one-way positions if omitted | [optional] [default to undefined]

## Enum: CrossexIsolatedMarginRequest.PositionSide

* `NONE` (value: `'NONE'`)

* `LONG` (value: `'LONG'`)

* `SHORT` (value: `'SHORT'`)


