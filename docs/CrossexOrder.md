# CrossexOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** |  | [default to undefined]
**orderId** | **string** | Order ID | [default to undefined]
**text** | **string** | Customer-defined order ID | [default to undefined]
**state** | **string** | Order State:  NEW: The order is legal and waiting to be sent to the exchange  OPEN: The order has been placed on the orderbook of the exchange  PARTIALLY_FILLED: The order has been partially completed  FILLED: The order has been fully executed  FAIL: The order verification in CrossEx did not pass. Please check the order reason  REJECT：The order was rejected by the exchange. Please check the order reason | [default to undefined]
**symbol** | **string** | Trading pair unique identifier ,example: BINANCE_SPOT_BTC_USDT, BINANCE_FUTURE_BTC_USDT | [default to undefined]
**side** | **string** | Side(BUY,SELL) | [default to undefined]
**type** | **string** | Type(LIMIT, MARKET) | [default to undefined]
**attribute** | **string** | COMMON, LIQ, REDUCE, ADL | [default to undefined]
**exchangeType** | **string** | Exchange type(BINANCE,OKX,GATE,BYBIT) | [default to undefined]
**businessType** | **string** | Business type(SPOT,FUTURE,MARGIN) | [default to undefined]
**qty** | **string** | Order base quantity | [default to undefined]
**quoteQty** | **string** | Order quote quantity | [default to undefined]
**price** | **string** | Order price | [default to undefined]
**timeInForce** | **string** | Timeinforce (default GTC, enums:GTC,IOC,FOK,POC) | [default to undefined]
**executedQty** | **string** | Executed quantity | [default to undefined]
**executedAmount** | **string** | Executed quote quantity | [default to undefined]
**executedAvgPrice** | **string** | Average transaction price | [default to undefined]
**feeCoin** | **string** | Transaction fee coin | [default to undefined]
**fee** | **string** | Transaction fee amount | [default to undefined]
**reduceOnly** | **string** | Reduce position orders only, \&quot;true\&quot; or \&quot;false\&quot; | [default to undefined]
**leverage** | **string** | Order leverage | [default to undefined]
**reason** | **string** | Fail message | [default to undefined]
**lastExecutedQty** | **string** | Last transaction quantity | [default to undefined]
**lastExecutedPrice** | **string** | Last transaction price | [default to undefined]
**lastExecutedAmount** | **string** | Last transaction amount | [default to undefined]
**positionSide** | **string** | Position side(NONE/LONG/SHORT) | [default to undefined]
**createTime** | **string** | Create time | [default to undefined]
**updateTime** | **string** | Update time | [default to undefined]

