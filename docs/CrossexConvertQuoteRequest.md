# CrossexConvertQuoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchangeType** | **string** | Exchange type Currently supports only BINANCE, OKX, GATE, BYBIT, HYPERLIQUID, KRAKEN, and LIGHTER | [default to undefined]
**fromCoin** | **string** | Asset Sold | [default to undefined]
**toCoin** | **string** | Asset to receive OKX and GATE only support conversion to BTC, ETH, or USDT BYBIT and BINANCE only support conversion to USDT HYPERLIQUID only supports conversion to USDT or USDC KRAKEN only supports conversion to USDT LIGHTER only supports swaps between USDT and USDC | [default to undefined]
**fromAmount** | **string** | Amount to sell | [default to undefined]

