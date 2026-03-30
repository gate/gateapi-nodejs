# FlashSwapApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFlashSwapCurrencyPair**](FlashSwapApi.md#listFlashSwapCurrencyPair) | **GET** /flash_swap/currency_pairs | List All Supported Currency Pairs In Flash Swap
[**listFlashSwapOrders**](FlashSwapApi.md#listFlashSwapOrders) | **GET** /flash_swap/orders | Query flash swap order list
[**createFlashSwapOrder**](FlashSwapApi.md#createFlashSwapOrder) | **POST** /flash_swap/orders | Create a flash swap order
[**getFlashSwapOrder**](FlashSwapApi.md#getFlashSwapOrder) | **GET** /flash_swap/orders/{order_id} | Query single flash swap order
[**previewFlashSwapOrder**](FlashSwapApi.md#previewFlashSwapOrder) | **POST** /flash_swap/orders/preview | Flash swap order preview
[**createFlashSwapMultiCurrencyManyToOneOrder**](FlashSwapApi.md#createFlashSwapMultiCurrencyManyToOneOrder) | **POST** /flash_swap/multi-currency/many-to-one/order/create | Flash Swap - Multi-currency exchange - Place order (many-to-one)
[**previewFlashSwapMultiCurrencyManyToOneOrder**](FlashSwapApi.md#previewFlashSwapMultiCurrencyManyToOneOrder) | **POST** /flash_swap/multi-currency/many-to-one/order/preview | Flash Swap - Multi-currency exchange - Preview (many-to-one)
[**createFlashSwapOrderV1**](FlashSwapApi.md#createFlashSwapOrderV1) | **POST** /flash_swap/order/create | Flash Swap - Place order (one-to-one)
[**createFlashSwapMultiCurrencyOneToManyOrder**](FlashSwapApi.md#createFlashSwapMultiCurrencyOneToManyOrder) | **POST** /flash_swap/multi-currency/one-to-many/order/create | Flash Swap - Multi-currency exchange - Place order (one-to-many)
[**previewFlashSwapMultiCurrencyOneToManyOrder**](FlashSwapApi.md#previewFlashSwapMultiCurrencyOneToManyOrder) | **POST** /flash_swap/multi-currency/one-to-many/order/preview | Flash Swap - Multi-currency exchange - Preview (one-to-many)
[**previewFlashSwapOrderV1**](FlashSwapApi.md#previewFlashSwapOrderV1) | **GET** /flash_swap/order/preview | Flash Swap - Preview (one-to-one)


## listFlashSwapCurrencyPair

> Promise<{ response: http.IncomingMessage; body: Array<FlashSwapCurrencyPair>; }> listFlashSwapCurrencyPair(opts)

List All Supported Currency Pairs In Flash Swap

&#x60;BTC_GT&#x60; represents selling BTC and buying GT. The limits for each currency may vary across different currency pairs.  It is not necessary that two currencies that can be swapped instantaneously can be exchanged with each other. For example, it is possible to sell BTC and buy GT, but it does not necessarily mean that GT can be sold to buy BTC.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FlashSwapApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 1000 // number | Maximum number of items returned. Default: 1000, minimum: 1, maximum: 1000
};
api.listFlashSwapCurrencyPair(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 1000, minimum: 1, maximum: 1000 | [optional] [default to 1000]

### Return type

Promise<{ response: AxiosResponse; body: Array<FlashSwapCurrencyPair>; }> [FlashSwapCurrencyPair](FlashSwapCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFlashSwapOrders

> Promise<{ response: http.IncomingMessage; body: Array<FlashSwapOrder>; }> listFlashSwapOrders(opts)

Query flash swap order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const opts = {
  'status': 1, // number | Flash swap order status  `1` - success `2` - failed
  'sellCurrency': "BTC", // string | Asset name to sell - Retrieved from API `GET /flash_swap/currencies` for supported flash swap currencies
  'buyCurrency': "BTC", // string | Asset name to buy - Retrieved from API `GET /flash_swap/currencies` for supported flash swap currencies
  'reverse': true, // boolean | Sort by ID in ascending or descending order, default `true` - `true`: ID descending order (most recent data first) - `false`: ID ascending order (oldest data first)
  'limit': 100, // number | Maximum number of records returned in a single list
  'page': 1 // number | Page number
};
api.listFlashSwapOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **number**| Flash swap order status  &#x60;1&#x60; - success &#x60;2&#x60; - failed | [optional] [default to undefined]
 **sellCurrency** | **string**| Asset name to sell - Retrieved from API &#x60;GET /flash_swap/currencies&#x60; for supported flash swap currencies | [optional] [default to undefined]
 **buyCurrency** | **string**| Asset name to buy - Retrieved from API &#x60;GET /flash_swap/currencies&#x60; for supported flash swap currencies | [optional] [default to undefined]
 **reverse** | **boolean**| Sort by ID in ascending or descending order, default &#x60;true&#x60; - &#x60;true&#x60;: ID descending order (most recent data first) - &#x60;false&#x60;: ID ascending order (oldest data first) | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<FlashSwapOrder>; }> [FlashSwapOrder](FlashSwapOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createFlashSwapOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrder; }> createFlashSwapOrder(flashSwapOrderRequest)

Create a flash swap order

Initiate a flash swap preview in advance because order creation requires a preview result

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapOrderRequest = new FlashSwapOrderRequest(); // FlashSwapOrderRequest | 
api.createFlashSwapOrder(flashSwapOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapOrderRequest** | [**FlashSwapOrderRequest**](FlashSwapOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrder; }> [FlashSwapOrder](FlashSwapOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getFlashSwapOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrder; }> getFlashSwapOrder(orderId)

Query single flash swap order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const orderId = 1; // number | Flash swap order ID
api.getFlashSwapOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Flash swap order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrder; }> [FlashSwapOrder](FlashSwapOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## previewFlashSwapOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrderPreview; }> previewFlashSwapOrder(flashSwapPreviewRequest)

Flash swap order preview

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapPreviewRequest = new FlashSwapPreviewRequest(); // FlashSwapPreviewRequest | 
api.previewFlashSwapOrder(flashSwapPreviewRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapPreviewRequest** | [**FlashSwapPreviewRequest**](FlashSwapPreviewRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrderPreview; }> [FlashSwapOrderPreview](FlashSwapOrderPreview.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createFlashSwapMultiCurrencyManyToOneOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapMultiCurrencyManyToOneOrderCreateResp; }> createFlashSwapMultiCurrencyManyToOneOrder(flashSwapMultiCurrencyManyToOneOrderCreateReq)

Flash Swap - Multi-currency exchange - Place order (many-to-one)

Create a multi-currency to single target currency exchange order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapMultiCurrencyManyToOneOrderCreateReq = new FlashSwapMultiCurrencyManyToOneOrderCreateReq(); // FlashSwapMultiCurrencyManyToOneOrderCreateReq | 
api.createFlashSwapMultiCurrencyManyToOneOrder(flashSwapMultiCurrencyManyToOneOrderCreateReq)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapMultiCurrencyManyToOneOrderCreateReq** | [**FlashSwapMultiCurrencyManyToOneOrderCreateReq**](FlashSwapMultiCurrencyManyToOneOrderCreateReq.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapMultiCurrencyManyToOneOrderCreateResp; }> [FlashSwapMultiCurrencyManyToOneOrderCreateResp](FlashSwapMultiCurrencyManyToOneOrderCreateResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## previewFlashSwapMultiCurrencyManyToOneOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapMultiCurrencyManyToOneOrderPreviewResp; }> previewFlashSwapMultiCurrencyManyToOneOrder(flashSwapMultiCurrencyManyToOneOrderPreviewReq)

Flash Swap - Multi-currency exchange - Preview (many-to-one)

Preview quote for multi-currency to single target currency exchange

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapMultiCurrencyManyToOneOrderPreviewReq = new FlashSwapMultiCurrencyManyToOneOrderPreviewReq(); // FlashSwapMultiCurrencyManyToOneOrderPreviewReq | 
api.previewFlashSwapMultiCurrencyManyToOneOrder(flashSwapMultiCurrencyManyToOneOrderPreviewReq)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapMultiCurrencyManyToOneOrderPreviewReq** | [**FlashSwapMultiCurrencyManyToOneOrderPreviewReq**](FlashSwapMultiCurrencyManyToOneOrderPreviewReq.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapMultiCurrencyManyToOneOrderPreviewResp; }> [FlashSwapMultiCurrencyManyToOneOrderPreviewResp](FlashSwapMultiCurrencyManyToOneOrderPreviewResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createFlashSwapOrderV1

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrderCreateResp; }> createFlashSwapOrderV1(flashSwapOrderCreateReq)

Flash Swap - Place order (one-to-one)

Submit a one-to-one flash swap order. A quote_id must be obtained from the preview endpoint first

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapOrderCreateReq = new FlashSwapOrderCreateReq(); // FlashSwapOrderCreateReq | 
api.createFlashSwapOrderV1(flashSwapOrderCreateReq)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapOrderCreateReq** | [**FlashSwapOrderCreateReq**](FlashSwapOrderCreateReq.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrderCreateResp; }> [FlashSwapOrderCreateResp](FlashSwapOrderCreateResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createFlashSwapMultiCurrencyOneToManyOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapMultiCurrencyOneToManyOrderCreateResp; }> createFlashSwapMultiCurrencyOneToManyOrder(flashSwapMultiCurrencyOneToManyOrderCreateReq)

Flash Swap - Multi-currency exchange - Place order (one-to-many)

Create a single currency to multiple target currencies exchange order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapMultiCurrencyOneToManyOrderCreateReq = new FlashSwapMultiCurrencyOneToManyOrderCreateReq(); // FlashSwapMultiCurrencyOneToManyOrderCreateReq | 
api.createFlashSwapMultiCurrencyOneToManyOrder(flashSwapMultiCurrencyOneToManyOrderCreateReq)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapMultiCurrencyOneToManyOrderCreateReq** | [**FlashSwapMultiCurrencyOneToManyOrderCreateReq**](FlashSwapMultiCurrencyOneToManyOrderCreateReq.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapMultiCurrencyOneToManyOrderCreateResp; }> [FlashSwapMultiCurrencyOneToManyOrderCreateResp](FlashSwapMultiCurrencyOneToManyOrderCreateResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## previewFlashSwapMultiCurrencyOneToManyOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapMultiCurrencyOneToManyOrderPreviewResp; }> previewFlashSwapMultiCurrencyOneToManyOrder(flashSwapMultiCurrencyOneToManyOrderPreviewReq)

Flash Swap - Multi-currency exchange - Preview (one-to-many)

Preview quote for single currency to multiple target currencies exchange

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapMultiCurrencyOneToManyOrderPreviewReq = new FlashSwapMultiCurrencyOneToManyOrderPreviewReq(); // FlashSwapMultiCurrencyOneToManyOrderPreviewReq | 
api.previewFlashSwapMultiCurrencyOneToManyOrder(flashSwapMultiCurrencyOneToManyOrderPreviewReq)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapMultiCurrencyOneToManyOrderPreviewReq** | [**FlashSwapMultiCurrencyOneToManyOrderPreviewReq**](FlashSwapMultiCurrencyOneToManyOrderPreviewReq.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapMultiCurrencyOneToManyOrderPreviewResp; }> [FlashSwapMultiCurrencyOneToManyOrderPreviewResp](FlashSwapMultiCurrencyOneToManyOrderPreviewResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## previewFlashSwapOrderV1

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrderPreviewResp; }> previewFlashSwapOrderV1(sellAsset, buyAsset, opts)

Flash Swap - Preview (one-to-one)

Get one-to-one flash swap quote. Either sell_amount or buy_amount must be specified

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const sellAsset = "sellAsset_example"; // string | Currency to sell
const buyAsset = "buyAsset_example"; // string | Currency to buy
const opts = {
  'sellAmount': "sellAmount_example", // string | Sell amount, either this or buy_amount must be specified
  'buyAmount': "buyAmount_example" // string | Buy amount, either this or sell_amount must be specified
};
api.previewFlashSwapOrderV1(sellAsset, buyAsset, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellAsset** | **string**| Currency to sell | [default to undefined]
 **buyAsset** | **string**| Currency to buy | [default to undefined]
 **sellAmount** | **string**| Sell amount, either this or buy_amount must be specified | [optional] [default to undefined]
 **buyAmount** | **string**| Buy amount, either this or sell_amount must be specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrderPreviewResp; }> [FlashSwapOrderPreviewResp](FlashSwapOrderPreviewResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
