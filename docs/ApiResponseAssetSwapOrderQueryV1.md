# ApiResponseAssetSwapOrderQueryV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | 业务错误码，0 表示成功 | [default to undefined]
**label** | **string** | 错误标识码，成功时为空字符串 | [optional] [default to undefined]
**message** | **string** | 描述信息 | [default to undefined]
**data** | [**CreateOrder**](CreateOrder.md) | 成功时为订单详情，失败时为 null | [default to undefined]
**timestamp** | **number** | Server timestamp (milliseconds) | [default to undefined]

