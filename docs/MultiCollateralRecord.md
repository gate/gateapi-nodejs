# MultiCollateralRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number &#124; bigint** | Order ID | [optional] [default to undefined]
**recordId** | **number &#124; bigint** | Collateral record ID | [optional] [default to undefined]
**beforeLtv** | **string** | Collateral ratio before adjustment | [optional] [default to undefined]
**afterLtv** | **string** | Collateral ratio before adjustment | [optional] [default to undefined]
**operateTime** | **number &#124; bigint** | Operation time, timestamp in seconds | [optional] [default to undefined]
**borrowCurrencies** | [**Array<MultiCollateralRecordCurrency>**](MultiCollateralRecordCurrency.md) | Borrowing Currency List | [optional] [default to undefined]
**collateralCurrencies** | [**Array<MultiCollateralRecordCurrency>**](MultiCollateralRecordCurrency.md) | Collateral Currency List | [optional] [default to undefined]

