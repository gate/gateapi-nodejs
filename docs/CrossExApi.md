# CrossExApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCrossexRuleSymbols**](CrossExApi.md#listCrossexRuleSymbols) | **GET** /crossex/rule/symbols | [Public Interface] Query Trading Pair Information
[**listCrossexRuleRiskLimits**](CrossExApi.md#listCrossexRuleRiskLimits) | **GET** /crossex/rule/risk_limits | [Public Interface] Query Risk Limit Information
[**listCrossexTransferCoins**](CrossExApi.md#listCrossexTransferCoins) | **GET** /crossex/transfers/coin | [Public Interface] Query Supported Transfer Currencies
[**listCrossexTransfers**](CrossExApi.md#listCrossexTransfers) | **GET** /crossex/transfers | Query Fund Transfer History
[**createCrossexTransfer**](CrossExApi.md#createCrossexTransfer) | **POST** /crossex/transfers | Fund Transfer
[**createCrossexOrder**](CrossExApi.md#createCrossexOrder) | **POST** /crossex/orders | Create an order
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
[**getCrossexInterestRate**](CrossExApi.md#getCrossexInterestRate) | **GET** /crossex/interest_rate | Query margin asset interest rates
[**getCrossexFee**](CrossExApi.md#getCrossexFee) | **GET** /crossex/fee | Query User Fee Rates
[**listCrossexPositions**](CrossExApi.md#listCrossexPositions) | **GET** /crossex/positions | Query Contract Positions
[**listCrossexMarginPositions**](CrossExApi.md#listCrossexMarginPositions) | **GET** /crossex/margin_positions | Query Leveraged Positions
[**listCrossexAdlRank**](CrossExApi.md#listCrossexAdlRank) | **GET** /crossex/adl_rank | Query ADL Position Reduction Ranking
[**listCrossexOpenOrders**](CrossExApi.md#listCrossexOpenOrders) | **GET** /crossex/open_orders | Query All Current Open Orders
[**listCrossexHistoryOrders**](CrossExApi.md#listCrossexHistoryOrders) | **GET** /crossex/history_orders | queryorderhistory
[**listCrossexHistoryPositions**](CrossExApi.md#listCrossexHistoryPositions) | **GET** /crossex/history_positions | Query Contract Position History
[**listCrossexHistoryMarginPositions**](CrossExApi.md#listCrossexHistoryMarginPositions) | **GET** /crossex/history_margin_positions | Query Leveraged Position History
[**listCrossexHistoryMarginInterests**](CrossExApi.md#listCrossexHistoryMarginInterests) | **GET** /crossex/history_margin_interests | Query Leveraged Interest Deduction History
[**listCrossexHistoryTrades**](CrossExApi.md#listCrossexHistoryTrades) | **GET** /crossex/history_trades | queryfilledhistory
[**listCrossexAccountBook**](CrossExApi.md#listCrossexAccountBook) | **GET** /crossex/account_book | Query Account Asset Change History
[**listCrossexCoinDiscountRate**](CrossExApi.md#listCrossexCoinDiscountRate) | **GET** /crossex/coin_discount_rate | Query currency discount rate (discount rate of margin currency in isolated exchange mode)


## listCrossexRuleSymbols

> Promise<{ response: http.IncomingMessage; body: Array<Symbol>; }> listCrossexRuleSymbols(opts)

[Public Interface] Query Trading Pair Information

Query Trading Pair Information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CrossExApi(client);
const opts = {
  'symbols': "symbols_example" // string | 币对列表，多个以逗号分隔 示例值: BINANCE_FUTURE_ADA_USDT,OKX_FUTURE_ADA_USDT
};
api.listCrossexRuleSymbols(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| 币对列表，多个以逗号分隔 示例值: BINANCE_FUTURE_ADA_USDT,OKX_FUTURE_ADA_USDT | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Symbol>; }> [Symbol](Symbol.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexRuleRiskLimits

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20027>; }> listCrossexRuleRiskLimits(symbols)

[Public Interface] Query Risk Limit Information

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

Promise<{ response: AxiosResponse; body: Array<InlineResponse20027>; }> [InlineResponse20027](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexTransferCoins

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20028>; }> listCrossexTransferCoins(opts)

[Public Interface] Query Supported Transfer Currencies

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CrossExApi(client);
const opts = {
  'coin': "BTC" // string | Currency
};
api.listCrossexTransferCoins(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20028>; }> [InlineResponse20028](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexTransfers

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20029>; }> listCrossexTransfers(opts)

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
  'limit': 10,20,30 // number | Maximum number returned by list, max 1000
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

Promise<{ response: AxiosResponse; body: Array<InlineResponse20029>; }> [InlineResponse20029](InlineResponse20029.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossexTransfer

> Promise<{ response: http.IncomingMessage; body: InlineResponse20030; }> createCrossexTransfer(opts)

Fund Transfer

Rate limit: 10 requests per 10 seconds - In cross-exchange mode, when transferring USDT, either &#x60;from&#x60; or &#x60;to&#x60; must be &#x60;SPOT&#x60;, and the other side must be &#x60;CROSSEX&#x60;.   If &#x60;CROSSEX_${exchange_type}&#x60; (e.g. &#x60;CROSSEX_GATE&#x60;) is provided, it will be automatically treated as &#x60;CROSSEX&#x60;. - In isolated exchange mode, when transferring USDT, either &#x60;from&#x60; or &#x60;to&#x60; must be &#x60;CROSSEX_${exchange_type}&#x60;, and the other side must be &#x60;SPOT&#x60; or &#x60;CROSSEX_${exchange_type}&#x60;.   If &#x60;CROSSEX&#x60; is provided, it will be automatically treated as &#x60;CROSSEX_GATE&#x60;. - When transferring non-USDT assets to or from CrossEx, neither &#x60;from&#x60; nor &#x60;to&#x60; can be &#x60;CROSSEX&#x60;; &#x60;CROSSEX_${exchange_type}&#x60; must be explicitly specified. - When transferring non-USDT assets, transfers between &#x60;CROSSEX_{exchange_type}&#x60; accounts are supported, for example: from &#x3D; &#x60;CROSSEX_BINANCE&#x60;, to &#x3D; &#x60;CROSSEX_GATE&#x60;

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
  'inlineObject11': new InlineObject11() // InlineObject11 | 
};
api.createCrossexTransfer(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20030; }> [InlineResponse20030](InlineResponse20030.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createCrossexOrder

> Promise<{ response: http.IncomingMessage; body: InlineResponse20031; }> createCrossexOrder(opts)

Create an order

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
  'inlineObject12': new InlineObject12() // InlineObject12 | 
};
api.createCrossexOrder(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20031; }> [InlineResponse20031](InlineResponse20031.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexOrder

> Promise<{ response: http.IncomingMessage; body: InlineResponse20032; }> getCrossexOrder(orderId)

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

Promise<{ response: AxiosResponse; body: InlineResponse20032; }> [InlineResponse20032](InlineResponse20032.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexOrder

> Promise<{ response: http.IncomingMessage; body: InlineResponse20033; }> updateCrossexOrder(orderId, opts)

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
  'inlineObject13': new InlineObject13() // InlineObject13 | 
};
api.updateCrossexOrder(orderId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Support Order ID or Text for Modify Order | [default to undefined]
 **inlineObject13** | [**InlineObject13**](InlineObject13.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20033; }> [InlineResponse20033](InlineResponse20033.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelCrossexOrder

> Promise<{ response: http.IncomingMessage; body: object; }> cancelCrossexOrder(orderId)

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

Promise<{ response: AxiosResponse; body: object; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossexConvertQuote

> Promise<{ response: http.IncomingMessage; body: InlineResponse20034; }> createCrossexConvertQuote(opts)

Flash Swap Inquiry

Rate Limit: 100 requests per day

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
  'inlineObject14': new InlineObject14() // InlineObject14 | 
};
api.createCrossexConvertQuote(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject14** | [**InlineObject14**](InlineObject14.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20034; }> [InlineResponse20034](InlineResponse20034.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createCrossexConvertOrder

> Promise<{ response: http.IncomingMessage; body: object; }> createCrossexConvertOrder(opts)

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
  'inlineObject15': new InlineObject15() // InlineObject15 | 
};
api.createCrossexConvertOrder(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject15** | [**InlineObject15**](InlineObject15.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: object; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexAccount

> Promise<{ response: http.IncomingMessage; body: InlineResponse20035; }> getCrossexAccount(opts)

Query Account Assets

Rate Limit: 200 requests per 10 seconds If 100% ≤ initial_margin_rate &lt; 110%, transferring out the margin currency is prohibited. If initial_margin_rate &lt; 100%, the system will automatically cancel orders; only closing positions is allowed, not opening new ones. If maintenance_margin_rate ≤ 100%, the system will force liquidation.

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
  'exchangeType': "BINANCE,OKX,GATE,BYBIT" // string | Exchange. Not required in cross-exchange mode; required in single-exchange mode (BINANCE/OKX/GATE/BYBIT)
};
api.getCrossexAccount(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeType** | **string**| Exchange. Not required in cross-exchange mode; required in single-exchange mode (BINANCE/OKX/GATE/BYBIT) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20035; }> [InlineResponse20035](InlineResponse20035.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCrossexAccount

> Promise<{ response: http.IncomingMessage; body: InlineResponse202; }> updateCrossexAccount(opts)

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
  'inlineObject16': new InlineObject16() // InlineObject16 | 
};
api.updateCrossexAccount(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject16** | [**InlineObject16**](InlineObject16.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse202; }> [InlineResponse202](InlineResponse202.md)

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

> Promise<{ response: http.IncomingMessage; body: InlineResponse2021; }> updateCrossexPositionsLeverage(opts)

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
  'inlineObject17': new InlineObject17() // InlineObject17 | 
};
api.updateCrossexPositionsLeverage(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject17** | [**InlineObject17**](InlineObject17.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2021; }> [InlineResponse2021](InlineResponse2021.md)

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

> Promise<{ response: http.IncomingMessage; body: InlineResponse2021; }> updateCrossexMarginPositionsLeverage(opts)

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
  'inlineObject18': new InlineObject18() // InlineObject18 | 
};
api.updateCrossexMarginPositionsLeverage(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject18** | [**InlineObject18**](InlineObject18.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2021; }> [InlineResponse2021](InlineResponse2021.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## closeCrossexPosition

> Promise<{ response: http.IncomingMessage; body: InlineResponse20031; }> closeCrossexPosition(opts)

Full Close Position

Rate Limit: 100 requests per day. Automatic close-out rules. Supports closing FUTURE or MARGIN positions.  Prerequisites before using this interface: - No pending orders for the symbol exist in the current account. - When the system detects the position meets any of the following limits while prerequisites are met: - Less than or equal to the minimum notional amount (minNotional) - Less than or equal to the minimum order quantity (minSize)  After meeting the conditions, the system will automatically generate a close-out order and immediately fully close the position. This interface is used to avoid issues where orders are too small to be placed on the exchange, ensuring small positions can be closed smoothly when reaching the threshold.

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
  'inlineObject19': new InlineObject19() // InlineObject19 | 
};
api.closeCrossexPosition(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject19** | [**InlineObject19**](InlineObject19.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20031; }> [InlineResponse20031](InlineResponse20031.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossexInterestRate

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20036>; }> getCrossexInterestRate(opts)

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
  'coin': "SOL", // string | Currency
  'exchangeType': "BINANCE,OKX,GATE,BYBIT" // string | Exchange
};
api.getCrossexInterestRate(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Currency | [optional] [default to undefined]
 **exchangeType** | **string**| Exchange | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20036>; }> [InlineResponse20036](InlineResponse20036.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossexFee

> Promise<{ response: http.IncomingMessage; body: InlineResponse20037; }> getCrossexFee()

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

Promise<{ response: AxiosResponse; body: InlineResponse20037; }> [InlineResponse20037](InlineResponse20037.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexPositions

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20038>; }> listCrossexPositions(opts)

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
  'exchangeType': "BINANCE,OKX,GATE,BYBIT" // string | Exchange
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

Promise<{ response: AxiosResponse; body: Array<InlineResponse20038>; }> [InlineResponse20038](InlineResponse20038.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexMarginPositions

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20039>; }> listCrossexMarginPositions(opts)

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

Promise<{ response: AxiosResponse; body: Array<InlineResponse20039>; }> [InlineResponse20039](InlineResponse20039.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexAdlRank

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20040>; }> listCrossexAdlRank(symbol)

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

Promise<{ response: AxiosResponse; body: Array<InlineResponse20040>; }> [InlineResponse20040](InlineResponse20040.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexOpenOrders

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20032>; }> listCrossexOpenOrders(opts)

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
  'businessType': "FUTURE、MARGIN" // string | Business Type
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

Promise<{ response: AxiosResponse; body: Array<InlineResponse20032>; }> [InlineResponse20032](InlineResponse20032.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryOrders

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20041>; }> listCrossexHistoryOrders(opts)

queryorderhistory

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
  'symbol': "symbol_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'from': 56, // number | Start Millisecond Timestamp
  'to': 56 // number | End Millisecond Timestamp
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
 **symbol** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20041>; }> [InlineResponse20041](InlineResponse20041.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryPositions

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20042>; }> listCrossexHistoryPositions(opts)

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
  'symbol': "symbol_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
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
 **symbol** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20042>; }> [InlineResponse20042](InlineResponse20042.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryMarginPositions

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20043>; }> listCrossexHistoryMarginPositions(opts)

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
  'symbol': "symbol_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
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
 **symbol** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20043>; }> [InlineResponse20043](InlineResponse20043.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryMarginInterests

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20044>; }> listCrossexHistoryMarginInterests(opts)

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
  'symbol': "symbol_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'from': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'to': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'page': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'limit': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'exchangeType': "exchangeType_example" // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
};
api.listCrossexHistoryMarginInterests(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **from** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **to** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **page** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **limit** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **exchangeType** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20044>; }> [InlineResponse20044](InlineResponse20044.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexHistoryTrades

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20045>; }> listCrossexHistoryTrades(opts)

queryfilledhistory

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
  'symbol': "symbol_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
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
 **symbol** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20045>; }> [InlineResponse20045](InlineResponse20045.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20046>; }> listCrossexAccountBook(opts)

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
  'coin': "coin_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
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
 **coin** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **from** | **number**| Start Millisecond Timestamp | [optional] [default to undefined]
 **to** | **number**| End Millisecond Timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20046>; }> [InlineResponse20046](InlineResponse20046.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossexCoinDiscountRate

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse20047>; }> listCrossexCoinDiscountRate(opts)

Query currency discount rate (discount rate of margin currency in isolated exchange mode)

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
  'coin': "SOL", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'exchangeType': "OKX" // string | OKX/GATE/BINANCE/BYBIT
};
api.listCrossexCoinDiscountRate(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **exchangeType** | **string**| OKX/GATE/BINANCE/BYBIT | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse20047>; }> [InlineResponse20047](InlineResponse20047.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
