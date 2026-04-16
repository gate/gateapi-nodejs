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

将账户内若干源币种按指定数量换入目标币种侧配置，**正式下单前强烈建议先调用** &#x60;POST /asset-swap/order/preview&#x60; **且 &#x60;code&#x3D;0&#x60; 后再用一致的语义提交本接口**。  **请求体不含 &#x60;ratio&#x60;** - 本接口 &#x60;OrderCreateV1Req&#x60; 仅含 &#x60;from&#x60; / &#x60;to&#x60;，且数组元素均为 &#x60;CreateParam&#x60;（**仅** &#x60;asset&#x60; + &#x60;amount&#x60;）。**请勿**在下单 JSON 中传入 &#x60;ratio&#x60;；比例字段 &#x60;ratio&#x60; 只存在于预览接口 &#x60;OrderPreviewV1Req.to&#x60;（&#x60;PreviewToParam&#x60;）。  **与预览接口的关键差异（易错点）** - 本接口 &#x60;to&#x60; 数组元素为 &#x60;CreateParam&#x60;：**&#x60;asset&#x60; + &#x60;amount&#x60;（目标侧数量，十进制字符串）**。 - 预览接口 &#x60;to&#x60; 为 **&#x60;asset&#x60; + &#x60;ratio&#x60;（比例字符串）**，**二者不可混用**：不要把预览里的 &#x60;ratio&#x60; 原样填到下单的 &#x60;amount&#x60;，也不要把下单的 &#x60;amount&#x60; 当成预览的 &#x60;ratio&#x60;。  **推荐调用顺序** 1. &#x60;GET /asset-swap/asset/list&#x60;：确认币种支持。 2. &#x60;GET /asset-swap/config&#x60;：读取 &#x60;recommend&#x60; / &#x60;recommend_v2&#x60;（如 &#x60;recommend_v2.market&#x60; 下某策略的 &#x60;schemes&#x60;，将 &#x60;scheme.name&#x60; 作为目标 &#x60;asset&#x60;、&#x60;scheme.ratio&#x60; 仅用于 **preview** 的 &#x60;to[].ratio&#x60;）。 3. &#x60;GET /asset-swap/evaluate&#x60;（可选）：参考可卖数量。 4. &#x60;POST /asset-swap/order/preview&#x60;：&#x60;from&#x60; 与 &#x60;to&#x60;（比例）构造询价。 5. 预览成功后，按产品/服务端约定将预览结果映射为下单的 &#x60;from&#x60;/&#x60;to&#x60;（**均为 amount**）再调用本接口。  **字段约定** - &#x60;from&#x60;：卖出侧，每项为 &#x60;asset&#x60; + &#x60;amount&#x60;（字符串，十进制，表示该币种卖出数量）。 - &#x60;to&#x60;：买入/目标侧，每项为 &#x60;asset&#x60; + **&#x60;amount&#x60;**（字符串，十进制，表示该目标币种侧数量；语义与预览的 &#x60;ratio&#x60; 不同）。 - 本接口仅校验上述 &#x60;amount&#x60; 的精度与范围；不满足时返回非 0 &#x60;code&#x60; 及 &#x60;message&#x60;。预览侧 &#x60;to[].ratio&#x60; 的校验规则见 &#x60;POST /asset-swap/order/preview&#x60; 文档。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const orderCreateV1Req = new OrderCreateV1Req(); // OrderCreateV1Req | 下单请求体（`OrderCreateV1Req`）。**无 `ratio` 字段**；`from`/`to` 每项仅 `asset` + `amount`。`to` 使用目标侧**数量** `amount`，与 preview 中 `to` 的 **ratio**（比例）语义不同，勿混用。
api.createAssetSwapOrderV1(orderCreateV1Req)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCreateV1Req** | [**OrderCreateV1Req**](OrderCreateV1Req.md)| 下单请求体（&#x60;OrderCreateV1Req&#x60;）。**无 &#x60;ratio&#x60; 字段**；&#x60;from&#x60;/&#x60;to&#x60; 每项仅 &#x60;asset&#x60; + &#x60;amount&#x60;。&#x60;to&#x60; 使用目标侧**数量** &#x60;amount&#x60;，与 preview 中 &#x60;to&#x60; 的 **ratio**（比例）语义不同，勿混用。 | 

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

根据卖出币种数量与**目标分配比例**估算成交与费用，**不写入订单**。&#x60;code&#x3D;0&#x60; 时 &#x60;data&#x60; 含预估 &#x60;order&#x60; 与 &#x60;transaction_fee&#x60;。  **与下单接口的关键差异（易错点）** - 本接口 &#x60;to&#x60; 数组元素为 &#x60;PreviewToParam&#x60;：**&#x60;asset&#x60; + &#x60;ratio&#x60;（比例，十进制字符串）**，表示目标币种在组合中的权重/占比。 - 下单接口 &#x60;POST /asset-swap/order/create&#x60; 的 &#x60;to&#x60; 为 **&#x60;asset&#x60; + &#x60;amount&#x60;（绝对数量）**，**不是** &#x60;ratio&#x60;。调用方切勿把两套字段混用。  **如何构造 &#x60;to&#x60;（ratio）** - 优先从 &#x60;GET /asset-swap/config&#x60; 的 &#x60;data.recommend_v2&#x60; 取值：按分组键（如 &#x60;market&#x60;、&#x60;faith&#x60;、&#x60;conservative&#x60;）找到策略列表中的某条 &#x60;RecommendV2Strategy&#x60;（如 &#x60;name&#x60; 为 &#x60;top2&#x60;），将其 &#x60;schemes&#x60; 映射为预览请求：   - &#x60;to[].asset&#x60; ← &#x60;scheme.name&#x60;（目标币种符号）   - &#x60;to[].ratio&#x60; ← &#x60;scheme.ratio&#x60;（与配置一致的比例字符串） - 亦可使用 &#x60;recommend&#x60; 下扁平 map（币种 → 比例字符串）自行展开为多元素 &#x60;to&#x60;（每项一个 &#x60;asset&#x60; + &#x60;ratio&#x60;）。 - 多目标时各 &#x60;ratio&#x60; 建议与前端/运营配置一致；是否需加总为 1 以服务端校验为准。  **&#x60;from&#x60;（卖出侧）** - 每项为 &#x60;asset&#x60; + &#x60;amount&#x60;（字符串，十进制），表示本次参与换出的该币种数量。币种应在 &#x60;GET /asset-swap/asset/list&#x60; 支持范围内；数量级过小或市场深度不足时可能返回非 0 &#x60;code&#x60;（如无法询价）。  **与下单的衔接** - 预览成功后，将业务允许的预览结果转换为下单所需的 **&#x60;from&#x60;/&#x60;to&#x60; 全为 amount** 的请求体再调用 create（具体映射规则以产品文档或服务端约定为准）。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AssetswapApi(client);
const orderPreviewV1Req = new OrderPreviewV1Req(); // OrderPreviewV1Req | 预览请求体。`to` 必须为 **ratio**；与 create 的 **amount** 语义不同。
api.previewAssetSwapOrderV1(orderPreviewV1Req)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPreviewV1Req** | [**OrderPreviewV1Req**](OrderPreviewV1Req.md)| 预览请求体。&#x60;to&#x60; 必须为 **ratio**；与 create 的 **amount** 语义不同。 | 

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
