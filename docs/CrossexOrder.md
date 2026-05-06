# CrossexOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | User ID | [default to undefined]
**orderId** | **string** | Order ID | [default to undefined]
**text** | **string** | Client-defined order ID. | [default to undefined]
**state** | **string** | 订单状态：  NEW：订单已通过校验，等待发送到交易所  OPEN：订单已挂在交易所订单簿上  PARTIALLY_FILLED：订单已部分成交  FILLED：订单已完全成交  FAIL：CrossEx 内部校验未通过，请查看 reason 字段了解失败原因  REJECT：订单被交易所拒绝，请查看 reason 字段了解失败原因 | [default to undefined]
**symbol** | **string** | Unique trading pair identifiers, e.g. &#x60;BINANCE_SPOT_BTC_USDT&#x60;, &#x60;BINANCE_FUTURE_BTC_USDT&#x60;. | [default to undefined]
**side** | **string** | Side (&#x60;BUY&#x60; buy / &#x60;SELL&#x60; sell). | [default to undefined]
**type** | **string** | Order type (&#x60;LIMIT&#x60; limit / &#x60;MARKET&#x60; market). | [default to undefined]
**attribute** | **string** | Order attributes (&#x60;COMMON&#x60; normal / &#x60;LIQ&#x60; liquidation takeover / &#x60;REDUCE&#x60; liquidation reduction / &#x60;ADL&#x60; auto-deleverage). | [default to undefined]
**exchangeType** | **string** | Exchange type (&#x60;BINANCE&#x60; / &#x60;OKX&#x60; / &#x60;GATE&#x60; / &#x60;BYBIT&#x60;). | [default to undefined]
**businessType** | **string** | Business type (&#x60;SPOT&#x60; Spot / &#x60;FUTURE&#x60; Futures / &#x60;MARGIN&#x60; Margin). | [default to undefined]
**qty** | **string** | Order quantity in the base currency. | [default to undefined]
**quoteQty** | **string** | Order quantity in the quote currency. | [default to undefined]
**price** | **string** | Order price. | [default to undefined]
**timeInForce** | **string** | Time in force (default &#x60;GTC&#x60;; enum: &#x60;GTC&#x60; / &#x60;IOC&#x60; / &#x60;FOK&#x60; / &#x60;POC&#x60;). | [default to undefined]
**executedQty** | **string** | Filled base amount. | [default to undefined]
**executedAmount** | **string** | Filled quote amount. | [default to undefined]
**executedAvgPrice** | **string** | Average Filled Price | [default to undefined]
**feeCoin** | **string** | Fee currency | [default to undefined]
**fee** | **string** | Fee amount. | [default to undefined]
**reduceOnly** | **string** | Reduce-only order (&#x60;\&quot;true\&quot;&#x60; or &#x60;\&quot;false\&quot;&#x60;). | [default to undefined]
**leverage** | **string** | Order leverage multiplier. | [default to undefined]
**reason** | **string** | Failure reason description. | [default to undefined]
**lastExecutedQty** | **string** | Base quantity of the latest fill. | [default to undefined]
**lastExecutedPrice** | **string** | Price of the latest fill. | [default to undefined]
**lastExecutedAmount** | **string** | Quote amount of the latest fill. | [default to undefined]
**positionSide** | **string** | Position side (&#x60;NONE&#x60; flat / &#x60;LONG&#x60; long / &#x60;SHORT&#x60; short). | [default to undefined]
**createTime** | **string** | Created time | [default to undefined]
**updateTime** | **string** | Update time | [default to undefined]

