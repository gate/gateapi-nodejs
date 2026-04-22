# OrderCreateV1Req

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**Array&lt;CreateParam&gt;**](CreateParam.md) | Sell ​​side list, at least one item; each item is the currency and amount &#x60;amount&#x60; to be swapped out. | [default to undefined]
**to** | [**Array&lt;CreateParam&gt;**](CreateParam.md) | Target side list, at least one item; each item is the target currency and **amount** &#x60;amount&#x60; (non-proportional). The structural semantics are different from &#x60;OrderPreviewV1Req.to&#x60; (&#x60;PreviewToParam&#x60;, including &#x60;ratio&#x60;), so do not mix them. | [default to undefined]

