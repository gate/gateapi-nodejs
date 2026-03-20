# LaunchApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLaunchPoolProjects**](LaunchApi.md#listLaunchPoolProjects) | **GET** /launch/project-list | Query LaunchPool project list
[**createLaunchPoolOrder**](LaunchApi.md#createLaunchPoolOrder) | **POST** /launch/create-order | Create LaunchPool staking order
[**redeemLaunchPool**](LaunchApi.md#redeemLaunchPool) | **POST** /launch/redeem | Redeem LaunchPool staked assets
[**listLaunchPoolPledgeRecords**](LaunchApi.md#listLaunchPoolPledgeRecords) | **GET** /launch/user-pledge-records | Query user pledge records
[**listLaunchPoolRewardRecords**](LaunchApi.md#listLaunchPoolRewardRecords) | **GET** /launch/get-user-reward-records | Query user reward records


## listLaunchPoolProjects

> Promise<{ response: http.IncomingMessage; body: Array<LaunchPoolV4Project>; }> listLaunchPoolProjects(opts)

Query LaunchPool project list

Retrieve the list of available LaunchPool projects, including basic project information and reward pool configuration. This endpoint does not require user authentication.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'status': 56, // number | Filter by project status: 0 for all, 1 for ongoing, 2 for warming up, 3 for ended, 4 for ongoing and warming up
  'mortgageCoin': "mortgageCoin_example", // string | Exact match by staking currency
  'searchCoin': "searchCoin_example", // string | Fuzzy match by reward currency and name
  'limitRule': 56, // number | Limit rule: 0 for regular pool, 1 for beginner pool
  'sortType': 56, // number | Sort type: 1 for max APR descending, 2 for max APR ascending
  'page': 1, // number | Page number, default 1
  'pageSize': 10 // number | Number of items per page, default 10, maximum 30
};
api.listLaunchPoolProjects(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **number**| Filter by project status: 0 for all, 1 for ongoing, 2 for warming up, 3 for ended, 4 for ongoing and warming up | [optional] [default to undefined]
 **mortgageCoin** | **string**| Exact match by staking currency | [optional] [default to undefined]
 **searchCoin** | **string**| Fuzzy match by reward currency and name | [optional] [default to undefined]
 **limitRule** | **number**| Limit rule: 0 for regular pool, 1 for beginner pool | [optional] [default to undefined]
 **sortType** | **number**| Sort type: 1 for max APR descending, 2 for max APR ascending | [optional] [default to undefined]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **pageSize** | **number**| Number of items per page, default 10, maximum 30 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<LaunchPoolV4Project>; }> [LaunchPoolV4Project](LaunchPoolV4Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createLaunchPoolOrder

> Promise<{ response: http.IncomingMessage; body: LaunchPoolV4CreateOrderResponse; }> createLaunchPoolOrder(createOrderV4)

Create LaunchPool staking order

Create a new staking order for asset staking mining. This endpoint requires API Key signature authentication.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.LaunchApi(client);
const createOrderV4 = new CreateOrderV4(); // CreateOrderV4 | 
api.createLaunchPoolOrder(createOrderV4)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderV4** | [**CreateOrderV4**](CreateOrderV4.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: LaunchPoolV4CreateOrderResponse; }> [LaunchPoolV4CreateOrderResponse](LaunchPoolV4CreateOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## redeemLaunchPool

> Promise<{ response: http.IncomingMessage; body: InlineResponse20011; }> redeemLaunchPool(redeemV4)

Redeem LaunchPool staked assets

Redeem staked assets and end staking mining. This endpoint requires API Key signature authentication.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.LaunchApi(client);
const redeemV4 = new RedeemV4(); // RedeemV4 | 
api.redeemLaunchPool(redeemV4)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redeemV4** | [**RedeemV4**](RedeemV4.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20011; }> [InlineResponse20011](InlineResponse20011.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listLaunchPoolPledgeRecords

> Promise<{ response: http.IncomingMessage; body: Array<LaunchPoolV4PledgeRecord>; }> listLaunchPoolPledgeRecords(opts)

Query user pledge records

Query user\&#39;s staking and redemption operation records. This endpoint requires user authentication.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.LaunchApi(client);
const opts = {
  'page': 1, // number | Page number, default 1
  'pageSize': 10, // number | Number of items per page, maximum 30
  'type': 56, // number | Type: 1 for pledge, 2 for redemption
  'startTime': "2026-03-17 00:00:00", // string | Start time, format: YYYY-MM-DD HH:MM:SS
  'endTime': "2026-03-17 23:59:59", // string | End time, format: YYYY-MM-DD HH:MM:SS
  'coin': "coin_example" // string | Collateral currency
};
api.listLaunchPoolPledgeRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **pageSize** | **number**| Number of items per page, maximum 30 | [optional] [default to 10]
 **type** | **number**| Type: 1 for pledge, 2 for redemption | [optional] [default to undefined]
 **startTime** | **string**| Start time, format: YYYY-MM-DD HH:MM:SS | [optional] [default to undefined]
 **endTime** | **string**| End time, format: YYYY-MM-DD HH:MM:SS | [optional] [default to undefined]
 **coin** | **string**| Collateral currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<LaunchPoolV4PledgeRecord>; }> [LaunchPoolV4PledgeRecord](LaunchPoolV4PledgeRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLaunchPoolRewardRecords

> Promise<{ response: http.IncomingMessage; body: Array<LaunchPoolV4RewardRecord>; }> listLaunchPoolRewardRecords(opts)

Query user reward records

Query the user\&#39;s staking reward records. This endpoint requires user authentication.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.LaunchApi(client);
const opts = {
  'page': 1, // number | Page number, default 1
  'pageSize': 10, // number | Number of items per page, maximum 30
  'startTime': 56, // number | Start timestamp
  'endTime': 56, // number | End Timestamp
  'coin': "coin_example" // string | Reward currency
};
api.listLaunchPoolRewardRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **pageSize** | **number**| Number of items per page, maximum 30 | [optional] [default to 10]
 **startTime** | **number**| Start timestamp | [optional] [default to undefined]
 **endTime** | **number**| End Timestamp | [optional] [default to undefined]
 **coin** | **string**| Reward currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<LaunchPoolV4RewardRecord>; }> [LaunchPoolV4RewardRecord](LaunchPoolV4RewardRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
