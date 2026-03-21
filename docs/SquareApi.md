# SquareApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSquareAiSearch**](SquareApi.md#listSquareAiSearch) | **GET** /social/message/search | AI MCP Dynamic Search
[**listLiveReplay**](SquareApi.md#listLiveReplay) | **GET** /social/live/tag_coin_live_replay | Gate AI Assistant live stream data retrieval


## listSquareAiSearch

> Promise<{ response: http.IncomingMessage; body: ListSquareAiSearchResponse; }> listSquareAiSearch(opts)

AI MCP Dynamic Search

Dynamic search endpoint for AI MCP platform. All parameters are passed via query string. Returns simplified fields. Designed for LLM function calling / MCP tool scenarios.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SquareApi(client);
const opts = {
  'keyword': "keyword_example", // string | Search keyword (currency name or content keyword, e.g., BTC, ETH)
  'currency': "currency_example", // string | Filter by currency (exact currency code, e.g., BTC, ETH, SOL)
  'timeRange': 0, // 0 | 1 | 2 | 3 | Time range: 0 = unlimited (default), 1 = last day, 2 = last week, 3 = last month
  'sort': 0, // 0 | 1 | Sort order: 0 = most popular (default), 1 = latest
  'limit': 10, // number | Return count, 1-50, default 10
  'page': 1 // number | Page number
};
api.listSquareAiSearch(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **string**| Search keyword (currency name or content keyword, e.g., BTC, ETH) | [optional] [default to undefined]
 **currency** | **string**| Filter by currency (exact currency code, e.g., BTC, ETH, SOL) | [optional] [default to undefined]
 **timeRange** | **TimeRange**| Time range: 0 &#x3D; unlimited (default), 1 &#x3D; last day, 2 &#x3D; last week, 3 &#x3D; last month | [optional] [default to 0]
 **sort** | **Sort**| Sort order: 0 &#x3D; most popular (default), 1 &#x3D; latest | [optional] [default to 0]
 **limit** | **number**| Return count, 1-50, default 10 | [optional] [default to 10]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: ListSquareAiSearchResponse; }> [ListSquareAiSearchResponse](ListSquareAiSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLiveReplay

> Promise<{ response: http.IncomingMessage; body: ListLiveReplayResponse; }> listLiveReplay(opts)

Gate AI Assistant live stream data retrieval

AI assistant live stream/replay search endpoint. Filters live rooms or replay videos by business tags and currency. Each record in the returned list is distinguished by content_type: streaming &#x3D; live broadcast (live field has value), video &#x3D; replay video (video field has value). The number of results is controlled by the limit parameter (max 10), no additional pagination needed.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SquareApi(client);
const opts = {
  'tag': "tag_example", // string | Business type filter. Available values: Market Analysis, Hot Topics, Blockchain, Others
  'coin': "coin_example", // string | Filter by currency name (e.g., BTC, ETH)
  'sort': 'hot', // 'hot' | 'new' | Sort order: hot = most popular (default), new = latest
  'limit': 3 // number | Return count, 1-10, default 3
};
api.listLiveReplay(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **string**| Business type filter. Available values: Market Analysis, Hot Topics, Blockchain, Others | [optional] [default to undefined]
 **coin** | **string**| Filter by currency name (e.g., BTC, ETH) | [optional] [default to undefined]
 **sort** | **Sort**| Sort order: hot &#x3D; most popular (default), new &#x3D; latest | [optional] [default to &#39;hot&#39;]
 **limit** | **number**| Return count, 1-10, default 3 | [optional] [default to 3]

### Return type

Promise<{ response: AxiosResponse; body: ListLiveReplayResponse; }> [ListLiveReplayResponse](ListLiveReplayResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
