# OTCApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOtcQuote**](OTCApi.md#createOtcQuote) | **POST** /otc/quote | Fiat and stablecoin quote
[**createOtcOrder**](OTCApi.md#createOtcOrder) | **POST** /otc/order/create | Create fiat order
[**createStableCoinOrder**](OTCApi.md#createStableCoinOrder) | **POST** /otc/stable_coin/order/create | Create stablecoin order
[**getUserDefaultBank**](OTCApi.md#getUserDefaultBank) | **GET** /otc/get_user_def_bank | Get user\&#39;s default bank account information
[**markOtcOrderPaid**](OTCApi.md#markOtcOrderPaid) | **POST** /otc/order/paid | Mark fiat order as paid
[**cancelOtcOrder**](OTCApi.md#cancelOtcOrder) | **POST** /otc/order/cancel | Fiat order cancellation
[**listOtcOrders**](OTCApi.md#listOtcOrders) | **GET** /otc/order/list | Fiat order list
[**listStableCoinOrders**](OTCApi.md#listStableCoinOrders) | **GET** /otc/stable_coin/order/list | Stablecoin order list
[**getOtcOrderDetail**](OTCApi.md#getOtcOrderDetail) | **GET** /otc/order/detail | Fiat order details


## createOtcQuote

> Promise<{ response: http.IncomingMessage; body: InlineResponse2006; }> createOtcQuote(inlineObject1)

Fiat and stablecoin quote

Create fiat and stablecoin quotes, supporting both PAY and GET directions

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const inlineObject1 = new InlineObject1(); // InlineObject1 | 
api.createOtcQuote(inlineObject1)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2006; }> [InlineResponse2006](InlineResponse2006.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createOtcOrder

> Promise<{ response: http.IncomingMessage; body: InlineResponse2007; }> createOtcOrder(inlineObject2)

Create fiat order

Create a fiat order, supporting BUY for on-ramp and SELL for off-ramp

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const inlineObject2 = new InlineObject2(); // InlineObject2 | 
api.createOtcOrder(inlineObject2)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2007; }> [InlineResponse2007](InlineResponse2007.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createStableCoinOrder

> Promise<{ response: http.IncomingMessage; body: InlineResponse2008; }> createStableCoinOrder(inlineObject3)

Create stablecoin order

Create stablecoin order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const inlineObject3 = new InlineObject3(); // InlineObject3 | 
api.createStableCoinOrder(inlineObject3)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2008; }> [InlineResponse2008](InlineResponse2008.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getUserDefaultBank

> Promise<{ response: http.IncomingMessage; body: InlineResponse2009; }> getUserDefaultBank()

Get user\&#39;s default bank account information

Get user\&#39;s default bank account information for order placement

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
api.getUserDefaultBank()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2009; }> [InlineResponse2009](InlineResponse2009.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## markOtcOrderPaid

> Promise<{ response: http.IncomingMessage; body: InlineResponse2007; }> markOtcOrderPaid(inlineObject4)

Mark fiat order as paid

Mark fiat order as paid

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const inlineObject4 = new InlineObject4(); // InlineObject4 | 
api.markOtcOrderPaid(inlineObject4)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2007; }> [InlineResponse2007](InlineResponse2007.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOtcOrder

> Promise<{ response: http.IncomingMessage; body: InlineResponse2007; }> cancelOtcOrder(orderId)

Fiat order cancellation

Cancel fiat order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const orderId = "orderId_example"; // string | Order ID
api.cancelOtcOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2007; }> [InlineResponse2007](InlineResponse2007.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOtcOrders

> Promise<{ response: http.IncomingMessage; body: InlineResponse20010; }> listOtcOrders(opts)

Fiat order list

Query the fiat order list with filters such as type, currency, time range, and status

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const opts = {
  'type': "type_example", // string | BUY for on-ramp, SELL for off-ramp
  'fiatCurrency': "fiatCurrency_example", // string | Fiat currency
  'cryptoCurrency': "cryptoCurrency_example", // string | Digital currency
  'startTime': "startTime_example", // string | starttime   for example : 2025-09-09
  'endTime': "endTime_example", // string | endtime  for example :2025-09-09
  'status': "status_example", // string | DONE ：完成 CANCEL  ：取消 PROCESSING ：进行中
  'pn': "pn_example", // string | Page number
  'ps': "ps_example" // string | Number of items per page
};
api.listOtcOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| BUY for on-ramp, SELL for off-ramp | [optional] [default to undefined]
 **fiatCurrency** | **string**| Fiat currency | [optional] [default to undefined]
 **cryptoCurrency** | **string**| Digital currency | [optional] [default to undefined]
 **startTime** | **string**| starttime   for example : 2025-09-09 | [optional] [default to undefined]
 **endTime** | **string**| endtime  for example :2025-09-09 | [optional] [default to undefined]
 **status** | **string**| DONE ：完成 CANCEL  ：取消 PROCESSING ：进行中 | [optional] [default to undefined]
 **pn** | **string**| Page number | [optional] [default to undefined]
 **ps** | **string**| Number of items per page | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20010; }> [InlineResponse20010](InlineResponse20010.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listStableCoinOrders

> Promise<{ response: http.IncomingMessage; body: InlineResponse20011; }> listStableCoinOrders(opts)

Stablecoin order list

Query stablecoin order list with filtering by currency, time range, status, etc.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const opts = {
  'pageSize': "10", // string | Number of records per page
  'pageNumber': "1", // string | Page number
  'coinName': "USDT", // string | ordercurrency
  'startTime': "startTime_example", // string | Start Time
  'endTime': "endTime_example", // string | End time
  'status': "status_example" // string | Status: PROCESSING: in progress / DONE：completed / FAILED: failed
};
api.listStableCoinOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **string**| Number of records per page | [optional] [default to undefined]
 **pageNumber** | **string**| Page number | [optional] [default to undefined]
 **coinName** | **string**| ordercurrency | [optional] [default to undefined]
 **startTime** | **string**| Start Time | [optional] [default to undefined]
 **endTime** | **string**| End time | [optional] [default to undefined]
 **status** | **string**| Status: PROCESSING: in progress / DONE：completed / FAILED: failed | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20011; }> [InlineResponse20011](InlineResponse20011.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOtcOrderDetail

> Promise<{ response: http.IncomingMessage; body: InlineResponse20012; }> getOtcOrderDetail(orderId)

Fiat order details

Query fiat order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const orderId = "orderId_example"; // string | Order ID
api.getOtcOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20012; }> [InlineResponse20012](InlineResponse20012.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
