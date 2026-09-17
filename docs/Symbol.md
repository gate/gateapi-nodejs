# Symbol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Unique trading pair identifier in the form ExchangeType_BusinessType_Base_Counter. | [default to undefined]
**exchangeType** | **string** | Venue bucket (&#x60;BINANCE&#x60; / &#x60;OKX&#x60; / &#x60;GATE&#x60; / &#x60;BYBIT&#x60; / &#x60;KRAKEN&#x60; / &#x60;HYPERLIQUID&#x60; / &#x60;DERIBIT&#x60; / &#x60;LIGHTER&#x60;). | [default to undefined]
**businessType** | **string** | Business type (&#x60;SPOT&#x60; Spot / &#x60;FUTURE&#x60; Futures / &#x60;MARGIN&#x60; Margin). | [default to undefined]
**state** | **string** | Status (&#x60;live&#x60; running / &#x60;suspend&#x60; paused). | [default to undefined]
**minSize** | **string** | Minimum order quantity | [default to undefined]
**minNotional** | **string** | Minimum Order Value | [default to undefined]
**lotSize** | **string** | Quantity Step | [default to undefined]
**tickSize** | **string** | Price Step | [default to undefined]
**maxNumOrders** | **string** | maximumopen orderamount | [default to undefined]
**maxMarketSize** | **string** | Maximum Market Order Quantity | [default to undefined]
**maxLimitSize** | **string** | Maximum order quantity for limit orders. | [default to undefined]
**contractSize** | **string** | Contract multiplier (deprecated; quantity is used uniformly) | [default to undefined]
**liquidationFee** | **string** | Liquidation Fee Rate | [default to undefined]
**delistTime** | **string** | Millisecond timestamp; &#x60;0&#x60; means not delisted. | [default to undefined]
**supportRpi** | **string** | Whether RPI order placement is supported (true if supported; false otherwise) | [optional] [default to undefined]
**supportCross** | **string** | Whether cross-margin order placement is supported (true if supported; false otherwise) | [optional] [default to undefined]

