# LaunchApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLaunchPoolProjects**](LaunchApi.md#listLaunchPoolProjects) | **GET** /launch/project-list | Query LaunchPool project list
[**createLaunchPoolOrder**](LaunchApi.md#createLaunchPoolOrder) | **POST** /launch/create-order | Create LaunchPool staking order
[**redeemLaunchPool**](LaunchApi.md#redeemLaunchPool) | **POST** /launch/redeem | Redeem LaunchPool staked assets
[**listLaunchPoolPledgeRecords**](LaunchApi.md#listLaunchPoolPledgeRecords) | **GET** /launch/user-pledge-records | Query user pledge records
[**listLaunchPoolRewardRecords**](LaunchApi.md#listLaunchPoolRewardRecords) | **GET** /launch/get-user-reward-records | Query user reward records
[**getHodlerAirdropProjectList**](LaunchApi.md#getHodlerAirdropProjectList) | **GET** /launch/hodler-airdrop/project-list | 查询HODLer Airdrop活动列表
[**hodlerAirdropOrder**](LaunchApi.md#hodlerAirdropOrder) | **POST** /launch/hodler-airdrop/order | 参与HODLer Airdrop活动
[**getHodlerAirdropUserOrderRecords**](LaunchApi.md#getHodlerAirdropUserOrderRecords) | **GET** /launch/hodler-airdrop/user-order-records | 查询HODLer Airdrop参与记录
[**getHodlerAirdropUserAirdropRecords**](LaunchApi.md#getHodlerAirdropUserAirdropRecords) | **GET** /launch/hodler-airdrop/user-airdrop-records | 查询HODLer Airdrop空投记录
[**getCandyDropActivityListV4**](LaunchApi.md#getCandyDropActivityListV4) | **GET** /launch/candydrop/activity-list | 查询活动列表
[**registerCandyDropV4**](LaunchApi.md#registerCandyDropV4) | **POST** /launch/candydrop/register | 报名参与活动
[**getCandyDropActivityRulesV4**](LaunchApi.md#getCandyDropActivityRulesV4) | **GET** /launch/candydrop/activity-rules | 查询活动规则
[**getCandyDropTaskProgressV4**](LaunchApi.md#getCandyDropTaskProgressV4) | **GET** /launch/candydrop/task-progress | 查询任务完成进度
[**getCandyDropParticipationRecordsV4**](LaunchApi.md#getCandyDropParticipationRecordsV4) | **GET** /launch/candydrop/participation-records | 查询参与记录
[**getCandyDropAirdropRecordsV4**](LaunchApi.md#getCandyDropAirdropRecordsV4) | **GET** /launch/candydrop/airdrop-records | 查询空投记录


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

查询HODLer Airdrop活动列表

获取HODLer Airdrop活动列表，支持按状态、币种/项目名称、参与情况筛选。此接口无需用户登录，登录用户可获取个人参与信息。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'status': "status_example", // 'ACTIVE' | 'UNDERWAY' | 'PREHEAT' | 'FINISH' | 活动状态筛选，可选值：ACTIVE（进行中+预热中）、UNDERWAY（进行中）、PREHEAT（预热中）、FINISH（已结束），不传返回全部
  'keyword': "keyword_example", // string | 币种/项目名称关键词，模糊匹配
  'join': 0, // 0 | 1 | 参与情况筛选：0全部（默认），1仅已参与
  'page': 1, // number | 页码，默认1
  'size': 10 // number | 每页条数，默认10
};
api.getHodlerAirdropProjectList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| 活动状态筛选，可选值：ACTIVE（进行中+预热中）、UNDERWAY（进行中）、PREHEAT（预热中）、FINISH（已结束），不传返回全部 | [optional] [default to undefined]
 **keyword** | **string**| 币种/项目名称关键词，模糊匹配 | [optional] [default to undefined]
 **join** | **Join**| 参与情况筛选：0全部（默认），1仅已参与 | [optional] [default to 0]
 **page** | **number**| 页码，默认1 | [optional] [default to 1]
 **size** | **number**| 每页条数，默认10 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<HodlerAirdropV4ProjectItem>; }> [HodlerAirdropV4ProjectItem](HodlerAirdropV4ProjectItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## hodlerAirdropOrder

> Promise<{ response: http.IncomingMessage; body: HodlerAirdropV4OrderResponse; }> hodlerAirdropOrder(hodlerAirdropV4OrderRequest)

参与HODLer Airdrop活动

参与指定的HODLer Airdrop活动，需持有GT。此接口需要用户登录认证，且须满足KYC要求，不支持子账户、企业/机构用户。

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

查询HODLer Airdrop参与记录

查询用户的HODLer Airdrop参与记录，返回每个活动的有效持仓和空投金额。此接口需要用户登录认证。

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
  'keyword': "keyword_example", // string | 币种名称关键词筛选
  'startTimest': 56, // number | 开始时间戳（秒）
  'endTimest': 56, // number | 结束时间戳（秒）
  'page': 1, // number | 页码，默认1
  'size': 10 // number | 每页条数，默认10
};
api.getHodlerAirdropUserOrderRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **string**| 币种名称关键词筛选 | [optional] [default to undefined]
 **startTimest** | **number**| 开始时间戳（秒） | [optional] [default to undefined]
 **endTimest** | **number**| 结束时间戳（秒） | [optional] [default to undefined]
 **page** | **number**| 页码，默认1 | [optional] [default to 1]
 **size** | **number**| 每页条数，默认10 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<HodlerAirdropV4UserOrderRecord>; }> [HodlerAirdropV4UserOrderRecord](HodlerAirdropV4UserOrderRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getHodlerAirdropUserAirdropRecords

> Promise<{ response: http.IncomingMessage; body: Array<HodlerAirdropV4UserAirdropRecord>; }> getHodlerAirdropUserAirdropRecords(opts)

查询HODLer Airdrop空投记录

查询用户已获得的HODLer Airdrop空投发放记录，包含基础空投、额外空投和自动兑换状态。此接口需要用户登录认证。

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
  'keyword': "keyword_example", // string | 币种名称关键词筛选
  'startTimest': 56, // number | 开始时间戳（秒）
  'endTimest': 56, // number | 结束时间戳（秒）
  'page': 1, // number | 页码，默认1
  'size': 10 // number | 每页条数，默认10
};
api.getHodlerAirdropUserAirdropRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **string**| 币种名称关键词筛选 | [optional] [default to undefined]
 **startTimest** | **number**| 开始时间戳（秒） | [optional] [default to undefined]
 **endTimest** | **number**| 结束时间戳（秒） | [optional] [default to undefined]
 **page** | **number**| 页码，默认1 | [optional] [default to 1]
 **size** | **number**| 每页条数，默认10 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<HodlerAirdropV4UserAirdropRecord>; }> [HodlerAirdropV4UserAirdropRecord](HodlerAirdropV4UserAirdropRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropActivityListV4

> Promise<{ response: http.IncomingMessage; body: Array<CandyDropV4ActivityCd01>; }> getCandyDropActivityListV4(opts)

查询活动列表

支持多维度筛选 CandyDrop 活动，每次查询返回列表排序的前十条数据。不需要登录。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'status': "status_example", // 'ongoing' | 'upcoming' | 'ended' | 活动状态筛选：ongoing(进行中)、upcoming(即将开始)、ended(已结束)，不传则返回全部
  'ruleName': "ruleName_example", // string | 任务类型筛选：spot(现货)、futures(合约)、deposit(充值)、invite(邀请)、trading_bot(交易机器人)、simple_earn(余币宝)、first_deposit(首笔入金)、alpha(Alpha)、flash_swap(闪兑)、tradfi(TradFi)、etf(ETF)
  'registerStatus': "registerStatus_example", // 'registered' | 'unregistered' | 参与情况筛选：registered(已参与)、unregistered(未参与)，不传则返回全部
  'currency': "currency_example", // string | 币种名称筛选
  'limit': 10, // number | 返回条数，默认10，最大30
  'offset': 0 // number | 偏移量，默认0
};
api.getCandyDropActivityListV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| 活动状态筛选：ongoing(进行中)、upcoming(即将开始)、ended(已结束)，不传则返回全部 | [optional] [default to undefined]
 **ruleName** | **string**| 任务类型筛选：spot(现货)、futures(合约)、deposit(充值)、invite(邀请)、trading_bot(交易机器人)、simple_earn(余币宝)、first_deposit(首笔入金)、alpha(Alpha)、flash_swap(闪兑)、tradfi(TradFi)、etf(ETF) | [optional] [default to undefined]
 **registerStatus** | **RegisterStatus**| 参与情况筛选：registered(已参与)、unregistered(未参与)，不传则返回全部 | [optional] [default to undefined]
 **currency** | **string**| 币种名称筛选 | [optional] [default to undefined]
 **limit** | **number**| 返回条数，默认10，最大30 | [optional] [default to 10]
 **offset** | **number**| 偏移量，默认0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<CandyDropV4ActivityCd01>; }> [CandyDropV4ActivityCd01](CandyDropV4ActivityCd01.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## registerCandyDropV4

> Promise<{ response: http.IncomingMessage; body: CandyDropV4RegisterRespCd02; }> registerCandyDropV4(candyDropV4RegisterReqCd02)

报名参与活动

报名参与特定 CandyDrop 活动。需要登录，需要 API Key 签名认证。

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

查询活动规则

查询特定活动的规则，包括奖池及对应任务数据。不需要登录。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.LaunchApi(client);
const opts = {
  'activityId': 56, // number | 活动ID，与 currency 二选一，至少须传其一
  'currency': "currency_example" // string | 项目/币种名称，与 activity_id 二选一，至少须传其一
};
api.getCandyDropActivityRulesV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **number**| 活动ID，与 currency 二选一，至少须传其一 | [optional] [default to undefined]
 **currency** | **string**| 项目/币种名称，与 activity_id 二选一，至少须传其一 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CandyDropV4ActivityRulesCd03; }> [CandyDropV4ActivityRulesCd03](CandyDropV4ActivityRulesCd03.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropTaskProgressV4

> Promise<{ response: http.IncomingMessage; body: CandyDropV4TaskProgressCd04; }> getCandyDropTaskProgressV4(opts)

查询任务完成进度

查询进行中且已报名/参与的任务完成进度。需要登录。

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
  'activityId': 56, // number | 活动ID，与 currency 二选一，至少须传其一
  'currency': "currency_example" // string | 项目/币种名称，与 activity_id 二选一，至少须传其一
};
api.getCandyDropTaskProgressV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **number**| 活动ID，与 currency 二选一，至少须传其一 | [optional] [default to undefined]
 **currency** | **string**| 项目/币种名称，与 activity_id 二选一，至少须传其一 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CandyDropV4TaskProgressCd04; }> [CandyDropV4TaskProgressCd04](CandyDropV4TaskProgressCd04.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropParticipationRecordsV4

> Promise<{ response: http.IncomingMessage; body: Array<CandyDropV4ParticipationRecordCd05>; }> getCandyDropParticipationRecordsV4(opts)

查询参与记录

查询用户的 CandyDrop 参与详情。需要登录。

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
  'currency': "currency_example", // string | 币种名称筛选
  'status': "status_example", // 'ongoing' | 'awaiting_draw' | 'won' | 'not_win' | 状态筛选：ongoing(进行中)、awaiting_draw(待开奖)、won(已中奖)、not_win(未中奖)
  'startTime': 56, // number | 开始时间（Unix 时间戳秒）
  'endTime': 56, // number | 结束时间（Unix 时间戳秒）
  'page': 1, // number | 页码，默认1
  'limit': 10 // number | 每页条数，默认10，最大30
};
api.getCandyDropParticipationRecordsV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| 币种名称筛选 | [optional] [default to undefined]
 **status** | **Status**| 状态筛选：ongoing(进行中)、awaiting_draw(待开奖)、won(已中奖)、not_win(未中奖) | [optional] [default to undefined]
 **startTime** | **number**| 开始时间（Unix 时间戳秒） | [optional] [default to undefined]
 **endTime** | **number**| 结束时间（Unix 时间戳秒） | [optional] [default to undefined]
 **page** | **number**| 页码，默认1 | [optional] [default to 1]
 **limit** | **number**| 每页条数，默认10，最大30 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<CandyDropV4ParticipationRecordCd05>; }> [CandyDropV4ParticipationRecordCd05](CandyDropV4ParticipationRecordCd05.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCandyDropAirdropRecordsV4

> Promise<{ response: http.IncomingMessage; body: Array<CandyDropV4AirdropRecordCd06>; }> getCandyDropAirdropRecordsV4(opts)

查询空投记录

查询用户的 CandyDrop 空投详情。需要登录。

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
  'currency': "currency_example", // string | 币种名称筛选
  'startTime': 56, // number | 开始时间（Unix 时间戳秒）
  'endTime': 56, // number | 结束时间（Unix 时间戳秒）
  'page': 1, // number | 页码，默认1
  'limit': 10 // number | 每页条数，默认10，最大30
};
api.getCandyDropAirdropRecordsV4(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| 币种名称筛选 | [optional] [default to undefined]
 **startTime** | **number**| 开始时间（Unix 时间戳秒） | [optional] [default to undefined]
 **endTime** | **number**| 结束时间（Unix 时间戳秒） | [optional] [default to undefined]
 **page** | **number**| 页码，默认1 | [optional] [default to 1]
 **limit** | **number**| 每页条数，默认10，最大30 | [optional] [default to 10]

### Return type

Promise<{ response: AxiosResponse; body: Array<CandyDropV4AirdropRecordCd06>; }> [CandyDropV4AirdropRecordCd06](CandyDropV4AirdropRecordCd06.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
