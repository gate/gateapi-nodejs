# StockApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryStockUserAssets**](StockApi.md#queryStockUserAssets) | **GET** /stock/users/assets | Query user assets
[**queryStockSymbols**](StockApi.md#queryStockSymbols) | **GET** /stock/symbols | Query symbol list
[**queryStockSymbolDetail**](StockApi.md#queryStockSymbolDetail) | **GET** /stock/symbols/detail | Query symbol details
[**queryStockOrderBook**](StockApi.md#queryStockOrderBook) | **GET** /stock/market/{symbol}/orderbook | Query market order book
[**queryStockOrderList**](StockApi.md#queryStockOrderList) | **GET** /stock/orders | Query open order list
[**createStockOrder**](StockApi.md#createStockOrder) | **POST** /stock/orders | Create order
[**deleteAllStockOrders**](StockApi.md#deleteAllStockOrders) | **DELETE** /stock/orders | Cancel all open orders
[**queryStockOrderHistory**](StockApi.md#queryStockOrderHistory) | **GET** /stock/orders/history | Query historical order list
[**updateStockOrder**](StockApi.md#updateStockOrder) | **PUT** /stock/orders/{order_id} | Modify order
[**deleteStockOrder**](StockApi.md#deleteStockOrder) | **DELETE** /stock/orders/{order_id} | Cancel order
[**queryStockPositions**](StockApi.md#queryStockPositions) | **GET** /stock/positions | Query current position list
[**closeStockPosition**](StockApi.md#closeStockPosition) | **POST** /stock/positions/close | Close position
[**queryStockTransactions**](StockApi.md#queryStockTransactions) | **GET** /stock/transactions | Query transaction records
[**createStockTransaction**](StockApi.md#createStockTransaction) | **POST** /stock/transactions | Fund transfer
[**queryStockExchanges**](StockApi.md#queryStockExchanges) | **GET** /stock/exchanges | Query supported exchanges
[**queryStockFeeRate**](StockApi.md#queryStockFeeRate) | **GET** /stock/fee-rate | Query fee rates for Japanese and Korean stocks


## queryStockUserAssets

> Promise<{ response: http.IncomingMessage; body: UserAssetResp2; }> queryStockUserAssets(opts)

Query user assets

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const opts = {
  'pnlCalcType': 1, // 1 | 2 | PnL calculation cost type. Defaults to average cost price when omitted (1 = average cost price, 2 = diluted cost price)
  'pnlCalcPrice': 1 // 1 | 2 | PnL calculation price type. Defaults to intraday price when omitted (1 = intraday price, 2 = latest extended-hours price)
};
api.queryStockUserAssets(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pnlCalcType** | **PnlCalcType**| PnL calculation cost type. Defaults to average cost price when omitted (1 &#x3D; average cost price, 2 &#x3D; diluted cost price) | [optional] [default to undefined]
 **pnlCalcPrice** | **PnlCalcPrice**| PnL calculation price type. Defaults to intraday price when omitted (1 &#x3D; intraday price, 2 &#x3D; latest extended-hours price) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UserAssetResp2; }> [UserAssetResp2](UserAssetResp2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockSymbols

> Promise<{ response: http.IncomingMessage; body: Symbols2; }> queryStockSymbols(opts)

Query symbol list

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.StockApi(client);
const opts = {
  'symbols': "AAPL,TSLA", // string | Symbol list, multiple separated by commas
  'exchange': "us", // 'us' | 'hk' | 'kr' | 'jp' | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks.
  'withDescI18n': true, // boolean | Whether to return multilingual symbol description
  'page': 1, // number | Page number, defaults to 1
  'pageSize': 100 // number | Page size, defaults to 10, max 500; server caps at 500
};
api.queryStockSymbols(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Symbol list, multiple separated by commas | [optional] [default to undefined]
 **exchange** | **Exchange**| Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
 **withDescI18n** | **boolean**| Whether to return multilingual symbol description | [optional] [default to undefined]
 **page** | **number**| Page number, defaults to 1 | [optional] [default to undefined]
 **pageSize** | **number**| Page size, defaults to 10, max 500; server caps at 500 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Symbols2; }> [Symbols2](Symbols2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockSymbolDetail

> Promise<{ response: http.IncomingMessage; body: SymbolDetail; }> queryStockSymbolDetail(opts)

Query symbol details

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.StockApi(client);
const opts = {
  'symbols': "AAPL,TSLA", // string | Symbol list, multiple separated by commas
  'exchange': "us", // 'us' | 'hk' | 'kr' | 'jp' | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks.
  'page': 1, // number | Page number, defaults to 1
  'pageSize': 100 // number | Page size, defaults to 10, max 500; server caps at 500
};
api.queryStockSymbolDetail(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Symbol list, multiple separated by commas | [optional] [default to undefined]
 **exchange** | **Exchange**| Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
 **page** | **number**| Page number, defaults to 1 | [optional] [default to undefined]
 **pageSize** | **number**| Page size, defaults to 10, max 500; server caps at 500 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SymbolDetail; }> [SymbolDetail](SymbolDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockOrderBook

> Promise<{ response: http.IncomingMessage; body: OrderBook2; }> queryStockOrderBook(symbol)

Query market order book

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.StockApi(client);
const symbol = "AAPL"; // string | Symbol
api.queryStockOrderBook(symbol)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Symbol | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderBook2; }> [OrderBook2](OrderBook2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockOrderList

> Promise<{ response: http.IncomingMessage; body: OrderList2; }> queryStockOrderList(opts)

Query open order list

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const opts = {
  'symbol': "AAPL" // string | Symbol
};
api.queryStockOrderList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Symbol | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderList2; }> [OrderList2](OrderList2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createStockOrder

> Promise<{ response: http.IncomingMessage; body: CreateOrder2; }> createStockOrder(tradFiSpotOrderRequest)

Create order

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const tradFiSpotOrderRequest = new TradFiSpotOrderRequest(); // TradFiSpotOrderRequest | 
api.createStockOrder(tradFiSpotOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tradFiSpotOrderRequest** | [**TradFiSpotOrderRequest**](TradFiSpotOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CreateOrder2; }> [CreateOrder2](CreateOrder2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAllStockOrders

> Promise<{ response: http.IncomingMessage; body: DeleteOrder; }> deleteAllStockOrders()

Cancel all open orders

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
api.deleteAllStockOrders()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: DeleteOrder; }> [DeleteOrder](DeleteOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockOrderHistory

> Promise<{ response: http.IncomingMessage; body: OrderHistoryList2; }> queryStockOrderHistory(opts)

Query historical order list

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const opts = {
  'symbol': "AAPL", // string | Symbol
  'orderIds': "123456,123457", // string | Order ID list, multiple separated by commas; max 20, each must be a positive integer
  'beginTime': 1769378400, // number | Start time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be >= begin_time, query range must not exceed 3 months.
  'endTime': 1769464800, // number | End time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be >= begin_time, query range must not exceed 3 months.
  'side': 2, // 1 | 2 | Side (1=sell, 2=buy)
  'page': 1, // number | Page number, defaults to 1
  'pageSize': 100 // number | Page size, defaults to 10, max 500; server caps at 500
};
api.queryStockOrderHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Symbol | [optional] [default to undefined]
 **orderIds** | **string**| Order ID list, multiple separated by commas; max 20, each must be a positive integer | [optional] [default to undefined]
 **beginTime** | **number**| Start time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be &gt;&#x3D; begin_time, query range must not exceed 3 months. | [optional] [default to undefined]
 **endTime** | **number**| End time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be &gt;&#x3D; begin_time, query range must not exceed 3 months. | [optional] [default to undefined]
 **side** | **Side**| Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
 **page** | **number**| Page number, defaults to 1 | [optional] [default to undefined]
 **pageSize** | **number**| Page size, defaults to 10, max 500; server caps at 500 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderHistoryList2; }> [OrderHistoryList2](OrderHistoryList2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateStockOrder

> Promise<{ response: http.IncomingMessage; body: UpdateOrder2; }> updateStockOrder(orderId, tradFiSpotOrderUpdateRequest)

Modify order

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const orderId = BigInt('123456'); // bigint | Order ID
const tradFiSpotOrderUpdateRequest = new TradFiSpotOrderUpdateRequest(); // TradFiSpotOrderUpdateRequest | 
api.updateStockOrder(orderId, tradFiSpotOrderUpdateRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number &#124; bigint**| Order ID | [default to undefined]
 **tradFiSpotOrderUpdateRequest** | [**TradFiSpotOrderUpdateRequest**](TradFiSpotOrderUpdateRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UpdateOrder2; }> [UpdateOrder2](UpdateOrder2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteStockOrder

> Promise<{ response: http.IncomingMessage; body: DeleteOrder; }> deleteStockOrder(orderId)

Cancel order

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const orderId = BigInt('123456'); // bigint | Order ID
api.deleteStockOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number &#124; bigint**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: DeleteOrder; }> [DeleteOrder](DeleteOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockPositions

> Promise<{ response: http.IncomingMessage; body: PositionList2; }> queryStockPositions(opts)

Query current position list

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const opts = {
  'pnlCalcType': 1, // 1 | 2 | PnL calculation cost type. Defaults to average cost price when omitted (1 = average cost price, 2 = diluted cost price)
  'pnlCalcPrice': 1, // 1 | 2 | PnL calculation price type. Defaults to intraday price when omitted (1 = intraday price, 2 = latest extended-hours price)
  'symbol': "AAPL", // string | Symbol
  'exchange': "us" // 'us' | 'hk' | 'kr' | 'jp' | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks.
};
api.queryStockPositions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pnlCalcType** | **PnlCalcType**| PnL calculation cost type. Defaults to average cost price when omitted (1 &#x3D; average cost price, 2 &#x3D; diluted cost price) | [optional] [default to undefined]
 **pnlCalcPrice** | **PnlCalcPrice**| PnL calculation price type. Defaults to intraday price when omitted (1 &#x3D; intraday price, 2 &#x3D; latest extended-hours price) | [optional] [default to undefined]
 **symbol** | **string**| Symbol | [optional] [default to undefined]
 **exchange** | **Exchange**| Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: PositionList2; }> [PositionList2](PositionList2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## closeStockPosition

> Promise<{ response: http.IncomingMessage; body: ClosePosition; }> closeStockPosition(tradFiSpotClosePositionRequest)

Close position

Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const tradFiSpotClosePositionRequest = new TradFiSpotClosePositionRequest(); // TradFiSpotClosePositionRequest | 
api.closeStockPosition(tradFiSpotClosePositionRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tradFiSpotClosePositionRequest** | [**TradFiSpotClosePositionRequest**](TradFiSpotClosePositionRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: ClosePosition; }> [ClosePosition](ClosePosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## queryStockTransactions

> Promise<{ response: http.IncomingMessage; body: TransactionList2; }> queryStockTransactions(opts)

Query transaction records

Rate limit: 5 qps. Query stock account transaction records, including fund transfers, trades, fees, dividends, rewards, and stock transfers.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const opts = {
  'beginTime': BigInt('1769378400'), // number | Start time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be >= begin_time, query range must not exceed 3 months.
  'endTime': BigInt('1769464800'), // number | End time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be >= begin_time, query range must not exceed 3 months.
  'refId': "transfer-202607070001", // string | Business idempotent ID. When ref_id is provided, the server queries by ref_id, ignoring other parameters such as begin_time, end_time, type, page, page_size
  'type': "deposit", // 'deposit' | 'withdraw' | 'fee' | 'dividend' | 'sell' | 'buy' | 'award' | 'stock_transfer_in' | 'stock_transfer_out' | 流水类型。 - deposit: 资金转入，从现货账户转入到股票账户。 - withdraw: 资金转出，从股票账户转出到现货账户。 - fee: 交易手续费。 - dividend: 分红派息。 - sell: 卖出股票入账。 - buy: 买入股票出账。 - award: 空投奖励。 - stock_transfer_in: 股票转入。 - stock_transfer_out: 股票转出。
  'page': 1, // number | Page number, defaults to 1
  'pageSize': 100 // number | Page size, defaults to 10, max 500; server caps at 500
};
api.queryStockTransactions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginTime** | **number &#124; bigint**| Start time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be &gt;&#x3D; begin_time, query range must not exceed 3 months. | [optional] [default to undefined]
 **endTime** | **number &#124; bigint**| End time (Unix timestamp, seconds). When both begin_time and end_time are provided, end_time must be &gt;&#x3D; begin_time, query range must not exceed 3 months. | [optional] [default to undefined]
 **refId** | **string**| Business idempotent ID. When ref_id is provided, the server queries by ref_id, ignoring other parameters such as begin_time, end_time, type, page, page_size | [optional] [default to undefined]
 **type** | **Type**| 流水类型。 - deposit: 资金转入，从现货账户转入到股票账户。 - withdraw: 资金转出，从股票账户转出到现货账户。 - fee: 交易手续费。 - dividend: 分红派息。 - sell: 卖出股票入账。 - buy: 买入股票出账。 - award: 空投奖励。 - stock_transfer_in: 股票转入。 - stock_transfer_out: 股票转出。 | [optional] [default to undefined]
 **page** | **number**| Page number, defaults to 1 | [optional] [default to undefined]
 **pageSize** | **number**| Page size, defaults to 10, max 500; server caps at 500 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TransactionList2; }> [TransactionList2](TransactionList2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createStockTransaction

> Promise<{ response: http.IncomingMessage; body: CreateTransaction2; }> createStockTransaction(tradFiSpotTransactionRequest)

Fund transfer

Rate limit: 5 qps. Fund transfer moves USDT between the spot account and the stock account. - deposit: transfer from the spot account to the stock account. - withdraw: transfer from the stock account to the spot account.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.StockApi(client);
const tradFiSpotTransactionRequest = new TradFiSpotTransactionRequest(); // TradFiSpotTransactionRequest | 
api.createStockTransaction(tradFiSpotTransactionRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tradFiSpotTransactionRequest** | [**TradFiSpotTransactionRequest**](TradFiSpotTransactionRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CreateTransaction2; }> [CreateTransaction2](CreateTransaction2.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## queryStockExchanges

> Promise<{ response: http.IncomingMessage; body: Exchanges; }> queryStockExchanges()

Query supported exchanges

Query stock spot supported exchanges and whether stock transfers are supported. Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.StockApi(client);
api.queryStockExchanges()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Exchanges; }> [Exchanges](Exchanges.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryStockFeeRate

> Promise<{ response: http.IncomingMessage; body: FeeRate; }> queryStockFeeRate()

Query fee rates for Japanese and Korean stocks

Query fee rates for Japanese and Korean stocks. Rate limit: 5 qps.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.StockApi(client);
api.queryStockFeeRate()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: FeeRate; }> [FeeRate](FeeRate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
