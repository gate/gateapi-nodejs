# OrderPreviewV1Req

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**Array&lt;PreviewFromParam&gt;**](PreviewFromParam.md) | Sell ​​side; each item is the currency + the swap amount &#x60;amount&#x60; (string decimal). | [default to undefined]
**to** | [**Array&lt;PreviewToParam&gt;**](PreviewToParam.md) | Target side; each item is currency + **ratio** &#x60;ratio&#x60; (string decimal, such as &#x60;0.5&#x60;). Typical source: &#x60;GET /asset-swap/config&#x60; → &#x60;recommend_v2&#x60; &#x60;schemes[].name&#x60; / &#x60;schemes[].ratio&#x60; of the strategy under a certain group. | [default to undefined]

