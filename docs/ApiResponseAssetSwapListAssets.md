# ApiResponseAssetSwapListAssets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Business error code, 0 means success | [default to undefined]
**label** | **string** | Error identification code, empty string on success | [optional] [default to undefined]
**message** | **string** | Description information | [default to undefined]
**data** | [**AssetListResp**](AssetListResp.md) | Currency list data on success, null on failure | [default to undefined]
**timestamp** | **number** | Server timestamp (milliseconds) | [default to undefined]

