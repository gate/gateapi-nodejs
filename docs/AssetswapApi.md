# AssetswapApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAssetSwapAssets**](AssetswapApi.md#listAssetSwapAssets) | **GET** /asset-swap/asset/list | Portfolio optimization — currency list
[**getAssetSwapConfig**](AssetswapApi.md#getAssetSwapConfig) | **GET** /asset-swap/config | Portfolio optimization — configuration
[**evaluateAssetSwap**](AssetswapApi.md#evaluateAssetSwap) | **GET** /asset-swap/evaluate | Portfolio optimization — valuation
[**createAssetSwapOrderV1**](AssetswapApi.md#createAssetSwapOrderV1) | **POST** /asset-swap/order/create | Portfolio optimization — place order
[**listAssetSwapOrdersV1**](AssetswapApi.md#listAssetSwapOrdersV1) | **GET** /asset-swap/order/list | Portfolio optimization — order list
[**previewAssetSwapOrderV1**](AssetswapApi.md#previewAssetSwapOrderV1) | **POST** /asset-swap/order/preview | Portfolio optimization — preview
[**getAssetSwapOrderV1**](AssetswapApi.md#getAssetSwapOrderV1) | **GET** /asset-swap/order/{order_id} | Portfolio optimization — query order


## listAssetSwapAssets

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapListAssets; }> listAssetSwapAssets()

Portfolio optimization — currency list

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
api.listAssetSwapAssets()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapListAssets; }> [ApiResponseAssetSwapListAssets](ApiResponseAssetSwapListAssets.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAssetSwapConfig

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapConfig; }> getAssetSwapConfig()

Portfolio optimization — configuration

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
api.getAssetSwapConfig()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapConfig; }> [ApiResponseAssetSwapConfig](ApiResponseAssetSwapConfig.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## evaluateAssetSwap

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapEvaluate; }> evaluateAssetSwap(opts)

Portfolio optimization — valuation

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const opts = {
  'maxEvaluateValue': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'cursor': "cursor_example", // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'size': 56 // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
};
api.evaluateAssetSwap(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxEvaluateValue** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **cursor** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **size** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapEvaluate; }> [ApiResponseAssetSwapEvaluate](ApiResponseAssetSwapEvaluate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createAssetSwapOrderV1

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapOrderCreateV1; }> createAssetSwapOrderV1(orderCreateV1Req)

Portfolio optimization — place order

Swap several source currencies in the account into the target currency side configuration according to the specified amount. **It is strongly recommended to call** &#x60;POST /asset-swap/order/preview&#x60; **and &#x60;code&#x3D;0&#x60; before placing an official order, and then submit this interface with consistent semantics**. **The request body does not contain &#x60;ratio&#x60;** - This interface &#x60;OrderCreateV1Req&#x60; only contains &#x60;from&#x60; / &#x60;to&#x60;, and the array elements are all &#x60;CreateParam&#x60; (**only** &#x60;asset&#x60; + &#x60;amount&#x60;). **Do not** pass in &#x60;ratio&#x60; in the order JSON; the ratio field &#x60;ratio&#x60; only exists in the preview interface &#x60;OrderPreviewV1Req.to&#x60; (&#x60;PreviewToParam&#x60;). **Key differences from the preview interface (error-prone points)** - The &#x60;to&#x60; array element of this interface is &#x60;CreateParam&#x60;: **&#x60;asset&#x60; + &#x60;amount&#x60; (target side quantity, decimal string)**. - The preview interface &#x60;to&#x60; is **&#x60;asset&#x60; + &#x60;ratio&#x60; (ratio string)**, **the two cannot be mixed**: do not fill in the &#x60;ratio&#x60; in the preview to the &#x60;amount&#x60; of the order as it is, and do not use the &#x60;amount&#x60; of the order as the &#x60;ratio&#x60; of the preview. **Recommended calling order** 1. &#x60;GET /asset-swap/asset/list&#x60;: Confirm currency support. 2. &#x60;GET /asset-swap/config&#x60;: Read &#x60;recommend&#x60; / &#x60;recommend_v2&#x60; (such as &#x60;schemes&#x60; of a strategy under &#x60;recommend_v2.market&#x60;, use &#x60;scheme.name&#x60; as the target &#x60;asset&#x60;, &#x60;scheme.ratio&#x60; is only used for &#x60;to[].ratio&#x60; of **preview**). 3. &#x60;GET /asset-swap/evaluate&#x60; (optional): Refer to the sellable quantity. 4. &#x60;POST /asset-swap/order/preview&#x60;: &#x60;from&#x60; and &#x60;to&#x60; (ratio) construct inquiry. 5. After the preview is successful, map the preview results to the &#x60;from&#x60;/&#x60;to&#x60; (**both are amount**) of the order according to the product/server agreement and then call this interface. **Field Convention** - &#x60;from&#x60;: selling side, each item is &#x60;asset&#x60; + &#x60;amount&#x60; (string, decimal, indicating the selling amount of the currency). - &#x60;to&#x60;: Buy/target side, each item is &#x60;asset&#x60; + **&#x60;amount&#x60;** (string, decimal, indicating the amount of the target currency side; the semantics are different from the previewed &#x60;ratio&#x60;). - This interface only verifies the accuracy and range of the above &#x60;amount&#x60;; if not satisfied, it returns non-0 &#x60;code&#x60; and &#x60;message&#x60;. For the verification rules of &#x60;to[].ratio&#x60; on the preview side, see the &#x60;POST /asset-swap/order/preview&#x60; document.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const orderCreateV1Req = new OrderCreateV1Req(); // OrderCreateV1Req | Order request body (`OrderCreateV1Req`). **No `ratio` field**; `from`/`to` items are only `asset` + `amount`. `to` uses the target side **amount** `amount`, which is different from the **ratio** (ratio) semantics of `to` in preview, do not mix them.
api.createAssetSwapOrderV1(orderCreateV1Req)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCreateV1Req** | [**OrderCreateV1Req**](OrderCreateV1Req.md)| Order request body (&#x60;OrderCreateV1Req&#x60;). **No &#x60;ratio&#x60; field**; &#x60;from&#x60;/&#x60;to&#x60; items are only &#x60;asset&#x60; + &#x60;amount&#x60;. &#x60;to&#x60; uses the target side **amount** &#x60;amount&#x60;, which is different from the **ratio** (ratio) semantics of &#x60;to&#x60; in preview, do not mix them. | 

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapOrderCreateV1; }> [ApiResponseAssetSwapOrderCreateV1](ApiResponseAssetSwapOrderCreateV1.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listAssetSwapOrdersV1

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapOrderListV1; }> listAssetSwapOrdersV1(opts)

Portfolio optimization — order list

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const opts = {
  'from': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'to': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'status': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'offset': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'size': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'sortMode': 56, // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
  'orderBy': 56 // number | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
};
api.listAssetSwapOrdersV1(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **to** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **status** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **offset** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **size** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **sortMode** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]
 **orderBy** | **number**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapOrderListV1; }> [ApiResponseAssetSwapOrderListV1](ApiResponseAssetSwapOrderListV1.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## previewAssetSwapOrderV1

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapOrderPreviewV1; }> previewAssetSwapOrderV1(orderPreviewV1Req)

Portfolio optimization — preview

The transaction and fees are estimated based on the quantity of coins sold and the **target allocation ratio**, and **no orders are written**. When &#x60;code&#x3D;0&#x60;, &#x60;data&#x60; contains estimated &#x60;order&#x60; and &#x60;transaction_fee&#x60;. **Key differences from the order interface (error-prone points)** - The &#x60;to&#x60; array element of this interface is &#x60;PreviewToParam&#x60;: **&#x60;asset&#x60; + &#x60;ratio&#x60; (ratio, decimal string)**, which represents the weight/proportion of the target currency in the portfolio. - The &#x60;to&#x60; of the order interface &#x60;POST /asset-swap/order/create&#x60; is **&#x60;asset&#x60; + &#x60;amount&#x60; (absolute quantity)**, **not** &#x60;ratio&#x60;. Callers should never mix the two sets of fields. **How to construct &#x60;to&#x60;(ratio)** - Prioritize the value from &#x60;data.recommend_v2&#x60; of &#x60;GET /asset-swap/config&#x60;: find a certain &#x60;RecommendV2Strategy&#x60; in the strategy list (such as &#x60;name&#x60; is &#x60;top2&#x60;) by grouping key (such as &#x60;market&#x60;, &#x60;faith&#x60;, &#x60;conservative&#x60;), and map its &#x60;schemes&#x60; to a preview request:   - &#x60;to[].asset&#x60; ← &#x60;scheme.name&#x60; (target currency symbol)   - &#x60;to[].ratio&#x60; ← &#x60;scheme.ratio&#x60; (ratio string consistent with configuration) - You can also use the flat map (currency → ratio string) under &#x60;recommend&#x60; to expand it into a multi-element &#x60;to&#x60; (one &#x60;asset&#x60; + &#x60;ratio&#x60; for each item). - When there are multiple targets, it is recommended that each &#x60;ratio&#x60; be consistent with the front-end/operation configuration; whether it needs to be summed to 1 is subject to server-side verification. **&#x60;from&#x60; (sell side)** - Each item is &#x60;asset&#x60; + &#x60;amount&#x60; (string, decimal), indicating the amount of the currency participating in the exchange this time. The currency should be within the supported range of &#x60;GET /asset-swap/asset/list&#x60;; when the magnitude is too small or the market depth is insufficient, a non-0 &#x60;code&#x60; may be returned (if the price cannot be inquired). **Connection with order placement** - After the preview is successful, convert the preview results allowed by the business into the request body where **&#x60;from&#x60;/&#x60;to&#x60; is all amount** required for ordering and then call create (the specific mapping rules are subject to the product documentation or server agreement).

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const orderPreviewV1Req = new OrderPreviewV1Req(); // OrderPreviewV1Req | Preview the request body. `to` must be **ratio**; unlike create\'s **amount** semantics.
api.previewAssetSwapOrderV1(orderPreviewV1Req)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPreviewV1Req** | [**OrderPreviewV1Req**](OrderPreviewV1Req.md)| Preview the request body. &#x60;to&#x60; must be **ratio**; unlike create\&#39;s **amount** semantics. | 

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapOrderPreviewV1; }> [ApiResponseAssetSwapOrderPreviewV1](ApiResponseAssetSwapOrderPreviewV1.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getAssetSwapOrderV1

> Promise<{ response: http.IncomingMessage; body: ApiResponseAssetSwapOrderQueryV1; }> getAssetSwapOrderV1(orderId)

Portfolio optimization — query order

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const orderId = "orderId_example"; // string | Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <L@li.org> Plural-Forms: nplurals=2; plural=(n !=1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 
api.getAssetSwapOrderV1(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-11-12 18:14+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0  | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: ApiResponseAssetSwapOrderQueryV1; }> [ApiResponseAssetSwapOrderQueryV1](ApiResponseAssetSwapOrderQueryV1.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
