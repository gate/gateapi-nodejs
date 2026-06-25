# CrossexAccountBookRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Account Change Record ID | [default to undefined]
**userId** | **string** | User ID | [default to undefined]
**businessId** | **string** | Business ID | [default to undefined]
**statementType** | **string** | Bill entry type. &#x60;TRANSACTION&#x60; trade &#x60;TRADING_FEE&#x60; fee &#x60;FUNDING_FEE&#x60; funding &#x60;LIQUIDATION_FEE&#x60; liquidation &#x60;TRANSFER_IN&#x60; deposit &#x60;TRANSFER_OUT&#x60; withdrawal &#x60;BANKRUPT_COMPENSATION&#x60; bankruptcy subsidy &#x60;AUTO_REPAY&#x60; margin auto-repay &#x60;INTEREST_ISOLATED&#x60; isolated-venue interest entry &#x60;ACCOUNT_MODE_CHANGE&#x60; account mode switch entry &#x60;KRAKEN_CONVERSION&#x60; conversion of other margin coins to cover a negative KRAKEN_USD balance &#x60;OTHER&#x60; other | [default to undefined]
**exchangeType** | **string** | Exchange | [default to undefined]
**coin** | **string** | Currency | [default to undefined]
**change** | **string** | Change amount (positive indicates transfer in; negative indicates transfer out) | [default to undefined]
**balance** | **string** | Balance after change | [default to undefined]
**createTime** | **string** | Created time | [default to undefined]

