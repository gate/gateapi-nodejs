# InlineResponse202

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**positionMode** | **string** | Requested futures position mode to modify (SINGLE/DUAL) | [optional] [default to undefined]
**accountMode** | **string** | Requested account mode to modify (CROSS_EXCHANGE/ISOLATED_EXCHANGE, default: CROSS_EXCHANGE) | [optional] [default to undefined]
**exchangeType** | **string** | Requested exchange to modify (BINANCE/OKX/GATE/CROSSEX; when account mode is ISOLATED_EXCHANGE, the exchange must be specified to modify futures position mode) | [optional] [default to undefined]

