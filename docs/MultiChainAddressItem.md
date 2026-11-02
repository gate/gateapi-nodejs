# MultiChainAddressItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **string** | Name of the chain | [optional] [default to undefined]
**address** | **string** | Deposit address | [optional] [default to undefined]
**paymentId** | **string** | A memo required when depositing certain currencies, such as a Tag or Memo. | [optional] [default to undefined]
**paymentName** | **string** | Note type, &#x60;Tag&#x60; or &#x60;Memo&#x60; | [optional] [default to undefined]
**obtainFailed** | **number** | Whether address retrieval failed: 0 means success; 1 means failure and retrieval may need to be retried. | [optional] [default to undefined]
**minConfirms** | **number** | Minimum Confirmation Count | [optional] [default to undefined]

