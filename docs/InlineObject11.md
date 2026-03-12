# InlineObject11

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Client-defined Order ID, supports letters (a-z), numbers (0-9), symbols (-, _) only | [optional] [default to undefined]
**symbol** | **string** | Unique Identifier Exchange_Business_Base_Counter Examples: - To place a Spot order for ADA/USDT on BINANCE: Use identifier &#x60;BINANCE_SPOT_ADA_USDT&#x60;;   - To place a USDT-margined Perpetual Futures order for ADA/USDT on OKX: Use identifier &#x60;OKX_FUTURE_ADA_USDT&#x60;;   - To place a Spot Margin order for ADA/USDT on GATE: Use identifier &#x60;GATE_MARGIN_ADA_USDT&#x60;;   - To place a Spot order for ADA/USDT on BYBIT: Use identifier &#x60;BYBIT_SPOT_ADA_USDT&#x60;;   Currently supports three order types: Spot orders, USDT-margined Perpetual Futures orders, and Spot Margin orders. BYBIT does not currently support Spot Margin orders | [default to undefined]
**side** | **string** | BUY, SELL | [default to undefined]
**type** | **string** | Order type (default: &#x60;LIMIT&#x60;; supported types: &#x60;LIMIT&#x60;, &#x60;MARKET&#x60;) | [optional] [default to &#39;LIMIT&#39;]
**timeInForce** | **string** | Default GTC, supports enumerated types: GTC, IOC, FOK, POC GTC: GoodTillCancelled IOC: ImmediateOrCancelled FOK: FillOrKill POC: PendingOrCancelled or PostOnly | [optional] [default to &#39;GTC&#39;]
**qty** | **string** | Order quantity (required unless spot market buy) | [optional] [default to undefined]
**price** | **string** | Limit Order Price (Required for Limit Orders) | [optional] [default to undefined]
**quoteQty** | **string** | Order quote quantity; required for spot and margin market buy orders | [optional] [default to undefined]
**reduceOnly** | **string** | Reduce-only: &#x60;true&#x60; or &#x60;false&#x60; | [optional] [default to undefined]
**positionSide** | **string** | Position side: &#x60;NONE&#x60;, &#x60;LONG&#x60;, &#x60;SHORT&#x60; Defaults to &#x60;NONE&#x60; (single position mode) if not specified | [optional] [default to undefined]

## Enum: InlineObject11.Side

* `BUY` (value: `'BUY'`)

* `SELL` (value: `'SELL'`)


## Enum: InlineObject11.Type

* `LIMIT` (value: `'LIMIT'`)

* `MARKET` (value: `'MARKET'`)


## Enum: InlineObject11.TimeInForce

* `GTC` (value: `'GTC'`)

* `IOC` (value: `'IOC'`)

* `FOK` (value: `'FOK'`)

* `POC` (value: `'POC'`)


## Enum: InlineObject11.ReduceOnly

* `True` (value: `'true'`)

* `False` (value: `'false'`)


## Enum: InlineObject11.PositionSide

* `LONG` (value: `'LONG'`)

* `SHORT` (value: `'SHORT'`)

* `NONE` (value: `'NONE'`)


