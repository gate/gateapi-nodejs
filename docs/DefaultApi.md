# DefaultApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMyActivityEntry**](DefaultApi.md#getMyActivityEntry) | **GET** /rewards/activity/my-activity-entry | My activity entry
[**listActivities**](DefaultApi.md#listActivities) | **GET** /rewards/activity/activity-list | Recommended activity list
[**listActivityTypes**](DefaultApi.md#listActivityTypes) | **GET** /rewards/activity/activity-type | Activity type list


## getMyActivityEntry

> Promise<{ response: http.IncomingMessage; body: InlineResponse20012; }> getMyActivityEntry()

My activity entry

Query user\&#39;s Activity Center entry information, including activity icon and redirect link

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DefaultApi(client);
api.getMyActivityEntry()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20012; }> [InlineResponse20012](InlineResponse20012.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listActivities

> Promise<{ response: http.IncomingMessage; body: InlineResponse20013; }> listActivities(opts)

Recommended activity list

Query recommended activity list from Activity Center, supports pagination and sorting

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DefaultApi(client);
const opts = {
  'recommendType': "recommendType_example", // string | Recommendation type: hot for popular activities, type for filtering by activity type (type_ids), scenario for matching by activity name
  'typeIds': "typeIds_example", // string | Activity type ID, multiple IDs separated by commas (supports filtering by activity type through this field)
  'keywords': "keywords_example", // string | Activity name. When scenario type is used, keyword matching is applied
  'page': 1, // number | Page number, starting from 1
  'pageSize': 10, // number | Items per page
  'sortBy': "sortBy_example" // string | Sort order, e.g., hot for sorting by popularity
};
api.listActivities(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recommendType** | **string**| Recommendation type: hot for popular activities, type for filtering by activity type (type_ids), scenario for matching by activity name | [optional] [default to undefined]
 **typeIds** | **string**| Activity type ID, multiple IDs separated by commas (supports filtering by activity type through this field) | [optional] [default to undefined]
 **keywords** | **string**| Activity name. When scenario type is used, keyword matching is applied | [optional] [default to undefined]
 **page** | **number**| Page number, starting from 1 | [optional] [default to 1]
 **pageSize** | **number**| Items per page | [optional] [default to 10]
 **sortBy** | **string**| Sort order, e.g., hot for sorting by popularity | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20013; }> [InlineResponse20013](InlineResponse20013.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listActivityTypes

> Promise<{ response: http.IncomingMessage; body: InlineResponse20014; }> listActivityTypes()

Activity type list

Query all activity types supported by Activity Center

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DefaultApi(client);
api.listActivityTypes()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20014; }> [InlineResponse20014](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
