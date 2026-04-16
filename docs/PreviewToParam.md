# PreviewToParam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | 目标币种符号；常与 config 中 &#x60;recommend_v2.*[].schemes[].name&#x60; 对应。 | [default to undefined]
**ratio** | **string** | 该目标币种在组合中的权重比例，**十进制字符串**（如 &#x60;0.2&#x60;、&#x60;0.5&#x60;）。 常与 &#x60;GET /asset-swap/config&#x60; 的 &#x60;recommend_v2&#x60; 下某策略的 &#x60;schemes[].ratio&#x60; 一致。 | [default to undefined]

