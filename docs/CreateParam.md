# CreateParam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | 币种符号，与 &#x60;GET /asset-swap/asset/list&#x60; 及业务支持范围一致。 | [default to undefined]
**amount** | **string** | 该币种在本侧的数量，**十进制字符串**（非科学计数法）。&#x60;from&#x60; 表示卖出数量，&#x60;to&#x60; 表示目标侧数量。 与预览接口 &#x60;to[].ratio&#x60; 不同。 | [default to undefined]

