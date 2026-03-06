# P2pApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**p2pMerchantAccountGetUserInfo**](P2pApi.md#p2pMerchantAccountGetUserInfo) | **POST** /p2p/merchant/account/get_user_info | Get account information
[**p2pMerchantAccountGetCounterpartyUserInfo**](P2pApi.md#p2pMerchantAccountGetCounterpartyUserInfo) | **POST** /p2p/merchant/account/get_counterparty_user_info | Get counterparty information
[**p2pMerchantAccountGetMyselfPayment**](P2pApi.md#p2pMerchantAccountGetMyselfPayment) | **POST** /p2p/merchant/account/get_myself_payment | Get payment method list
[**p2pMerchantTransactionGetPendingTransactionList**](P2pApi.md#p2pMerchantTransactionGetPendingTransactionList) | **POST** /p2p/merchant/transaction/get_pending_transaction_list | Get pending orders
[**p2pMerchantTransactionGetCompletedTransactionList**](P2pApi.md#p2pMerchantTransactionGetCompletedTransactionList) | **POST** /p2p/merchant/transaction/get_completed_transaction_list | Get all/historical orders
[**p2pMerchantTransactionGetTransactionDetails**](P2pApi.md#p2pMerchantTransactionGetTransactionDetails) | **POST** /p2p/merchant/transaction/get_transaction_details | Query order details
[**p2pMerchantTransactionConfirmPayment**](P2pApi.md#p2pMerchantTransactionConfirmPayment) | **POST** /p2p/merchant/transaction/confirm-payment | Confirm payment
[**p2pMerchantTransactionConfirmReceipt**](P2pApi.md#p2pMerchantTransactionConfirmReceipt) | **POST** /p2p/merchant/transaction/confirm-receipt | Confirm receipt
[**p2pMerchantTransactionCancel**](P2pApi.md#p2pMerchantTransactionCancel) | **POST** /p2p/merchant/transaction/cancel | Cancel order
[**p2pMerchantBooksPlaceBizPushOrder**](P2pApi.md#p2pMerchantBooksPlaceBizPushOrder) | **POST** /p2p/merchant/books/place_biz_push_order | Publish ad order
[**p2pMerchantBooksAdsUpdateStatus**](P2pApi.md#p2pMerchantBooksAdsUpdateStatus) | **POST** /p2p/merchant/books/ads_update_status | Update ad status
[**p2pMerchantBooksAdsDetail**](P2pApi.md#p2pMerchantBooksAdsDetail) | **POST** /p2p/merchant/books/ads_detail | Query ad details
[**p2pMerchantBooksMyAdsList**](P2pApi.md#p2pMerchantBooksMyAdsList) | **POST** /p2p/merchant/books/my_ads_list | Get my ad list
[**p2pMerchantBooksAdsList**](P2pApi.md#p2pMerchantBooksAdsList) | **POST** /p2p/merchant/books/ads_list | Get Advertisement List
[**p2pMerchantChatGetChatsList**](P2pApi.md#p2pMerchantChatGetChatsList) | **POST** /p2p/merchant/chat/get_chats_list | Get chat history
[**p2pMerchantChatSendChatMessage**](P2pApi.md#p2pMerchantChatSendChatMessage) | **POST** /p2p/merchant/chat/send_chat_message | Send text message
[**p2pMerchantChatUploadChatFile**](P2pApi.md#p2pMerchantChatUploadChatFile) | **POST** /p2p/merchant/chat/upload_chat_file | Upload chat file


## p2pMerchantAccountGetUserInfo

> Promise<{ response: http.IncomingMessage; body: InlineResponse20014; }> p2pMerchantAccountGetUserInfo()

Get account information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
api.p2pMerchantAccountGetUserInfo()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20014; }> [InlineResponse20014](InlineResponse20014.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## p2pMerchantAccountGetCounterpartyUserInfo

> Promise<{ response: http.IncomingMessage; body: InlineResponse20015; }> p2pMerchantAccountGetCounterpartyUserInfo(getCounterpartyUserInfoRequest)

Get counterparty information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const getCounterpartyUserInfoRequest = new GetCounterpartyUserInfoRequest(); // GetCounterpartyUserInfoRequest | 
api.p2pMerchantAccountGetCounterpartyUserInfo(getCounterpartyUserInfoRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCounterpartyUserInfoRequest** | [**GetCounterpartyUserInfoRequest**](GetCounterpartyUserInfoRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20015; }> [InlineResponse20015](InlineResponse20015.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantAccountGetMyselfPayment

> Promise<{ response: http.IncomingMessage; body: InlineResponse20016; }> p2pMerchantAccountGetMyselfPayment(opts)

Get payment method list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const opts = {
  'getMyselfPaymentRequest': new GetMyselfPaymentRequest() // GetMyselfPaymentRequest | 
};
api.p2pMerchantAccountGetMyselfPayment(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMyselfPaymentRequest** | [**GetMyselfPaymentRequest**](GetMyselfPaymentRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20016; }> [InlineResponse20016](InlineResponse20016.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionGetPendingTransactionList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20017; }> p2pMerchantTransactionGetPendingTransactionList(getPendingTransactionListRequest)

Get pending orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const getPendingTransactionListRequest = new GetPendingTransactionListRequest(); // GetPendingTransactionListRequest | 
api.p2pMerchantTransactionGetPendingTransactionList(getPendingTransactionListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPendingTransactionListRequest** | [**GetPendingTransactionListRequest**](GetPendingTransactionListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20017; }> [InlineResponse20017](InlineResponse20017.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionGetCompletedTransactionList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20017; }> p2pMerchantTransactionGetCompletedTransactionList(getCompletedTransactionListRequest)

Get all/historical orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const getCompletedTransactionListRequest = new GetCompletedTransactionListRequest(); // GetCompletedTransactionListRequest | 
api.p2pMerchantTransactionGetCompletedTransactionList(getCompletedTransactionListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCompletedTransactionListRequest** | [**GetCompletedTransactionListRequest**](GetCompletedTransactionListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20017; }> [InlineResponse20017](InlineResponse20017.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionGetTransactionDetails

> Promise<{ response: http.IncomingMessage; body: InlineResponse20018; }> p2pMerchantTransactionGetTransactionDetails(getTransactionDetailsRequest)

Query order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const getTransactionDetailsRequest = new GetTransactionDetailsRequest(); // GetTransactionDetailsRequest | 
api.p2pMerchantTransactionGetTransactionDetails(getTransactionDetailsRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTransactionDetailsRequest** | [**GetTransactionDetailsRequest**](GetTransactionDetailsRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20018; }> [InlineResponse20018](InlineResponse20018.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionConfirmPayment

> Promise<{ response: http.IncomingMessage; body: InlineResponse20019; }> p2pMerchantTransactionConfirmPayment(confirmPayment)

Confirm payment

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const confirmPayment = new ConfirmPayment(); // ConfirmPayment | 
api.p2pMerchantTransactionConfirmPayment(confirmPayment)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmPayment** | [**ConfirmPayment**](ConfirmPayment.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20019; }> [InlineResponse20019](InlineResponse20019.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionConfirmReceipt

> Promise<{ response: http.IncomingMessage; body: InlineResponse20019; }> p2pMerchantTransactionConfirmReceipt(confirmReceipt)

Confirm receipt

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const confirmReceipt = new ConfirmReceipt(); // ConfirmReceipt | 
api.p2pMerchantTransactionConfirmReceipt(confirmReceipt)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmReceipt** | [**ConfirmReceipt**](ConfirmReceipt.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20019; }> [InlineResponse20019](InlineResponse20019.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionCancel

> Promise<{ response: http.IncomingMessage; body: InlineResponse20019; }> p2pMerchantTransactionCancel(cancelOrder)

Cancel order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const cancelOrder = new CancelOrder(); // CancelOrder | 
api.p2pMerchantTransactionCancel(cancelOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelOrder** | [**CancelOrder**](CancelOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20019; }> [InlineResponse20019](InlineResponse20019.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantBooksPlaceBizPushOrder

> Promise<{ response: http.IncomingMessage; body: object; }> p2pMerchantBooksPlaceBizPushOrder(placeBizPushOrder)

Publish ad order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const placeBizPushOrder = new PlaceBizPushOrder(); // PlaceBizPushOrder | 
api.p2pMerchantBooksPlaceBizPushOrder(placeBizPushOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeBizPushOrder** | [**PlaceBizPushOrder**](PlaceBizPushOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: object; }> [object](object.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantBooksAdsUpdateStatus

> Promise<{ response: http.IncomingMessage; body: InlineResponse20020; }> p2pMerchantBooksAdsUpdateStatus(adsUpdateStatus, opts)

Update ad status

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const adsUpdateStatus = new AdsUpdateStatus(); // AdsUpdateStatus | 
const opts = {
  'tradeType': "sell" // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
};
api.p2pMerchantBooksAdsUpdateStatus(adsUpdateStatus, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adsUpdateStatus** | [**AdsUpdateStatus**](AdsUpdateStatus.md)|  | 
 **tradeType** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20020; }> [InlineResponse20020](InlineResponse20020.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantBooksAdsDetail

> Promise<{ response: http.IncomingMessage; body: InlineResponse20021; }> p2pMerchantBooksAdsDetail(adsDetailRequest)

Query ad details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const adsDetailRequest = new AdsDetailRequest(); // AdsDetailRequest | 
api.p2pMerchantBooksAdsDetail(adsDetailRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adsDetailRequest** | [**AdsDetailRequest**](AdsDetailRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20021; }> [InlineResponse20021](InlineResponse20021.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantBooksMyAdsList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20022; }> p2pMerchantBooksMyAdsList(opts)

Get my ad list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const opts = {
  'myAdsListRequest': new MyAdsListRequest() // MyAdsListRequest | 
};
api.p2pMerchantBooksMyAdsList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **myAdsListRequest** | [**MyAdsListRequest**](MyAdsListRequest.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20022; }> [InlineResponse20022](InlineResponse20022.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantBooksAdsList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20023; }> p2pMerchantBooksAdsList(adsListRequest)

Get Advertisement List

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const adsListRequest = new AdsListRequest(); // AdsListRequest | 
api.p2pMerchantBooksAdsList(adsListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adsListRequest** | [**AdsListRequest**](AdsListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20023; }> [InlineResponse20023](InlineResponse20023.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantChatGetChatsList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20024; }> p2pMerchantChatGetChatsList(getChatsListRequest)

Get chat history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const getChatsListRequest = new GetChatsListRequest(); // GetChatsListRequest | 
api.p2pMerchantChatGetChatsList(getChatsListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getChatsListRequest** | [**GetChatsListRequest**](GetChatsListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20024; }> [InlineResponse20024](InlineResponse20024.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantChatSendChatMessage

> Promise<{ response: http.IncomingMessage; body: InlineResponse20025; }> p2pMerchantChatSendChatMessage(sendChatMessageRequest)

Send text message

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const sendChatMessageRequest = new SendChatMessageRequest(); // SendChatMessageRequest | 
api.p2pMerchantChatSendChatMessage(sendChatMessageRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendChatMessageRequest** | [**SendChatMessageRequest**](SendChatMessageRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20025; }> [InlineResponse20025](InlineResponse20025.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantChatUploadChatFile

> Promise<{ response: http.IncomingMessage; body: InlineResponse20026; }> p2pMerchantChatUploadChatFile(uploadChatFile)

Upload chat file

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.P2pApi(client);
const uploadChatFile = new UploadChatFile(); // UploadChatFile | 
api.p2pMerchantChatUploadChatFile(uploadChatFile)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadChatFile** | [**UploadChatFile**](UploadChatFile.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20026; }> [InlineResponse20026](InlineResponse20026.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
