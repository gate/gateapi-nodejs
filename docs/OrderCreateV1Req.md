# OrderCreateV1Req

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**Array&lt;CreateParam&gt;**](CreateParam.md) | 卖出侧列表，至少一项；每项为要换出的币种及数量 &#x60;amount&#x60;。 | [default to undefined]
**to** | [**Array&lt;CreateParam&gt;**](CreateParam.md) | 目标侧列表，至少一项；每项为目标币种及**数量** &#x60;amount&#x60;（非比例）。 与 &#x60;OrderPreviewV1Req.to&#x60;（&#x60;PreviewToParam&#x60;，含 &#x60;ratio&#x60;）结构语义不同，勿混用。 | [default to undefined]

