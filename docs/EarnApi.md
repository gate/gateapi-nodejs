# EarnApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**swapETH2**](EarnApi.md#swapETH2) | **POST** /earn/staking/eth2/swap | ETH swap
[**rateListETH2**](EarnApi.md#rateListETH2) | **GET** /earn/staking/eth2/rate_records | GTETH historical return rate query
[**listDualInvestmentPlans**](EarnApi.md#listDualInvestmentPlans) | **GET** /earn/dual/investment_plan | Dual Investment product list
[**listDualOrders**](EarnApi.md#listDualOrders) | **GET** /earn/dual/orders | Dual Investment order list
[**placeDualOrder**](EarnApi.md#placeDualOrder) | **POST** /earn/dual/orders | Place Dual Investment order
[**listDualBalance**](EarnApi.md#listDualBalance) | **GET** /earn/dual/balance | Dual-Currency Earning Assets
[**listStructuredProducts**](EarnApi.md#listStructuredProducts) | **GET** /earn/structured/products | Structured Product List
[**listStructuredOrders**](EarnApi.md#listStructuredOrders) | **GET** /earn/structured/orders | Structured Product Order List
[**placeStructuredOrder**](EarnApi.md#placeStructuredOrder) | **POST** /earn/structured/orders | Place Structured Product Order
[**findCoin**](EarnApi.md#findCoin) | **GET** /earn/staking/coins | Staking coins
[**swapStakingCoin**](EarnApi.md#swapStakingCoin) | **POST** /earn/staking/swap | On-chain token swap for earned coins
[**orderList**](EarnApi.md#orderList) | **GET** /earn/staking/order_list | List of on-chain coin-earning orders
[**awardList**](EarnApi.md#awardList) | **GET** /earn/staking/award_list | On-chain coin-earning dividend records
[**assetList**](EarnApi.md#assetList) | **GET** /earn/staking/assets | On-chain coin-earning assets
[**listEarnFixedTermProducts**](EarnApi.md#listEarnFixedTermProducts) | **GET** /earn/fixed-term/product | Get product list
[**listEarnFixedTermProductsByAsset**](EarnApi.md#listEarnFixedTermProductsByAsset) | **GET** /earn/fixed-term/product/{asset}/list | Get product list by single currency
[**listEarnFixedTermLends**](EarnApi.md#listEarnFixedTermLends) | **GET** /earn/fixed-term/user/lend | Subscription list
[**createEarnFixedTermLend**](EarnApi.md#createEarnFixedTermLend) | **POST** /earn/fixed-term/user/lend | Subscription
[**createEarnFixedTermPreRedeem**](EarnApi.md#createEarnFixedTermPreRedeem) | **POST** /earn/fixed-term/user/pre-redeem | Redeem
[**listEarnFixedTermHistory**](EarnApi.md#listEarnFixedTermHistory) | **GET** /earn/fixed-term/user/history | Subscription history


## swapETH2

> Promise<{ response: http.IncomingMessage; body?: any; }> swapETH2(eth2Swap)

ETH swap

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const eth2Swap = new Eth2Swap(); // Eth2Swap | 
api.swapETH2(eth2Swap)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eth2Swap** | [**Eth2Swap**](Eth2Swap.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## rateListETH2

> Promise<{ response: http.IncomingMessage; body: Array<Eth2RateList>; }> rateListETH2()

GTETH historical return rate query

Query ETH earnings rate records for the last 31 days

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
api.rateListETH2()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<Eth2RateList>; }> [Eth2RateList](Eth2RateList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDualInvestmentPlans

> Promise<{ response: http.IncomingMessage; body: Array<DualGetPlans>; }> listDualInvestmentPlans(opts)

Dual Investment product list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const opts = {
  'planId': 1 // number | Financial project ID
};
api.listDualInvestmentPlans(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **number**| Financial project ID | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<DualGetPlans>; }> [DualGetPlans](DualGetPlans.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDualOrders

> Promise<{ response: http.IncomingMessage; body: Array<DualGetOrders>; }> listDualOrders(opts)

Dual Investment order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'from': 1740727000, // number | Start settlement time
  'to': 1740729000, // number | End settlement time
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in a single list
};
api.listDualOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start settlement time | [optional] [default to undefined]
 **to** | **number**| End settlement time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<DualGetOrders>; }> [DualGetOrders](DualGetOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeDualOrder

> Promise<{ response: http.IncomingMessage; body: PlaceDualInvestmentOrder; }> placeDualOrder(placeDualInvestmentOrderParams)

Place Dual Investment order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const placeDualInvestmentOrderParams = new PlaceDualInvestmentOrderParams(); // PlaceDualInvestmentOrderParams | 
api.placeDualOrder(placeDualInvestmentOrderParams)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeDualInvestmentOrderParams** | [**PlaceDualInvestmentOrderParams**](PlaceDualInvestmentOrderParams.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: PlaceDualInvestmentOrder; }> [PlaceDualInvestmentOrder](PlaceDualInvestmentOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listDualBalance

> Promise<{ response: http.IncomingMessage; body: DualGetBalance; }> listDualBalance()

Dual-Currency Earning Assets

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
api.listDualBalance()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: DualGetBalance; }> [DualGetBalance](DualGetBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listStructuredProducts

> Promise<{ response: http.IncomingMessage; body: Array<StructuredGetProjectList>; }> listStructuredProducts(status, opts)

Structured Product List

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const status = "in_process"; // string | Status (Default empty to query all)  `in_process`-In progress `will_begin`-Not started `wait_settlement`-Pending settlement `done`-Completed 
const opts = {
  'type': "BullishSharkFin", // string | Product Type (Default empty to query all)  `SharkFin2.0`-Shark Fin `BullishSharkFin`-Bullish Treasure `BearishSharkFin`-Bearish Treasure `DoubleNoTouch`-Volatility Treasure `RangeAccrual`-Range Smart Yield `SnowBall`-Snowball 
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in a single list
};
api.listStructuredProducts(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| Status (Default empty to query all)  &#x60;in_process&#x60;-In progress &#x60;will_begin&#x60;-Not started &#x60;wait_settlement&#x60;-Pending settlement &#x60;done&#x60;-Completed  | [default to undefined]
 **type** | **string**| Product Type (Default empty to query all)  &#x60;SharkFin2.0&#x60;-Shark Fin &#x60;BullishSharkFin&#x60;-Bullish Treasure &#x60;BearishSharkFin&#x60;-Bearish Treasure &#x60;DoubleNoTouch&#x60;-Volatility Treasure &#x60;RangeAccrual&#x60;-Range Smart Yield &#x60;SnowBall&#x60;-Snowball  | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<StructuredGetProjectList>; }> [StructuredGetProjectList](StructuredGetProjectList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listStructuredOrders

> Promise<{ response: http.IncomingMessage; body: Array<StructuredOrderList>; }> listStructuredOrders(opts)

Structured Product Order List

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in a single list
};
api.listStructuredOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<StructuredOrderList>; }> [StructuredOrderList](StructuredOrderList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeStructuredOrder

> Promise<{ response: http.IncomingMessage; body?: any; }> placeStructuredOrder(structuredBuy)

Place Structured Product Order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const structuredBuy = new StructuredBuy(); // StructuredBuy | 
api.placeStructuredOrder(structuredBuy)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **structuredBuy** | [**StructuredBuy**](StructuredBuy.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## findCoin

> Promise<{ response: http.IncomingMessage; body: Array<object>; }> findCoin(findCoin)

Staking coins

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const findCoin = new FindCoin(); // FindCoin | 
api.findCoin(findCoin)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findCoin** | [**FindCoin**](FindCoin.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<object>; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## swapStakingCoin

> Promise<{ response: http.IncomingMessage; body: SwapCoinStruct; }> swapStakingCoin(swapCoin)

On-chain token swap for earned coins

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const swapCoin = new SwapCoin(); // SwapCoin | 
api.swapStakingCoin(swapCoin)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **swapCoin** | [**SwapCoin**](SwapCoin.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: SwapCoinStruct; }> [SwapCoinStruct](SwapCoinStruct.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## orderList

> Promise<{ response: http.IncomingMessage; body: OrderListStruct; }> orderList(opts)

List of on-chain coin-earning orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'pid': 7, // number | Product ID
  'coin': "ETH", // string | Currency name
  'type': 0, // number | Type 0-staking 1-redemption
  'page': 1 // number | Page number
};
api.orderList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pid** | **number**| Product ID | [optional] [default to undefined]
 **coin** | **string**| Currency name | [optional] [default to undefined]
 **type** | **number**| Type 0-staking 1-redemption | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: OrderListStruct; }> [OrderListStruct](OrderListStruct.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## awardList

> Promise<{ response: http.IncomingMessage; body: AwardListStruct; }> awardList(opts)

On-chain coin-earning dividend records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'pid': 7, // number | Product ID
  'coin': "ETH", // string | Currency name
  'page': 1 // number | Page number
};
api.awardList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pid** | **number**| Product ID | [optional] [default to undefined]
 **coin** | **string**| Currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: AwardListStruct; }> [AwardListStruct](AwardListStruct.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## assetList

> Promise<{ response: http.IncomingMessage; body: Array<object>; }> assetList(opts)

On-chain coin-earning assets

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'coin': "ETH" // string | Currency name
};
api.assetList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coin** | **string**| Currency name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<object>; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listEarnFixedTermProducts

> Promise<{ response: http.IncomingMessage; body: ListEarnFixedTermProductsResponse; }> listEarnFixedTermProducts(page, limit, opts)

Get product list

Query fixed-term earn product list. Supports filtering by currency, product type, status, etc. Returns product interest rate, lock-up period, quota, and reward campaign information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const page = 1; // number | Page number
const limit = 100; // number | Page size
const opts = {
  'asset': "USDT", // string | Currency
  'type': 1 // number | Product type: 1 for regular, 2 for VIP
};
api.listEarnFixedTermProducts(page, limit, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [default to undefined]
 **limit** | **number**| Page size | [default to undefined]
 **asset** | **string**| Currency | [optional] [default to undefined]
 **type** | **number**| Product type: 1 for regular, 2 for VIP | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ListEarnFixedTermProductsResponse; }> [ListEarnFixedTermProductsResponse](ListEarnFixedTermProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listEarnFixedTermProductsByAsset

> Promise<{ response: http.IncomingMessage; body: ListEarnFixedTermProductsByAssetResponse; }> listEarnFixedTermProductsByAsset(asset, opts)

Get product list by single currency

Sort by product term in ascending order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const asset = "USDT"; // string | Currency name, e.g., USDT, BTC
const opts = {
  'type': "1" // string | Product type: \"\" or 1 for regular product list, 2 for VIP product list, 0 for all products
};
api.listEarnFixedTermProductsByAsset(asset, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **string**| Currency name, e.g., USDT, BTC | [default to undefined]
 **type** | **string**| Product type: \&quot;\&quot; or 1 for regular product list, 2 for VIP product list, 0 for all products | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ListEarnFixedTermProductsByAssetResponse; }> [ListEarnFixedTermProductsByAssetResponse](ListEarnFixedTermProductsByAssetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listEarnFixedTermLends

> Promise<{ response: http.IncomingMessage; body: ListEarnFixedTermLendsResponse; }> listEarnFixedTermLends(orderType, page, limit, opts)

Subscription list

Query the user\&#39;s fixed-term earn subscription order list. Supports filtering by product, currency, order type, etc. Returns order details, earnings, rewards, and interest rate boost coupon information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const orderType = "1"; // string | Order type: 1 for current orders, 2 for historical orders
const page = 1; // number | Page number
const limit = 10; // number | Page size
const opts = {
  'productId': 56, // number | Product ID
  'orderId': 56, // number | Order ID
  'asset': "asset_example", // string | Currency
  'subBusiness': 56, // number | Sub-business
  'businessFilter': "[{\"business\":1, \"sub_business\": 0},{\"business\":2, \"sub_business\": 0}]" // string | Business filter conditions, JSON array format, e.g., [{\"business\":1, \"sub_business\": 0}]. business: 1 for regular, 2 for VIP
};
api.listEarnFixedTermLends(orderType, page, limit, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderType** | **string**| Order type: 1 for current orders, 2 for historical orders | [default to undefined]
 **page** | **number**| Page number | [default to undefined]
 **limit** | **number**| Page size | [default to undefined]
 **productId** | **number**| Product ID | [optional] [default to undefined]
 **orderId** | **number**| Order ID | [optional] [default to undefined]
 **asset** | **string**| Currency | [optional] [default to undefined]
 **subBusiness** | **number**| Sub-business | [optional] [default to undefined]
 **businessFilter** | **string**| Business filter conditions, JSON array format, e.g., [{\&quot;business\&quot;:1, \&quot;sub_business\&quot;: 0}]. business: 1 for regular, 2 for VIP | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ListEarnFixedTermLendsResponse; }> [ListEarnFixedTermLendsResponse](ListEarnFixedTermLendsResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createEarnFixedTermLend

> Promise<{ response: http.IncomingMessage; body: CreateEarnFixedTermLendResponse; }> createEarnFixedTermLend(opts)

Subscription

Subscribe to a fixed-term earn product by specifying the product ID and subscription amount. Optionally enable auto-renewal and apply an interest rate boost coupon

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'fixedTermLendRequest': new FixedTermLendRequest() // FixedTermLendRequest | 
};
api.createEarnFixedTermLend(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fixedTermLendRequest** | [**FixedTermLendRequest**](FixedTermLendRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CreateEarnFixedTermLendResponse; }> [CreateEarnFixedTermLendResponse](CreateEarnFixedTermLendResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createEarnFixedTermPreRedeem

> Promise<{ response: http.IncomingMessage; body: CreateEarnFixedTermPreRedeemResponse; }> createEarnFixedTermPreRedeem(opts)

Redeem

Early redemption of a fixed-term earn order, order ID is required

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'earnFixedTermPreRedeemRequest': new EarnFixedTermPreRedeemRequest() // EarnFixedTermPreRedeemRequest | 
};
api.createEarnFixedTermPreRedeem(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **earnFixedTermPreRedeemRequest** | [**EarnFixedTermPreRedeemRequest**](EarnFixedTermPreRedeemRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: CreateEarnFixedTermPreRedeemResponse; }> [CreateEarnFixedTermPreRedeemResponse](CreateEarnFixedTermPreRedeemResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listEarnFixedTermHistory

> Promise<{ response: http.IncomingMessage; body: ListEarnFixedTermHistoryResponse; }> listEarnFixedTermHistory(type, page, limit, opts)

Subscription history

Query the user\&#39;s fixed-term earn history records. Supports filtering by type (subscription, redemption, interest, bonus rewards) and time range

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const type = "1"; // string | 1 for subscription, 2 for redemption, 3 for interest, 4 for bonus reward
const page = 1; // number | Page number
const limit = 10; // number | Page size
const opts = {
  'productId': 56, // number | Product ID
  'orderId': "orderId_example", // string | Order ID
  'asset': "asset_example", // string | Currency
  'startAt': 56, // number | Start timestamp
  'endAt': 56, // number | End Timestamp
  'subBusiness': 56, // number | Sub-business
  'businessFilter': "[{\"business\":1, \"sub_business\": 0},{\"business\":2, \"sub_business\": 0}]" // string | Business filter conditions, JSON array format, e.g., [{\"business\":1, \"sub_business\": 0}]. business: 1 for regular, 2 for VIP
};
api.listEarnFixedTermHistory(type, page, limit, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| 1 for subscription, 2 for redemption, 3 for interest, 4 for bonus reward | [default to undefined]
 **page** | **number**| Page number | [default to undefined]
 **limit** | **number**| Page size | [default to undefined]
 **productId** | **number**| Product ID | [optional] [default to undefined]
 **orderId** | **string**| Order ID | [optional] [default to undefined]
 **asset** | **string**| Currency | [optional] [default to undefined]
 **startAt** | **number**| Start timestamp | [optional] [default to undefined]
 **endAt** | **number**| End Timestamp | [optional] [default to undefined]
 **subBusiness** | **number**| Sub-business | [optional] [default to undefined]
 **businessFilter** | **string**| Business filter conditions, JSON array format, e.g., [{\&quot;business\&quot;:1, \&quot;sub_business\&quot;: 0}]. business: 1 for regular, 2 for VIP | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ListEarnFixedTermHistoryResponse; }> [ListEarnFixedTermHistoryResponse](ListEarnFixedTermHistoryResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
