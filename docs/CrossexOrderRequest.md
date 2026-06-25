# CrossexOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Client-defined Order ID, supports letters (a-z), numbers (0-9), symbols (-, _) only | [optional] [default to undefined]
**symbol** | **string** | Unique identifier &#x60;{Exchange}_{Business}_{Base}_{Counter}&#x60; Examples: To send a Binance spot order on &#x60;ADA/USDT&#x60;, use &#x60;BINANCE_SPOT_ADA_USDT&#x60;; For an ADA/USDT-margined USDT perpetual futures order on OKX, use &#x60;OKX_FUTURE_ADA_USDT&#x60;; For ADA/USDT margin trading on Gate, use &#x60;GATE_MARGIN_ADA_USDT&#x60;; For ADA/USDT spot trading on Bybit, use &#x60;BYBIT_SPOT_ADA_USDT&#x60;; For an ADA/USD futures order on Kraken, use &#x60;KRAKEN_FUTURE_ADA_USD&#x60;; For an ADA/USDC futures order on Hyperliquid, use &#x60;HYPERLIQUID_FUTURE_ADA_USDC&#x60;; Supports spot trades, USDT-margined perpetual futures, and spot margin templates. BYBIT omits spot margin for now; Kraken and Hyperliquid omit dedicated spot/margin legs inside CrossEx. | [default to undefined]
**side** | **string** | BUY, SELL | [default to undefined]
**type** | **string** | Order type (default: &#x60;LIMIT&#x60;; supported types: &#x60;LIMIT&#x60;, &#x60;MARKET&#x60;) | [optional] [default to &#39;LIMIT&#39;]
**timeInForce** | **string** | Default GTC, supports enumerated types: GTC, IOC, FOK, POC GTC: GoodTillCancelled IOC: ImmediateOrCancelled FOK: FillOrKill POC: PendingOrCancelled or PostOnly | [optional] [default to &#39;GTC&#39;]
**qty** | **string** | Order quantity (required unless spot market buy) | [optional] [default to undefined]
**price** | **string** | Limit Order Price (Required for Limit Orders) | [optional] [default to undefined]
**quoteQty** | **string** | Order quote quantity; required for spot and margin market buy orders | [optional] [default to undefined]
**reduceOnly** | **string** | Reduce-only: &#x60;true&#x60; or &#x60;false&#x60; | [optional] [default to undefined]
**positionSide** | **string** | Position side: &#x60;NONE&#x60;, &#x60;LONG&#x60;, &#x60;SHORT&#x60; Defaults to &#x60;NONE&#x60; (single position mode) if not specified | [optional] [default to undefined]

## Enum: CrossexOrderRequest.Side

* `BUY` (value: `'BUY'`)

* `SELL` (value: `'SELL'`)


## Enum: CrossexOrderRequest.Type

* `LIMIT` (value: `'LIMIT'`)

* `MARKET` (value: `'MARKET'`)


## Enum: CrossexOrderRequest.TimeInForce

* `GTC` (value: `'GTC'`)

* `IOC` (value: `'IOC'`)

* `FOK` (value: `'FOK'`)

* `POC` (value: `'POC'`)


## Enum: CrossexOrderRequest.ReduceOnly

* `True` (value: `'true'`)

* `False` (value: `'false'`)


## Enum: CrossexOrderRequest.PositionSide

* `LONG` (value: `'LONG'`)

* `SHORT` (value: `'SHORT'`)

* `NONE` (value: `'NONE'`)


