# CrossExApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCrossexRuleSymbols**](CrossExApi.md#listCrossexRuleSymbols) | **GET** /crossex/rule/symbols | Query symbol information
[**listCrossexRuleRiskLimits**](CrossExApi.md#listCrossexRuleRiskLimits) | **GET** /crossex/rule/risk_limits | Query risk limit information
[**listCrossexTransferCoins**](CrossExApi.md#listCrossexTransferCoins) | **GET** /crossex/transfers/coin | Query supported transfer currencies
[**listCrossexTransfers**](CrossExApi.md#listCrossexTransfers) | **GET** /crossex/transfers | Query Fund Transfer History
[**createCrossexTransfer**](CrossExApi.md#createCrossexTransfer) | **POST** /crossex/transfers | Fund Transfer
[**createCrossexOrder**](CrossExApi.md#createCrossexOrder) | **POST** /crossex/orders | Create order
[**cancelBatchCrossexOrders**](CrossExApi.md#cancelBatchCrossexOrders) | **POST** /crossex/batch_cancel_orders | Batch cancel orders
[**getCrossexOrder**](CrossExApi.md#getCrossexOrder) | **GET** /crossex/orders/{order_id} | Query order details
[**updateCrossexOrder**](CrossExApi.md#updateCrossexOrder) | **PUT** /crossex/orders/{order_id} | Modify Order
[**cancelCrossexOrder**](CrossExApi.md#cancelCrossexOrder) | **DELETE** /crossex/orders/{order_id} | Cancel Order
[**createCrossexConvertQuote**](CrossExApi.md#createCrossexConvertQuote) | **POST** /crossex/convert/quote | Flash Swap Inquiry
[**createCrossexConvertOrder**](CrossExApi.md#createCrossexConvertOrder) | **POST** /crossex/convert/orders | Flash Swap Transaction
[**getCrossexAccount**](CrossExApi.md#getCrossexAccount) | **GET** /crossex/accounts | Query Account Assets
[**updateCrossexAccount**](CrossExApi.md#updateCrossexAccount) | **PUT** /crossex/accounts | Modify Account Contract Position Mode and Account Mode
[**getCrossexPositionsLeverage**](CrossExApi.md#getCrossexPositionsLeverage) | **GET** /crossex/positions/leverage | Query Contract Trading Pair Leverage Multiplier
[**updateCrossexPositionsLeverage**](CrossExApi.md#updateCrossexPositionsLeverage) | **POST** /crossex/positions/leverage | Modify Contract Trading Pair Leverage Multiplier
[**getCrossexMarginPositionsLeverage**](CrossExApi.md#getCrossexMarginPositionsLeverage) | **GET** /crossex/margin_positions/leverage | Query Leveraged Trading Pair Leverage Multiplier
[**updateCrossexMarginPositionsLeverage**](CrossExApi.md#updateCrossexMarginPositionsLeverage) | **POST** /crossex/margin_positions/leverage | Modify Leveraged Trading Pair Leverage Multiplier
[**closeCrossexPosition**](CrossExApi.md#closeCrossexPosition) | **POST** /crossex/position | Full Close Position
[**getCrossexPositionsMarginMode**](CrossExApi.md#getCrossexPositionsMarginMode) | **GET** /crossex/positions/margin_mode | Get futures position margin mode
[**updateCrossexPositionsMarginMode**](CrossExApi.md#updateCrossexPositionsMarginMode) | **POST** /crossex/positions/margin_mode | Update futures position margin mode
[**updateCrossexPositionsMargin**](CrossExApi.md#updateCrossexPositionsMargin) | **POST** /crossex/positions/margin | Increase or decrease isolated margin
[**getCrossexInterestRate**](CrossExApi.md#getCrossexInterestRate) | **GET** /crossex/interest_rate | Query margin asset interest rates
[**getCrossexFee**](CrossExApi.md#getCrossexFee) | **GET** /crossex/fee | Query User Fee Rates
[**listCrossexPositions**](CrossExApi.md#listCrossexPositions) | **GET** /crossex/positions | Query Contract Positions
[**listCrossexMarginPositions**](CrossExApi.md#listCrossexMarginPositions) | **GET** /crossex/margin_positions | Query Leveraged Positions
[**listCrossexAdlRank**](CrossExApi.md#listCrossexAdlRank) | **GET** /crossex/adl_rank | Query ADL Position Reduction Ranking
[**listCrossexOpenOrders**](CrossExApi.md#listCrossexOpenOrders) | **GET** /crossex/open_orders | Query All Current Open Orders
[**listCrossexHistoryOrders**](CrossExApi.md#listCrossexHistoryOrders) | **GET** /crossex/history_orders | Query order history
[**listCrossexHistoryPositions**](CrossExApi.md#listCrossexHistoryPositions) | **GET** /crossex/history_positions | Query Contract Position History
[**listCrossexHistoryMarginPositions**](CrossExApi.md#listCrossexHistoryMarginPositions) | **GET** /crossex/history_margin_positions | Query Leveraged Position History
[**listCrossexHistoryMarginInterests**](CrossExApi.md#listCrossexHistoryMarginInterests) | **GET** /crossex/history_margin_interests | Query Leveraged Interest Deduction History
[**listCrossexHistoryTrades**](CrossExApi.md#listCrossexHistoryTrades) | **GET** /crossex/history_trades | Query filled history
[**listCrossexAccountBook**](CrossExApi.md#listCrossexAccountBook) | **GET** /crossex/account_book | Query Account Asset Change History
[**listCrossexCoinDiscountRate**](CrossExApi.md#listCrossexCoinDiscountRate) | **GET** /crossex/coin_discount_rate | Query Currency Discount Rate
[**listCrossexMarketTickers**](CrossExApi.md#listCrossexMarketTickers) | **GET** /crossex/market/tickers | Get exchange tickers
[**listCrossexMarketFundingInfo**](CrossExApi.md#listCrossexMarketFundingInfo) | **GET** /crossex/market/funding_info | Get exchange futures funding rate information


## listCrossexRuleSymbols

> Promise<{ response: http.IncomingMessage; body: Array<Symbol>; }> listCrossexRuleSymbols(opts)

Query symbol information

Query Trading Pair Information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbols': "symbols_example" // string | List of trading pairs, comma-separated. Example: BINANCE_FUTURE_ADA_USDT,OKX_FUTURE_ADA_USDT
};
api.listCrossexRuleSymbols(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| List of trading pairs, comma-separated. Example: BINANCE_FUTURE_ADA_USDT,OKX_FUTURE_ADA_USDT | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Symbol>; }> [Symbol](Symbol.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexRuleRiskLimits

> Promise<{ response: http.IncomingMessage; body: Array<CrossexRiskLimit>; }> listCrossexRuleRiskLimits(symbols)

Query risk limit information

Query risk limit information for futures/margin trading pairs

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CrossExApi(client);
const symbols = "BINANCE_FUTURE_AAVE_USDT"; // string | Trading Pair List, multiple separated by commas Example values: BINANCE_FUTURE_ADA_USDT,GATE_MARGIN_ADA_USDT
api.listCrossexRuleRiskLimits(symbols)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Trading Pair List, multiple separated by commas Example values: BINANCE_FUTURE_ADA_USDT,GATE_MARGIN_ADA_USDT | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexRiskLimit>; }> [CrossexRiskLimit](CrossexRiskLimit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexTransferCoins

> Promise<{ response: http.IncomingMessage; body: Array<CrossexTransferCoin>; }> listCrossexTransferCoins(opts)

Query supported transfer currencies

&#x60;est_fee&#x60;: Estimated fee. When a fund transfer involves an on-chain withdrawal, the exchange charges this fee. This value is for reference only; the actual fee charged by the exchange applies

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CrossExApi(client);
const opts = {
  'coin': "BTC" // string | Query by specified currency name
};
api.listCrossexTransferCoins(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Query by specified currency name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexTransferCoin>; }> [CrossexTransferCoin](CrossexTransferCoin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexTransfers

> Promise<{ response: http.IncomingMessage; body: Array<CrossexTransferRecord>; }> listCrossexTransfers(opts)

Query Fund Transfer History

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'coin': "USDT, BTC, ETH", // string | Query by specified currency name
  'orderId': "38083797492939266", // string | Supports querying by the order ID returned when creating an order (tx_id), as well as a user-defined custom ID specified at creation (text)
  'from': 1750681141933, // number | Start timestamp for the query
  'to': 1750681141933, // number | End timestamp for the query, defaults to current time if not specified
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number returned by list, max 1000
};
api.listCrossexTransfers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Query by specified currency name | [optional] [default to undefined]
 **orderId** | **string**| Supports querying by the order ID returned when creating an order (tx_id), as well as a user-defined custom ID specified at creation (text) | [optional] [default to undefined]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number returned by list, max 1000 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexTransferRecord>; }> [CrossexTransferRecord](CrossexTransferRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossexTransfer

> Promise<{ response: http.IncomingMessage; body: CrossexTransferResponse; }> createCrossexTransfer(opts)

Fund Transfer

Rate limit: 10 requests per 10 seconds - In cross-exchange mode, when transferring USDT, either &#x60;from&#x60; or &#x60;to&#x60; must be &#x60;SPOT&#x60;, and the other side must be &#x60;CROSSEX&#x60;.   If &#x60;CROSSEX_${exchange_type}&#x60; (e.g. &#x60;CROSSEX_GATE&#x60;) is provided, it will be automatically treated as &#x60;CROSSEX&#x60;. - In isolated exchange mode, when transferring USDT, either &#x60;from&#x60; or &#x60;to&#x60; must be &#x60;CROSSEX_${exchange_type}&#x60;, and the other side must be &#x60;SPOT&#x60; or &#x60;CROSSEX_${exchange_type}&#x60;.   If &#x60;CROSSEX&#x60; is provided, it will be automatically treated as &#x60;CROSSEX_GATE&#x60;. - When transferring non-USDT assets to or from CrossEx, neither &#x60;from&#x60; nor &#x60;to&#x60; can be &#x60;CROSSEX&#x60;; &#x60;CROSSEX_${exchange_type}&#x60; must be explicitly specified. - When transferring non-USDT assets, transfers between &#x60;CROSSEX_{exchange_type}&#x60; accounts are supported, for example: from &#x3D; &#x60;CROSSEX_BINANCE&#x60;, to &#x3D; &#x60;CROSSEX_GATE&#x60; - When either side of the transfer is &#x60;CROSSEX_KRAKEN&#x60;, only USDT is supported for now. - When either side of the transfer is &#x60;CROSSEX_HYPERLIQUID&#x60;, the other side must be &#x60;SPOT&#x60;, and only USDC is supported.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexTransferRequest': new CrossexTransferRequest() // CrossexTransferRequest | 
};
api.createCrossexTransfer(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexTransferRequest** | [**CrossexTransferRequest**](CrossexTransferRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexTransferResponse; }> [CrossexTransferResponse](CrossexTransferResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createCrossexOrder

> Promise<{ response: http.IncomingMessage; body: CrossexOrderActionResponse; }> createCrossexOrder(opts)

Create order

Rate Limit: 100 requests per 10 seconds, maximum 1,000 open orders per user

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexOrderRequest': new CrossexOrderRequest() // CrossexOrderRequest | 
};
api.createCrossexOrder(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexOrderRequest** | [**CrossexOrderRequest**](CrossexOrderRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexOrderActionResponse; }> [CrossexOrderActionResponse](CrossexOrderActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelBatchCrossexOrders

> Promise<{ response: http.IncomingMessage; body: Array<CrossexBatchCancelOrderResponse>; }> cancelBatchCrossexOrders(crossexBatchCancelOrderRequest)

Batch cancel orders

Cancel multiple specified orders. Either order_id or text is required; if both are provided, order_id takes precedence. Rate limit: 100 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const crossexBatchCancelOrderRequest = [new CrossexBatchCancelOrderRequest()]; // Array<CrossexBatchCancelOrderRequest> | 
api.cancelBatchCrossexOrders(crossexBatchCancelOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexBatchCancelOrderRequest** | [**Array&lt;CrossexBatchCancelOrderRequest&gt;**](CrossexBatchCancelOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexBatchCancelOrderResponse>; }> [CrossexBatchCancelOrderResponse](CrossexBatchCancelOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexOrder

> Promise<{ response: http.IncomingMessage; body: CrossexOrder; }> getCrossexOrder(orderId)

Query order details

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const orderId = "2048522992198912"; // string | 1. Supports querying order IDs returned when creating orders 2. Supports custom IDs specified by users when creating orders (i.e., the text field)
api.getCrossexOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| 1. Supports querying order IDs returned when creating orders 2. Supports custom IDs specified by users when creating orders (i.e., the text field) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossexOrder; }> [CrossexOrder](CrossexOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexOrder

> Promise<{ response: http.IncomingMessage; body: CrossexOrderActionResponse; }> updateCrossexOrder(orderId, opts)

Modify Order

Rate Limit: 100 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const orderId = "orderId_example"; // string | Support Order ID or Text for Modify Order
const opts = {
  'crossexOrderUpdateRequest': new CrossexOrderUpdateRequest() // CrossexOrderUpdateRequest | 
};
api.updateCrossexOrder(orderId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Support Order ID or Text for Modify Order | [default to undefined]
 **crossexOrderUpdateRequest** | [**CrossexOrderUpdateRequest**](CrossexOrderUpdateRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexOrderActionResponse; }> [CrossexOrderActionResponse](CrossexOrderActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelCrossexOrder

> Promise<{ response: http.IncomingMessage; body: CrossexOrderActionResponse; }> cancelCrossexOrder(orderId)

Cancel Order

Rate Limit: 100 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const orderId = "orderId_example"; // string | Support Order ID or Text for Cancel Order
api.cancelCrossexOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Support Order ID or Text for Cancel Order | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossexOrderActionResponse; }> [CrossexOrderActionResponse](CrossexOrderActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossexConvertQuote

> Promise<{ response: http.IncomingMessage; body: CrossexConvertQuoteResponse; }> createCrossexConvertQuote(opts)

Flash Swap Inquiry

Rate limit: 100 requests per day For HYPERLIQUID, swaps between &#x60;HYPERLIQUID_USDC&#x60; and &#x60;CROSSEX_USDT&#x60; are supported. Flash Swap in isolated exchange mode is not currently supported for HYPERLIQUID. For KRAKEN, only conversion from &#x60;KRAKEN_USD&#x60; to &#x60;CROSSEX_USDT&#x60; is supported. Flash Swap in isolated exchange mode is not currently supported for KRAKEN.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexConvertQuoteRequest': new CrossexConvertQuoteRequest() // CrossexConvertQuoteRequest | 
};
api.createCrossexConvertQuote(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexConvertQuoteRequest** | [**CrossexConvertQuoteRequest**](CrossexConvertQuoteRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexConvertQuoteResponse; }> [CrossexConvertQuoteResponse](CrossexConvertQuoteResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createCrossexConvertOrder

> Promise<{ response: http.IncomingMessage; body: CrossexConvertOrderResponse; }> createCrossexConvertOrder(opts)

Flash Swap Transaction

Rate limit: 10 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexConvertOrderRequest': new CrossexConvertOrderRequest() // CrossexConvertOrderRequest | 
};
api.createCrossexConvertOrder(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexConvertOrderRequest** | [**CrossexConvertOrderRequest**](CrossexConvertOrderRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexConvertOrderResponse; }> [CrossexConvertOrderResponse](CrossexConvertOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexAccount

> Promise<{ response: http.IncomingMessage; body: CrossexAccount; }> getCrossexAccount(opts)

Query Account Assets

Rate limit: 200 requests per 10 seconds If 100% &lt;&#x3D; initial_margin_rate &lt; 110%, transferring out the margin currency is prohibited. If initial_margin_rate &lt; 100%, the system automatically cancels orders; only closing positions is allowed, not opening new ones. If maintenance_margin_rate &lt;&#x3D; 100%, the system forces liquidation.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'exchangeType': "BINANCE,OKX,GATE,BYBIT,KRAKEN,HYPERLIQUID,DERIBIT" // string | Trading venue identifier. Omit in cross-exchange mode; required in isolated-per-venue mode (`BINANCE` / `OKX` / `GATE` / `BYBIT` / `KRAKEN` / `HYPERLIQUID` / `DERIBIT`).
};
api.getCrossexAccount(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeType** | **string**| Trading venue identifier. Omit in cross-exchange mode; required in isolated-per-venue mode (&#x60;BINANCE&#x60; / &#x60;OKX&#x60; / &#x60;GATE&#x60; / &#x60;BYBIT&#x60; / &#x60;KRAKEN&#x60; / &#x60;HYPERLIQUID&#x60; / &#x60;DERIBIT&#x60;). | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossexAccount; }> [CrossexAccount](CrossexAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexAccount

> Promise<{ response: http.IncomingMessage; body: CrossexAccountUpdateResponse; }> updateCrossexAccount(opts)

Modify Account Contract Position Mode and Account Mode

Rate Limit: 100 requests per 60 seconds. position_mode+exchange_type modifies contract position mode (exchange_type is required when the user\&#39;s account mode is split exchange); account_mode modifies the user\&#39;s account mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexAccountUpdateRequest': new CrossexAccountUpdateRequest() // CrossexAccountUpdateRequest | 
};
api.updateCrossexAccount(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexAccountUpdateRequest** | [**CrossexAccountUpdateRequest**](CrossexAccountUpdateRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexAccountUpdateResponse; }> [CrossexAccountUpdateResponse](CrossexAccountUpdateResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexPositionsLeverage

> Promise<{ response: http.IncomingMessage; body: { [key: string]: string; }; }> getCrossexPositionsLeverage(opts)

Query Contract Trading Pair Leverage Multiplier

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbols': "BINANCE_FUTURE_BTC_USDT,OKX_FUTURE_BTC_USDT,GATE_FUTURE_BTC_USDT" // string | Trading Pair List, multiple separated by commas
};
api.getCrossexPositionsLeverage(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Trading Pair List, multiple separated by commas | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: string; }; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexPositionsLeverage

> Promise<{ response: http.IncomingMessage; body: CrossexLeverageResponse; }> updateCrossexPositionsLeverage(opts)

Modify Contract Trading Pair Leverage Multiplier

Rate Limit: 100 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexLeverageRequest': new CrossexLeverageRequest() // CrossexLeverageRequest | 
};
api.updateCrossexPositionsLeverage(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexLeverageRequest** | [**CrossexLeverageRequest**](CrossexLeverageRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexLeverageResponse; }> [CrossexLeverageResponse](CrossexLeverageResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexMarginPositionsLeverage

> Promise<{ response: http.IncomingMessage; body: { [key: string]: string; }; }> getCrossexMarginPositionsLeverage(opts)

Query Leveraged Trading Pair Leverage Multiplier

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbols': "BINANCE_MARGIN_BTC_USDT,OKX_MARGIN_BTC_USDT,GATE_MARGIN_BTC_USDT" // string | Trading Pair List, multiple separated by commas
};
api.getCrossexMarginPositionsLeverage(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Trading Pair List, multiple separated by commas | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: string; }; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexMarginPositionsLeverage

> Promise<{ response: http.IncomingMessage; body: CrossexLeverageResponse; }> updateCrossexMarginPositionsLeverage(opts)

Modify Leveraged Trading Pair Leverage Multiplier

Rate Limit: 100 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexLeverageRequest': new CrossexLeverageRequest() // CrossexLeverageRequest | 
};
api.updateCrossexMarginPositionsLeverage(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexLeverageRequest** | [**CrossexLeverageRequest**](CrossexLeverageRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexLeverageResponse; }> [CrossexLeverageResponse](CrossexLeverageResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## closeCrossexPosition

> Promise<{ response: http.IncomingMessage; body: CrossexOrderActionResponse; }> closeCrossexPosition(opts)

Full Close Position

Rate limit: 100 requests per day. Automatic position-closing rules. FUTURE and MARGIN positions are supported.  Before using this endpoint, ensure that the following prerequisite is met: - There are no open orders for the symbol in the current account. - Once the prerequisite is met, the system checks whether the position meets either of the following conditions: - Less than the minimum notional amount (minNotional) - Less than the minimum order size (minSize)  When either condition is met, the system automatically creates a closing order and immediately closes the entire position. This endpoint prevents positions that are too small to be submitted to an exchange from becoming stranded and ensures that small positions can be closed when they fall below the threshold.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexClosePositionRequest': new CrossexClosePositionRequest() // CrossexClosePositionRequest | 
};
api.closeCrossexPosition(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexClosePositionRequest** | [**CrossexClosePositionRequest**](CrossexClosePositionRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexOrderActionResponse; }> [CrossexOrderActionResponse](CrossexOrderActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexPositionsMarginMode

> Promise<{ response: http.IncomingMessage; body: CrossexMarginModeResponse; }> getCrossexPositionsMarginMode(symbol)

Get futures position margin mode

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const symbol = "HYPERLIQUID_FUTURE_CXMT_USDC"; // string | Futures trading pair
api.getCrossexPositionsMarginMode(symbol)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Futures trading pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossexMarginModeResponse; }> [CrossexMarginModeResponse](CrossexMarginModeResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexPositionsMarginMode

> Promise<{ response: http.IncomingMessage; body: CrossexMarginModeResponse; }> updateCrossexPositionsMarginMode(opts)

Update futures position margin mode

Rate limit: 100 requests per 10 seconds. Only Hyperliquid futures trading pairs are supported. The margin mode cannot be changed while open orders or positions exist

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexMarginModeRequest': new CrossexMarginModeRequest() // CrossexMarginModeRequest | 
};
api.updateCrossexPositionsMarginMode(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexMarginModeRequest** | [**CrossexMarginModeRequest**](CrossexMarginModeRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexMarginModeResponse; }> [CrossexMarginModeResponse](CrossexMarginModeResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateCrossexPositionsMargin

> Promise<{ response: http.IncomingMessage; body: CrossexIsolatedMarginResponse; }> updateCrossexPositionsMargin(opts)

Increase or decrease isolated margin

Rate limit: 100 requests per 10 seconds. Only Hyperliquid isolated futures positions are supported. Positive values increase margin, while negative values decrease margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'crossexIsolatedMarginRequest': new CrossexIsolatedMarginRequest() // CrossexIsolatedMarginRequest | 
};
api.updateCrossexPositionsMargin(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossexIsolatedMarginRequest** | [**CrossexIsolatedMarginRequest**](CrossexIsolatedMarginRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CrossexIsolatedMarginResponse; }> [CrossexIsolatedMarginResponse](CrossexIsolatedMarginResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexInterestRate

> Promise<{ response: http.IncomingMessage; body: Array<CrossexInterestRate>; }> getCrossexInterestRate(opts)

Query margin asset interest rates

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'coin': "SOL", // string | Query by specified currency name
  'exchangeType': "BINANCE,OKX,GATE,BYBIT,KRAKEN,HYPERLIQUID,DERIBIT" // string | Exchange
};
api.getCrossexInterestRate(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Query by specified currency name | [optional] [default to undefined]
 **exchangeType** | **string**| Exchange | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexInterestRate>; }> [CrossexInterestRate](CrossexInterestRate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossexFee

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse200>; }> getCrossexFee()

Query User Fee Rates

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
api.getCrossexFee()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse200>; }> [InlineResponse200](InlineResponse200.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexPositions

> Promise<{ response: http.IncomingMessage; body: Array<CrossexPosition>; }> listCrossexPositions(opts)

Query Contract Positions

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbol': "BINANCE_FUTURE_ADA_USDT", // string | Trading Pair
  'exchangeType': "BINANCE,OKX,GATE,BYBIT,KRAKEN,HYPERLIQUID,DERIBIT" // string | Exchange
};
api.listCrossexPositions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading Pair | [optional] [default to undefined]
 **exchangeType** | **string**| Exchange | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexPosition>; }> [CrossexPosition](CrossexPosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexMarginPositions

> Promise<{ response: http.IncomingMessage; body: Array<CrossexMarginPosition>; }> listCrossexMarginPositions(opts)

Query Leveraged Positions

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbol': "BINANCE_MARGIN_ADA_USDT", // string | Currency pair
  'exchangeType': "BINANCE" // string | Exchange
};
api.listCrossexMarginPositions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **exchangeType** | **string**| Exchange | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexMarginPosition>; }> [CrossexMarginPosition](CrossexMarginPosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexAdlRank

> Promise<{ response: http.IncomingMessage; body: CrossexAdlRank; }> listCrossexAdlRank(symbol)

Query ADL Position Reduction Ranking

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const symbol = "BINANCE_FUTURE_ADA_USDT"; // string | Trading Pair
api.listCrossexAdlRank(symbol)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading Pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossexAdlRank; }> [CrossexAdlRank](CrossexAdlRank.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexOpenOrders

> Promise<{ response: http.IncomingMessage; body: Array<CrossexOrder>; }> listCrossexOpenOrders(opts)

Query All Current Open Orders

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbol': "BINANCE_FUTURE_ADA_USDT", // string | Trading Pair
  'exchangeType': "BINANCE", // string | Exchange
  'businessType': "FUTURE" // string | Business Type
};
api.listCrossexOpenOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading Pair | [optional] [default to undefined]
 **exchangeType** | **string**| Exchange | [optional] [default to undefined]
 **businessType** | **string**| Business Type | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexOrder>; }> [CrossexOrder](CrossexOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryOrders

> Promise<{ response: http.IncomingMessage; body: Array<CrossexOrder>; }> listCrossexHistoryOrders(opts)

Query order history

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'page': 56, // number | Page number
  'limit': 56, // number | Maximum number of records returned in a single list
  'symbol': "symbol_example", // string | Currency pair
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56, // number | End Millisecond Timestamp
  'attributes': "attributes_example" // string | Order attributes (`COMMON` normal / `LIQ` liquidation takeover / `REDUCE` liquidation reduction / `ADL` auto-deleverage / `SETTLEMENT` delisting settlement). Multiple values, comma-separated.
};
api.listCrossexHistoryOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to undefined]
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]
 **attributes** | **string**| Order attributes (&#x60;COMMON&#x60; normal / &#x60;LIQ&#x60; liquidation takeover / &#x60;REDUCE&#x60; liquidation reduction / &#x60;ADL&#x60; auto-deleverage / &#x60;SETTLEMENT&#x60; delisting settlement). Multiple values, comma-separated. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexOrder>; }> [CrossexOrder](CrossexOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryPositions

> Promise<{ response: http.IncomingMessage; body: Array<CrossexHistoricalPosition>; }> listCrossexHistoryPositions(opts)

Query Contract Position History

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'page': 56, // number | Page number
  'limit': 56, // number | Maximum number returned by list, max 1000
  'symbol': "symbol_example", // string | Currency pair
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56 // number | End Millisecond Timestamp
};
api.listCrossexHistoryPositions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number returned by list, max 1000 | [optional] [default to undefined]
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexHistoricalPosition>; }> [CrossexHistoricalPosition](CrossexHistoricalPosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryMarginPositions

> Promise<{ response: http.IncomingMessage; body: Array<CrossexHistoricalMarginPosition>; }> listCrossexHistoryMarginPositions(opts)

Query Leveraged Position History

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'page': 56, // number | Page number
  'limit': 56, // number | Maximum number returned by list, max 1000
  'symbol': "symbol_example", // string | Currency pair
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56 // number | End Millisecond Timestamp
};
api.listCrossexHistoryMarginPositions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number returned by list, max 1000 | [optional] [default to undefined]
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexHistoricalMarginPosition>; }> [CrossexHistoricalMarginPosition](CrossexHistoricalMarginPosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryMarginInterests

> Promise<{ response: http.IncomingMessage; body: Array<CrossexMarginInterestRecord>; }> listCrossexHistoryMarginInterests(opts)

Query Leveraged Interest Deduction History

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbol': "symbol_example", // string | Currency pair
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56, // number | End Millisecond Timestamp
  'page': 56, // number | Page number
  'limit': 56, // number | Maximum number returned by list, max 1000
  'exchangeType': "exchangeType_example" // string | Exchange
};
api.listCrossexHistoryMarginInterests(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number returned by list, max 1000 | [optional] [default to undefined]
 **exchangeType** | **string**| Exchange | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexMarginInterestRecord>; }> [CrossexMarginInterestRecord](CrossexMarginInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryTrades

> Promise<{ response: http.IncomingMessage; body: Array<CrossexTrade>; }> listCrossexHistoryTrades(opts)

Query filled history

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'page': 56, // number | Page number
  'limit': 56, // number | Maximum number returned by list, max 1000
  'symbol': "symbol_example", // string | Currency pair
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56 // number | End Millisecond Timestamp
};
api.listCrossexHistoryTrades(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number returned by list, max 1000 | [optional] [default to undefined]
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexTrade>; }> [CrossexTrade](CrossexTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<CrossexAccountBookRecord>; }> listCrossexAccountBook(opts)

Query Account Asset Change History

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'page': 56, // number | Page number
  'limit': 56, // number | Maximum number returned by list, max 1000
  'coin': "coin_example", // string | Query by specified currency name
  'statementType': "statementType_example", // string | Bill entry type. The filter accepts the same values returned in the response.
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56 // number | End Millisecond Timestamp
};
api.listCrossexAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum number returned by list, max 1000 | [optional] [default to undefined]
 **coin** | **string**| Query by specified currency name | [optional] [default to undefined]
 **statementType** | **string**| Bill entry type. The filter accepts the same values returned in the response. | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexAccountBookRecord>; }> [CrossexAccountBookRecord](CrossexAccountBookRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexCoinDiscountRate

> Promise<{ response: http.IncomingMessage; body: Array<CrossexCoinDiscountRate>; }> listCrossexCoinDiscountRate(opts)

Query Currency Discount Rate

Rate Limit: 200 requests per 10 seconds

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'coin': "SOL", // string | Query by specified currency name
  'exchangeType': "OKX" // string | OKX/GATE/BINANCE/BYBIT/KRAKEN/HYPERLIQUID/DERIBIT
};
api.listCrossexCoinDiscountRate(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Query by specified currency name | [optional] [default to undefined]
 **exchangeType** | **string**| OKX/GATE/BINANCE/BYBIT/KRAKEN/HYPERLIQUID/DERIBIT | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossexCoinDiscountRate>; }> [CrossexCoinDiscountRate](CrossexCoinDiscountRate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexMarketTickers

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse2001>; }> listCrossexMarketTickers(opts)

Get exchange tickers

Rate limit: 1 request per second - Margin trading pairs cannot be passed directly as parameters. For example, &#x60;GATE_MARGIN_BTC_USDT&#x60; is invalid.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbols': "GATE_SPOT_BTC_USDT,GATE_FUTURE_BTC_USDT" // string | Trading Pair List, multiple separated by commas
};
api.listCrossexMarketTickers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Trading Pair List, multiple separated by commas | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse2001>; }> [InlineResponse2001](InlineResponse2001.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexMarketFundingInfo

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse2002>; }> listCrossexMarketFundingInfo(opts)

Get exchange futures funding rate information

Rate limit: 1 request per second - For &#x60;Deribit&#x60;, &#x60;funding_rate&#x60; is the current real-time rate calculated over an 8-hour period.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbols': "symbols_example" // string | Trading Pair List, multiple separated by commas
};
api.listCrossexMarketFundingInfo(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Trading Pair List, multiple separated by commas | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse2002>; }> [InlineResponse2002](InlineResponse2002.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
