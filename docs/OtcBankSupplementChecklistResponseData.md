# OtcBankSupplementChecklistResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userType** | **string** | &#x60;personal&#x60; or &#x60;enterprise&#x60;, matching the supplementary document submission type; &#x60;items[].description&#x60; describes the submission requirements for each item | [default to undefined]
**items** | [**Array&lt;OtcBankSupplementChecklistItem&gt;**](OtcBankSupplementChecklistItem.md) |  | [default to undefined]

## Enum: OtcBankSupplementChecklistResponseData.UserType

* `Personal` (value: `'personal'`)

* `Enterprise` (value: `'enterprise'`)


