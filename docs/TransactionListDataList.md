# TransactionListDataList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | Asset Type | [optional] [default to undefined]
**type** | **TransactionListDataList.Type** | Trading Type | [optional] [default to undefined]
**typeDesc** | **string** | Transaction Type Description | [optional] [default to undefined]
**change** | **string** | Change amount | [optional] [default to undefined]
**balance** | **string** | Current Balance | [optional] [default to undefined]
**time** | **number &#124; bigint** | Occurrence Time (Second-level Timestamp) | [optional] [default to undefined]

## Enum: TransactionListDataList.Type

* `Deposit` (value: `'deposit-转入'`)

* `Withdraw` (value: `'withdraw-转出'`)

* `Dividend` (value: `'dividend-分红结息'`)

* `FillNegative` (value: `'fill_negative-填平负余额'`)


