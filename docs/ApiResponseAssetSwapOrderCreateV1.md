# ApiResponseAssetSwapOrderCreateV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Business error code, 0 means success | [default to undefined]
**label** | **string** | Error identification code, empty string on success | [optional] [default to undefined]
**message** | **string** | Description information | [default to undefined]
**data** | [**OrderCreateV1Resp**](OrderCreateV1Resp.md) | It is the order result when successful, and null when it fails. | [default to undefined]
**timestamp** | **number** | Server timestamp (milliseconds) | [default to undefined]

