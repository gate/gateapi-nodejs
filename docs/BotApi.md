# BotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAIHubStrategyRecommend**](BotApi.md#getAIHubStrategyRecommend) | **GET** /bot/strategy/recommend | 获取 AIHub 策略推荐
[**postAIHubSpotGridCreate**](BotApi.md#postAIHubSpotGridCreate) | **POST** /bot/spot-grid/create | 创建现货网格
[**postAIHubMarginGridCreate**](BotApi.md#postAIHubMarginGridCreate) | **POST** /bot/margin-grid/create | 创建杠杆网格
[**postAIHubInfiniteGridCreate**](BotApi.md#postAIHubInfiniteGridCreate) | **POST** /bot/infinite-grid/create | 创建无限网格
[**postAIHubFuturesGridCreate**](BotApi.md#postAIHubFuturesGridCreate) | **POST** /bot/futures-grid/create | 创建合约网格
[**postAIHubSpotMartingaleCreate**](BotApi.md#postAIHubSpotMartingaleCreate) | **POST** /bot/spot-martingale/create | 创建现货马丁
[**postAIHubContractMartingaleCreate**](BotApi.md#postAIHubContractMartingaleCreate) | **POST** /bot/contract-martingale/create | 创建合约马丁
[**getAIHubPortfolioRunning**](BotApi.md#getAIHubPortfolioRunning) | **GET** /bot/portfolio/running | 查询运行中策略列表
[**getAIHubPortfolioDetail**](BotApi.md#getAIHubPortfolioDetail) | **GET** /bot/portfolio/detail | 查询单策略详情
[**postAIHubPortfolioStop**](BotApi.md#postAIHubPortfolioStop) | **POST** /bot/portfolio/stop | 终止单个运行中策略


## getAIHubStrategyRecommend

> Promise<{ response: http.IncomingMessage; body: AIHubDiscoverSuccessResponse; }> getAIHubStrategyRecommend(opts)

获取 AIHub 策略推荐

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
  'market': "market_example", // string | 交易对，例如 `BTC_USDT`
  'strategyType': "strategyType_example", // 'spot_grid' | 'margin_grid' | 'infinite_grid' | 'futures_grid' | 'spot_martingale' | 推荐目标策略类型；`contract_martingale` 不允许
  'direction': "direction_example", // 'buy' | 'sell' | 'neutral' | 行情方向
  'investAmount': "investAmount_example", // string | 投入金额，字符串透传
  'scene': "scene_example", // 'top1' | 'bundle' | 'filter' | 'refresh' | 推荐场景；为空时 bot-service 可按实现逻辑自动推断
  'refreshRecommendationId': "refreshRecommendationId_example", // string | 推荐刷新上下文。`scene=refresh` 时使用；当 `scene` 为空但该字段存在时，bot-service 也会自动判定为 `refresh`。 正式最小格式为 `strategy_type|market`；若直接透传上一条推荐的 `recommendation_id`，第三段 `backtest_id` 会被忽略。
  'limit': 56, // number | 返回数量；`scene=filter` 时实际结果最多 10 条
  'maxDrawdownLte': "maxDrawdownLte_example", // string | 最大回撤上限
  'backtestAprGte': "backtestAprGte_example", // string | 回测年化下限
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.getAIHubStrategyRecommend(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **string**| 交易对，例如 &#x60;BTC_USDT&#x60; | [optional] [default to undefined]
 **strategyType** | **StrategyType**| 推荐目标策略类型；&#x60;contract_martingale&#x60; 不允许 | [optional] [default to undefined]
 **direction** | **Direction**| 行情方向 | [optional] [default to undefined]
 **investAmount** | **string**| 投入金额，字符串透传 | [optional] [default to undefined]
 **scene** | **Scene**| 推荐场景；为空时 bot-service 可按实现逻辑自动推断 | [optional] [default to undefined]
 **refreshRecommendationId** | **string**| 推荐刷新上下文。&#x60;scene&#x3D;refresh&#x60; 时使用；当 &#x60;scene&#x60; 为空但该字段存在时，bot-service 也会自动判定为 &#x60;refresh&#x60;。 正式最小格式为 &#x60;strategy_type|market&#x60;；若直接透传上一条推荐的 &#x60;recommendation_id&#x60;，第三段 &#x60;backtest_id&#x60; 会被忽略。 | [optional] [default to undefined]
 **limit** | **number**| 返回数量；&#x60;scene&#x3D;filter&#x60; 时实际结果最多 10 条 | [optional] [default to undefined]
 **maxDrawdownLte** | **string**| 最大回撤上限 | [optional] [default to undefined]
 **backtestAprGte** | **string**| 回测年化下限 | [optional] [default to undefined]
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubDiscoverSuccessResponse; }> [AIHubDiscoverSuccessResponse](AIHubDiscoverSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## postAIHubSpotGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubSpotGridCreate(spotGridCreateRequest, opts)

创建现货网格

根据传入参数创建现货网格策略。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubSpotGridCreate(spotGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotGridCreateRequest** | [**SpotGridCreateRequest**](SpotGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubMarginGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubMarginGridCreate(marginGridCreateRequest, opts)

创建杠杆网格

根据传入参数创建杠杆网格策略。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubMarginGridCreate(marginGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marginGridCreateRequest** | [**MarginGridCreateRequest**](MarginGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubInfiniteGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubInfiniteGridCreate(infiniteGridCreateRequest, opts)

创建无限网格

根据传入参数创建无限网格策略。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubInfiniteGridCreate(infiniteGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **infiniteGridCreateRequest** | [**InfiniteGridCreateRequest**](InfiniteGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubFuturesGridCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubFuturesGridCreate(futuresGridCreateRequest, opts)

创建合约网格

根据传入参数创建合约网格策略。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubFuturesGridCreate(futuresGridCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **futuresGridCreateRequest** | [**FuturesGridCreateRequest**](FuturesGridCreateRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubSpotMartingaleCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubSpotMartingaleCreate(spotMartingaleCreateRequest, opts)

创建现货马丁

根据传入参数创建现货马丁策略。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubSpotMartingaleCreate(spotMartingaleCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotMartingaleCreateRequest** | [**SpotMartingaleCreateRequest**](SpotMartingaleCreateRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postAIHubContractMartingaleCreate

> Promise<{ response: http.IncomingMessage; body: AIHubCreateSuccessResponse; }> postAIHubContractMartingaleCreate(contractMartingaleCreateRequest, opts)

创建合约马丁

根据传入参数创建合约马丁策略。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubContractMartingaleCreate(contractMartingaleCreateRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractMartingaleCreateRequest** | [**ContractMartingaleCreateRequest**](ContractMartingaleCreateRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubCreateSuccessResponse; }> [AIHubCreateSuccessResponse](AIHubCreateSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getAIHubPortfolioRunning

> Promise<{ response: http.IncomingMessage; body: AIHubPortfolioRunningSuccessResponse; }> getAIHubPortfolioRunning(opts)

查询运行中策略列表

查询当前用户运行中的 AIHub 策略列表，支持按策略类型、交易对和分页条件过滤。

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
  'strategyType': "strategyType_example", // 'spot_grid' | 'margin_grid' | 'infinite_grid' | 'futures_grid' | 'spot_martingale' | 'contract_martingale' | 按策略类型过滤
  'market': "market_example", // string | 按交易对过滤
  'page': 1, // number | 页码，默认 1
  'pageSize': 20, // number | 分页大小，默认 20，最大 50
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.getAIHubPortfolioRunning(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategyType** | **StrategyType**| 按策略类型过滤 | [optional] [default to undefined]
 **market** | **string**| 按交易对过滤 | [optional] [default to undefined]
 **page** | **number**| 页码，默认 1 | [optional] [default to 1]
 **pageSize** | **number**| 分页大小，默认 20，最大 50 | [optional] [default to 20]
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubPortfolioRunningSuccessResponse; }> [AIHubPortfolioRunningSuccessResponse](AIHubPortfolioRunningSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAIHubPortfolioDetail

> Promise<{ response: http.IncomingMessage; body: AIHubPortfolioDetailSuccessResponse; }> getAIHubPortfolioDetail(strategyId, strategyType, opts)

查询单策略详情

请求中必须同时传 &#x60;strategy_id&#x60; 与 &#x60;strategy_type&#x60;，其中 &#x60;strategy_type&#x60; 用于按策略类型分发到底层详情实现。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.BotApi(client);
const strategyId = "strategyId_example"; // string | 策略 ID
const strategyType = "strategyType_example"; // 'spot_grid' | 'margin_grid' | 'infinite_grid' | 'futures_grid' | 'spot_martingale' | 'contract_martingale' | 策略类型；用于底层详情分发
const opts = {
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.getAIHubPortfolioDetail(strategyId, strategyType, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategyId** | **string**| 策略 ID | [default to undefined]
 **strategyType** | **StrategyType**| 策略类型；用于底层详情分发 | [default to undefined]
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubPortfolioDetailSuccessResponse; }> [AIHubPortfolioDetailSuccessResponse](AIHubPortfolioDetailSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## postAIHubPortfolioStop

> Promise<{ response: http.IncomingMessage; body: AIHubPortfolioStopSuccessResponse; }> postAIHubPortfolioStop(aIHubPortfolioStopRequest, opts)

终止单个运行中策略

单次请求只允许终止一个策略。 风险提示与二次确认由 OpenClaw 上层承担；本接口只负责执行 stop。

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
  'xGateServiceId': "xGateServiceId_example", // string | 调用来源标识；如有需要由 APIv4 注入
  'xGateAppLang': "xGateAppLang_example", // string | 语言上下文，例如 `zh-CN` / `en-US`
  'xRequestId': "xRequestId_example", // string | 请求链路 ID；调用方可透传
  'xTraceId': "xTraceId_example" // string | trace header；可由 APIv4 统一生成
};
api.postAIHubPortfolioStop(aIHubPortfolioStopRequest, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aIHubPortfolioStopRequest** | [**AIHubPortfolioStopRequest**](AIHubPortfolioStopRequest.md)|  | 
 **xGateServiceId** | **string**| 调用来源标识；如有需要由 APIv4 注入 | [optional] [default to undefined]
 **xGateAppLang** | **string**| 语言上下文，例如 &#x60;zh-CN&#x60; / &#x60;en-US&#x60; | [optional] [default to undefined]
 **xRequestId** | **string**| 请求链路 ID；调用方可透传 | [optional] [default to undefined]
 **xTraceId** | **string**| trace header；可由 APIv4 统一生成 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AIHubPortfolioStopSuccessResponse; }> [AIHubPortfolioStopSuccessResponse](AIHubPortfolioStopSuccessResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
