# CreateTrailOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Contract name | [default to undefined]
**amount** | **string** | Trading quantity in contracts, positive for buy, negative for sell | [default to undefined]
**activationPrice** | **string** | Activation price, 0 means trigger immediately | [optional] [default to &#39;0&#39;]
**isGte** | **boolean** | true: activate when market price &gt;&#x3D; activation price, false: &lt;&#x3D; activation price | [optional] [default to undefined]
**priceType** | **number** | Activation price type: 1-latest price, 2-index price, 3-mark price | [optional] [default to undefined]
**priceOffset** | **string** | Callback ratio or price distance, e.g., &#x60;0.1&#x60; or &#x60;0.1%&#x60; | [optional] [default to undefined]
**reduceOnly** | **boolean** | Whether reduce only | [optional] [default to undefined]
**positionRelated** | **boolean** | Whether bound to a position (if position_related &#x3D; true (position-related), then reduce_only must also be true) | [optional] [default to undefined]
**text** | **string** | 订单自定义信息，可选字段。用于标识订单来源或设置用户自定义 ID。  **如果非空**，必须满足以下规则之一：  **1. 内部保留字段（标识订单来源）**： - &#x60;apiv4&#x60;: API 调用 **2. 用户自定义字段（设置自定义 ID）**： - 必须以 &#x60;t-&#x60; 开头 - &#x60;t-&#x60; 后面的内容长度不能超过 28 字节 - 只能包含：数字、字母、下划线(_)、中划线(-) 或者点(.) - 示例：&#x60;t-my-order-001&#x60;、&#x60;t-trail_2024.01&#x60;  **注意**：用户自定义字段不能与内部保留字段冲突。 | [optional] [default to &#39;apiv4&#39;]
**posMarginMode** | **string** | Position margin mode: isolated/cross | [optional] [default to undefined]
**positionMode** | **string** | Position mode: single, dual, and dual_plus | [optional] [default to undefined]

## Enum: CreateTrailOrder.PriceType

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


