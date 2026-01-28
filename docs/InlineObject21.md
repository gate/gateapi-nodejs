# InlineObject21

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Client-defined Order ID, supports letters (a-z), numbers (0-9), symbols (-, _) only | [optional] [default to undefined]
**symbol** | **string** | 唯一标识 Exchange_Business_Base_Counter  示例：  如果您想在币安交易所上为ADA/USDT交易对下现货订单，您可以使用这样的唯一标识符：&#x60;BINANCE_SPOT_ADA_USDT&#x60;;   如果您想在欧易交易所上为ADA/USDT交易对下U本位永续合约订单，您可以使用这样的唯一标识符：&#x60;OKX_FUTURE_ADA_USDT&#x60;;   如果您想在Gate交易所上为ADA/USDT交易对下现货杠杆订单，您可以使用这样的唯一标识符：&#x60;GATE_MARGIN_ADA_USDT&#x60;;   目前支持三种订单：现货订单、U本位永续合约订单和现货杠杆订单 | [default to undefined]
**side** | **string** | BUY, SELL | [default to undefined]
**type** | **string** | Order type (default: &#x60;LIMIT&#x60;; supported types: &#x60;LIMIT&#x60;, &#x60;MARKET&#x60;) | [optional] [default to &#39;LIMIT&#39;]
**timeInForce** | **string** | Default GTC, supports enumerated types: GTC, IOC, FOK, POC GTC: GoodTillCancelled IOC: ImmediateOrCancelled FOK: FillOrKill POC: PendingOrCancelled or PostOnly | [optional] [default to &#39;GTC&#39;]
**qty** | **string** | Order quantity (required unless spot market buy) | [optional] [default to undefined]
**price** | **string** | Limit Order Price (Required for Limit Orders) | [optional] [default to undefined]
**quoteQty** | **string** | Order quote quantity; required for spot and margin market buy orders | [optional] [default to undefined]
**reduceOnly** | **string** | Reduce-only: &#x60;true&#x60; or &#x60;false&#x60; | [optional] [default to undefined]
**positionSide** | **string** | Position side: &#x60;NONE&#x60;, &#x60;LONG&#x60;, &#x60;SHORT&#x60; Defaults to &#x60;NONE&#x60; (single position mode) if not specified | [optional] [default to undefined]

## Enum: InlineObject21.Side

* `BUY` (value: `'BUY'`)

* `SELL` (value: `'SELL'`)


## Enum: InlineObject21.Type

* `LIMIT` (value: `'LIMIT'`)

* `MARKET` (value: `'MARKET'`)


## Enum: InlineObject21.TimeInForce

* `GTC` (value: `'GTC'`)

* `IOC` (value: `'IOC'`)

* `FOK` (value: `'FOK'`)

* `POC` (value: `'POC'`)


## Enum: InlineObject21.ReduceOnly

* `True` (value: `'true'`)

* `False` (value: `'false'`)


## Enum: InlineObject21.PositionSide

* `LONG` (value: `'LONG'`)

* `SHORT` (value: `'SHORT'`)

* `NONE` (value: `'NONE'`)


