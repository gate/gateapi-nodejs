# CrossexAccountBookRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Account Change Record ID | [default to undefined]
**userId** | **string** | User ID | [default to undefined]
**businessId** | **string** | Business ID | [default to undefined]
**type** | **string** | Change type | &#x60;TRANSACTION&#x60; trade &#x60;TRADING_FEE&#x60; fee &#x60;FUNDING_FEE&#x60; futures funding fee &#x60;LIQUIDATION_FEE&#x60; liquidation fee &#x60;TRANSFER_IN&#x60; transfer in &#x60;TRANSFER_OUT&#x60; transfer out &#x60;BANKRUPT_COMPENSATION&#x60; bankruptcy compensation &#x60;AUTO_REPAY&#x60; margin position auto-repay | [default to undefined]
**exchangeType** | **string** | Exchange | [default to undefined]
**coin** | **string** | Currency | [default to undefined]
**change** | **string** | Change amount (positive indicates transfer in; negative indicates transfer out) | [default to undefined]
**balance** | **string** | Balance after change | [default to undefined]
**createTime** | **string** | Created time | [default to undefined]

