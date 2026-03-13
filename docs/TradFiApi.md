# TradFiApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryMt5AccountInfo**](TradFiApi.md#queryMt5AccountInfo) | **GET** /tradfi/users/mt5-account | Query MT5 account information
[**queryCategories**](TradFiApi.md#queryCategories) | **GET** /tradfi/symbols/categories | Query trading symbol categories
[**querySymbols**](TradFiApi.md#querySymbols) | **GET** /tradfi/symbols | Query trading symbol list
[**querySymbolDetail**](TradFiApi.md#querySymbolDetail) | **GET** /tradfi/symbols/detail | Query trading symbol details
[**querySymbolKline**](TradFiApi.md#querySymbolKline) | **GET** /tradfi/symbols/{symbol}/klines | Query trading symbol klines
[**querySymbolTicker**](TradFiApi.md#querySymbolTicker) | **GET** /tradfi/symbols/{symbol}/tickers | Query trading symbol ticker
[**createTradFiUser**](TradFiApi.md#createTradFiUser) | **POST** /tradfi/users | Create TradFi user
[**queryUserAssets**](TradFiApi.md#queryUserAssets) | **GET** /tradfi/users/assets | Query account assets
[**queryTransaction**](TradFiApi.md#queryTransaction) | **GET** /tradfi/transactions | Query Fund Transfer In/Out Records
[**createTransaction**](TradFiApi.md#createTransaction) | **POST** /tradfi/transactions | Fund Deposit and Withdrawal
[**queryOrderList**](TradFiApi.md#queryOrderList) | **GET** /tradfi/orders | Query active order list
[**createTradFiOrder**](TradFiApi.md#createTradFiOrder) | **POST** /tradfi/orders | Create an order
[**updateOrder**](TradFiApi.md#updateOrder) | **PUT** /tradfi/orders/{order_id} | Modify order
[**deleteOrder**](TradFiApi.md#deleteOrder) | **DELETE** /tradfi/orders/{order_id} | Cancel order
[**queryOrderHistoryList**](TradFiApi.md#queryOrderHistoryList) | **GET** /tradfi/orders/history | Query historical order list
[**queryPositionList**](TradFiApi.md#queryPositionList) | **GET** /tradfi/positions | Query active position list
[**updatePosition**](TradFiApi.md#updatePosition) | **PUT** /tradfi/positions/{position_id} | Modify position
[**closePosition**](TradFiApi.md#closePosition) | **POST** /tradfi/positions/{position_id}/close | Close position
[**queryPositionHistoryList**](TradFiApi.md#queryPositionHistoryList) | **GET** /tradfi/positions/history | Query historical position list


## queryMt5AccountInfo

> Promise<{ response: http.IncomingMessage; body: Mt5Account; }> queryMt5AccountInfo()

Query MT5 account information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
api.queryMt5AccountInfo()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Mt5Account; }> [Mt5Account](Mt5Account.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryCategories

> Promise<{ response: http.IncomingMessage; body: Categories; }> queryCategories()

Query trading symbol categories

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.TradFiApi(client);
api.queryCategories()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Categories; }> [Categories](Categories.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## querySymbols

> Promise<{ response: http.IncomingMessage; body: Symbols; }> querySymbols()

Query trading symbol list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.TradFiApi(client);
api.querySymbols()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Symbols; }> [Symbols](Symbols.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## querySymbolDetail

> Promise<{ response: http.IncomingMessage; body: ContractDetail; }> querySymbolDetail(symbols)

Query trading symbol details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.TradFiApi(client);
const symbols = "EURUSD,XAGUSD"; // string | Trading symbol code list (comma-separated, max 10 symbols)
api.querySymbolDetail(symbols)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **string**| Trading symbol code list (comma-separated, max 10 symbols) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ContractDetail; }> [ContractDetail](ContractDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## querySymbolKline

> Promise<{ response: http.IncomingMessage; body: Klines; }> querySymbolKline(symbol, klineType, opts)

Query trading symbol klines

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.TradFiApi(client);
const symbol = "EURUSD"; // string | Trading symbol code
const klineType = "1m"; // '1m' | '15m' | '1h' | '4h' | '1d' | '7d' | '30d' | Kline type (time period)
const opts = {
  'beginTime': 1769378400, // number | Start time (Unix timestamp in seconds)
  'endTime': 1769464800, // number | End time (Unix timestamp in seconds)
  'limit': 100 // number | Kline limit (max 500, error if exceeded)
};
api.querySymbolKline(symbol, klineType, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading symbol code | [default to undefined]
 **klineType** | **KlineType**| Kline type (time period) | [default to undefined]
 **beginTime** | **number**| Start time (Unix timestamp in seconds) | [optional] [default to undefined]
 **endTime** | **number**| End time (Unix timestamp in seconds) | [optional] [default to undefined]
 **limit** | **number**| Kline limit (max 500, error if exceeded) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Klines; }> [Klines](Klines.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## querySymbolTicker

> Promise<{ response: http.IncomingMessage; body: Ticker2; }> querySymbolTicker(symbol)

Query trading symbol ticker

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.TradFiApi(client);
const symbol = "EURUSD"; // string | Trading symbol code
api.querySymbolTicker(symbol)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading symbol code | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Ticker2; }> [Ticker2](Ticker2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createTradFiUser

> Promise<{ response: http.IncomingMessage; body: CreateUserResp; }> createTradFiUser()

Create TradFi user

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
api.createTradFiUser()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: CreateUserResp; }> [CreateUserResp](CreateUserResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryUserAssets

> Promise<{ response: http.IncomingMessage; body: UserAssetResp; }> queryUserAssets()

Query account assets

Query account assets

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
api.queryUserAssets()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: UserAssetResp; }> [UserAssetResp](UserAssetResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryTransaction

> Promise<{ response: http.IncomingMessage; body: TransactionList; }> queryTransaction(opts)

Query Fund Transfer In/Out Records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const opts = {
  'beginTime': 1704067200, // number | Start Time (Second-level Timestamp)
  'endTime': 1706745599, // number | End Time (Second-level Timestamp)
  'type': "withdraw", // 'deposit' | 'withdraw' | 'dividend' | 'fill_negative' | Transaction Type (deposit - transfer in, withdraw - transfer out, dividend - dividend payment, fill_negative - cover negative balance)
  'page': 1, // number | page number
  'pageSize': 20 // number | Number per page, default 10, maximum 50
};
api.queryTransaction(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginTime** | **number**| Start Time (Second-level Timestamp) | [optional] [default to undefined]
 **endTime** | **number**| End Time (Second-level Timestamp) | [optional] [default to undefined]
 **type** | **Type**| Transaction Type (deposit - transfer in, withdraw - transfer out, dividend - dividend payment, fill_negative - cover negative balance) | [optional] [default to undefined]
 **page** | **number**| page number | [optional] [default to undefined]
 **pageSize** | **number**| Number per page, default 10, maximum 50 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TransactionList; }> [TransactionList](TransactionList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createTransaction

> Promise<{ response: http.IncomingMessage; body: CreateTransaction; }> createTransaction(inlineObject1)

Fund Deposit and Withdrawal

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const inlineObject1 = new InlineObject1(); // InlineObject1 | 
api.createTransaction(inlineObject1)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CreateTransaction; }> [CreateTransaction](CreateTransaction.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## queryOrderList

> Promise<{ response: http.IncomingMessage; body: OrderList; }> queryOrderList()

Query active order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
api.queryOrderList()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: OrderList; }> [OrderList](OrderList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createTradFiOrder

> Promise<{ response: http.IncomingMessage; body: CreateOrder; }> createTradFiOrder(inlineObject2)

Create an order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const inlineObject2 = new InlineObject2(); // InlineObject2 | 
api.createTradFiOrder(inlineObject2)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CreateOrder; }> [CreateOrder](CreateOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateOrder

> Promise<{ response: http.IncomingMessage; body: UpdateOrder; }> updateOrder(orderId, inlineObject3)

Modify order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const orderId = 1223; // number | Order ID
const inlineObject3 = new InlineObject3(); // InlineObject3 | 
api.updateOrder(orderId, inlineObject3)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID | [default to undefined]
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UpdateOrder; }> [UpdateOrder](UpdateOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteOrder

> Promise<{ response: http.IncomingMessage; body: object; }> deleteOrder(orderId)

Cancel order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const orderId = 1223; // number | Order ID
api.deleteOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: object; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryOrderHistoryList

> Promise<{ response: http.IncomingMessage; body: OrderHistoryList; }> queryOrderHistoryList(opts)

Query historical order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const opts = {
  'beginTime': 1769397000, // number | Start time (Unix timestamp in seconds), earliest query is one month ago
  'endTime': 1769398000, // number | End time (Unix timestamp in seconds)
  'symbol': "USDCAD", // string | Currency pair
  'side': 2 // 1 | 2 | Order side (1=sell, 2=buy)
};
api.queryOrderHistoryList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginTime** | **number**| Start time (Unix timestamp in seconds), earliest query is one month ago | [optional] [default to undefined]
 **endTime** | **number**| End time (Unix timestamp in seconds) | [optional] [default to undefined]
 **symbol** | **string**| Currency pair | [optional] [default to undefined]
 **side** | **Side**| Order side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderHistoryList; }> [OrderHistoryList](OrderHistoryList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## queryPositionList

> Promise<{ response: http.IncomingMessage; body: PositionList; }> queryPositionList()

Query active position list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
api.queryPositionList()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: PositionList; }> [PositionList](PositionList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePosition

> Promise<{ response: http.IncomingMessage; body: UpdatePosition; }> updatePosition(positionId, inlineObject4)

Modify position

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const positionId = 1223; // number | Position ID
const inlineObject4 = new InlineObject4(); // InlineObject4 | 
api.updatePosition(positionId, inlineObject4)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionId** | **number**| Position ID | [default to undefined]
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UpdatePosition; }> [UpdatePosition](UpdatePosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## closePosition

> Promise<{ response: http.IncomingMessage; body: DeletePosition; }> closePosition(positionId, inlineObject5)

Close position

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const positionId = 1223; // number | Position ID
const inlineObject5 = new InlineObject5(); // InlineObject5 | 
api.closePosition(positionId, inlineObject5)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **positionId** | **number**| Position ID | [default to undefined]
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: DeletePosition; }> [DeletePosition](DeletePosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## queryPositionHistoryList

> Promise<{ response: http.IncomingMessage; body: PositionHistoryList; }> queryPositionHistoryList(opts)

Query historical position list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.TradFiApi(client);
const opts = {
  'beginTime': 56, // number | Start Time (Unix Timestamp, seconds). The earliest queryable time is one month ago
  'endTime': 56, // number | End time (timestamp in seconds)
  'symbol': "symbol_example", // string | Trading symbol (e.g., EURUSD)
  'positionDir': "positionDir_example" // 'Long' | 'Short' | Position direction (Long=long position, Short=short position)
};
api.queryPositionHistoryList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginTime** | **number**| Start Time (Unix Timestamp, seconds). The earliest queryable time is one month ago | [optional] [default to undefined]
 **endTime** | **number**| End time (timestamp in seconds) | [optional] [default to undefined]
 **symbol** | **string**| Trading symbol (e.g., EURUSD) | [optional] [default to undefined]
 **positionDir** | **PositionDir**| Position direction (Long&#x3D;long position, Short&#x3D;short position) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: PositionHistoryList; }> [PositionHistoryList](PositionHistoryList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
