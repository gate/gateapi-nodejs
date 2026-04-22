# LaunchApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLaunchPoolProjects**](LaunchApi.md#listLaunchPoolProjects) | **GET** /launch/project-list | Query LaunchPool project list
[**createLaunchPoolOrder**](LaunchApi.md#createLaunchPoolOrder) | **POST** /launch/create-order | Create LaunchPool staking order
[**redeemLaunchPool**](LaunchApi.md#redeemLaunchPool) | **POST** /launch/redeem | Redeem LaunchPool staked assets
[**listLaunchPoolPledgeRecords**](LaunchApi.md#listLaunchPoolPledgeRecords) | **GET** /launch/user-pledge-records | Query user pledge records
[**listLaunchPoolRewardRecords**](LaunchApi.md#listLaunchPoolRewardRecords) | **GET** /launch/get-user-reward-records | Query user reward records
[**getHodlerAirdropProjectList**](LaunchApi.md#getHodlerAirdropProjectList) | **GET** /launch/hodler-airdrop/project-list | Check the list of HODLer Airdrop activities
[**hodlerAirdropOrder**](LaunchApi.md#hodlerAirdropOrder) | **POST** /launch/hodler-airdrop/order | Participate in the HODLer Airdrop event
[**getHodlerAirdropUserOrderRecords**](LaunchApi.md#getHodlerAirdropUserOrderRecords) | **GET** /launch/hodler-airdrop/user-order-records | Check HODLer Airdrop participation records
[**getHodlerAirdropUserAirdropRecords**](LaunchApi.md#getHodlerAirdropUserAirdropRecords) | **GET** /launch/hodler-airdrop/user-airdrop-records | Query HODLer Airdrop records
[**getCandyDropActivityListV4**](LaunchApi.md#getCandyDropActivityListV4) | **GET** /launch/candydrop/activity-list | Query activity list
[**registerCandyDropV4**](LaunchApi.md#registerCandyDropV4) | **POST** /launch/candydrop/register | Sign up for events
[**getCandyDropActivityRulesV4**](LaunchApi.md#getCandyDropActivityRulesV4) | **GET** /launch/candydrop/activity-rules | Query activity rules
[**getCandyDropTaskProgressV4**](LaunchApi.md#getCandyDropTaskProgressV4) | **GET** /launch/candydrop/task-progress | Query task completion progress
[**getCandyDropParticipationRecordsV4**](LaunchApi.md#getCandyDropParticipationRecordsV4) | **GET** /launch/candydrop/participation-records | Query participation records
[**getCandyDropAirdropRecordsV4**](LaunchApi.md#getCandyDropAirdropRecordsV4) | **GET** /launch/candydrop/airdrop-records | Query airdrop records


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

> Promise<{ response: http.IncomingMessage; body: RedeemLaunchPoolResponse; }> redeemLaunchPool(redeemV4)

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

Promise<{ response: AxiosResponse; body: RedeemLaunchPoolResponse; }> [RedeemLaunchPoolResponse](RedeemLaunchPoolResponse.md)

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

## getHodlerAirdropProjectList

> Promise<{ response: http.IncomingMessage; body: Array<HodlerAirdropV4ProjectItem>; }> getHodlerAirdropProjectList(opts)

Check the list of HODLer Airdrop activities

Get the HODLer Airdrop activity list, which supports filtering by status, currency/project name, and participation status. This interface does not require user login, and logged in users can obtain personal participation information.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'status': "status_example", // 'ACTIVE' | 'UNDERWAY' | 'PREHEAT' | 'FINISH' | Activity status filtering, optional values: ACTIVE (in progress + preheating), UNDERWAY (in progress), PREHEAT (preheating), FINISH (ended), return all if not passed
  'keyword': "keyword_example", // string | Currency/project name keywords, fuzzy matching
  'join': 0, // 0 | 1 | Participation filter: 0 all (default), 1 only participated
  'page': 1, // number | Page number, default 1
  'size': 10 // number | Number of items per page, default 10
};
api.getHodlerAirdropProjectList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Activity status filtering, optional values: ACTIVE (in progress + preheating), UNDERWAY (in progress), PREHEAT (preheating), FINISH (ended), return all if not passed | [optional] [default to undefined]
 **keyword** | **string**| Currency/project name keywords, fuzzy matching | [optional] [default to undefined]
 **join** | **Join**| Participation filter: 0 all (default), 1 only participated | [optional] [default to 0]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **size** | **number**| Number of items per page, default 10 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<HodlerAirdropV4ProjectItem>; }> [HodlerAirdropV4ProjectItem](HodlerAirdropV4ProjectItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## hodlerAirdropOrder

> Promise<{ response: http.IncomingMessage; body: HodlerAirdropV4OrderResponse; }> hodlerAirdropOrder(hodlerAirdropV4OrderRequest)

Participate in the HODLer Airdrop event

To participate in designated HODLer Airdrop activities, you need to hold GT. This interface requires user login authentication and must meet KYC requirements. It does not support sub-accounts and enterprise/institutional users.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.LaunchApi(client);
const hodlerAirdropV4OrderRequest = new HodlerAirdropV4OrderRequest(); // HodlerAirdropV4OrderRequest | 
api.hodlerAirdropOrder(hodlerAirdropV4OrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hodlerAirdropV4OrderRequest** | [**HodlerAirdropV4OrderRequest**](HodlerAirdropV4OrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: HodlerAirdropV4OrderResponse; }> [HodlerAirdropV4OrderResponse](HodlerAirdropV4OrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getHodlerAirdropUserOrderRecords

> Promise<{ response: http.IncomingMessage; body: Array<HodlerAirdropV4UserOrderRecord>; }> getHodlerAirdropUserOrderRecords(opts)

Check HODLer Airdrop participation records

Query the user\&#39;s HODLer Airdrop participation record and return the effective holdings and airdrop amount of each activity. This interface requires user login authentication.

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
  'keyword': "keyword_example", // string | Currency name keyword filtering
  'startTimest': 56, // number | Start timestamp (seconds)
  'endTimest': 56, // number | end timestamp (seconds)
  'page': 1, // number | Page number, default 1
  'size': 10 // number | Number of items per page, default 10
};
api.getHodlerAirdropUserOrderRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **string**| Currency name keyword filtering | [optional] [default to undefined]
 **startTimest** | **number**| Start timestamp (seconds) | [optional] [default to undefined]
 **endTimest** | **number**| end timestamp (seconds) | [optional] [default to undefined]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **size** | **number**| Number of items per page, default 10 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<HodlerAirdropV4UserOrderRecord>; }> [HodlerAirdropV4UserOrderRecord](HodlerAirdropV4UserOrderRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getHodlerAirdropUserAirdropRecords

> Promise<{ response: http.IncomingMessage; body: Array<HodlerAirdropV4UserAirdropRecord>; }> getHodlerAirdropUserAirdropRecords(opts)

Query HODLer Airdrop records

Query the HODLer Airdrop airdrop distribution record that the user has obtained, including basic airdrops, additional airdrops and automatic redemption status. This interface requires user login authentication.

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
  'keyword': "keyword_example", // string | Currency name keyword filtering
  'startTimest': 56, // number | Start timestamp (seconds)
  'endTimest': 56, // number | end timestamp (seconds)
  'page': 1, // number | Page number, default 1
  'size': 10 // number | Number of items per page, default 10
};
api.getHodlerAirdropUserAirdropRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **string**| Currency name keyword filtering | [optional] [default to undefined]
 **startTimest** | **number**| Start timestamp (seconds) | [optional] [default to undefined]
 **endTimest** | **number**| end timestamp (seconds) | [optional] [default to undefined]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **size** | **number**| Number of items per page, default 10 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<HodlerAirdropV4UserAirdropRecord>; }> [HodlerAirdropV4UserAirdropRecord](HodlerAirdropV4UserAirdropRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropActivityListV4

> Promise<{ response: http.IncomingMessage; body: Array<CandyDropV4ActivityCd01>; }> getCandyDropActivityListV4(opts)

Query activity list

Supports multi-dimensional filtering of CandyDrop activities, and each query returns the top ten data sorted by the list. No login required.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'status': "status_example", // 'ongoing' | 'upcoming' | 'ended' | Activity status filtering: ongoing (in progress), upcoming (about to start), ended (ended), if not passed, all will be returned
  'ruleName': "ruleName_example", // string | Task type filtering: spot (spot), futures (contract), deposit (recharge), invite (invitation), trading_bot (trading robot), simple_earn (Yu Bibao), first_deposit (first deposit), alpha (Alpha), flash_swap (flash swap), tradfi (TradFi), etf (ETF)
  'registerStatus': "registerStatus_example", // 'registered' | 'unregistered' | Participation status screening: registered (already participated), unregistered (not participated), if not passed, all will be returned
  'currency': "currency_example", // string | Currency name filter
  'limit': 10, // number | Number of items returned, default 10, maximum 30
  'offset': 0 // number | Offset, default 0
};
api.getCandyDropActivityListV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Activity status filtering: ongoing (in progress), upcoming (about to start), ended (ended), if not passed, all will be returned | [optional] [default to undefined]
 **ruleName** | **string**| Task type filtering: spot (spot), futures (contract), deposit (recharge), invite (invitation), trading_bot (trading robot), simple_earn (Yu Bibao), first_deposit (first deposit), alpha (Alpha), flash_swap (flash swap), tradfi (TradFi), etf (ETF) | [optional] [default to undefined]
 **registerStatus** | **RegisterStatus**| Participation status screening: registered (already participated), unregistered (not participated), if not passed, all will be returned | [optional] [default to undefined]
 **currency** | **string**| Currency name filter | [optional] [default to undefined]
 **limit** | **number**| Number of items returned, default 10, maximum 30 | [optional] [default to 10]
 **offset** | **number**| Offset, default 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<CandyDropV4ActivityCd01>; }> [CandyDropV4ActivityCd01](CandyDropV4ActivityCd01.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## registerCandyDropV4

> Promise<{ response: http.IncomingMessage; body: CandyDropV4RegisterRespCd02; }> registerCandyDropV4(candyDropV4RegisterReqCd02)

Sign up for events

Sign up for select CandyDrop events. Login is required and API Key signature authentication is required.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.LaunchApi(client);
const candyDropV4RegisterReqCd02 = new CandyDropV4RegisterReqCd02(); // CandyDropV4RegisterReqCd02 | 
api.registerCandyDropV4(candyDropV4RegisterReqCd02)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candyDropV4RegisterReqCd02** | [**CandyDropV4RegisterReqCd02**](CandyDropV4RegisterReqCd02.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CandyDropV4RegisterRespCd02; }> [CandyDropV4RegisterRespCd02](CandyDropV4RegisterRespCd02.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCandyDropActivityRulesV4

> Promise<{ response: http.IncomingMessage; body: CandyDropV4ActivityRulesCd03; }> getCandyDropActivityRulesV4(opts)

Query activity rules

Query the rules of a specific activity, including prize pool and corresponding task data. No login required.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'activityId': 56, // number | Activity ID, choose one from currency, at least one of them must be passed
  'currency': "currency_example" // string | Project/currency name, choose one from activity_id, at least one of them must be passed
};
api.getCandyDropActivityRulesV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **number**| Activity ID, choose one from currency, at least one of them must be passed | [optional] [default to undefined]
 **currency** | **string**| Project/currency name, choose one from activity_id, at least one of them must be passed | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CandyDropV4ActivityRulesCd03; }> [CandyDropV4ActivityRulesCd03](CandyDropV4ActivityRulesCd03.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropTaskProgressV4

> Promise<{ response: http.IncomingMessage; body: CandyDropV4TaskProgressCd04; }> getCandyDropTaskProgressV4(opts)

Query task completion progress

Check the completion progress of tasks that are in progress and have been registered/participated. Login required.

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
  'activityId': 56, // number | Activity ID, choose one from currency, at least one of them must be passed
  'currency': "currency_example" // string | Project/currency name, choose one from activity_id, at least one of them must be passed
};
api.getCandyDropTaskProgressV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **number**| Activity ID, choose one from currency, at least one of them must be passed | [optional] [default to undefined]
 **currency** | **string**| Project/currency name, choose one from activity_id, at least one of them must be passed | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CandyDropV4TaskProgressCd04; }> [CandyDropV4TaskProgressCd04](CandyDropV4TaskProgressCd04.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropParticipationRecordsV4

> Promise<{ response: http.IncomingMessage; body: Array<CandyDropV4ParticipationRecordCd05>; }> getCandyDropParticipationRecordsV4(opts)

Query participation records

Query the user\&#39;s CandyDrop participation details. Login required.

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
  'currency': "currency_example", // string | Currency name filter
  'status': "status_example", // 'ongoing' | 'awaiting_draw' | 'won' | 'not_win' | Status filtering: ongoing (in progress), awaiting_draw (to be drawn), won (already won), not_win (not won)
  'startTime': 56, // number | Start time (Unix timestamp seconds)
  'endTime': 56, // number | End time (Unix timestamp seconds)
  'page': 1, // number | Page number, default 1
  'limit': 10 // number | Number of items per page, default 10, maximum 30
};
api.getCandyDropParticipationRecordsV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name filter | [optional] [default to undefined]
 **status** | **Status**| Status filtering: ongoing (in progress), awaiting_draw (to be drawn), won (already won), not_win (not won) | [optional] [default to undefined]
 **startTime** | **number**| Start time (Unix timestamp seconds) | [optional] [default to undefined]
 **endTime** | **number**| End time (Unix timestamp seconds) | [optional] [default to undefined]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **limit** | **number**| Number of items per page, default 10, maximum 30 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<CandyDropV4ParticipationRecordCd05>; }> [CandyDropV4ParticipationRecordCd05](CandyDropV4ParticipationRecordCd05.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropAirdropRecordsV4

> Promise<{ response: http.IncomingMessage; body: Array<CandyDropV4AirdropRecordCd06>; }> getCandyDropAirdropRecordsV4(opts)

Query airdrop records

Query the user\&#39;s CandyDrop airdrop details. Login required.

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
  'currency': "currency_example", // string | Currency name filter
  'startTime': 56, // number | Start time (Unix timestamp seconds)
  'endTime': 56, // number | End time (Unix timestamp seconds)
  'page': 1, // number | Page number, default 1
  'limit': 10 // number | Number of items per page, default 10, maximum 30
};
api.getCandyDropAirdropRecordsV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name filter | [optional] [default to undefined]
 **startTime** | **number**| Start time (Unix timestamp seconds) | [optional] [default to undefined]
 **endTime** | **number**| End time (Unix timestamp seconds) | [optional] [default to undefined]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **limit** | **number**| Number of items per page, default 10, maximum 30 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<CandyDropV4AirdropRecordCd06>; }> [CandyDropV4AirdropRecordCd06](CandyDropV4AirdropRecordCd06.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
