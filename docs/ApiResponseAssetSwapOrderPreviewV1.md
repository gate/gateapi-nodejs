# ApiResponseAssetSwapOrderPreviewV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Business error code, 0 means success | [default to undefined]
**label** | **string** | Error identification code, empty string on success | [optional] [default to undefined]
**message** | **string** | Description information | [default to undefined]
**data** | [**OrderPreviewV1Resp**](OrderPreviewV1Resp.md) | Preview result when successful, null when failed | [default to undefined]
**timestamp** | **number** | Server timestamp (milliseconds) | [default to undefined]

