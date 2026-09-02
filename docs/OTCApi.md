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
[**createOtcUploadPreUpload**](OTCApi.md#createOtcUploadPreUpload) | **POST** /otc/upload/pre_upload | Pre-upload file (temporary bucket)
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

Create a stablecoin order. All request body fields except &#x60;promotion_code&#x60; are required.

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

List the user\&#39;s bank cards for selecting a card when placing an order. **Default card**: use the &#x60;is_default&#x60; field in each list item (&#x60;1&#x60; indicates the default). The deprecated standalone default-bank-card endpoint is no longer required.

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

> Promise<{ response: http.IncomingMessage; body: OtcBankCreateResponse; }> createOtcBank(bankAccountName, bankName, bankCountry, bankAddress, iban, swift, opts)

Create bank card

Bind a bank card. Under the Global entity, non-same-name accounts may enter manual review (&#x60;status&#x60; pending) and require supplementary materials later. Corresponds to Inner: &#x60;POST /bank/create&#x60;. Fields and protocol follow the live form/gateway; &#x60;bank_account_name&#x60; may be Base64-encoded in some environments—see integration notes.  Account-opening proof supports two methods (choose one):  1. **Pre-upload (recommended)**: call &#x60;POST /otc/upload/pre_upload&#x60; (&#x60;scene&#x3D;bank&#x60;) to obtain a temporary-bucket Policy and upload directly to S3, then pass &#x60;documentation_file_key&#x60; + &#x60;file_type&#x60; in this endpoint; 2. **Multipart direct upload**: pass the &#x60;documentation_file&#x60; file field; the server writes directly to the production bucket.  When using pre-upload, the server validates object existence and that the uid in the &#x60;file_key&#x60; path matches the caller; after validation, the object is moved to the production bucket and persisted. Cross-user references return &#x60;Invalid parameters file_key&#x60;; incomplete direct upload returns &#x60;Invalid parameters file not uploaded&#x60;.

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
const opts = {
  'remittanceLineNumber': "remittanceLineNumber_example", // string | 
  'agentBankName': "agentBankName_example", // string | 
  'agentBankSwift': "agentBankSwift_example", // string | 
  'documentationFile': "documentationFile_example", // string | Multipart direct upload; mutually exclusive with documentation_file_key
  'documentationFileKey': "documentationFileKey_example", // string | Pre-upload mode; file_key returned by pre_upload (plaintext or base64 accepted)
  'fileType': "fileType_example" // string | Required when using documentation_file_key; plaintext MIME or its base64
};
api.createOtcBank(bankAccountName, bankName, bankCountry, bankAddress, iban, swift, opts)
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
 **remittanceLineNumber** | **string**|  | [optional] [default to undefined]
 **agentBankName** | **string**|  | [optional] [default to undefined]
 **agentBankSwift** | **string**|  | [optional] [default to undefined]
 **documentationFile** | **string**| Multipart direct upload; mutually exclusive with documentation_file_key | [optional] [default to undefined]
 **documentationFileKey** | **string**| Pre-upload mode; file_key returned by pre_upload (plaintext or base64 accepted) | [optional] [default to undefined]
 **fileType** | **string**| Required when using documentation_file_key; plaintext MIME or its base64 | [optional] [default to undefined]

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

**①** &#x60;bank_id&#x60; must be specified. After verifying that the card belongs to the current user and its status allows supplementary documents, the endpoint returns the required items based on the user\&#39;s **approved advanced verification type** (personal/enterprise); each item\&#39;s &#x60;description&#x60; states the submission requirements. Corresponding Inner endpoint: &#x60;GET /bank/bank_supplement_checklist&#x60;.

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

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> submitOtcBankPersonalSupplement(bankId, opts)

Submit Bank Card Supplement Materials (Personal)

**Personal professional verification (type&#x3D;1)** users submit non-same-person/supplementary materials. Must match &#x60;user_type&#x3D;personal&#x60; from &#x60;GET /otc/bank/bank_supplement_checklist?bank_id&#x3D;&#x60;; otherwise rejected.  Two submission methods (can be mixed):  1. **Pre-upload (recommended)**: call &#x60;POST /otc/upload/pre_upload&#x60; (&#x60;scene&#x3D;bank&#x60;) to upload to the temporary bucket, then fill file items by category in the &#x60;relationship_proof&#x60; JSON; pass **&#x60;key&#x60; as plaintext** object path (&#x60;base64_decode(pre_upload.file_key)&#x60;, e.g. &#x60;otc_temp/{uid}/bank/xxx.png&#x60;), and &#x60;file_type&#x60; as plaintext MIME; the server base64-encodes before persistence—do not pass base64 &#x60;file_key&#x60; directly; 2. **Multipart direct upload**: one file field per material item; field names match checklist &#x60;code&#x60; (&#x60;id_document_front&#x60;, &#x60;id_document_back&#x60;, &#x60;address_proof&#x60;).

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
const opts = {
  'idDocumentFront': "idDocumentFront_example", // string | ID document front-side file content (multipart file field, binary/Base64)
  'idDocumentBack': "idDocumentBack_example", // string | ID document back-side file content (multipart file field, binary/Base64)
  'addressProof': "addressProof_example", // string | Proof-of-address file content (multipart file field, binary/Base64)
  'relationshipProof': "relationshipProof_example" // string | Optional. JSON string of relationship_proof.
};
api.submitOtcBankPersonalSupplement(bankId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankId** | **string**|  | [default to undefined]
 **idDocumentFront** | **string**| ID document front-side file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **idDocumentBack** | **string**| ID document back-side file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **addressProof** | **string**| Proof-of-address file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **relationshipProof** | **string**| Optional. JSON string of relationship_proof. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## submitOtcBankEnterpriseSupplement

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> submitOtcBankEnterpriseSupplement(bankId, opts)

Submit Bank Card Supplement Materials (Enterprise)

**Enterprise professional verification (type&#x3D;2)** users submit supplementary materials. Must match &#x60;user_type&#x3D;enterprise&#x60; from the checklist.  Two submission methods (can be mixed):  1. **Pre-upload (recommended)**: call &#x60;POST /otc/upload/pre_upload&#x60; (&#x60;scene&#x3D;bank&#x60;), fill file items by category in &#x60;relationship_proof&#x60;; pass **&#x60;key&#x60; as plaintext** object path (&#x60;base64_decode(pre_upload.file_key)&#x60;), and &#x60;file_type&#x60; as plaintext MIME; 2. **Multipart direct upload**: file field names &#x60;certificate&#x60;, &#x60;share_holders&#x60;, &#x60;passport&#x60;, &#x60;share_holding_structure&#x60;; optional &#x60;funds_statement&#x60;, &#x60;additional&#x60;.

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
const opts = {
  'uid': "uid_example", // string | 
  'certificate': "certificate_example", // string | Business license / registration certificate file content (multipart file field, binary/Base64)
  'shareHolders': "shareHolders_example", // string | Register of shareholders file content (multipart file field, binary/Base64)
  'passport': "passport_example", // string | Legal representative / shareholder passport file content (multipart file field, binary/Base64)
  'shareHoldingStructure': "shareHoldingStructure_example", // string | Ownership structure chart file content (multipart file field, binary/Base64)
  'fundsStatement': "fundsStatement_example", // string | Proof-of-funds file content (multipart file field, binary/Base64, optional)
  'additional': "additional_example", // string | Other supplementary material file content (multipart file field, binary/Base64, optional)
  'relationshipProof': "relationshipProof_example" // string | Optional. JSON string of relationship_proof.
};
api.submitOtcBankEnterpriseSupplement(bankId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankId** | **string**|  | [default to undefined]
 **uid** | **string**|  | [optional] [default to undefined]
 **certificate** | **string**| Business license / registration certificate file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **shareHolders** | **string**| Register of shareholders file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **passport** | **string**| Legal representative / shareholder passport file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **shareHoldingStructure** | **string**| Ownership structure chart file content (multipart file field, binary/Base64) | [optional] [default to undefined]
 **fundsStatement** | **string**| Proof-of-funds file content (multipart file field, binary/Base64, optional) | [optional] [default to undefined]
 **additional** | **string**| Other supplementary material file content (multipart file field, binary/Base64, optional) | [optional] [default to undefined]
 **relationshipProof** | **string**| Optional. JSON string of relationship_proof. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OtcActionResponse; }> [OtcActionResponse](OtcActionResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## createOtcUploadPreUpload

> Promise<{ response: http.IncomingMessage; body: OtcUploadPreUploadResponse; }> createOtcUploadPreUpload(otcUploadPreUploadRequest)

Pre-upload file (temporary bucket)

After selecting a file, the client calls this endpoint first to obtain a temporary-bucket POST Policy and &#x60;file_key&#x60;; then upload directly to S3 using the returned &#x60;url&#x60; and &#x60;fields&#x60; (success HTTP 204); finally, in business submit endpoints (e.g. &#x60;POST /otc/order/paid&#x60;, &#x60;POST /otc/bank/create&#x60;), pass the **same base64 &#x60;file_key&#x60; unchanged** (do not decode). The server validates ownership and object existence, then moves to the production bucket and persists. Unsubmitted files remain in the temporary bucket and are reclaimed by lifecycle rules.  Corresponds to Inner: &#x60;POST /upload/pre_upload&#x60;.  **&#x60;content_type&#x60; must be sent as base64** (plaintext containing &#x60;/&#x60; may be blocked by the gateway). Only the following MIME types are supported:  | MIME | base64 | Extension | | --- | --- | --- | | image/png | aW1hZ2UvcG5n | .png | | image/jpeg | aW1hZ2UvanBlZw&#x3D;&#x3D; | .jpeg | | image/jpg | aW1hZ2UvanBn | .jpg | | application/pdf | YXBwbGljYXRpb24vcGRm | .pdf |  **&#x60;scene&#x60; mapping to downstream endpoints**:  | scene | Typical use | | --- | --- | | general | Fiat buy payment receipt (&#x60;payment_receipt_file_key&#x60; in &#x60;POST /otc/order/paid&#x60;) | | bank | Add card, bank card supplementary materials | | assessment | Professional verification materials | | credit | Credit limit increase materials |  **Credential validity**: response &#x60;expires_in&#x60; is **5400 seconds (90 minutes)**; &#x60;fields.Policy&#x60; &#x60;expiration&#x60; matches it. Complete the S3 direct upload within this window; after expiry, call this endpoint again for a new credential.  **File size**: the S3 POST Policy enforces &#x60;content-length-range&#x60; **1 byte ~ 10MB** (10485760 bytes). Uploads exceeding the limit are rejected by S3; all &#x60;scene&#x60; values share this limit.  **Direct S3 upload**: &#x60;url&#x60; is the upload address; send each key-value pair in &#x60;fields&#x60; unchanged as form-data; the &#x60;file&#x60; field must be last. Object path is generated as &#x60;otc_temp/{uid}/{scene}/{unique filename}&#x60;; uid is taken from the login session.  This endpoint returns &#x60;content type is required.&#x60; when &#x60;content_type&#x60; is missing. Ownership and object-existence checks for &#x60;file_key&#x60; are performed by the subsequent business submission endpoint.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OTCApi(client);
const otcUploadPreUploadRequest = new OtcUploadPreUploadRequest(); // OtcUploadPreUploadRequest | 
api.createOtcUploadPreUpload(otcUploadPreUploadRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otcUploadPreUploadRequest** | [**OtcUploadPreUploadRequest**](OtcUploadPreUploadRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OtcUploadPreUploadResponse; }> [OtcUploadPreUploadResponse](OtcUploadPreUploadResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## markOtcOrderPaid

> Promise<{ response: http.IncomingMessage; body: OtcActionResponse; }> markOtcOrderPaid(otcMarkOrderPaidRequest)

Mark fiat order as paid (deposit confirmation)

Mark a fiat buy order as paid (deposit confirmation). **A user payment receipt must be uploaded**: &#x60;payment_receipt_file_key&#x60; is required; supported formats are jpg / jpeg / png / pdf, with a maximum size of 10 MB per file (validated jointly by the service and gateway). The compatible field name &#x60;payment_receipt&#x60; depends on the gateway and production contract. The persisted field is &#x60;otc_trade_record.payment_receipt_file_key&#x60;. The Pay Inner path is &#x60;POST .../pay/order_set_paid&#x60; (which commonly identifies orders by &#x60;client_order_id&#x60;); the Inner path corresponding to this OpenAPI operation, &#x60;POST /order/paid&#x60;, still primarily uses &#x60;order_id&#x60;. If the gateway standardizes on the merchant order ID, follow the gateway documentation.  **Recommended pre-upload flow**: first call &#x60;POST /otc/upload/pre_upload&#x60; (&#x60;scene&#x3D;general&#x60;) and upload directly to the temporary bucket, then pass the returned **base64 &#x60;file_key&#x60; unchanged** (do not decode) to this endpoint. The service validates the uid and object existence before moving the object to the production bucket. A cross-user key returns &#x60;Invalid parameters file_key&#x60;; an object that has not been uploaded returns &#x60;Invalid parameters file not uploaded&#x60;. The legacy flow using a base64 key for an object uploaded directly to the production bucket remains supported.

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
  'status': "status_example", // string | DONE: completed CANCEL: canceled PROCESSING: in progress DISBURSED: disbursed
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
 **status** | **string**| DONE: completed CANCEL: canceled PROCESSING: in progress DISBURSED: disbursed | [optional] [default to undefined]
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
