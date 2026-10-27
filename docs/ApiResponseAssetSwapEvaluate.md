# ApiResponseAssetSwapEvaluate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Business error code, 0 means success | [default to undefined]
**label** | **string** | Error identification code, empty string on success | [optional] [default to undefined]
**message** | **string** | Description information | [default to undefined]
**data** | [**EvaluateResp &#124; null**](EvaluateResp.md) | Estimated paginated data on success, null on failure | [default to undefined]
**timestamp** | **number &#124; bigint** | Server timestamp (milliseconds) | [default to undefined]

