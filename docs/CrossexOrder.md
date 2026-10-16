# CrossexOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | User ID | [default to undefined]
**orderId** | **string** | Order ID | [default to undefined]
**text** | **string** | Client-defined order ID. | [default to undefined]
**state** | **string** | Order status: &#x60;NEW&#x60;: validated locally, pending submission to the exchange &#x60;OPEN&#x60;: resting on the exchange order book &#x60;PARTIALLY_FILLED&#x60;: partially filled &#x60;FILLED&#x60;: fully filled &#x60;FAIL&#x60;: CrossEx validation failed; see &#x60;reason&#x60; &#x60;REJECT&#x60;: rejected by the exchange; see &#x60;reason&#x60; &#x60;CANCELLED&#x60;: cancelled | [default to undefined]
**symbol** | **string** | Unique trading pair identifiers, e.g. &#x60;BINANCE_SPOT_BTC_USDT&#x60;, &#x60;BINANCE_FUTURE_BTC_USDT&#x60;. | [default to undefined]
**side** | **string** | Side (&#x60;BUY&#x60; buy / &#x60;SELL&#x60; sell). | [default to undefined]
**type** | **string** | Order type (&#x60;LIMIT&#x60; limit / &#x60;MARKET&#x60; market). | [default to undefined]
**attribute** | **string** | Order attributes (&#x60;COMMON&#x60; normal / &#x60;LIQ&#x60; liquidation takeover / &#x60;REDUCE&#x60; liquidation reduction / &#x60;ADL&#x60; auto-deleverage / &#x60;SETTLEMENT&#x60; delisting settlement). | [default to undefined]
**exchangeType** | **string** | Exchange type (BINANCE / OKX / GATE / BYBIT / KRAKEN / HYPERLIQUID / DERIBIT / LIGHTER). Stocks and ETFs return the listing market (US / HK / KR / JP) | [default to undefined]
**businessType** | **string** | Business type (SPOT: spot / FUTURE: futures / MARGIN: margin / CONVERT: flash swap / STOCK: stocks / ETF: exchange-traded funds) | [default to undefined]
**qty** | **string** | Order quantity in the base currency. | [default to undefined]
**quoteQty** | **string** | Order quantity in the quote currency. | [default to undefined]
**price** | **string** | Order price. Stocks and ETFs use the listing market currency (USD/HKD/KRW/JPY) | [default to undefined]
**timeInForce** | **string** | Time-in-force policy (default: GTC; allowed values: GTC, IOC, FOK, POC, and RPI) | [default to undefined]
**executedQty** | **string** | Filled base amount. | [default to undefined]
**executedAmount** | **string** | Filled amount in the quote currency. Stocks and ETFs use the listing market currency (USD/HKD/KRW/JPY) | [default to undefined]
**executedAvgPrice** | **string** | Average fill price. Stocks and ETFs use the listing market currency (USD/HKD/KRW/JPY) | [default to undefined]
**feeCoin** | **string** | Fee currency | [default to undefined]
**fee** | **string** | Fee amount. | [default to undefined]
**reduceOnly** | **string** | Reduce-only order (&#x60;\&quot;true\&quot;&#x60; or &#x60;\&quot;false\&quot;&#x60;). | [default to undefined]
**leverage** | **string** | Order leverage multiplier. | [default to undefined]
**reason** | **string** | Failure reason description. | [default to undefined]
**lastExecutedQty** | **string** | Base quantity of the latest fill. | [default to undefined]
**lastExecutedPrice** | **string** | Price of the latest fill. Stocks and ETFs use the listing market currency (USD/HKD/KRW/JPY) | [default to undefined]
**lastExecutedAmount** | **string** | Amount of the latest fill. Stocks and ETFs use the listing market currency (USD/HKD/KRW/JPY) | [default to undefined]
**positionSide** | **string** | Position side (&#x60;NONE&#x60; one-way position / &#x60;LONG&#x60; long / &#x60;SHORT&#x60; short) | [default to undefined]
**createTime** | **string** | Created time | [default to undefined]
**updateTime** | **string** | Update time | [default to undefined]

