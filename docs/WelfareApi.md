# WelfareApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserIdentity**](WelfareApi.md#getUserIdentity) | **GET** /rewards/getUserIdentity | Get user identity
[**getBeginnerTaskList**](WelfareApi.md#getBeginnerTaskList) | **GET** /rewards/getBeginnerTaskList | Get beginner task list


## getUserIdentity

> Promise<{ response: http.IncomingMessage; body: ApiResponseExSkillGetUserIdentityResp; }> getUserIdentity()

Get user identity

Validate whether the user is eligible for new user rewards. Returns the corresponding error code on validation failure, data is an empty object on success.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WelfareApi(client);
api.getUserIdentity()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseExSkillGetUserIdentityResp; }> [ApiResponseExSkillGetUserIdentityResp](ApiResponseExSkillGetUserIdentityResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBeginnerTaskList

> Promise<{ response: http.IncomingMessage; body: ApiResponseExSkillGetBeginnerTaskListResp; }> getBeginnerTaskList()

Get beginner task list

Get the current user\&#39;s beginner task list, including registration tasks (type&#x3D;10) and onboarding tasks (type&#x3D;11). Registration tasks appear first, onboarding tasks after. Results are cached for 60 seconds. The task list is a fixed configuration with limited entries (typically no more than 10), no pagination needed.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WelfareApi(client);
api.getBeginnerTaskList()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseExSkillGetBeginnerTaskListResp; }> [ApiResponseExSkillGetBeginnerTaskListResp](ApiResponseExSkillGetBeginnerTaskListResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
