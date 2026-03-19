# AlphaApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAlphaAccounts**](AlphaApi.md#listAlphaAccounts) | **GET** /alpha/accounts | Alpha Account API
[**listAlphaAccountBook**](AlphaApi.md#listAlphaAccountBook) | **GET** /alpha/account_book | Alpha Account Transaction History API
[**quoteAlphaOrder**](AlphaApi.md#quoteAlphaOrder) | **POST** /alpha/quote | Alpha Quote API
[**listAlphaOrder**](AlphaApi.md#listAlphaOrder) | **GET** /alpha/orders | Alpha Order List API
[**placeAlphaOrder**](AlphaApi.md#placeAlphaOrder) | **POST** /alpha/orders | Alpha Order API
[**getAlphaOrder**](AlphaApi.md#getAlphaOrder) | **GET** /alpha/order | Alpha Single Order Query API
[**listAlphaCurrencies**](AlphaApi.md#listAlphaCurrencies) | **GET** /alpha/currencies | Query currency information
[**listAlphaTickers**](AlphaApi.md#listAlphaTickers) | **GET** /alpha/tickers | Query currency ticker
[**listAlphaTokens**](AlphaApi.md#listAlphaTokens) | **GET** /alpha/tokens | Query Token Information


## listAlphaAccounts

> Promise<{ response: http.IncomingMessage; body: Array<AccountsResponse>; }> listAlphaAccounts()

Alpha Account API

Query position assets

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
api.listAlphaAccounts()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<AccountsResponse>; }> [AccountsResponse](AccountsResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<AccountBookResponse>; }> listAlphaAccountBook(from, opts)

Alpha Account Transaction History API

Query asset transactions

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const from = 56; // number | Start timestamp for the query
const opts = {
  'to': 56, // number | End timestamp for the query, defaults to current time if not specified
  'page': 56, // number | Page number
  'limit': 56 // number | Maximum 100 items per page
};
api.listAlphaAccountBook(from, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start timestamp for the query | [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| Maximum 100 items per page | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<AccountBookResponse>; }> [AccountBookResponse](AccountBookResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## quoteAlphaOrder

> Promise<{ response: http.IncomingMessage; body: QuoteResponse; }> quoteAlphaOrder(quoteRequest)

Alpha Quote API

The quote_id returned by the price inquiry interface is valid for one minute; an order must be placed within this minute. If it times out, a new price inquiry is required. Rate-limited at 10 requests per second per user.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const quoteRequest = new QuoteRequest(); // QuoteRequest | 
api.quoteAlphaOrder(quoteRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quoteRequest** | [**QuoteRequest**](QuoteRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: QuoteResponse; }> [QuoteResponse](QuoteResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listAlphaOrder

> Promise<{ response: http.IncomingMessage; body: Array<OrderResponse>; }> listAlphaOrder(opts)

Alpha Order List API

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const opts = {
  'currency': "memeboxsst", // string | Trading symbol
  'side': "buy", // string | Buy or sell orders - buy - sell
  'status': 2, // number | Order Status - `0` : All - `1` : Processing - `2` : Successful - `3` : Failed - `4` : Cancelled - `5` : Buy order placed but transfer not completed - `6` : Order cancelled but transfer not completed
  'from': 1627706330, // number | Start time for order query
  'to': 1635329650, // number | End time for order query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
  'page': 1 // number | Page number
};
api.listAlphaOrder(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Trading symbol | [optional] [default to undefined]
 **side** | **string**| Buy or sell orders - buy - sell | [optional] [default to undefined]
 **status** | **number**| Order Status - &#x60;0&#x60; : All - &#x60;1&#x60; : Processing - &#x60;2&#x60; : Successful - &#x60;3&#x60; : Failed - &#x60;4&#x60; : Cancelled - &#x60;5&#x60; : Buy order placed but transfer not completed - &#x60;6&#x60; : Order cancelled but transfer not completed | [optional] [default to undefined]
 **from** | **number**| Start time for order query | [optional] [default to undefined]
 **to** | **number**| End time for order query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<OrderResponse>; }> [OrderResponse](OrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeAlphaOrder

> Promise<{ response: http.IncomingMessage; body: PlaceOrderResponse; }> placeAlphaOrder(placeOrderRequest)

Alpha Order API

Order placement interface, rate-limited at 5 requests per second per user.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const placeOrderRequest = new PlaceOrderRequest(); // PlaceOrderRequest | 
api.placeAlphaOrder(placeOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeOrderRequest** | [**PlaceOrderRequest**](PlaceOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: PlaceOrderResponse; }> [PlaceOrderResponse](PlaceOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getAlphaOrder

> Promise<{ response: http.IncomingMessage; body: OrderResponse; }> getAlphaOrder(orderId)

Alpha Single Order Query API

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const orderId = "fdaf12321"; // string | Order ID
api.getAlphaOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderResponse; }> [OrderResponse](OrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<AlphaCurrency>; }> listAlphaCurrencies(opts)

Query currency information

When currency is provided, query and return specified currency information; when currency is not provided, return paginated currency list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.AlphaApi(client);
const opts = {
  'currency': "memeboxtrump", // string | Query currency information by currency symbol
  'limit': 100, // number | Maximum number of records returned in a single list
  'page': 1 // number | Page number
};
api.listAlphaCurrencies(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query currency information by currency symbol | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<AlphaCurrency>; }> [AlphaCurrency](AlphaCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaTickers

> Promise<{ response: http.IncomingMessage; body: Array<AlphaTicker>; }> listAlphaTickers(opts)

Query currency ticker

When currency is provided, returns ticker information for the specified currency. When currency is not provided, returns paginated ticker list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.AlphaApi(client);
const opts = {
  'currency': "memeboxtrump", // string | Query by specified currency name
  'limit': 100, // number | Maximum number of records returned in a single list
  'page': 1 // number | Page number
};
api.listAlphaTickers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<AlphaTicker>; }> [AlphaTicker](AlphaTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaTokens

> Promise<{ response: http.IncomingMessage; body: Array<Tokens>; }> listAlphaTokens(opts)

Query Token Information

Supports passing chain, platform, and address

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.AlphaApi(client);
const opts = {
  'chain': "solana", // string | Query Token List by Chain  - solana - eth - bsc - base - world - sui - arbitrum - avalanche - polygon - linea - optimism - zksync - gatelayer
  'launchPlatform': "pump", // string | Query Token List by Launch Platform  - meteora_dbc - fourmeme - moonshot - pump - raydium_launchlab - letsbonk - gatefun - virtuals
  'address': "0x1234p", // string | Query Token List by Contract Address
  'page': 1 // number | Page number
};
api.listAlphaTokens(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chain** | **string**| Query Token List by Chain  - solana - eth - bsc - base - world - sui - arbitrum - avalanche - polygon - linea - optimism - zksync - gatelayer | [optional] [default to undefined]
 **launchPlatform** | **string**| Query Token List by Launch Platform  - meteora_dbc - fourmeme - moonshot - pump - raydium_launchlab - letsbonk - gatefun - virtuals | [optional] [default to undefined]
 **address** | **string**| Query Token List by Contract Address | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<Tokens>; }> [Tokens](Tokens.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
