# Symbol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Unique trading pair identifier in the format ExchangeType_BusinessType_Base_Counter. Stocks and ETFs use the market as ExchangeType (US/HK/KR/JP) and STOCK or ETF as the business type, for example US_STOCK_AAPL_USDT, HK_STOCK_00700_USDT, or US_ETF_SPY_USDT. | [default to undefined]
**exchangeType** | **string** | Exchange type (BINANCE / OKX / GATE / BYBIT / KRAKEN / HYPERLIQUID / DERIBIT / LIGHTER). Stocks and ETFs return the listing market (US / HK / KR / JP) | [default to undefined]
**businessType** | **string** | Business type (SPOT: spot / FUTURE: futures / MARGIN: margin / STOCK: stocks / ETF: exchange-traded funds) | [default to undefined]
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
**tag** | **string** | Tag information. Hyperliquid returns DEX information, stocks and ETFs return the security description, and other businesses return an empty string | [default to undefined]

