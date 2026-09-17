# AnnouncementApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAnnouncementArticles**](AnnouncementApi.md#listAnnouncementArticles) | **POST** /ann/list_article | List announcement articles


## listAnnouncementArticles

> Promise<{ response: http.IncomingMessage; body: AnnouncementArticleListResponse; }> listAnnouncementArticles(announcementArticleListRequest)

List announcement articles

Query announcement articles with pagination and filters for title, category, language, time, and other criteria. Send query parameters in the JSON request body. Both page and size are optional and must be strings when provided. No API key is required.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.AnnouncementApi(client);
const announcementArticleListRequest = new AnnouncementArticleListRequest(); // AnnouncementArticleListRequest | 
api.listAnnouncementArticles(announcementArticleListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **announcementArticleListRequest** | [**AnnouncementArticleListRequest**](AnnouncementArticleListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: AnnouncementArticleListResponse; }> [AnnouncementArticleListResponse](AnnouncementArticleListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
