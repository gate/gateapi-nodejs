# P2PApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**p2pMerchantAccountGetUserInfo**](P2PApi.md#p2pMerchantAccountGetUserInfo) | **POST** /p2p/merchant/account/get_user_info | Get account information
[**p2pMerchantAccountGetCounterpartyUserInfo**](P2PApi.md#p2pMerchantAccountGetCounterpartyUserInfo) | **POST** /p2p/merchant/account/get_counterparty_user_info | Get counterparty information
[**p2pMerchantAccountGetMyselfPayment**](P2PApi.md#p2pMerchantAccountGetMyselfPayment) | **POST** /p2p/merchant/account/get_myself_payment | Get payment method list
[**p2pMerchantTransactionGetPendingTransactionList**](P2PApi.md#p2pMerchantTransactionGetPendingTransactionList) | **POST** /p2p/merchant/transaction/get_pending_transaction_list | Get pending orders
[**p2pMerchantTransactionGetCompletedTransactionList**](P2PApi.md#p2pMerchantTransactionGetCompletedTransactionList) | **POST** /p2p/merchant/transaction/get_completed_transaction_list | Get all/historical orders
[**p2pMerchantTransactionGetTransactionDetails**](P2PApi.md#p2pMerchantTransactionGetTransactionDetails) | **POST** /p2p/merchant/transaction/get_transaction_details | Query order details
[**p2pMerchantTransactionConfirmPayment**](P2PApi.md#p2pMerchantTransactionConfirmPayment) | **POST** /p2p/merchant/transaction/confirm-payment | Confirm payment
[**p2pMerchantTransactionConfirmReceipt**](P2PApi.md#p2pMerchantTransactionConfirmReceipt) | **POST** /p2p/merchant/transaction/confirm-receipt | Confirm receipt
[**p2pMerchantTransactionCancel**](P2PApi.md#p2pMerchantTransactionCancel) | **POST** /p2p/merchant/transaction/cancel | Cancel order
[**p2pMerchantBooksPlaceBizPushOrder**](P2PApi.md#p2pMerchantBooksPlaceBizPushOrder) | **POST** /p2p/merchant/books/place_biz_push_order | Publish ad order
[**p2pMerchantBooksAdsUpdateStatus**](P2PApi.md#p2pMerchantBooksAdsUpdateStatus) | **POST** /p2p/merchant/books/ads_update_status | Update ad status
[**p2pMerchantBooksAdsDetail**](P2PApi.md#p2pMerchantBooksAdsDetail) | **POST** /p2p/merchant/books/ads_detail | Query ad details
[**p2pMerchantBooksMyAdsList**](P2PApi.md#p2pMerchantBooksMyAdsList) | **POST** /p2p/merchant/books/my_ads_list | Get my ad list
[**p2pMerchantChatGetChatsList**](P2PApi.md#p2pMerchantChatGetChatsList) | **POST** /p2p/merchant/chat/get_chats_list | Get chat history
[**p2pMerchantChatSendChatMessage**](P2PApi.md#p2pMerchantChatSendChatMessage) | **POST** /p2p/merchant/chat/send_chat_message | Send text message
[**p2pMerchantChatUploadChatFile**](P2PApi.md#p2pMerchantChatUploadChatFile) | **POST** /p2p/merchant/chat/upload_chat_file | Upload chat file


## p2pMerchantAccountGetUserInfo

> Promise<{ response: http.IncomingMessage; body: InlineResponse2009; }> p2pMerchantAccountGetUserInfo()

Get account information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
api.p2pMerchantAccountGetUserInfo()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2009; }> [InlineResponse2009](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## p2pMerchantAccountGetCounterpartyUserInfo

> Promise<{ response: http.IncomingMessage; body: InlineResponse20010; }> p2pMerchantAccountGetCounterpartyUserInfo(bizUid)

Get counterparty information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const bizUid = "bizUid_example"; // string | Counterparty UID (encrypted)
api.p2pMerchantAccountGetCounterpartyUserInfo(bizUid)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bizUid** | **string**| Counterparty UID (encrypted) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20010; }> [InlineResponse20010](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantAccountGetMyselfPayment

> Promise<{ response: http.IncomingMessage; body: InlineResponse20011; }> p2pMerchantAccountGetMyselfPayment(opts)

Get payment method list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const opts = {
  'fiat': "fiat_example" // string | Fiat currency
};
api.p2pMerchantAccountGetMyselfPayment(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fiat** | **string**| Fiat currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20011; }> [InlineResponse20011](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantTransactionGetPendingTransactionList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20012; }> p2pMerchantTransactionGetPendingTransactionList(cryptoCurrency, fiatCurrency, opts)

Get pending orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const cryptoCurrency = "cryptoCurrency_example"; // string | Cryptocurrency
const fiatCurrency = "fiatCurrency_example"; // string | Fiat currency
const opts = {
  'orderTab': "orderTab_example", // string | Order tab, default is pending (pending: Processing (pending: AND status in (\\\'OPEN\\\',  \\\'PAID\\\', \\\'LOCKED\\\', \\\'TEMP\\\')); dispute: In dispute (status in (\\\'ACCEPT\\\',  \\\'BCLOSED\\\', \\\'CANCEL\\\', \\\'BECANCEL\\\', \\\'SCLOSED\\\', \\\'SCANCEL\\\')))
  'selectType': "selectType_example", // string | Buy/Sell (sell=Sell, buy=Buy, others=All)
  'status': "status_example", // string | 订单状态（dispute: 申诉订单； closed: ACCEPT、BCLOSED； cancel： CANCEL、BECANCEL、SCLOSED、SCANCEL； locked: LOCKED； open: OPEN； paid： PAID； completed： CANCEL、BECANCEL、SCLOSED、SCANCEL、ACCEPT、BCLOSED）
  'txid': 56, // number | Order ID
  'startTime': 56, // number | Start timestamp, default is 00:00 89 days ago
  'endTime': 56 // number | End timestamp, default is 23:59:59 today
};
api.p2pMerchantTransactionGetPendingTransactionList(cryptoCurrency, fiatCurrency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cryptoCurrency** | **string**| Cryptocurrency | [default to undefined]
 **fiatCurrency** | **string**| Fiat currency | [default to undefined]
 **orderTab** | **string**| Order tab, default is pending (pending: Processing (pending: AND status in (\\\&#39;OPEN\\\&#39;,  \\\&#39;PAID\\\&#39;, \\\&#39;LOCKED\\\&#39;, \\\&#39;TEMP\\\&#39;)); dispute: In dispute (status in (\\\&#39;ACCEPT\\\&#39;,  \\\&#39;BCLOSED\\\&#39;, \\\&#39;CANCEL\\\&#39;, \\\&#39;BECANCEL\\\&#39;, \\\&#39;SCLOSED\\\&#39;, \\\&#39;SCANCEL\\\&#39;))) | [optional] [default to undefined]
 **selectType** | **string**| Buy/Sell (sell&#x3D;Sell, buy&#x3D;Buy, others&#x3D;All) | [optional] [default to undefined]
 **status** | **string**| 订单状态（dispute: 申诉订单； closed: ACCEPT、BCLOSED； cancel： CANCEL、BECANCEL、SCLOSED、SCANCEL； locked: LOCKED； open: OPEN； paid： PAID； completed： CANCEL、BECANCEL、SCLOSED、SCANCEL、ACCEPT、BCLOSED） | [optional] [default to undefined]
 **txid** | **number**| Order ID | [optional] [default to undefined]
 **startTime** | **number**| Start timestamp, default is 00:00 89 days ago | [optional] [default to undefined]
 **endTime** | **number**| End timestamp, default is 23:59:59 today | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20012; }> [InlineResponse20012](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantTransactionGetCompletedTransactionList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20012; }> p2pMerchantTransactionGetCompletedTransactionList(cryptoCurrency, fiatCurrency, opts)

Get all/historical orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const cryptoCurrency = "cryptoCurrency_example"; // string | Cryptocurrency
const fiatCurrency = "fiatCurrency_example"; // string | Fiat currency
const opts = {
  'selectType': "selectType_example", // string | Buy/Sell (sell=Sell, buy=Buy, others=All)
  'status': "status_example", // string | 订单状态（dispute: 申诉订单； closed: ACCEPT、BCLOSED； cancel： CANCEL、BECANCEL、SCLOSED、SCANCEL； locked: LOCKED； open: OPEN； paid： PAID； completed： CANCEL、BECANCEL、SCLOSED、SCANCEL、ACCEPT、BCLOSED）
  'txid': 56, // number | Order ID
  'startTime': 56, // number | Start timestamp, default is 00:00 89 days ago
  'endTime': 56, // number | End timestamp, default is 23:59:59 today
  'queryDispute': 56, // number | 1: Include appeal status, 0: None
  'page': 56, // number | page number
  'perPage': 56 // number | Number of orders per page
};
api.p2pMerchantTransactionGetCompletedTransactionList(cryptoCurrency, fiatCurrency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cryptoCurrency** | **string**| Cryptocurrency | [default to undefined]
 **fiatCurrency** | **string**| Fiat currency | [default to undefined]
 **selectType** | **string**| Buy/Sell (sell&#x3D;Sell, buy&#x3D;Buy, others&#x3D;All) | [optional] [default to undefined]
 **status** | **string**| 订单状态（dispute: 申诉订单； closed: ACCEPT、BCLOSED； cancel： CANCEL、BECANCEL、SCLOSED、SCANCEL； locked: LOCKED； open: OPEN； paid： PAID； completed： CANCEL、BECANCEL、SCLOSED、SCANCEL、ACCEPT、BCLOSED） | [optional] [default to undefined]
 **txid** | **number**| Order ID | [optional] [default to undefined]
 **startTime** | **number**| Start timestamp, default is 00:00 89 days ago | [optional] [default to undefined]
 **endTime** | **number**| End timestamp, default is 23:59:59 today | [optional] [default to undefined]
 **queryDispute** | **number**| 1: Include appeal status, 0: None | [optional] [default to undefined]
 **page** | **number**| page number | [optional] [default to undefined]
 **perPage** | **number**| Number of orders per page | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20012; }> [InlineResponse20012](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantTransactionGetTransactionDetails

> Promise<{ response: http.IncomingMessage; body: InlineResponse20013; }> p2pMerchantTransactionGetTransactionDetails(txid, opts)

Query order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const txid = 56; // number | Order ID
const opts = {
  'channel': "channel_example" // string | Empty or web3
};
api.p2pMerchantTransactionGetTransactionDetails(txid, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **number**| Order ID | [default to undefined]
 **channel** | **string**| Empty or web3 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20013; }> [InlineResponse20013](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantTransactionConfirmPayment

> Promise<{ response: http.IncomingMessage; body: InlineResponse2003; }> p2pMerchantTransactionConfirmPayment(opts)

Confirm payment

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const opts = {
  'inlineObject10': new InlineObject10() // InlineObject10 | 
};
api.p2pMerchantTransactionConfirmPayment(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject10** | [**InlineObject10**](InlineObject10.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2003; }> [InlineResponse2003](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionConfirmReceipt

> Promise<{ response: http.IncomingMessage; body: InlineResponse2003; }> p2pMerchantTransactionConfirmReceipt(opts)

Confirm receipt

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const opts = {
  'inlineObject11': new InlineObject11() // InlineObject11 | 
};
api.p2pMerchantTransactionConfirmReceipt(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2003; }> [InlineResponse2003](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantTransactionCancel

> Promise<{ response: http.IncomingMessage; body: InlineResponse2003; }> p2pMerchantTransactionCancel(opts)

Cancel order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const opts = {
  'inlineObject12': new InlineObject12() // InlineObject12 | 
};
api.p2pMerchantTransactionCancel(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | [optional] 

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse2003; }> [InlineResponse2003](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## p2pMerchantBooksPlaceBizPushOrder

> Promise<{ response: http.IncomingMessage; body: object; }> p2pMerchantBooksPlaceBizPushOrder(currencyType, exchangeType, type, unitPrice, number, minAmount, maxAmount, opts)

Publish ad order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const currencyType = "currencyType_example"; // string | Cryptocurrency
const exchangeType = "exchangeType_example"; // string | Fiat currency
const type = "type_example"; // string | Ad type: 0=Sell, 1=Buy, 2=Edit sell, 3=Edit buy
const unitPrice = "unitPrice_example"; // string | Unit price
const number = "number_example"; // string | Size
const minAmount = "minAmount_example"; // string | Minimum transaction amount per order
const maxAmount = "maxAmount_example"; // string | Maximum transaction amount per order
const opts = {
  'payType': "payType_example", // string | Payment method
  'payTypeJson': "payTypeJson_example", // string | Payment method JSON string
  'rateFixed': "rateFixed_example", // string | Price type: 0-Floating price, 1-Fixed price
  'oid': "oid_example", // string | Ad ID when editing
  'tierLimit': "tierLimit_example", // string | Order tier limit
  'verifiedLimit': "verifiedLimit_example", // string | Verification level limit
  'regTimeLimit': "regTimeLimit_example", // string | Registration time limit
  'advertisersLimit': "advertisersLimit_example", // string | Advertiser restriction
  'hidePayment': "hidePayment_example", // string | Whether to hide payment method: 1=Yes, 0=No
  'expireMin': "expireMin_example", // string | Ad expiration time (minutes)
  'tradeTips': "tradeTips_example", // string | Trading terms
  'autoReply': "autoReply_example", // string | Auto reply
  'minCompletedLimit': "minCompletedLimit_example", // string | Minimum limit of completed orders
  'maxCompletedLimit': "maxCompletedLimit_example", // string | Maximum limit of completed orders
  'completedRateLimit': "completedRateLimit_example", // string | 30-day completion rate limit
  'userCountryLimit': "userCountryLimit_example", // string | KYC nationality restriction
  'userOrderLimit': "userOrderLimit_example", // string | Order count limit
  'rateReferenceId': "rateReferenceId_example", // string | Reference exchange rate ID
  'rateOffset': "rateOffset_example", // string | Reference exchange rate offset
  'floatTrend': "floatTrend_example" // string | 444
};
api.p2pMerchantBooksPlaceBizPushOrder(currencyType, exchangeType, type, unitPrice, number, minAmount, maxAmount, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyType** | **string**| Cryptocurrency | [default to undefined]
 **exchangeType** | **string**| Fiat currency | [default to undefined]
 **type** | **string**| Ad type: 0&#x3D;Sell, 1&#x3D;Buy, 2&#x3D;Edit sell, 3&#x3D;Edit buy | [default to undefined]
 **unitPrice** | **string**| Unit price | [default to undefined]
 **number** | **string**| Size | [default to undefined]
 **minAmount** | **string**| Minimum transaction amount per order | [default to undefined]
 **maxAmount** | **string**| Maximum transaction amount per order | [default to undefined]
 **payType** | **string**| Payment method | [optional] [default to undefined]
 **payTypeJson** | **string**| Payment method JSON string | [optional] [default to undefined]
 **rateFixed** | **string**| Price type: 0-Floating price, 1-Fixed price | [optional] [default to undefined]
 **oid** | **string**| Ad ID when editing | [optional] [default to undefined]
 **tierLimit** | **string**| Order tier limit | [optional] [default to undefined]
 **verifiedLimit** | **string**| Verification level limit | [optional] [default to undefined]
 **regTimeLimit** | **string**| Registration time limit | [optional] [default to undefined]
 **advertisersLimit** | **string**| Advertiser restriction | [optional] [default to undefined]
 **hidePayment** | **string**| Whether to hide payment method: 1&#x3D;Yes, 0&#x3D;No | [optional] [default to undefined]
 **expireMin** | **string**| Ad expiration time (minutes) | [optional] [default to undefined]
 **tradeTips** | **string**| Trading terms | [optional] [default to undefined]
 **autoReply** | **string**| Auto reply | [optional] [default to undefined]
 **minCompletedLimit** | **string**| Minimum limit of completed orders | [optional] [default to undefined]
 **maxCompletedLimit** | **string**| Maximum limit of completed orders | [optional] [default to undefined]
 **completedRateLimit** | **string**| 30-day completion rate limit | [optional] [default to undefined]
 **userCountryLimit** | **string**| KYC nationality restriction | [optional] [default to undefined]
 **userOrderLimit** | **string**| Order count limit | [optional] [default to undefined]
 **rateReferenceId** | **string**| Reference exchange rate ID | [optional] [default to undefined]
 **rateOffset** | **string**| Reference exchange rate offset | [optional] [default to undefined]
 **floatTrend** | **string**| 444 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: object; }> [object](object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantBooksAdsUpdateStatus

> Promise<{ response: http.IncomingMessage; body: InlineResponse20014; }> p2pMerchantBooksAdsUpdateStatus(advNo, advStatus, opts)

Update ad status

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const advNo = 56; // number | Ad ID
const advStatus = 56; // number | Ad status: 1=Active, 3=Inactive, 4=Closed
const opts = {
  'tradeType': "sell" // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
};
api.p2pMerchantBooksAdsUpdateStatus(advNo, advStatus, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advNo** | **number**| Ad ID | [default to undefined]
 **advStatus** | **number**| Ad status: 1&#x3D;Active, 3&#x3D;Inactive, 4&#x3D;Closed | [default to undefined]
 **tradeType** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20014; }> [InlineResponse20014](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantBooksAdsDetail

> Promise<{ response: http.IncomingMessage; body: InlineResponse20015; }> p2pMerchantBooksAdsDetail(advNo, opts)

Query ad details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const advNo = "advNo_example"; // string | 
const opts = {
  '': 56 // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
};
api.p2pMerchantBooksAdsDetail(advNo, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advNo** | **string**|  | [default to undefined]
 **** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20015; }> [InlineResponse20015](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantBooksMyAdsList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20016; }> p2pMerchantBooksMyAdsList(opts)

Get my ad list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const opts = {
  'asset': "asset_example", // string | Cryptocurrency
  'fiatUnit': "fiatUnit_example", // string | Fiat currency
  'tradeType': "tradeType_example" // string | Buy/Sell
};
api.p2pMerchantBooksMyAdsList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **string**| Cryptocurrency | [optional] [default to undefined]
 **fiatUnit** | **string**| Fiat currency | [optional] [default to undefined]
 **tradeType** | **string**| Buy/Sell | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20016; }> [InlineResponse20016](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantChatGetChatsList

> Promise<{ response: http.IncomingMessage; body: InlineResponse20017; }> p2pMerchantChatGetChatsList(txid, opts)

Get chat history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const txid = 56; // number | Order ID
const opts = {
  'lastreceived': 56, // number | Pagination timestamp (forward)
  'firstreceived': 56 // number | Pagination timestamp (backward)
};
api.p2pMerchantChatGetChatsList(txid, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **number**| Order ID | [default to undefined]
 **lastreceived** | **number**| Pagination timestamp (forward) | [optional] [default to undefined]
 **firstreceived** | **number**| Pagination timestamp (backward) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20017; }> [InlineResponse20017](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantChatSendChatMessage

> Promise<{ response: http.IncomingMessage; body: InlineResponse20018; }> p2pMerchantChatSendChatMessage(txid, message, opts)

Send text message

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const txid = 56; // number | Order ID
const message = "message_example"; // string | Message content
const opts = {
  'type': 56 // number | 0=Text, 1=File (video or image), default is 0 if not provided
};
api.p2pMerchantChatSendChatMessage(txid, message, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **number**| Order ID | [default to undefined]
 **message** | **string**| Message content | [default to undefined]
 **type** | **number**| 0&#x3D;Text, 1&#x3D;File (video or image), default is 0 if not provided | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20018; }> [InlineResponse20018](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## p2pMerchantChatUploadChatFile

> Promise<{ response: http.IncomingMessage; body: InlineResponse20019; }> p2pMerchantChatUploadChatFile(imageContentType, base64Img)

Upload chat file

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.P2PApi(client);
const imageContentType = "imageContentType_example"; // string | File type, currently only images and videos are supported
const base64Img = "base64Img_example"; // string | File content (base64 encoded)
api.p2pMerchantChatUploadChatFile(imageContentType, base64Img)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageContentType** | **string**| File type, currently only images and videos are supported | [default to undefined]
 **base64Img** | **string**| File content (base64 encoded) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: InlineResponse20019; }> [InlineResponse20019](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
