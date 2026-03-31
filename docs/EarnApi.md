# EarnApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDualInvestmentPlans**](EarnApi.md#listDualInvestmentPlans) | **GET** /earn/dual/investment_plan | Dual Investment product list
[**listDualOrders**](EarnApi.md#listDualOrders) | **GET** /earn/dual/orders | Dual Investment order list
[**placeDualOrder**](EarnApi.md#placeDualOrder) | **POST** /earn/dual/orders | Place Dual Investment order
[**listDualBalance**](EarnApi.md#listDualBalance) | **GET** /earn/dual/balance | Dual-Currency Earning Assets
[**findCoin**](EarnApi.md#findCoin) | **GET** /earn/staking/coins | Staking coins
[**swapStakingCoin**](EarnApi.md#swapStakingCoin) | **POST** /earn/staking/swap | On-chain token swap for earned coins
[**orderList**](EarnApi.md#orderList) | **GET** /earn/staking/order_list | List of on-chain coin-earning orders
[**awardList**](EarnApi.md#awardList) | **GET** /earn/staking/award_list | On-chain coin-earning dividend records
[**assetList**](EarnApi.md#assetList) | **GET** /earn/staking/assets | On-chain coin-earning assets
[**createAutoInvestPlan**](EarnApi.md#createAutoInvestPlan) | **POST** /earn/autoinvest/plans/create | Create auto invest plan
[**updateAutoInvestPlan**](EarnApi.md#updateAutoInvestPlan) | **POST** /earn/autoinvest/plans/update | UpdateAuto invest plan
[**stopAutoInvestPlan**](EarnApi.md#stopAutoInvestPlan) | **POST** /earn/autoinvest/plans/stop | StopAuto invest plan
[**addPositionAutoInvestPlan**](EarnApi.md#addPositionAutoInvestPlan) | **POST** /earn/autoinvest/plans/add_position | Add position immediately
[**listAutoInvestCoins**](EarnApi.md#listAutoInvestCoins) | **GET** /earn/autoinvest/coins | QueryCurrencies supporting auto invest
[**getAutoInvestMinAmount**](EarnApi.md#getAutoInvestMinAmount) | **POST** /earn/autoinvest/min_invest_amount | Get minimum investment amount
[**listAutoInvestPlanRecords**](EarnApi.md#listAutoInvestPlanRecords) | **GET** /earn/autoinvest/plans/records | List plan execution records
[**listAutoInvestOrders**](EarnApi.md#listAutoInvestOrders) | **GET** /earn/autoinvest/orders | List plan execution recordsDetails（OrderDetails）
[**listAutoInvestConfig**](EarnApi.md#listAutoInvestConfig) | **GET** /earn/autoinvest/config | List investment currency configuration
[**getAutoInvestPlanDetail**](EarnApi.md#getAutoInvestPlanDetail) | **GET** /earn/autoinvest/plans/detail | QueryAuto invest planDetails
[**listAutoInvestPlans**](EarnApi.md#listAutoInvestPlans) | **GET** /earn/autoinvest/plans/list_info | QueryAuto invest planList
[**listEarnFixedTermProducts**](EarnApi.md#listEarnFixedTermProducts) | **GET** /earn/fixed-term/product | Get product list
[**listEarnFixedTermProductsByAsset**](EarnApi.md#listEarnFixedTermProductsByAsset) | **GET** /earn/fixed-term/product/{asset}/list | Get product list by single currency
[**listEarnFixedTermLends**](EarnApi.md#listEarnFixedTermLends) | **GET** /earn/fixed-term/user/lend | Subscription list
[**createEarnFixedTermLend**](EarnApi.md#createEarnFixedTermLend) | **POST** /earn/fixed-term/user/lend | Subscription
[**createEarnFixedTermPreRedeem**](EarnApi.md#createEarnFixedTermPreRedeem) | **POST** /earn/fixed-term/user/pre-redeem | Redeem
[**listEarnFixedTermHistory**](EarnApi.md#listEarnFixedTermHistory) | **GET** /earn/fixed-term/user/history | Subscription history


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

## findCoin

> Promise<{ response: http.IncomingMessage; body: Array<object>; }> findCoin(opts)

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
const opts = {
  'cointype': "cointype_example" // string | Currency type: swap - voucher; lock - locked position; debt - US Treasury bond.
};
api.findCoin(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cointype** | **string**| Currency type: swap - voucher; lock - locked position; debt - US Treasury bond. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<object>; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
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

## createAutoInvestPlan

> Promise<{ response: http.IncomingMessage; body: AutoInvestPlanCreateResp; }> createAutoInvestPlan(autoInvestPlanCreate)

Create auto invest plan

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const autoInvestPlanCreate = new AutoInvestPlanCreate(); // AutoInvestPlanCreate | 
api.createAutoInvestPlan(autoInvestPlanCreate)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoInvestPlanCreate** | [**AutoInvestPlanCreate**](AutoInvestPlanCreate.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: AutoInvestPlanCreateResp; }> [AutoInvestPlanCreateResp](AutoInvestPlanCreateResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateAutoInvestPlan

> Promise<{ response: http.IncomingMessage; body?: any; }> updateAutoInvestPlan(autoInvestPlanUpdate)

UpdateAuto invest plan

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const autoInvestPlanUpdate = new AutoInvestPlanUpdate(); // AutoInvestPlanUpdate | 
api.updateAutoInvestPlan(autoInvestPlanUpdate)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoInvestPlanUpdate** | [**AutoInvestPlanUpdate**](AutoInvestPlanUpdate.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## stopAutoInvestPlan

> Promise<{ response: http.IncomingMessage; body?: any; }> stopAutoInvestPlan(autoInvestPlanStop)

StopAuto invest plan

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const autoInvestPlanStop = new AutoInvestPlanStop(); // AutoInvestPlanStop | 
api.stopAutoInvestPlan(autoInvestPlanStop)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoInvestPlanStop** | [**AutoInvestPlanStop**](AutoInvestPlanStop.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## addPositionAutoInvestPlan

> Promise<{ response: http.IncomingMessage; body?: any; }> addPositionAutoInvestPlan(autoInvestPlanAddPosition)

Add position immediately

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const autoInvestPlanAddPosition = new AutoInvestPlanAddPosition(); // AutoInvestPlanAddPosition | 
api.addPositionAutoInvestPlan(autoInvestPlanAddPosition)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoInvestPlanAddPosition** | [**AutoInvestPlanAddPosition**](AutoInvestPlanAddPosition.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listAutoInvestCoins

> Promise<{ response: http.IncomingMessage; body: Array<AutoInvestCoinsItem>; }> listAutoInvestCoins(opts)

QueryCurrencies supporting auto invest

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
  'planMoney': "USDT" // string | Pricing currency，Optional: USDT or BTC，Default: USDT
};
api.listAutoInvestCoins(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planMoney** | **string**| Pricing currency，Optional: USDT or BTC，Default: USDT | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<AutoInvestCoinsItem>; }> [AutoInvestCoinsItem](AutoInvestCoinsItem.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAutoInvestMinAmount

> Promise<{ response: http.IncomingMessage; body: AutoInvestMinInvestAmountResp; }> getAutoInvestMinAmount(autoInvestMinInvestAmount)

Get minimum investment amount

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const autoInvestMinInvestAmount = new AutoInvestMinInvestAmount(); // AutoInvestMinInvestAmount | 
api.getAutoInvestMinAmount(autoInvestMinInvestAmount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoInvestMinInvestAmount** | [**AutoInvestMinInvestAmount**](AutoInvestMinInvestAmount.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: AutoInvestMinInvestAmountResp; }> [AutoInvestMinInvestAmountResp](AutoInvestMinInvestAmountResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listAutoInvestPlanRecords

> Promise<{ response: http.IncomingMessage; body: AutoInvestPlanRecordsResp; }> listAutoInvestPlanRecords(planId, opts)

List plan execution records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const planId = 141378; // number | Plan ID
const opts = {
  'page': 1, // number | page number
  'pageSize': 10 // number | Items per page，Maximum 100
};
api.listAutoInvestPlanRecords(planId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **number**| Plan ID | [default to undefined]
 **page** | **number**| page number | [optional] [default to undefined]
 **pageSize** | **number**| Items per page，Maximum 100 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AutoInvestPlanRecordsResp; }> [AutoInvestPlanRecordsResp](AutoInvestPlanRecordsResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAutoInvestOrders

> Promise<{ response: http.IncomingMessage; body: Array<AutoInvestOrderItem>; }> listAutoInvestOrders(planId, recordId)

List plan execution recordsDetails（OrderDetails）

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const planId = 142583; // number | Plan ID
const recordId = 1770805384904919; // number | Record ID
api.listAutoInvestOrders(planId, recordId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **number**| Plan ID | [default to undefined]
 **recordId** | **number**| Record ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<AutoInvestOrderItem>; }> [AutoInvestOrderItem](AutoInvestOrderItem.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAutoInvestConfig

> Promise<{ response: http.IncomingMessage; body: Array<AutoInvestConfigItem>; }> listAutoInvestConfig()

List investment currency configuration

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
api.listAutoInvestConfig()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<AutoInvestConfigItem>; }> [AutoInvestConfigItem](AutoInvestConfigItem.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAutoInvestPlanDetail

> Promise<{ response: http.IncomingMessage; body: AutoInvestPlanDetail; }> getAutoInvestPlanDetail(planId)

QueryAuto invest planDetails

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const planId = 142609; // number | Plan ID
api.getAutoInvestPlanDetail(planId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **number**| Plan ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AutoInvestPlanDetail; }> [AutoInvestPlanDetail](AutoInvestPlanDetail.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAutoInvestPlans

> Promise<{ response: http.IncomingMessage; body: AutoInvestPlanListInfoResp; }> listAutoInvestPlans(status, opts)

QueryAuto invest planList

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const status = "active"; // string | Plan status，History history，Active active
const opts = {
  'page': 56, // number | page number
  'pageSize': 56 // number | Items per page，Maximum 100
};
api.listAutoInvestPlans(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| Plan status，History history，Active active | [default to undefined]
 **page** | **number**| page number | [optional] [default to undefined]
 **pageSize** | **number**| Items per page，Maximum 100 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AutoInvestPlanListInfoResp; }> [AutoInvestPlanListInfoResp](AutoInvestPlanListInfoResp.md)

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
