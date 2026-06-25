# OTCApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOtcQuote**](OTCApi.md#createOtcQuote) | **POST** /otc/quote | Fiat and stablecoin quote
[**createOtcOrder**](OTCApi.md#createOtcOrder) | **POST** /otc/order/create | Create fiat order
[**createStableCoinOrder**](OTCApi.md#createStableCoinOrder) | **POST** /otc/stable_coin/order/create | Create stablecoin order
[**getBankListInnerPath**](OTCApi.md#getBankListInnerPath) | **GET** /otc/bank/list | Get user bank card list
[**createOtcBank**](OTCApi.md#createOtcBank) | **POST** /otc/bank/create | Create bank card
[**deleteOtcBank**](OTCApi.md#deleteOtcBank) | **POST** /otc/bank/delete | Delete bank card
[**setDefaultOtcBank**](OTCApi.md#setDefaultOtcBank) | **POST** /otc/bank/set_default | Set default bank card
[**getOtcBankSupplementChecklist**](OTCApi.md#getOtcBankSupplementChecklist) | **GET** /otc/bank/bank_supplement_checklist | Query the checklist of materials to supplement for a bank card
[**submitOtcBankPersonalSupplement**](OTCApi.md#submitOtcBankPersonalSupplement) | **POST** /otc/bank/personal/bank_supplement | Submit Bank Card Supplement Materials (Personal)
[**submitOtcBankEnterpriseSupplement**](OTCApi.md#submitOtcBankEnterpriseSupplement) | **POST** /otc/bank/enterprise/bank_supplement | Submit Bank Card Supplement Materials (Enterprise)
[**markOtcOrderPaid**](OTCApi.md#markOtcOrderPaid) | **POST** /otc/order/paid | Mark fiat order as paid (deposit confirmation)
[**cancelOtcOrder**](OTCApi.md#cancelOtcOrder) | **POST** /otc/order/cancel | Fiat order cancellation
[**listOtcOrders**](OTCApi.md#listOtcOrders) | **GET** /otc/order/list | Fiat order list
[**listStableCoinOrders**](OTCApi.md#listStableCoinOrders) | **GET** /otc/stable_coin/order/list | Stablecoin order list
[**getOtcOrderDetail**](OTCApi.md#getOtcOrderDetail) | **GET** /otc/order/detail | Fiat order details


## createOtcQuote

> Promise<{ response: http.IncomingMessage; body: OtcQuoteResponse; }> createOtcQuote(otcQuoteRequest)

Fiat and stablecoin quote

Create fiat and stablecoin quotes, supporting both PAY and GET directions

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcQuoteRequest = new OtcQuoteRequest(); // OtcQuoteRequest | 
api.createOtcQuote(otcQuoteRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcQuoteRequest** | [**OtcQuoteRequest**](OtcQuoteRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcQuoteResponse; }> [OtcQuoteResponse](OtcQuoteResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createOtcOrder

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> createOtcOrder(otcOrderRequest)

Create fiat order

Create a fiat order, supporting BUY for on-ramp and SELL for off-ramp

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcOrderRequest = new OtcOrderRequest(); // OtcOrderRequest | 
api.createOtcOrder(otcOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcOrderRequest** | [**OtcOrderRequest**](OtcOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createStableCoinOrder

> Promise<{ response: http.IncomingMessage; body: OtcStableCoinOrderCreateResponse; }> createStableCoinOrder(otcStableCoinOrderRequest)

Create stablecoin order

Create stablecoin order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcStableCoinOrderRequest = new OtcStableCoinOrderRequest(); // OtcStableCoinOrderRequest | 
api.createStableCoinOrder(otcStableCoinOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcStableCoinOrderRequest** | [**OtcStableCoinOrderRequest**](OtcStableCoinOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcStableCoinOrderCreateResponse; }> [OtcStableCoinOrderCreateResponse](OtcStableCoinOrderCreateResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getBankListInnerPath

> Promise<{ response: http.IncomingMessage; body: OtcBankListResponse; }> getBankListInnerPath()

Get user bank card list

Retrieve the user\&#39;s bank card list, used to select a bank card when placing an order. **Default card**: refer to the list item field &#x60;is_default&#x60; (1&#x3D;default); there is no need to call the deprecated standalone \&quot;default bank card\&quot; endpoint. Corresponding Inner: &#x60;GET /bank_list&#x60; or &#x60;GET /bank/list&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
api.getBankListInnerPath()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: OtcBankListResponse; }> [OtcBankListResponse](OtcBankListResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createOtcBank

> Promise<{ response: http.IncomingMessage; body: OtcBankCreateResponse; }> createOtcBank(bankAccountName, bankName, bankCountry, bankAddress, iban, swift, documentationFile, opts)

Create bank card

Bind a bank card. Under the Global entity, an account with a non-matching name may enter manual review (&#x60;status&#x60; pending) and require subsequent supplementary materials. Corresponding Inner: &#x60;POST /bank/create&#x60;. Fields and protocol are subject to the production form/gateway; in some environments &#x60;bank_account_name&#x60; is passed Base64-encoded, see the integration notes for details.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const bankAccountName = "bankAccountName_example"; // string | 
const bankName = "bankName_example"; // string | 
const bankCountry = "bankCountry_example"; // string | 
const bankAddress = "bankAddress_example"; // string | 
const iban = "iban_example"; // string | 
const swift = "swift_example"; // string | 
const documentationFile = "/path/to/file"; // RequestFile | Account-opening proof file (jpg/jpeg/png/pdf, etc.; single file ≤4MB — subject to production environment).
const opts = {
  'remittanceLineNumber': "remittanceLineNumber_example", // string | 
  'agentBankName': "agentBankName_example", // string | 
  'agentBankSwift': "agentBankSwift_example" // string | 
};
api.createOtcBank(bankAccountName, bankName, bankCountry, bankAddress, iban, swift, documentationFile, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountName** | **string**|  | [default to undefined]
 **bankName** | **string**|  | [default to undefined]
 **bankCountry** | **string**|  | [default to undefined]
 **bankAddress** | **string**|  | [default to undefined]
 **iban** | **string**|  | [default to undefined]
 **swift** | **string**|  | [default to undefined]
 **documentationFile** | **RequestFile**| Account-opening proof file (jpg/jpeg/png/pdf, etc.; single file ≤4MB — subject to production environment). | [default to undefined]
 **remittanceLineNumber** | **string**|  | [optional] [default to undefined]
 **agentBankName** | **string**|  | [optional] [default to undefined]
 **agentBankSwift** | **string**|  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcBankCreateResponse; }> [OtcBankCreateResponse](OtcBankCreateResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## deleteOtcBank

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> deleteOtcBank(otcBankIdRequest)

Delete bank card

Delete the specified bank card. Corresponds to Inner: &#x60;POST /bank/delete&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcBankIdRequest = new OtcBankIdRequest(); // OtcBankIdRequest | 
api.deleteOtcBank(otcBankIdRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcBankIdRequest** | [**OtcBankIdRequest**](OtcBankIdRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setDefaultOtcBank

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> setDefaultOtcBank(otcBankIdRequest)

Set default bank card

Set the specified bank card as default. Corresponds to Inner: &#x60;POST /bank/set_default&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcBankIdRequest = new OtcBankIdRequest(); // OtcBankIdRequest | 
api.setDefaultOtcBank(otcBankIdRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcBankIdRequest** | [**OtcBankIdRequest**](OtcBankIdRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getOtcBankSupplementChecklist

> Promise<{ response: http.IncomingMessage; body: OtcBankSupplementChecklistResponse; }> getOtcBankSupplementChecklist(bankId)

Query the checklist of materials to supplement for a bank card

**①** &#x60;bank_id&#x60; must be specified: after verifying that the card belongs to the current user and its status allows supplementation, returns the items to be supplemented and whether each sub-item is required, based on the user\&#39;s **passed professional verification type** (personal/enterprise). Corresponding Inner: &#x60;GET /bank/bank_supplement_checklist&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const bankId = "bankId_example"; // string | Bank card ID (otc_rds / the id returned by the list endpoint).
api.getOtcBankSupplementChecklist(bankId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankId** | **string**| Bank card ID (otc_rds / the id returned by the list endpoint). | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcBankSupplementChecklistResponse; }> [OtcBankSupplementChecklistResponse](OtcBankSupplementChecklistResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## submitOtcBankPersonalSupplement

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> submitOtcBankPersonalSupplement(bankId, idDocumentFront, idDocumentBack, addressProof)

Submit Bank Card Supplement Materials (Personal)

**Personal professional verification (type&#x3D;1)** users submit non-same-person/supplementary materials. Must match &#x60;user_type&#x3D;personal&#x60; returned by &#x60;GET /otc/bank/bank_supplement_checklist?bank_id&#x3D;&#x60;, otherwise the request is rejected. **multipart/form-data** is recommended: each material item is a separate file field, with field names matching the checklist &#x60;code&#x60; (&#x60;id_document_front&#x60;, &#x60;id_document_back&#x60;, &#x60;address_proof&#x60;).

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const bankId = "bankId_example"; // string | 
const idDocumentFront = "idDocumentFront_example"; // string | ID document front-side file content (multipart file field, binary/Base64)
const idDocumentBack = "idDocumentBack_example"; // string | ID document back-side file content (multipart file field, binary/Base64)
const addressProof = "addressProof_example"; // string | Proof-of-address file content (multipart file field, binary/Base64)
api.submitOtcBankPersonalSupplement(bankId, idDocumentFront, idDocumentBack, addressProof)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankId** | **string**|  | [default to undefined]
 **idDocumentFront** | **string**| ID document front-side file content (multipart file field, binary/Base64) | [default to undefined]
 **idDocumentBack** | **string**| ID document back-side file content (multipart file field, binary/Base64) | [default to undefined]
 **addressProof** | **string**| Proof-of-address file content (multipart file field, binary/Base64) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## submitOtcBankEnterpriseSupplement

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> submitOtcBankEnterpriseSupplement(bankId, certificate, shareHolders, passport, shareHoldingStructure, opts)

Submit Bank Card Supplement Materials (Enterprise)

**Enterprise professional verification (type&#x3D;2)** users submit supplementary materials. Must match &#x60;user_type&#x3D;enterprise&#x60; returned by the checklist. **multipart** file field names: &#x60;certificate&#x60;, &#x60;share_holders&#x60;, &#x60;passport&#x60;, &#x60;share_holding_structure&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const bankId = "bankId_example"; // string | 
const certificate = "certificate_example"; // string | Business license / registration certificate file content (multipart file field, binary/Base64)
const shareHolders = "shareHolders_example"; // string | Register of shareholders file content (multipart file field, binary/Base64)
const passport = "passport_example"; // string | Legal representative / shareholder passport file content (multipart file field, binary/Base64)
const shareHoldingStructure = "shareHoldingStructure_example"; // string | Ownership structure chart file content (multipart file field, binary/Base64)
const opts = {
  'uid': "uid_example", // string | 
  'fundsStatement': "fundsStatement_example", // string | Proof-of-funds file content (multipart file field, binary/Base64, optional)
  'additional': "additional_example" // string | Other supplementary material file content (multipart file field, binary/Base64, optional)
};
api.submitOtcBankEnterpriseSupplement(bankId, certificate, shareHolders, passport, shareHoldingStructure, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankId** | **string**|  | [default to undefined]
 **certificate** | **string**| Business license / registration certificate file content (multipart file field, binary/Base64) | [default to undefined]
 **shareHolders** | **string**| Register of shareholders file content (multipart file field, binary/Base64) | [default to undefined]
 **passport** | **string**| Legal representative / shareholder passport file content (multipart file field, binary/Base64) | [default to undefined]
 **shareHoldingStructure** | **string**| Ownership structure chart file content (multipart file field, binary/Base64) | [default to undefined]
 **uid** | **string**|  | [optional] [default to undefined]
 **fundsStatement** | **string**| Proof-of-funds file content (multipart file field, binary/Base64, optional) | [optional] [default to undefined]
 **additional** | **string**| Other supplementary material file content (multipart file field, binary/Base64, optional) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## markOtcOrderPaid

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> markOtcOrderPaid(otcMarkOrderPaidRequest)

Mark fiat order as paid (deposit confirmation)

Mark a fiat buy order as paid (deposit confirmation). **The user\&#39;s payment receipt must be uploaded**: &#x60;payment_receipt_file_key&#x60; is required; file format jpg / jpeg / png / pdf, single file no larger than 4MB (jointly validated by the server and gateway). The compatible field name &#x60;payment_receipt&#x60; is subject to the gateway/production environment. For the persisted field, see &#x60;otc_trade_record.payment_receipt_file_key&#x60;. The Pay Inner path is &#x60;POST .../pay/order_set_paid&#x60; (orders are usually associated via &#x60;client_order_id&#x60;); this OpenAPI path maps to Inner &#x60;POST /order/paid&#x60; and still uses &#x60;order_id&#x60; as the primary key—if the gateway unifies it to the merchant order number, the gateway documentation prevails.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcMarkOrderPaidRequest = new OtcMarkOrderPaidRequest(); // OtcMarkOrderPaidRequest | 
api.markOtcOrderPaid(otcMarkOrderPaidRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcMarkOrderPaidRequest** | [**OtcMarkOrderPaidRequest**](OtcMarkOrderPaidRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOtcOrder

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> cancelOtcOrder(orderId)

Fiat order cancellation

Cancel fiat order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const orderId = "orderId_example"; // string | Order ID
api.cancelOtcOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOtcOrders

> Promise<{ response: http.IncomingMessage; body: OtcOrderListResponse; }> listOtcOrders(opts)

Fiat order list

Query the fiat order list with filters such as type, currency, time range, and status

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const opts = {
  'type': "type_example", // string | BUY for on-ramp, SELL for off-ramp
  'fiatCurrency': "fiatCurrency_example", // string | Fiat currency
  'cryptoCurrency': "cryptoCurrency_example", // string | Digital currency
  'startTime': "startTime_example", // string | starttime   for example : 2025-09-09
  'endTime': "endTime_example", // string | endtime  for example :2025-09-09
  'status': "status_example", // string | DONE: Completed CANCEL: Canceled PROCESSING: In Progress
  'pn': "pn_example", // string | Page number
  'ps': "ps_example" // string | Number of items per page
};
api.listOtcOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| BUY for on-ramp, SELL for off-ramp | [optional] [default to undefined]
 **fiatCurrency** | **string**| Fiat currency | [optional] [default to undefined]
 **cryptoCurrency** | **string**| Digital currency | [optional] [default to undefined]
 **startTime** | **string**| starttime   for example : 2025-09-09 | [optional] [default to undefined]
 **endTime** | **string**| endtime  for example :2025-09-09 | [optional] [default to undefined]
 **status** | **string**| DONE: Completed CANCEL: Canceled PROCESSING: In Progress | [optional] [default to undefined]
 **pn** | **string**| Page number | [optional] [default to undefined]
 **ps** | **string**| Number of items per page | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcOrderListResponse; }> [OtcOrderListResponse](OtcOrderListResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listStableCoinOrders

> Promise<{ response: http.IncomingMessage; body: OtcStableCoinOrderListResponse; }> listStableCoinOrders(opts)

Stablecoin order list

Query stablecoin order list with filtering by currency, time range, status, etc.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const opts = {
  'pageSize': "10", // string | Number of records per page
  'pageNumber': "1", // string | Page number
  'coinName': "USDT", // string | ordercurrency
  'startTime': "startTime_example", // string | Start Time
  'endTime': "endTime_example", // string | End time
  'status': "status_example" // string | Status: PROCESSING: in progress / DONE：completed / FAILED: failed
};
api.listStableCoinOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **string**| Number of records per page | [optional] [default to undefined]
 **pageNumber** | **string**| Page number | [optional] [default to undefined]
 **coinName** | **string**| ordercurrency | [optional] [default to undefined]
 **startTime** | **string**| Start Time | [optional] [default to undefined]
 **endTime** | **string**| End time | [optional] [default to undefined]
 **status** | **string**| Status: PROCESSING: in progress / DONE：completed / FAILED: failed | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcStableCoinOrderListResponse; }> [OtcStableCoinOrderListResponse](OtcStableCoinOrderListResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOtcOrderDetail

> Promise<{ response: http.IncomingMessage; body: OtcOrderDetailResponse; }> getOtcOrderDetail(orderId)

Fiat order details

Query fiat order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const orderId = "orderId_example"; // string | Order ID
api.getOtcOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcOrderDetailResponse; }> [OtcOrderDetailResponse](OtcOrderDetailResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
