# BotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAIHubStrategyRecommend**](BotApi.md#getAIHubStrategyRecommend) | **GET** /bot/strategy/recommend | Get AIHub strategy recommendations
[**postAIHubSpotGridCreate**](BotApi.md#postAIHubSpotGridCreate) | **POST** /bot/spot-grid/create | Create spot grid
[**postAIHubMarginGridCreate**](BotApi.md#postAIHubMarginGridCreate) | **POST** /bot/margin-grid/create | Create a lever grid
[**postAIHubInfiniteGridCreate**](BotApi.md#postAIHubInfiniteGridCreate) | **POST** /bot/infinite-grid/create | Create infinite grid
[**postAIHubFuturesGridCreate**](BotApi.md#postAIHubFuturesGridCreate) | **POST** /bot/futures-grid/create | Create a contract grid
[**postAIHubSpotMartingaleCreate**](BotApi.md#postAIHubSpotMartingaleCreate) | **POST** /bot/spot-martingale/create | Create Spot Martin
[**postAIHubContractMartingaleCreate**](BotApi.md#postAIHubContractMartingaleCreate) | **POST** /bot/contract-martingale/create | Create contract martin
[**getAIHubPortfolioRunning**](BotApi.md#getAIHubPortfolioRunning) | **GET** /bot/portfolio/running | Query the list of running policies
[**getAIHubPortfolioDetail**](BotApi.md#getAIHubPortfolioDetail) | **GET** /bot/portfolio/detail | Query order policy details
[**postAIHubPortfolioStop**](BotApi.md#postAIHubPortfolioStop) | **POST** /bot/portfolio/stop | Terminate a single running policy


## getAIHubStrategyRecommend

> Promise<{ response: http.IncomingMessage; body: AIHubDiscoverSuccessResponse; }> getAIHubStrategyRecommend(opts)

Get AIHub strategy recommendations

discover 域唯一正式接口。  支持场景： - &#x60;top1&#x60; - &#x60;bundle&#x60; - &#x60;filter&#x60; - &#x60;refresh&#x60;  约束： - 主动推荐池仅包含 &#x60;spot_grid&#x60;、&#x60;futures_grid&#x60;、&#x60;spot_martingale&#x60; - 可返回但不主动推荐 &#x60;infinite_grid&#x60;、&#x60;margin_grid&#x60; - 不得返回 &#x60;contract_martingale&#x60;、&#x60;smart-position&#x60;、&#x60;spot-future-arbitrage&#x60; - &#x60;scene&#x3D;filter&#x60; 时只允许按 &#x60;market&#x60;、&#x60;backtest_apr_gte&#x60;、&#x60;max_drawdown_lte&#x60; 过滤 - &#x60;scene&#x3D;refresh&#x60; 通过 &#x60;refresh_recommendation_id&#x60; 承接刷新上下文；正式最小格式只要求 &#x60;strategy_type|market&#x60; - 若上游直接透传上一条推荐的 &#x60;recommendation_id&#x60;，其中第三段 &#x60;backtest_id&#x60; 当前会被忽略

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const opts = {
  'market': "market_example", // string | Trading pair, such as `BTC_USDT`
  'strategyType': "strategyType_example", // 'spot_grid' | 'margin_grid' | 'infinite_grid' | 'futures_grid' | 'spot_martingale' | Recommended target policy type; `contract_martingale` not allowed
  'direction': "direction_example", // 'buy' | 'sell' | 'neutral' | Market direction
  'investAmount': "investAmount_example", // string | Investment amount, string transparent transmission
  'scene': "scene_example", // 'top1' | 'bundle' | 'filter' | 'refresh' | Recommended scenario; when empty, bot-service can automatically infer according to the implementation logic.
  'refreshRecommendationId': "refreshRecommendationId_example", // string | It is recommended to refresh the context. Used when `scene=refresh` is used; when `scene` is empty but the field exists, bot-service will also automatically determine as `refresh`. The official minimum format is `strategy_type|market`; if the `recommendation_id` of the previous recommendation is directly passed through, the third paragraph `backtest_id` will be ignored.
  'limit': 56, // number | Return quantity; when `scene=filter` is used, the actual results are up to 10
  'maxDrawdownLte': "maxDrawdownLte_example", // string | Maximum drawdown limit
  'backtestAprGte': "backtestAprGte_example", // string | Backtest annualized lower limit
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.getAIHubStrategyRecommend(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **string**| Trading pair, such as &#x60;BTC_USDT&#x60; | [optional] [default to undefined]
 **strategyType** | **StrategyType**| Recommended target policy type; &#x60;contract_martingale&#x60; not allowed | [optional] [default to undefined]
 **direction** | **Direction**| Market direction | [optional] [default to undefined]
 **investAmount** | **string**| Investment amount, string transparent transmission | [optional] [default to undefined]
 **scene** | **Scene**| Recommended scenario; when empty, bot-service can automatically infer according to the implementation logic. | [optional] [default to undefined]
 **refreshRecommendationId** | **string**| It is recommended to refresh the context. Used when &#x60;scene&#x3D;refresh&#x60; is used; when &#x60;scene&#x60; is empty but the field exists, bot-service will also automatically determine as &#x60;refresh&#x60;. The official minimum format is &#x60;strategy_type|market&#x60;; if the &#x60;recommendation_id&#x60; of the previous recommendation is directly passed through, the third paragraph &#x60;backtest_id&#x60; will be ignored. | [optional] [default to undefined]
 **limit** | **number**| Return quantity; when &#x60;scene&#x3D;filter&#x60; is used, the actual results are up to 10 | [optional] [default to undefined]
 **maxDrawdownLte** | **string**| Maximum drawdown limit | [optional] [default to undefined]
 **backtestAprGte** | **string**| Backtest annualized lower limit | [optional] [default to undefined]
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubDiscoverSuccessResponse; }> [AIHubDiscoverSuccessResponse](AIHubDiscoverSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## postAIHubSpotGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubSpotGridCreate(spotGridCreateRequest, opts)

Create spot grid

Create a spot grid strategy based on the incoming parameters.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const spotGridCreateRequest = new SpotGridCreateRequest(); // SpotGridCreateRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubSpotGridCreate(spotGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotGridCreateRequest** | [**SpotGridCreateRequest**](SpotGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubMarginGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubMarginGridCreate(marginGridCreateRequest, opts)

Create a lever grid

Create a leverage grid strategy based on the passed parameters.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const marginGridCreateRequest = new MarginGridCreateRequest(); // MarginGridCreateRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubMarginGridCreate(marginGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marginGridCreateRequest** | [**MarginGridCreateRequest**](MarginGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubInfiniteGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubInfiniteGridCreate(infiniteGridCreateRequest, opts)

Create infinite grid

Create an infinite grid strategy based on passed parameters.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const infiniteGridCreateRequest = new InfiniteGridCreateRequest(); // InfiniteGridCreateRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubInfiniteGridCreate(infiniteGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **infiniteGridCreateRequest** | [**InfiniteGridCreateRequest**](InfiniteGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubFuturesGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubFuturesGridCreate(futuresGridCreateRequest, opts)

Create a contract grid

Create a contract grid strategy based on the incoming parameters.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const futuresGridCreateRequest = new FuturesGridCreateRequest(); // FuturesGridCreateRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubFuturesGridCreate(futuresGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **futuresGridCreateRequest** | [**FuturesGridCreateRequest**](FuturesGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubSpotMartingaleCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubSpotMartingaleCreate(spotMartingaleCreateRequest, opts)

Create Spot Martin

Create a spot Martin strategy based on the passed parameters.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const spotMartingaleCreateRequest = new SpotMartingaleCreateRequest(); // SpotMartingaleCreateRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubSpotMartingaleCreate(spotMartingaleCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotMartingaleCreateRequest** | [**SpotMartingaleCreateRequest**](SpotMartingaleCreateRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubContractMartingaleCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubContractMartingaleCreate(contractMartingaleCreateRequest, opts)

Create contract martin

Create a contract Martin strategy based on the input parameters.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const contractMartingaleCreateRequest = new ContractMartingaleCreateRequest(); // ContractMartingaleCreateRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubContractMartingaleCreate(contractMartingaleCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractMartingaleCreateRequest** | [**ContractMartingaleCreateRequest**](ContractMartingaleCreateRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getAIHubPortfolioRunning

> Promise<{ response: http.IncomingMessage; body: AIHubPortfolioRunningSuccessResponse; }> getAIHubPortfolioRunning(opts)

Query the list of running policies

Query the list of AIHub strategies currently running by the user, and support filtering by strategy type, trading pair and paging conditions.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const opts = {
  'strategyType': "strategyType_example", // 'spot_grid' | 'margin_grid' | 'infinite_grid' | 'futures_grid' | 'spot_martingale' | 'contract_martingale' | Filter by policy type
  'market': "market_example", // string | Filter by trading pair
  'page': 1, // number | Page number, default 1
  'pageSize': 20, // number | Paging size, default 20, maximum 50
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.getAIHubPortfolioRunning(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategyType** | **StrategyType**| Filter by policy type | [optional] [default to undefined]
 **market** | **string**| Filter by trading pair | [optional] [default to undefined]
 **page** | **number**| Page number, default 1 | [optional] [default to 1]
 **pageSize** | **number**| Paging size, default 20, maximum 50 | [optional] [default to 20]
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubPortfolioRunningSuccessResponse; }> [AIHubPortfolioRunningSuccessResponse](AIHubPortfolioRunningSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAIHubPortfolioDetail

> Promise<{ response: http.IncomingMessage; body: AIHubPortfolioDetailSuccessResponse; }> getAIHubPortfolioDetail(strategyId, strategyType, opts)

Query order policy details

Both &#x60;strategy_id&#x60; and &#x60;strategy_type&#x60; must be passed in the request, where &#x60;strategy_type&#x60; is used to distribute to the underlying detailed implementation by strategy type.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const strategyId = "strategyId_example"; // string | Policy ID
const strategyType = "strategyType_example"; // 'spot_grid' | 'margin_grid' | 'infinite_grid' | 'futures_grid' | 'spot_martingale' | 'contract_martingale' | Policy type; used for underlying detail distribution
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.getAIHubPortfolioDetail(strategyId, strategyType, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategyId** | **string**| Policy ID | [default to undefined]
 **strategyType** | **StrategyType**| Policy type; used for underlying detail distribution | [default to undefined]
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubPortfolioDetailSuccessResponse; }> [AIHubPortfolioDetailSuccessResponse](AIHubPortfolioDetailSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## postAIHubPortfolioStop

> Promise<{ response: http.IncomingMessage; body: AIHubPortfolioStopSuccessResponse; }> postAIHubPortfolioStop(aIHubPortfolioStopRequest, opts)

Terminate a single running policy

Only one policy is allowed to be terminated per request. Risk warning and secondary confirmation are borne by the upper layer of OpenClaw; this interface is only responsible for executing stop.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const aIHubPortfolioStopRequest = new AIHubPortfolioStopRequest(); // AIHubPortfolioStopRequest | 
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | Call source identifier; injected by APIv4 if necessary
  'xGateAppLang': "xGateAppLang_example", // string | Language context, such as `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | Request link ID; caller can transmit transparently
  'xTraceId': "xTraceId_example" // string | trace header; can be generated uniformly by APIv4
};
api.postAIHubPortfolioStop(aIHubPortfolioStopRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aIHubPortfolioStopRequest** | [**AIHubPortfolioStopRequest**](AIHubPortfolioStopRequest.md)|  | 
 **xGateServiceId** | **string**| Call source identifier; injected by APIv4 if necessary | [optional] [default to undefined]
 **xGateAppLang** | **string**| Language context, such as &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| Request link ID; caller can transmit transparently | [optional] [default to undefined]
 **xTraceId** | **string**| trace header; can be generated uniformly by APIv4 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubPortfolioStopSuccessResponse; }> [AIHubPortfolioStopSuccessResponse](AIHubPortfolioStopSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
