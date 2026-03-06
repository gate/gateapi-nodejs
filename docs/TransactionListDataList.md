# TransactionListDataList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | Asset Type | [optional] [default to undefined]
**type** | **string** | Trading Type | [optional] [default to undefined]
**typeDesc** | **string** | Transaction Type Description | [optional] [default to undefined]
**change** | **string** | Change Quantity | [optional] [default to undefined]
**balance** | **string** | Current Balance | [optional] [default to undefined]
**time** | **number** | Occurrence Time (Second-level Timestamp) | [optional] [default to undefined]

## Enum: TransactionListDataList.Type

* `Deposit` (value: `'deposit-转入'`)

* `Withdraw` (value: `'withdraw-转出'`)

* `Dividend` (value: `'dividend-分红结息'`)

* `FillNegative` (value: `'fill_negative-填平负余额'`)


